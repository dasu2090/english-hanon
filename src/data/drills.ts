// src/data/drills.ts
// 英語のハノン タイピング用ドリル定義（サンプル）
// - ここに追加/編集することでアプリ側に自動反映されます

export type Unit = '1' | '2' | '3'

export type Drill = {
  id: string
  unit: Unit
  focus: string
  jp: string
  en: string
}

export const baseDrills: Drill[] = [
  // Unit1 第1文型（SV）
  { id: '1-1', unit: '1', focus: 'SV', jp: '彼は走る。', en: 'He runs.' },
  { id: '1-2', unit: '1', focus: 'SV', jp: '彼女は泳ぐ。', en: 'She swims.' },
  { id: '1-3', unit: '1', focus: 'SV', jp: '私はピアノを弾く。', en: 'I play the piano.' },
  { id: '1-4', unit: '1', focus: 'SV', jp: '彼は走らない。', en: 'He does not run.' },
  { id: '1-5', unit: '1', focus: 'SV', jp: '彼女は泳がなかった。', en: 'She did not swim.' },
  { id: '1-6', unit: '1', focus: 'SV', jp: '私はピアノを弾くだろう。', en: 'I will play the piano.' },
  { id: '1-7', unit: '1', focus: 'SV', jp: '彼は今走っている。', en: 'He is running now.' },
  { id: '1-8', unit: '1', focus: 'SV', jp: '彼は走りますか？', en: 'Does he run?' },
  { id: '1-9', unit: '1', focus: 'SV', jp: '彼は昨日走りましたか？', en: 'Did he run yesterday?' },
  { id: '1-10', unit: '1', focus: 'SV', jp: '彼は走ることができます。', en: 'He can run.' },

  // Unit2 第2文型（SVC）
  { id: '2-1', unit: '2', focus: 'SVC', jp: '彼は先生です。', en: 'He is a teacher.' },
  { id: '2-2', unit: '2', focus: 'SVC', jp: '彼女は幸せです。', en: 'She is happy.' },
  { id: '2-3', unit: '2', focus: 'SVC', jp: '彼らは友達になった。', en: 'They became friends.' },
  { id: '2-4', unit: '2', focus: 'SVC', jp: '彼は先生ではない。', en: 'He is not a teacher.' },
  { id: '2-5', unit: '2', focus: 'SVC', jp: '彼女は幸せではなかった。', en: 'She was not happy.' },
  { id: '2-6', unit: '2', focus: 'SVC', jp: '彼らは友達になるだろう。', en: 'They will become friends.' },
  { id: '2-7', unit: '2', focus: 'SVC', jp: '彼は今元気です。', en: 'He is being well now.' },
  { id: '2-8', unit: '2', focus: 'SVC', jp: '彼は先生ですか？', en: 'Is he a teacher?' },
  { id: '2-9', unit: '2', focus: 'SVC', jp: '彼女は幸せでしたか？', en: 'Was she happy?' },
  { id: '2-10', unit: '2', focus: 'SVC', jp: '彼は元気でいられるはずだ。', en: 'He should be fine.' },

  // Unit3 第3文型（SVO）
  { id: '3-1', unit: '3', focus: 'SVO', jp: '私は英語を勉強する。', en: 'I study English.' },
  { id: '3-2', unit: '3', focus: 'SVO', jp: '彼は毎日コーヒーを飲む。', en: 'He drinks coffee every day.' },
  { id: '3-3', unit: '3', focus: 'SVO', jp: '私たちは映画を見た。', en: 'We watched a movie.' },
  { id: '3-4', unit: '3', focus: 'SVO', jp: '私は英語を勉強しない。', en: 'I do not study English.' },
  { id: '3-5', unit: '3', focus: 'SVO', jp: '彼は昨日コーヒーを飲まなかった。', en: 'He did not drink coffee yesterday.' },
  { id: '3-6', unit: '3', focus: 'SVO', jp: '私たちは映画を見るだろう。', en: 'We will watch a movie.' },
  { id: '3-7', unit: '3', focus: 'SVO', jp: '私は今英語を勉強している。', en: 'I am studying English now.' },
  { id: '3-8', unit: '3', focus: 'SVO', jp: 'あなたは英語を勉強しますか？', en: 'Do you study English?' },
  { id: '3-9', unit: '3', focus: 'SVO', jp: '彼はコーヒーを飲みますか？', en: 'Does he drink coffee?' },
  { id: '3-10', unit: '3', focus: 'SVO', jp: '私は英語を勉強できる。', en: 'I can study English.' },
];
