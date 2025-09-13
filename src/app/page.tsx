'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { baseDrills, type Drill, type Unit } from '@/data/drills';

/** ================================
 * Hanon Typing – Next.js App Router 全体コード
 * - localStorage は初期化で参照せず、useEffectで復元
 * - TailwindCSS 前提（v3/v4どちらでもOK）
 * - 機能: ユニット絞り込み / 即時採点 / WPM / 正確性 / 経過時間 / TTS / ショートカット
 * ================================= */

// ─────────────── Helpers ───────────────
const storageKey = (k: string) => `hanon-typing:${k}`;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function simpleCharDiff(target: string, typed: string) {
  const out: { ch: string; state: 'correct' | 'wrong' | 'pending' }[] = [];
  const len = target.length;
  for (let i = 0; i < len; i++) {
    const ch = target[i];
    if (i < typed.length) {
      out.push({ ch, state: typed[i] === ch ? 'correct' : 'wrong' });
    } else {
      out.push({ ch, state: 'pending' });
    }
  }
  return out;
}

function computeStats(target: string, typed: string) {
  const charsTyped = typed.length;
  let correct = 0;
  for (let i = 0; i < Math.min(target.length, typed.length); i++) {
    if (target[i] === typed[i]) correct++;
  }
  const errors = Math.max(0, charsTyped - correct);
  return { correct, errors, charsTyped };
}

function wpm(correctChars: number, ms: number) {
  if (ms <= 0) return 0;
  const words = correctChars / 5;
  const minutes = ms / 60000;
  return words / minutes;
}

// ───────────── Main Page ─────────────
export default function Page() {
  const isBrowser = typeof window !== 'undefined';

  // データ
  const [drills] = useState<Drill[]>(baseDrills);

  // 設定（初期値は固定。後でlocalStorageから復元）
  const [unitFilter, setUnitFilter] = useState<'all' | Unit>('all');
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [ignoreCase, setIgnoreCase] = useState<boolean>(false);
  const [showTarget, setShowTarget] = useState<boolean>(true);

  // フィルタ結果
  const filtered = useMemo(() => {
    const list = unitFilter === 'all' ? drills : drills.filter((d) => d.unit === unitFilter);
    if (!shuffle) return list;
    // 安定シャッフル（IDソートの反転程度の軽い疑似シャッフル）
    return [...list].sort((a, b) => (a.id < b.id ? 1 : -1));
  }, [drills, unitFilter, shuffle]);

  // 進行インデックス（filtered の長さ確定後に復元）
  const [index, setIndex] = useState<number>(0);

  // クライアントで設定を復元
  useEffect(() => {
    if (!isBrowser) return;
    const uf = localStorage.getItem(storageKey('unitFilter'));
    if (uf) setUnitFilter(uf as any);

    const sh = localStorage.getItem(storageKey('shuffle'));
    if (sh != null) setShuffle(JSON.parse(sh));

    const ic = localStorage.getItem(storageKey('ignoreCase'));
    if (ic != null) setIgnoreCase(JSON.parse(ic));

    const st = localStorage.getItem(storageKey('showTarget'));
    if (st != null) setShowTarget(JSON.parse(st));
  }, [isBrowser]);

  // filtered が決まってから index を復元
  useEffect(() => {
    if (!isBrowser) return;
    if (filtered.length === 0) return;
    const iv = localStorage.getItem(storageKey('index'));
    if (iv != null) setIndex(clamp(parseInt(iv, 10), 0, filtered.length - 1));
  }, [filtered.length, isBrowser]);

  // 設定の保存
  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem(storageKey('unitFilter'), unitFilter);
  }, [unitFilter, isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem(storageKey('shuffle'), JSON.stringify(shuffle));
  }, [shuffle, isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem(storageKey('ignoreCase'), JSON.stringify(ignoreCase));
  }, [ignoreCase, isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem(storageKey('index'), String(index));
  }, [index, isBrowser]);

  useEffect(() => {
      if (!isBrowser) return;
      localStorage.setItem(storageKey('showTarget'), JSON.stringify(showTarget));
  }, [showTarget, isBrowser]);

  const current = filtered[index];

  // タイピング状態
  const [typed, setTyped] = useState<string>('');
  const [startMs, setStartMs] = useState<number | null>(null);
  const [endMs, setEndMs] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const targetRaw = current?.en ?? '';
  const target = ignoreCase ? targetRaw : targetRaw; // 表示は原文
  const typedForCompare = ignoreCase ? typed.toLowerCase() : typed;
  const targetForCompare = ignoreCase ? targetRaw.toLowerCase() : targetRaw;

  const done = targetForCompare.length > 0 && typedForCompare === targetForCompare;

  // ドリル切替時に入力をリセット & フォーカス
  useEffect(() => {
    setTyped('');
    setStartMs(null);
    setEndMs(null);
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [current?.id]);

  // キーボードショートカット
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (done) {
          e.preventDefault();
          goNext();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'backspace') {
        e.preventDefault();
        setTyped('');
        setStartMs(null);
        setEndMs(null);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [done, filtered.length]);

  function goNext() {
    if (filtered.length === 0) return;
    setIndex((i) => (i + 1) % filtered.length);
  }
  function goPrev() {
    if (filtered.length === 0) return;
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }

  const elapsedMs = (endMs ?? (startMs ? Date.now() : 0)) - (startMs ?? 0);
  const { correct, errors, charsTyped } = computeStats(targetForCompare, typedForCompare);
  const speed = wpm(correct, Math.max(0, elapsedMs));
  const accuracy = charsTyped === 0 ? 100 : (correct / Math.max(1, charsTyped)) * 100;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    if (startMs === null && v.length > 0) setStartMs(Date.now());
    setTyped(v);
    if (v.length >= targetRaw.length) {
      setEndMs(Date.now());
    } else {
      setEndMs(null);
    }
  }

  function reveal() {
    setTyped(targetRaw);
    if (startMs === null) setStartMs(Date.now());
    setEndMs(Date.now());
  }

  function speak(text: string) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; // 必要なら 'en-GB'
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  const diff = useMemo(() => simpleCharDiff(target, typed), [target, typed]);

  // ───────────── Render ─────────────
  if (!current) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Hanon Typing</h1>
        <p className="text-sm opacity-80">選択された条件に一致するドリルがありません。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <header className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold">英語のハノン：タイピング練習</h1>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">MVP</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={shuffle}
                onChange={(e) => setShuffle(e.target.checked)}
              />
              シャッフル
            </label>
            <label className="text-sm flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={!showTarget}
                onChange={(e) => setShowTarget(!e.target.checked)}
              />
            解答を隠す
            </label>
            <label className="text-sm flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={ignoreCase}
                onChange={(e) => setIgnoreCase(e.target.checked)}
              />
              大文字小文字を無視
            </label>
          </div>
        </header>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm w-28">ユニット</label>
            <select
            className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={unitFilter}
            onChange={(e) => setUnitFilter(e.target.value as any)}
            >
            <option value="all">All</option>
            {/* 第1文型（SV） */}
            <option value="1">Unit1 第1文型（SV）</option>

            {/* 第2文型（SVC） */}
            <option value="2">Unit2 第2文型（SVC）</option>

            {/* 第3文型（SVO） */}
            <option value="3">Unit3 第3文型（SVO）</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm w-28">進捗</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${filtered.length ? ((index + 1) / filtered.length) * 100 : 0}%` }}
              />
            </div>
            <span className="text-sm tabular-nums">
              {filtered.length ? index + 1 : 0}/{filtered.length}
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow p-5 mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">Unit {current.unit}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{current.focus}</span>
          </div>

          <p className="text-gray-600 mb-1 text-sm">日本語</p>
          <p className="text-lg sm:text-xl font-medium mb-4">{current.jp}</p>

          <p className="text-gray-600 mb-1 text-sm">目標の英語</p>
          <div className="text-lg sm:text-xl font-mono whitespace-pre-wrap break-words mb-3">
            {showTarget ? (
              diff.map((d, i) => (
                <span
                  key={i}
                  className={
                    d.state === 'correct'
                      ? 'bg-green-100 text-green-800 rounded'
                      : d.state === 'wrong'
                      ? 'bg-red-100 text-red-700 rounded'
                      : 'text-gray-700'
                  }
                >
                  {d.ch}
                </span>
              ))
            ) : (
              <span className="text-gray-400 select-none">{'•'.repeat(targetRaw.length)}</span>
            )}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <input
              ref={inputRef}
              value={typed}
              onChange={onChange}
              placeholder="ここにタイプ… (Enterで次へ / Ctrl+Backspaceでリセット)"
              className={`w-full rounded-xl border px-3 py-3 font-mono text-base outline-none focus:ring-2 ${
                done ? 'border-emerald-300 focus:ring-emerald-400' : 'border-gray-300 focus:ring-blue-400'
              }`}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            <button
              onClick={() => speak(current.en)}
              className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm"
              title="音声読み上げ"
            >
              Speak
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">WPM</span>
              <span className="font-semibold tabular-nums">{speed.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">正確性</span>
              <span className="font-semibold tabular-nums">{accuracy.toFixed(0)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">タイプ文字数</span>
              <span className="font-semibold tabular-nums">{charsTyped}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">ミス</span>
              <span className="font-semibold tabular-nums">{errors}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">時間</span>
              <span className="font-semibold tabular-nums">{elapsedMs > 0 ? (elapsedMs / 1000).toFixed(1) : '0.0'}s</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button onClick={goPrev} className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-sm">
              ◀ 前へ
            </button>
            <button onClick={goNext} className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-sm">
              次へ ▶
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={reveal} className="px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-sm">
              答えを見る
            </button>
            <button
              onClick={() => {
                setTyped('');
                setStartMs(null);
                setEndMs(null);
                inputRef.current?.focus();
              }}
              className="px-4 py-2 rounded-2xl bg-blue-100 hover:bg-blue-200 text-sm"
            >
              リセット（Ctrl+⌫）
            </button>
          </div>
        </div>

        <footer className="mt-6 text-xs text-gray-500">
          <p className="mb-1">
            💡Tips: 句読点や大文字小文字も採点対象です。必要に応じて「大文字小文字を無視」をONにしてください。
          </p>
          <p>著作権に配慮し、本サンプルは独自に作成した短文です。実運用ではご自身で作成したドリルや公開可能な素材をご利用ください。</p>
        </footer>
      </div>
    </div>
  );
}
