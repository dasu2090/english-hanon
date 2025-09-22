// src/data/notes.ts
import type { Unit } from '@/data/drills';

/** Unit（1〜5）単位の解説 */
export const unitNotes: Partial<Record<Unit, string>> = {
  '1': [
    '【第1文型（SV）】主語 + 自動詞。「状態・動作」を述べる。',
    '■ 代表: run, arrive, sleep など',
    '■ 形: S + V（補語なし）',
    '■ 注意: 三単現の -s / 進行形 be + V-ing',
  ].join('\n'),
  '2': [
    '【第2文型（SVC）】主語 = 補語。S の性質・状態を C が説明。',
    '■ 代表: be, become, seem, look, feel など',
    '■ C は名詞または形容詞（副詞は不可）',
    '■ 形: S + V + C',
  ].join('\n'),
  '3': [
    '【第3文型（SVO）】他動詞 + 目的語。',
    '■ 代表: have, know, like, use, watch など',
    '■ 形: S + V + O（名詞句/代名詞）',
    '■ 否定/疑問は do/does/did を用いる（be動詞除く）',
  ].join('\n'),
  '4': [
    '【第4文型（SVOO）】O が2つ（間接 O + 直接 O）。',
    '■ 形: S + V + 人（間接O） + 物（直接O）',
    '■ 3文型への言い換え: S + V + 物 + to/for + 人',
    '■ to型: give/hand/lend/offer/pay/sell/send/show/teach/tell/write',
    '■ for型: buy/cook/find/get/make/play/sing',
  ].join('\n'),
  '5': [
    '【第5文型（SVOC）】O = C（役割/状態/動作）。',
    '■ Cの型: 名詞/形容詞｜to不定詞｜原形不定詞（使役/知覚）｜現在分詞｜過去分詞｜being + p.p.',
    '■ 代表: make/keep/find/call…; tell/ask/want…; see/hear/let/make/have…',
    '■ 形: S + V + O + C',
  ].join('\n'),
};

/** サブユニット（4.1〜4.5, 5.1〜5.6）単位の解説 */
export const subNotes: Record<string, string> = {
  // Unit4
  '4.1': [
    '【第4文型・肯定文】S + V + 人 + 物',
    '例: He gave me a present.',
    '※ 3文型: He gave a present to me.',
  ].join('\n'),
  '4.2': [
    '【第4文型・否定文】do/does/did + not を用いる（be/助動詞除く）。',
    '例: He did not give me a present.',
    '※ 目的語の順序は変えない。',
  ].join('\n'),
  '4.3': [
    '【第4文型・疑問文】Do/Does/Did を前置（be/助動詞除く）。',
    '例: Did he give you a present?',
  ].join('\n'),
  '4.4': [
    '【第4→第3（to型）】S + V + 物 + to + 人',
    '対象動詞: give, hand, lend, offer, pay, sell, send, show, teach, tell, write',
    '例: He gave a present to me.',
  ].join('\n'),
  '4.5': [
    '【第4→第3（for型）】S + V + 物 + for + 人',
    '対象動詞: buy, cook, find, get, make, play, sing',
    '例: He bought a game for me.',
  ].join('\n'),

  // Unit5
  '5.1': [
    '【SVOC：名詞/形容詞（O=C）】O の役割/状態を C が述べる。',
    '例: They elected her president. / The news made her happy.',
    '形: S + V + O + C(N/Adj)',
  ].join('\n'),
  '5.2': [
    '【SVOC：to不定詞（OがCする）】O に行為を求める/可能にする。',
    '代表: advise, allow, ask, encourage, get, tell, want',
    '例: I want you to join us.',
  ].join('\n'),
  '5.3': [
    '【SVOC：原形不定詞（OがCする）】使役/知覚/助動的 help。',
    '使役: make/let/have｜知覚: see/hear/feel/notice/watch｜その他: help',
    '例: She made him apologize. / He helped me carry the boxes.',
    '※ 受動化で make は to 不定詞に（He was made to apologize.）',
  ].join('\n'),
  '5.4': [
    '【SVOC：現在分詞（OがCしている）】進行中の動作・継続状態。',
    '代表: feel/hear/notice/see/smell/watch; find/get/have/keep/leave',
    '例: We kept him waiting. / I saw them working late.',
  ].join('\n'),
  '5.5': [
    '【SVOC：過去分詞（OがCされる）】受け身的意味・結果状態。',
    '代表: get/have/make; feel/hear/notice/see/watch; find/keep/leave/want',
    '例: I had my bike repaired. / We keep the door locked.',
  ].join('\n'),
  '5.6': [
    '【SVOC：being + p.p.（OがCされているところ）】進行受け身を知覚。',
    '例: She saw a cat being chased by a dog.',
  ].join('\n'),
};
