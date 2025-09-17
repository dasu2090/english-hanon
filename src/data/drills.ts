// src/data/drills.ts
// 英語のハノン タイピング用ドリル定義（サンプル）
// - ここに追加/編集することでアプリ側に自動反映されます

export type Unit = '1' | '2' | '3' | '4' | '5' | '6'

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
  { id: '4-1',  unit: '4', focus: '4.1 Positive – past',                jp: '彼は私にプレゼントをくれた。',           en: 'He gave me a present.' },
  { id: '4-2',  unit: '4', focus: '4.1 Positive – progressive',          jp: '彼女はいま私に車で送ってくれている。',   en: 'She is giving me a ride.' },
  { id: '4-3',  unit: '4', focus: '4.1 Positive – future',               jp: '私はあなたに自転車を貸すつもりだ。',       en: 'I will lend you my bike.' },
  { id: '4-4',  unit: '4', focus: '4.1 Positive – present',              jp: '彼らは毎週私たちに試供品を提供する。',     en: 'They offer us free samples every week.' },
  { id: '4-5',  unit: '4', focus: '4.1 Positive – past',                 jp: '会社は先月私たちにボーナスを支払った。',   en: 'The company paid us a bonus last month.' },
  { id: '4-6',  unit: '4', focus: '4.1 Positive – past',                 jp: '彼女は昨日私に古いスマホを売った。',       en: 'She sold me her old phone yesterday.' },
  { id: '4-7',  unit: '4', focus: '4.1 Positive – modal',                jp: '今夜あなたにファイルを送れます。',         en: 'I can send you the file tonight.' },
  { id: '4-8',  unit: '4', focus: '4.1 Positive – present',              jp: '彼は毎週私たちに新しい技を見せる。',       en: 'He shows us new tricks every week.' },
  { id: '4-9',  unit: '4', focus: '4.1 Positive – past',                 jp: '先生は昨年私たちに英語を教えた。',         en: 'The teacher taught us English last year.' },
  { id: '4-10', unit: '4', focus: '4.1 Positive – past',                 jp: '私は今朝彼に手紙を書いた。',               en: 'I wrote him a letter this morning.' },

  // 4.2 第4文型・否定文（10）
  { id: '4-11', unit: '4', focus: '4.2 Negative – past',                 jp: '彼は私にプレゼントをくれなかった。',       en: 'He did not give me a present.' },
  { id: '4-12', unit: '4', focus: '4.2 Negative – progressive',          jp: '彼女はいま私に車で送ってくれていない。',   en: 'She is not giving me a ride right now.' },
  { id: '4-13', unit: '4', focus: '4.2 Negative – future',               jp: '私はあなたに自転車を貸さないだろう。',       en: 'I will not lend you my bike.' },
  { id: '4-14', unit: '4', focus: '4.2 Negative – present',              jp: '彼らはもう私たちに割引を提供しない。',     en: 'They do not offer us discounts anymore.' },
  { id: '4-15', unit: '4', focus: '4.2 Negative – past',                 jp: '会社は昨年私たちにボーナスを支払わなかった。', en: 'The company did not pay us a bonus last year.' },
  { id: '4-16', unit: '4', focus: '4.2 Negative – past',                 jp: '彼女は私にスマホを売らなかった。',         en: 'She did not sell me her phone.' },
  { id: '4-17', unit: '4', focus: '4.2 Negative – modal',                jp: '今はあなたにファイルを送れない。',         en: 'I cannot send you the file now.' },
  { id: '4-18', unit: '4', focus: '4.2 Negative – present',              jp: '彼は私たちにコードを見せない。',           en: 'He does not show us his code.' },
  { id: '4-19', unit: '4', focus: '4.2 Negative – past',                 jp: '先生は私たちにフランス語を教えなかった。', en: 'The teacher did not teach us French.' },
  { id: '4-20', unit: '4', focus: '4.2 Negative – past',                 jp: '彼女は私に答えを教えなかった。',           en: 'She did not tell me the answer.' },

  // 4.3 第4文型・疑問文（10）
  { id: '4-21', unit: '4', focus: '4.3 Question – past',                 jp: '彼はあなたにプレゼントをくれましたか？',   en: 'Did he give you a present?' },
  { id: '4-22', unit: '4', focus: '4.3 Question – progressive',           jp: '彼女はいまあなたを車で送ってくれていますか？', en: 'Is she giving you a ride now?' },
  { id: '4-23', unit: '4', focus: '4.3 Question – future',               jp: 'あなたは私に自転車を貸してくれますか？',   en: 'Will you lend me your bike?' },
  { id: '4-24', unit: '4', focus: '4.3 Question – present',              jp: '彼らはあなたに試供品を提供しますか？',       en: 'Do they offer you free samples?' },
  { id: '4-25', unit: '4', focus: '4.3 Question – past',                 jp: '会社はあなたにボーナスを支払いましたか？', en: 'Did the company pay you a bonus?' },
  { id: '4-26', unit: '4', focus: '4.3 Question – past',                 jp: '彼女はあなたにスマホを売りましたか？',       en: 'Did she sell you her phone?' },
  { id: '4-27', unit: '4', focus: '4.3 Question – modal',                jp: '今夜私にファイルを送ってくれますか？',     en: 'Can you send me the file tonight?' },
  { id: '4-28', unit: '4', focus: '4.3 Question – present',              jp: '彼はあなたに新しい技を見せますか？',       en: 'Does he show you any new tricks?' },
  { id: '4-29', unit: '4', focus: '4.3 Question – past',                 jp: '先生はあなたに英語を教えましたか？',       en: 'Did the teacher teach you English?' },
  { id: '4-30', unit: '4', focus: '4.3 Question – past',                 jp: 'あなたは彼に手紙を書きましたか？',         en: 'Did you write him a letter?' },

  // 4.4 第4文型→第3文型①（to を使う動詞：give, hand, lend, offer, pay, sell, send, show, teach, tell, write）
  { id: '4-31', unit: '4', focus: '4.4 to – give',                       jp: '彼はプレゼントを私にくれた。',             en: 'He gave a present to me.' },
  { id: '4-32', unit: '4', focus: '4.4 to – hand',                       jp: '彼はカバンを彼女に手渡した。',             en: 'He handed a bag to her.' },
  { id: '4-33', unit: '4', focus: '4.4 to – lend',                       jp: '彼は彼にお金を貸した。',                   en: 'He lent some money to him.' },
  { id: '4-34', unit: '4', focus: '4.4 to – offer',                      jp: '彼女は私に仕事を提供した。',               en: 'She offered a job to me.' },
  { id: '4-35', unit: '4', focus: '4.4 to – pay',                        jp: '会社は私たちに手当を支払った。',           en: 'The company paid an allowance to us.' },
  { id: '4-36', unit: '4', focus: '4.4 to – sell',                       jp: '彼女は私にチケットを売った。',             en: 'She sold a ticket to me.' },
  { id: '4-37', unit: '4', focus: '4.4 to – send',                       jp: '私は彼に書類を送った。',                   en: 'I sent the documents to him.' },
  { id: '4-38', unit: '4', focus: '4.4 to – show',                       jp: '彼は私に写真を見せた。',                   en: 'He showed a photo to me.' },
  { id: '4-39', unit: '4', focus: '4.4 to – teach',                      jp: '先生は生徒に数学を教えた。',               en: 'The teacher taught math to the students.' },
  { id: '4-40', unit: '4', focus: '4.4 to – tell',                       jp: '彼は私に真実を伝えた。',                   en: 'He told the truth to me.' },
  { id: '4-41', unit: '4', focus: '4.4 to – write',                      jp: '私は彼女に手紙を書いた。',                 en: 'I wrote a letter to her.' },

  // 4.5 第4文型→第3文型②（for を使う動詞：buy, cook, find, get, make, play, sing）
  { id: '4-42', unit: '4', focus: '4.5 for – buy',                       jp: '彼は私にゲームを買ってくれた。',           en: 'He bought a game for me.' },
  { id: '4-43', unit: '4', focus: '4.5 for – cook',                      jp: '彼女は彼に夕食を作った。',                 en: 'She cooked dinner for him.' },
  { id: '4-44', unit: '4', focus: '4.5 for – find',                      jp: '彼は私に本を見つけてくれた。',             en: 'He found a book for me.' },
  { id: '4-45', unit: '4', focus: '4.5 for – get',                       jp: '彼女は彼に飲み物を取ってきた。',           en: 'She got a drink for him.' },
  { id: '4-46', unit: '4', focus: '4.5 for – make',                      jp: '彼は私にケーキを作ってくれた。',           en: 'He made a cake for me.' },
  { id: '4-47', unit: '4', focus: '4.5 for – play',                      jp: '彼らは私たちに曲を演奏した。',             en: 'They played a song for us.' },
  { id: '4-48', unit: '4', focus: '4.5 for – sing',                      jp: '私は赤ちゃんに子守歌を歌った。',           en: 'I sang a lullaby for the baby.' },
  { id: '4-49', unit: '4', focus: '4.5 for – cook (progressive)',        jp: '彼女はいま私たちに昼食を作っている。',     en: 'She is cooking lunch for us now.' },
  { id: '4-50', unit: '4', focus: '4.5 for – get (future)',              jp: '私たちは彼らのためにタクシーを手配するだろう。', en: 'We will get a taxi for them.' },
  { id: '4-51', unit: '4', focus: '4.5 for – make',                      jp: '彼は私のために予約を取ってくれた。',       en: 'He made a reservation for me.' },
,
  // =========================
  // Unit5 第5文型（SVOC）
  // 5.1 名詞/形容詞（O=C） — choose, call, elect, keep, leave, make, name, paint
  { id: '5-1',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '彼らは彼をキャプテンに選んだ。',           en: 'They chose him captain.' },
  { id: '5-2',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '私たちはこの場所を「我が家」と呼ぶ。',     en: 'We call this place home.' },
  { id: '5-3',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '彼らは彼女を社長に選出した。',             en: 'They elected her president.' },
  { id: '5-4',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '私たちはドアを開けたままにしておく。',     en: 'We keep the door open.' },
  { id: '5-5',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '彼女は明かりをつけたままにした。',         en: 'She left the lights on.' },
  { id: '5-6',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: 'その知らせは彼女を幸せにした。',           en: 'The news made her happy.' },
  { id: '5-7',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '私たちはその猫をルナと名付けた。',         en: 'We named the cat Luna.' },
  { id: '5-8',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '彼はフェンスを青に塗った。',               en: 'He painted the fence blue.' },
  { id: '5-9',  unit: '5', focus: '5.1 N/Adj (O=C)',            jp: 'その映画は観客を静かにさせた。',           en: 'The movie kept the audience quiet.' },
  { id: '5-10', unit: '5', focus: '5.1 N/Adj (O=C)',            jp: '先生は規則を明確にした。',                 en: 'The teacher made the rules clear.' },

  // 5.2 to不定詞（OがCする） — advise, allow, ask, encourage, get, tell, want
  { id: '5-11', unit: '5', focus: '5.2 to-inf (advise)',        jp: '先生は私たちにもっと読むよう助言した。',     en: 'The teacher advised us to read more.' },
  { id: '5-12', unit: '5', focus: '5.2 to-inf (allow)',         jp: 'この博物館は来館者に写真撮影を許可している。', en: 'The museum allows visitors to take photos.' },
  { id: '5-13', unit: '5', focus: '5.2 to-inf (ask)',           jp: '彼らは私たちに手伝うよう頼んだ。',           en: 'They asked us to help.' },
  { id: '5-14', unit: '5', focus: '5.2 to-inf (encourage)',     jp: 'コーチは彼にもう一度挑戦するよう励ました。', en: 'The coach encouraged him to try again.' },
  { id: '5-15', unit: '5', focus: '5.2 to-inf (get)',           jp: '私たちは彼に早く終わらせるよう仕向けた。',   en: 'We got him to finish early.' },
  { id: '5-16', unit: '5', focus: '5.2 to-inf (tell)',          jp: '彼女は私に待つように言った。',               en: 'She told me to wait.' },
  { id: '5-17', unit: '5', focus: '5.2 to-inf (want)',          jp: '私はあなたに参加してほしい。',               en: 'I want you to join us.' },
  { id: '5-18', unit: '5', focus: '5.2 to-inf (advise)',        jp: '医者は彼に塩分を減らすよう助言した。',       en: 'The doctor advised him to cut down on salt.' },
  { id: '5-19', unit: '5', focus: '5.2 to-inf (allow)',         jp: '新しいルールは学生が再提出できるようにしている。', en: 'The new rules allow students to resubmit.' },
  { id: '5-20', unit: '5', focus: '5.2 to-inf (tell/want)',     jp: 'マネージャーは彼らに九時に来るよう伝え、私はそれを望んだ。', en: 'The manager told them to come at nine, and I wanted them to.' },

  // 5.3 原形不定詞（OがCする）— make, let, have; feel, hear, notice, see, watch; help
  { id: '5-21', unit: '5', focus: '5.3 bare (make)',            jp: '彼女は彼に謝らせた。',                       en: 'She made him apologize.' },
  { id: '5-22', unit: '5', focus: '5.3 bare (let)',             jp: '必要なら知らせてください。',                 en: 'Let me know if you need anything.' },
  { id: '5-23', unit: '5', focus: '5.3 bare (have)',            jp: '私は彼に自転車を直してもらった。',           en: 'I had him fix my bike.' },
  { id: '5-24', unit: '5', focus: '5.3 bare (see)',             jp: '私たちは彼女が部屋を出るのを見た。',         en: 'We saw her leave the room.' },
  { id: '5-25', unit: '5', focus: '5.3 bare (hear)',            jp: '私は赤ちゃんが泣くのを聞いた。',             en: 'I heard the baby cry.' },
  { id: '5-26', unit: '5', focus: '5.3 bare (feel)',            jp: '彼女は地面が揺れるのを感じた。',             en: 'She felt the ground shake.' },
  { id: '5-27', unit: '5', focus: '5.3 bare (notice)',          jp: '私は彼がためらうのに気づいた。',             en: 'I noticed him hesitate.' },
  { id: '5-28', unit: '5', focus: '5.3 bare (watch)',           jp: '彼らは星が現れるのを見守った。',             en: 'They watched the stars appear.' },
  { id: '5-29', unit: '5', focus: '5.3 bare (help)',            jp: '彼は私が箱を運ぶのを手伝ってくれた。',       en: 'He helped me carry the boxes.' },
  { id: '5-30', unit: '5', focus: '5.3 bare (see)',             jp: '私たちは飛行機が離陸するのを見た。',         en: 'We saw the plane take off.' },

  // 5.4 現在分詞（OがCしている）— feel, hear, notice, see, smell, watch; find, get, have, keep, leave
  { id: '5-31', unit: '5', focus: '5.4 -ing (feel)',            jp: '私はポケットの中で携帯が震えているのを感じた。', en: 'I felt my phone vibrating in my pocket.' },
  { id: '5-32', unit: '5', focus: '5.4 -ing (hear)',            jp: '私たちは二階で誰かが歌っているのを聞いた。',   en: 'We heard someone singing upstairs.' },
  { id: '5-33', unit: '5', focus: '5.4 -ing (notice)',          jp: '私は彼が授業中にメッセージを書いているのに気づいた。', en: 'I noticed him texting during class.' },
  { id: '5-34', unit: '5', focus: '5.4 -ing (see)',             jp: '彼女は彼らが遅くまで働いているのを見た。',     en: 'She saw them working late.' },
  { id: '5-35', unit: '5', focus: '5.4 -ing (smell)',           jp: '私たちは何かが焦げている匂いを嗅いだ。',       en: 'We smelled something burning.' },
  { id: '5-36', unit: '5', focus: '5.4 -ing (watch)',           jp: '彼らは子どもたちがサッカーをしているのを見守った。', en: 'They watched the kids playing soccer.' },
  { id: '5-37', unit: '5', focus: '5.4 -ing (find)',            jp: '私は彼女が図書館で勉強しているのを見つけた。',   en: 'I found her studying in the library.' },
  { id: '5-38', unit: '5', focus: '5.4 -ing (get)',             jp: '私たちはエンジンを動く状態にした。',           en: 'We got the engine running.' },
  { id: '5-39', unit: '5', focus: '5.4 -ing (have)',            jp: '彼は私たちを一時間待たせた。',               en: 'He had us waiting for an hour.' },
  { id: '5-40', unit: '5', focus: '5.4 -ing (leave)',           jp: '彼女はコンピュータを起動したままにした。',     en: 'She left the computer running.' },

  // 5.5 過去分詞（OがCされる）— get, have, make; feel, hear, notice, see, watch; find, keep, leave, want
  { id: '5-41', unit: '5', focus: '5.5 p.p. (get)',             jp: '私は自転車を修理してもらった。',             en: 'I got my bike repaired.' },
  { id: '5-42', unit: '5', focus: '5.5 p.p. (have)',            jp: '彼女は髪を切ってもらった。',                 en: 'She had her hair cut.' },
  { id: '5-43', unit: '5', focus: '5.5 p.p. (make)',            jp: 'マネージャーは決定を公表した。',               en: 'The manager made the decision known.' },
  { id: '5-44', unit: '5', focus: '5.5 p.p. (see)',             jp: '私は窓が割られているのを見た。',             en: 'I saw the window broken.' },
  { id: '5-45', unit: '5', focus: '5.5 p.p. (hear)',            jp: '私たちは自分の名前が呼ばれるのを聞いた。',     en: 'We heard our names called.' },
  { id: '5-46', unit: '5', focus: '5.5 p.p. (notice)',          jp: '彼女はドアが開けっぱなしにされているのに気づいた。', en: 'She noticed the door left open.' },
  { id: '5-47', unit: '5', focus: '5.5 p.p. (watch)',           jp: '彼らは競技場が観客で埋まるのを見守った。',       en: 'They watched the stadium filled with fans.' },
  { id: '5-48', unit: '5', focus: '5.5 p.p. (find)',            jp: '私たちはファイルが添付されているのを見つけた。',   en: 'We found the file attached.' },
  { id: '5-49', unit: '5', focus: '5.5 p.p. (keep)',            jp: '私たちはドアを施錠したままにしている。',       en: 'We keep the door locked.' },
  { id: '5-50', unit: '5', focus: '5.5 p.p. (leave/want)',      jp: '彼は窓を閉めた状態にしておき、私は報告書を正午までに仕上げてほしい。', en: 'He left the window closed, and I want the report finished by noon.' },

  // 5.6 being + 過去分詞（進行している受け身の状況：O が C されているところ）
  { id: '5-51', unit: '5', focus: '5.6 being + p.p. (see)',     jp: '彼女は盲導犬に導かれている視覚障害者を見た。', en: 'She saw a visually impaired man being led by a guide dog.' },
  { id: '5-52', unit: '5', focus: '5.6 being + p.p. (watch)',   jp: '私たちは古い橋が修理されているところを見守った。', en: 'We watched the old bridge being repaired.' },
  { id: '5-53', unit: '5', focus: '5.6 being + p.p. (notice)',  jp: '彼は壁が塗り替えられているのに気づいた。',     en: 'He noticed the walls being repainted.' },
  { id: '5-54', unit: '5', focus: '5.6 being + p.p. (hear)',    jp: '私は廊下で自分の名前が呼ばれているのを聞いた。', en: 'I heard my name being called in the hallway.' },
  { id: '5-55', unit: '5', focus: '5.6 being + p.p. (see)',     jp: '彼らはファイルがアップロードされているところを見た。', en: 'They saw the files being uploaded to the server.' },
  { id: '5-56', unit: '5', focus: '5.6 being + p.p. (watch)',   jp: '観光客は城が夜にライトアップされているところを見た。', en: 'The tourists watched the castle being lit at night.' },
  { id: '5-57', unit: '5', focus: '5.6 being + p.p. (find)',    jp: '私はその記事がテレビで議論されているのを見つけた。', en: 'I found the article being discussed on TV.' },
  { id: '5-58', unit: '5', focus: '5.6 being + p.p. (see)',     jp: '彼女は負傷した選手が運び出されているところを見た。', en: 'She saw the injured player being carried off the field.' },
  { id: '5-59', unit: '5', focus: '5.6 being + p.p. (notice)',  jp: '私たちは道路が警察によって閉鎖されているのに気づいた。', en: 'We noticed the road being closed by the police.' },
  { id: '5-60', unit: '5', focus: '5.6 being + p.p. (see)',     jp: '彼は荷物が間違った住所に配達されているのを見た。', en: 'He saw the package being delivered to the wrong address.' }
];
