// src/data/drills.ts
// 英語のハノン タイピング用ドリル定義（サンプル）
// - ここに追加/編集することでアプリ側に自動反映されます

export type Unit = '1' | '2' | '3' | '4'

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

  // Unit4 第4文型（SVOO）
  // 4.1 第4文型・肯定文（10）
  { id: '4-1',  unit: '4', focus: '4.1 SVOO', jp: '彼は私にプレゼントをくれた。', en: 'He gave me a present.' },
  { id: '4-2',  unit: '4', focus: '4.1 SVOO', jp: '彼女はいま私に車で送ってくれている。', en: 'She is giving me a ride.' },
  { id: '4-3',  unit: '4', focus: '4.1 SVOO', jp: '私はあなたに自転車を貸すつもりだ。', en: 'I will lend you my bike.' },
  { id: '4-4',  unit: '4', focus: '4.1 SVOO', jp: '彼らは毎週私たちに試供品を提供する。', en: 'They offer us free samples every week.' },
  { id: '4-5',  unit: '4', focus: '4.1 SVOO', jp: '会社は先月私たちにボーナスを支払った。', en: 'The company paid us a bonus last month.' },
  { id: '4-6',  unit: '4', focus: '4.1 SVOO', jp: '彼女は昨日私に古いスマホを売った。', en: 'She sold me her old phone yesterday.' },
  { id: '4-7',  unit: '4', focus: '4.1 SVOO', jp: '今夜あなたにファイルを送れます。', en: 'I can send you the file tonight.' },
  { id: '4-8',  unit: '4', focus: '4.1 SVOO', jp: '彼は毎週私たちに新しい技を見せる。', en: 'He shows us new tricks every week.' },
  { id: '4-9',  unit: '4', focus: '4.1 SVOO', jp: '先生は昨年私たちに英語を教えた。', en: 'The teacher taught us English last year.' },
  { id: '4-10', unit: '4', focus: '4.1 SVOO', jp: '私は今朝彼に手紙を書いた。', en: 'I wrote him a letter this morning.' },

  // 4.2 第4文型・否定文（10）
  { id: '4-11', unit: '4', focus: '4.2 SVOO', jp: '彼は私にプレゼントをくれなかった。', en: 'He did not give me a present.' },
  { id: '4-12', unit: '4', focus: '4.2 SVOO', jp: '彼女はいま私に車で送ってくれていない。', en: 'She is not giving me a ride right now.' },
  { id: '4-13', unit: '4', focus: '4.2 SVOO', jp: '私はあなたに自転車を貸さないだろう。', en: 'I will not lend you my bike.' },
  { id: '4-14', unit: '4', focus: '4.2 SVOO', jp: '彼らはもう私たちに割引を提供しない。', en: 'They do not offer us discounts anymore.' },
  { id: '4-15', unit: '4', focus: '4.2 SVOO', jp: '会社は昨年私たちにボーナスを支払わなかった。', en: 'The company did not pay us a bonus last year.' },
  { id: '4-16', unit: '4', focus: '4.2 SVOO', jp: '彼女は私にスマホを売らなかった。', en: 'She did not sell me her phone.' },
  { id: '4-17', unit: '4', focus: '4.2 SVOO', jp: '今はあなたにファイルを送れない。', en: 'I cannot send you the file now.' },
  { id: '4-18', unit: '4', focus: '4.2 SVOO', jp: '彼は私たちにコードを見せない。', en: 'He does not show us his code.' },
  { id: '4-19', unit: '4', focus: '4.2 SVOO', jp: '先生は私たちにフランス語を教えなかった。', en: 'The teacher did not teach us French.' },
  { id: '4-20', unit: '4', focus: '4.2 SVOO', jp: '彼女は私に答えを教えなかった。', en: 'She did not tell me the answer.' },

  // 4.3 第4文型・疑問文（10）
  { id: '4-21', unit: '4', focus: '4.3 SVOO', jp: '彼はあなたにプレゼントをくれましたか？', en: 'Did he give you a present?' },
  { id: '4-22', unit: '4', focus: '4.3 SVOO', jp: '彼女はいまあなたを車で送ってくれていますか？', en: 'Is she giving you a ride now?' },
  { id: '4-23', unit: '4', focus: '4.3 SVOO', jp: 'あなたは私に自転車を貸してくれますか？', en: 'Will you lend me your bike?' },
  { id: '4-24', unit: '4', focus: '4.3 SVOO', jp: '彼らはあなたに試供品を提供しますか？', en: 'Do they offer you free samples?' },
  { id: '4-25', unit: '4', focus: '4.3 SVOO', jp: '会社はあなたにボーナスを支払いましたか？', en: 'Did the company pay you a bonus?' },
  { id: '4-26', unit: '4', focus: '4.3 SVOO', jp: '彼女はあなたにスマホを売りましたか？', en: 'Did she sell you her phone?' },
  { id: '4-27', unit: '4', focus: '4.3 SVOO', jp: '今夜私にファイルを送ってくれますか？', en: 'Can you send me the file tonight?' },
  { id: '4-28', unit: '4', focus: '4.3 SVOO', jp: '彼はあなたに新しい技を見せますか？', en: 'Does he show you any new tricks?' },
  { id: '4-29', unit: '4', focus: '4.3 SVOO', jp: '先生はあなたに英語を教えましたか？', en: 'Did the teacher teach you English?' },
  { id: '4-30', unit: '4', focus: '4.3 SVOO', jp: 'あなたは彼に手紙を書きましたか？', en: 'Did you write him a letter?' },

  // 4.4 第4文型→第3文型①（to を使う動詞：give, hand, lend, offer, pay, sell, send, show, teach, tell, write）
  { id: '4-31', unit: '4', focus: '4.4 SVOO', jp: '彼はプレゼントを私にくれた。', en: 'He gave a present to me.' },
  { id: '4-32', unit: '4', focus: '4.4 SVOO', jp: '彼はカバンを彼女に手渡した。', en: 'He handed a bag to her.' },
  { id: '4-33', unit: '4', focus: '4.4 SVOO', jp: '彼は彼にお金を貸した。', en: 'He lent some money to him.' },
  { id: '4-34', unit: '4', focus: '4.4 SVOO', jp: '彼女は私に仕事を提供した。', en: 'She offered a job to me.' },
  { id: '4-35', unit: '4', focus: '4.4 SVOO', jp: '会社は私たちに手当を支払った。', en: 'The company paid an allowance to us.' },
  { id: '4-36', unit: '4', focus: '4.4 SVOO', jp: '彼女は私にチケットを売った。', en: 'She sold a ticket to me.' },
  { id: '4-37', unit: '4', focus: '4.4 SVOO', jp: '私は彼に書類を送った。', en: 'I sent the documents to him.' },
  { id: '4-38', unit: '4', focus: '4.4 SVOO', jp: '彼は私に写真を見せた。', en: 'He showed a photo to me.' },
  { id: '4-39', unit: '4', focus: '4.4 SVOO', jp: '先生は生徒に数学を教えた。', en: 'The teacher taught math to the students.' },
  { id: '4-40', unit: '4', focus: '4.4 SVOO', jp: '彼は私に真実を伝えた。', en: 'He told the truth to me.' },
  { id: '4-41', unit: '4', focus: '4.4 SVOO', jp: '私は彼女に手紙を書いた。', en: 'I wrote a letter to her.' },

  // 4.5 第4文型→第3文型②（for を使う動詞：buy, cook, find, get, make, play, sing）
  { id: '4-42', unit: '4', focus: '4.5 SVOO', jp: '彼は私にゲームを買ってくれた。', en: 'He bought a game for me.' },
  { id: '4-43', unit: '4', focus: '4.5 SVOO', jp: '彼女は彼に夕食を作った。', en: 'She cooked dinner for him.' },
  { id: '4-44', unit: '4', focus: '4.5 SVOO', jp: '彼は私に本を見つけてくれた。', en: 'He found a book for me.' },
  { id: '4-45', unit: '4', focus: '4.5 SVOO', jp: '彼女は彼に飲み物を取ってきた。', en: 'She got a drink for him.' },
  { id: '4-46', unit: '4', focus: '4.5 SVOO', jp: '彼は私にケーキを作ってくれた。', en: 'He made a cake for me.' },
  { id: '4-47', unit: '4', focus: '4.5 SVOO', jp: '彼らは私たちに曲を演奏した。', en: 'They played a song for us.' },
  { id: '4-48', unit: '4', focus: '4.5 SVOO', jp: '私は赤ちゃんに子守歌を歌った。', en: 'I sang a lullaby for the baby.' },
  { id: '4-49', unit: '4', focus: '4.5 SVOO', jp: '彼女はいま私たちに昼食を作っている。', en: 'She is cooking lunch for us now.' },
  { id: '4-50', unit: '4', focus: '4.5 SVOO', jp: '私たちは彼らのためにタクシーを手配するだろう。', en: 'We will get a taxi for them.' },
  { id: '4-51', unit: '4', focus: '4.5 SVOO', jp: '彼は私のために予約を取ってくれた。', en: 'He made a reservation for me.' },
];
