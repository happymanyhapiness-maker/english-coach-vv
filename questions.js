// questions.js
// 英コミュCoach 第一回＋第二回 定期テスト対策 問題データ
// BASE: Phase2-1.42 教材別一括セッション版
// UPDATED: 2026-07-13 第二回実問題反映 16問 + FOCUS自己採点2問を統合
// 第二回141問: 全問 active

const QUESTIONS = [
  {
    "id": "T1_CE_Y01_001",
    "testRound": "1st",
    "type": "reading_reference",
    "source": "Cutting Edge Y01 問題1",
    "title": "短い文脈で読む",
    "question": "次の英文を読んで、It が指す内容として最も自然なものは？\n\n英文：\nA majority of people catch colds during the spring or winter. It makes us wonder why scientists can’t find a treatment for the regular cold.",
    "choices": [
      "scientists can send people to the moon",
      "spring or winter",
      "a treatment for the regular cold",
      "most people catch colds in spring or winter"
    ],
    "answer": 3,
    "explanation": "It は直前の文全体を受けている。ここでは「大多数の人が春や冬に風邪をひくこと」が、なぜ普通の風邪の治療法を見つけられないのかと私たちに思わせる、という流れになる。参照：Cutting Edge Y01 問題1",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "指示語",
      "it"
    ],
    "mistakeTag": "reference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "Cutting Edge Y01 問題1",
    "title": "make O do",
    "question": "It makes us wonder ... の make O do の意味として正しいものは？",
    "choices": [
      "Oが〜することを許す",
      "Oを〜と呼ぶ",
      "Oに〜させる",
      "Oが〜するように見える"
    ],
    "answer": 2,
    "explanation": "make O do は『Oに〜させる』。makes us wonder は『私たちに〜だろうかと思わせる』となる。参照：Cutting Edge Y01 問題1",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "構文",
      "make O do"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_003",
    "testRound": "1st",
    "type": "reading_example",
    "source": "Cutting Edge Y01 問題3",
    "title": "具体例を探す",
    "question": "次の英文を読んで、「体が風邪を止めようと働く」の具体例として最も適切なものは？\n\n英文：\nWhen a cold attacks your body, your body works hard to stop it. For example, blood flows quickly to your nose and as a result, you can’t breathe very well.",
    "choices": [
      "体が春や冬に風邪をひくこと",
      "鼻の血流が増え、呼吸が苦しくなること",
      "科学者が治療法を探し続けること",
      "薬で症状をすぐに止められること"
    ],
    "answer": 1,
    "explanation": "直後の For example 以下が具体例。blood flows quickly to your nose and as a result, you can’t breathe very well が、「体が風邪を止めようと働く」例になっている。参照：Cutting Edge Y01 問題3",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "具体例",
      "本文根拠"
    ],
    "mistakeTag": "pinpoint",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_004",
    "testRound": "1st",
    "type": "discourse_marker",
    "source": "Cutting Edge Y01 問題3",
    "title": "as a result",
    "question": "blood flows quickly to your nose and as a result, you can’t breathe very well. の as a result の働きは？",
    "choices": [
      "例を追加する",
      "逆接を示す",
      "結果を示す",
      "時間の同時性を示す"
    ],
    "answer": 2,
    "explanation": "as a result は『その結果』。血液が鼻に流れる→呼吸しにくくなる、という結果の流れを作っている。参照：Cutting Edge Y01 問題3",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "接続語",
      "as a result"
    ],
    "mistakeTag": "inference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y02_001",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y02 問題2",
    "title": "roll off の推測",
    "question": "when they rolled off the roof and fell into the yard の rolled off の意味として最も自然なものは？",
    "choices": [
      "屋根の上で止まった",
      "庭から拾い上げた",
      "屋根から転がり落ちた",
      "屋根を修理した"
    ],
    "answer": 2,
    "explanation": "roll は『転がる』、off は『〜から離れて』。文脈上 fell into the yard とつながるので『屋根から転がり落ちた』が自然。参照：Cutting Edge Y02 問題2",
    "tags": [
      "第一回",
      "Cutting Edge Y02",
      "文脈語彙",
      "熟語推測"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y02_002",
    "testRound": "1st",
    "type": "translation_point",
    "source": "Cutting Edge Y02 問題3",
    "title": "what I did の訳し方",
    "question": "she did not know what I did の what I did の働きとして最も適切なものは？",
    "choices": [
      "know の目的語になる名詞節で、『私がしたこと』という意味",
      "did not know を強める副詞句で、『本当に知らなかった』という意味",
      "she を説明する関係代名詞節で、『私がした彼女』という意味",
      "did の後に続く分詞句で、『しながら』という意味"
    ],
    "answer": 0,
    "explanation": "what + S + V は『SがVすること』を表す名詞節。ここでは what I did 全体が know の目的語になり、『彼女は私がしたことを知らなかった』と考える。参照：Cutting Edge Y02 問題3",
    "tags": [
      "第一回",
      "Cutting Edge Y02",
      "名詞節",
      "what",
      "和訳ポイント"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y02_003",
    "testRound": "1st",
    "type": "reading_tf",
    "source": "Cutting Edge Y02 問題5",
    "title": "数字情報：43 years ago",
    "question": "Forty-three years ago, I was twelve years old. からわかる「現在の私」の年齢として正しいものは？",
    "choices": [
      "43歳",
      "55歳",
      "65歳",
      "本文から判断できない"
    ],
    "answer": 1,
    "explanation": "Forty-three years ago は『43年前』。そのとき12歳だったので、現在は 12+43=55歳。英語の数字情報は、誰の年齢かを確認してから計算する。参照：Cutting Edge Y02 問題5",
    "tags": [
      "第一回",
      "Cutting Edge Y02",
      "内容一致",
      "数字"
    ],
    "mistakeTag": "tf",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_001",
    "testRound": "1st",
    "type": "reading_reference",
    "source": "Cutting Edge Y03 問題2",
    "title": "短い文脈で読む",
    "question": "次の英文を読んで、2文目の It が指す内容として最も自然なものは？\n\n英文：\nIt also has spaces to write about what you’re doing or thinking. It is called journaling.",
    "choices": [
      "花の色を選ぶこと",
      "自分の行動や考えを書くこと",
      "ストレスを減らす専門家",
      "塗り絵の本を開くこと"
    ],
    "answer": 1,
    "explanation": "2文目の It は前文の内容を受ける。代入して「自分の行動や考えを書くことは journaling と呼ばれる」とすると自然。「スペースそのもの」ではなく「書くこと」が呼ばれている点に注意。参照：Cutting Edge Y03 問題2",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "指示語",
      "it"
    ],
    "mistakeTag": "reference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_002",
    "testRound": "1st",
    "type": "discourse_marker",
    "source": "Cutting Edge Y03 問題4",
    "title": "空所に入る語句",
    "question": "次の英文の空所に最も合う語句は？\n\n英文：\nColoring can reduce stress. ______, coloring can bring out your imagination.",
    "choices": [
      "From now on",
      "Over there",
      "In addition",
      "For example"
    ],
    "answer": 2,
    "explanation": "前半はストレス軽減、後半は想像力を引き出す効果。内容を追加しているので In addition が最適。参照：Cutting Edge Y03 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "ディスコースマーカー",
      "追加"
    ],
    "mistakeTag": "inference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_003",
    "testRound": "1st",
    "type": "translation_point",
    "source": "Cutting Edge Y03 問題5",
    "title": "Sitting down and coloring の働き",
    "question": "Sitting down and coloring, Jackson adds, relaxes her ... の Sitting down and coloring の働きは？",
    "choices": [
      "動名詞句として主語になっている",
      "分詞構文で『座って塗りながら』を表す",
      "Jackson を修飾する形容詞句である",
      "命令文で『座って塗りなさい』を表す"
    ],
    "answer": 0,
    "explanation": "ここはカンマに惑わされやすいが、Sitting down and coloring が主語。Jackson adds は挿入で、『座って塗り絵をすることは、彼女をリラックスさせる』となる。参照：Cutting Edge Y03 問題5",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "和訳ポイント",
      "動名詞主語",
      "挿入"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y04_001",
    "testRound": "1st",
    "type": "reading_reason",
    "source": "Cutting Edge Y04 問題4",
    "title": "月が乾燥している理由",
    "question": "次の英文を読んで、月がとても乾燥している理由として最も自然なものは？\n\n英文：\nSome scientists think a large object hit the Earth. The moon is very dry because the impact created so much heat that it dried up all the water.",
    "choices": [
      "地球から遠く離れて水が失われたから",
      "月の中心部に鉄が多く含まれていたから",
      "衝突で水が干上がるほどの熱が生じたから",
      "宇宙飛行士が月の石を持ち帰ったから"
    ],
    "answer": 2,
    "explanation": "because 以下が理由。impact は前文の「大きな物体が地球に衝突したこと」を指す。その衝突で、水が干上がるほどの熱が生じた。参照：Cutting Edge Y04 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y04",
      "理由説明",
      "本文根拠"
    ],
    "mistakeTag": "pinpoint",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y04_002",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y04 問題4",
    "title": "make up の文脈意味",
    "question": "materials that make up the outer part of the Earth の make up の意味として最も自然なものは？",
    "choices": [
      "〜を構成する",
      "〜を化粧する",
      "仲直りする",
      "〜をでっちあげる"
    ],
    "answer": 0,
    "explanation": "地球の外側の部分を作っている物質、という文脈なので make up は『〜を構成する』。参照：Cutting Edge Y04 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y04",
      "文脈語彙",
      "make up"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_001",
    "testRound": "1st",
    "type": "reading_reason",
    "source": "Cutting Edge Y05 問題1",
    "title": "It is important for ... to do",
    "question": "次の英文の空所に最も合うものは？\n\n英文：\nThis house was actually printed in high winds, blowing dust and rain. It is important for the printing process ( 1 ).",
    "choices": [
      "to operate properly in extreme conditions",
      "to be completed as quickly as possible in the near future",
      "to start according to the plan designed by computer software programs",
      "to be shown to everyone visiting the company"
    ],
    "answer": 0,
    "explanation": "前文に「強い風、吹きつけるほこりや雨の中で実際にプリントされた」とある。この流れを受けるので「極端な状況の中で機能すること」が最もつながる。It is ~ for X to do の形式主語構文。参照：Cutting Edge Y05 問題1",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "文脈判断",
      "不定詞"
    ],
    "mistakeTag": "inference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_002",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y05 問題2",
    "title": "on-site の推測",
    "question": "次の英文を読んで、on-site の意味として最も自然なものは？\n\n英文：\nThe homes are printed on-site, so the equipment has to be light enough to move from one property to the next.",
    "choices": [
      "家が建てられる現地で",
      "公式ウェブサイト上で",
      "工場で完成してから",
      "住む人たちに囲まれて"
    ],
    "answer": 0,
    "explanation": "on-site は on + site から『その場所で、現場で』。次の文で equipment を土地から土地へ動かす必要があると説明されている。参照：Cutting Edge Y05 問題2",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "文脈語彙",
      "on-site"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_003",
    "testRound": "1st",
    "type": "number_compare",
    "source": "Cutting Edge Y05 問題4",
    "title": "at about a quarter speed",
    "question": "次の英文を読んで、内容として正しいものはどれ？\n\n英文：\nWe ran this printer at about a quarter speed to print this house, and we were able to complete the house in less than 48 hours of print time.\nAt full speed, the printing process could take as little as (4) hours.",
    "choices": [
      "この家は、約4分の1のスピードで印刷しても48時間未満で完成した",
      "この家は、全速力で印刷したため48時間未満で完成した",
      "この英文では、全速力なら48時間より長くかかるとわかる",
      "この英文では、4分の1のスピードでも全速力でも時間は同じだとわかる"
    ],
    "answer": 0,
    "explanation": "We ran this printer at about a quarter speed ... in less than 48 hours of print time とあるので、実際は約4分の1のスピードで48時間未満で完成したと読める。At full speed は全速力の場合の説明。参照：Cutting Edge Y05 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "数字",
      "比較",
      "アプリ完結",
      "原本突合済み"
    ],
    "mistakeTag": "tf",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y06_001",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y06（原本本文未確認）",
    "title": "be based on",
    "question": "This theory is based on ... の be based on の意味として最も近いものは？",
    "choices": [
      "〜に基づいている",
      "〜と重なる",
      "〜をわざと行う",
      "〜する傾向がある"
    ],
    "answer": 0,
    "explanation": "原本突合で、Cutting Edge Y06 授業プリント本文中に This theory is based on ... の英文を確認できなかったため保留。be based on ～ は先生指定重要単語側 T1_VOC_186 で扱う。",
    "tags": [
      "第一回",
      "Cutting Edge Y06",
      "重要表現",
      "be based on",
      "原本未確認",
      "hold"
    ],
    "mistakeTag": "meaning",
    "status": "hold"
  },
  {
    "id": "T1_CE_Y06_002",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y06（原本本文未確認）",
    "title": "tend to do",
    "question": "Women’s clothes tend to button up differently. の tend to do の意味として最も近いものは？",
    "choices": [
      "〜することを許可する",
      "〜しないようにする",
      "〜する自由がある",
      "〜する傾向がある"
    ],
    "answer": 3,
    "explanation": "原本突合で、Cutting Edge Y06 授業プリント本文中に Women’s clothes tend to button up differently. の英文を確認できなかったため保留。tend to do は先生指定重要単語側 T1_VOC_195 で扱う。",
    "tags": [
      "第一回",
      "Cutting Edge Y06",
      "重要表現",
      "tend to do",
      "原本未確認",
      "hold"
    ],
    "mistakeTag": "meaning",
    "status": "hold"
  },
  {
    "id": "T1_CE_Y06_003",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y06",
    "title": "on purpose",
    "question": "on purpose の意味として最も近いものは？",
    "choices": [
      "自由に〜できる",
      "確かに、確実に",
      "昔は、過去に",
      "わざと、故意に"
    ],
    "answer": 3,
    "explanation": "on purpose は『わざと、故意に』。目的 purpose から意味をつかむ。参照：Cutting Edge Y06",
    "tags": [
      "第一回",
      "Cutting Edge Y06",
      "重要表現",
      "on purpose"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_01_001",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 1-1",
    "title": "dependence の訳し方",
    "question": "Despite our dependence on it の dependence を自然に訳すときのポイントは？",
    "choices": [
      "Despite を『だから』と訳す",
      "dependence を『独立』と逆に訳す",
      "『依存』を『依存している』のように動詞化する",
      "it を後ろの water pollution と取る"
    ],
    "answer": 2,
    "explanation": "dependence のような抽象名詞は、日本語では『依存』より『依存している』と動詞化すると自然。参照：FOCUS 1-1",
    "tags": [
      "第一回",
      "FOCUS 1",
      "和訳ポイント",
      "名詞の動詞化"
    ],
    "mistakeTag": "transword",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_001",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-1",
    "title": "appear to do",
    "question": "a child sometimes appears to repeat ... の appears to repeat の意味として正しいものは？",
    "choices": [
      "繰り返すように勧められる",
      "繰り返すことを可能にする",
      "繰り返さないようにする",
      "繰り返すように見える"
    ],
    "answer": 3,
    "explanation": "appear to do は『〜するように見える』。参照：FOCUS 2-1",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文",
      "appear to do"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-1",
    "title": "so as not to do",
    "question": "so as not to forget their discoveries の意味として最も自然なのは？",
    "choices": [
      "発見したことを忘れるように見える",
      "発見したことを忘れることができる",
      "発見したことを忘れないようにするために",
      "発見したことを忘れた結果"
    ],
    "answer": 2,
    "explanation": "so as not to do は『〜しないようにするために』。not の位置を見落とさない。参照：FOCUS 2-1",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文",
      "so as not to do"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-2",
    "title": "enable O to do",
    "question": "to enable them to do so の enable O to do の意味として正しいものは？",
    "choices": [
      "Oが〜することを可能にする",
      "Oが〜しないようにする",
      "Oを〜と呼ぶ",
      "Oに〜するように見える"
    ],
    "answer": 0,
    "explanation": "enable O to do は『Oが〜することを可能にする』。ここでは女性たちが働けるようにする、という意味になる。参照：FOCUS 2-2",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文",
      "enable O to do"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_001",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 3-1",
    "title": "be said to have p.p.",
    "question": "Thomas Alva Edison is said to have led the world ... の is said to have led の意味として正しいものは？",
    "choices": [
      "導くように勧められた",
      "導くことができた",
      "導いたと言われている",
      "導くために言った"
    ],
    "answer": 2,
    "explanation": "S be said to have p.p. は『Sは〜したと言われている』。完了不定詞 have led が過去の内容を表す。参照：FOCUS 3-1",
    "tags": [
      "第一回",
      "FOCUS 3",
      "構文",
      "完了不定詞"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 3-2",
    "title": "be encouraged to do",
    "question": "American students are encouraged to ask questions ... の are encouraged to ask の意味として正しいものは？",
    "choices": [
      "質問するように勧められる",
      "質問しないようにする",
      "質問することを可能にする",
      "質問するように見える"
    ],
    "answer": 0,
    "explanation": "encourage O to do は『Oに〜するよう勧める』。受け身になると S be encouraged to do で『Sは〜するよう勧められる』。参照：FOCUS 3-2",
    "tags": [
      "第一回",
      "FOCUS 3",
      "構文",
      "受け身"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_001",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-1",
    "title": "have difficulty doing",
    "question": "Mary had difficulty settling in China の had difficulty settling の意味として正しいものは？",
    "choices": [
      "定住するのに苦労した",
      "定住しないようにした",
      "定住するように見えた",
      "定住することを許可した"
    ],
    "answer": 0,
    "explanation": "have difficulty doing は『〜するのに苦労する』。difficulty の後ろは doing になる。参照：FOCUS 4-1",
    "tags": [
      "第一回",
      "FOCUS 4",
      "構文",
      "have difficulty doing"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-1",
    "title": "make O C",
    "question": "has made herself a good interpreter の make O C の意味として正しいものは？",
    "choices": [
      "OをCにする",
      "OがCするように見える",
      "OをCと呼ぶ",
      "OにCを作らせる"
    ],
    "answer": 0,
    "explanation": "make O C は『OをCにする』。herself = a good interpreter の関係を作っている。参照：FOCUS 4-1",
    "tags": [
      "第一回",
      "FOCUS 4",
      "構文",
      "make O C"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-2",
    "title": "used by their elders の役割",
    "question": "the sounds and tones used by their elders の used by their elders は何を修飾している？",
    "choices": [
      "from a very early age",
      "their elders",
      "the sounds and tones",
      "Children"
    ],
    "answer": 2,
    "explanation": "used by their elders は過去分詞句で、直前の the sounds and tones を後ろから修飾する。『年上の人によって使われる音や声の調子』。参照：FOCUS 4-2",
    "tags": [
      "第一回",
      "FOCUS 4",
      "分詞",
      "後置修飾"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_001",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-1",
    "title": "each having の解釈",
    "question": "each having a specialized function の each having はどのように考える？",
    "choices": [
      "each が意味上の主語になる分詞構文",
      "each が命令文の主語になる形",
      "each が比較表現の一部になる形",
      "each を修飾する関係代名詞節"
    ],
    "answer": 0,
    "explanation": "A V-ing の形で、A が意味上の主語になる分詞構文。『おのおのが専門化した役目を持ち』と訳す。参照：FOCUS 5-1",
    "tags": [
      "第一回",
      "FOCUS 5",
      "分詞構文",
      "独立分詞構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-2",
    "title": "with A doing",
    "question": "with thousands of species vanishing each year の with A doing の意味として最も自然なのは？",
    "choices": [
      "何千もの種によって毎年消されて",
      "何千もの種を毎年消すために",
      "何千もの種が毎年消えている状態で",
      "何千もの種が毎年消えないように"
    ],
    "answer": 2,
    "explanation": "with A doing は『Aが〜している状態で』。with thousands of species vanishing each year は『何千もの種が毎年消えている状態で』。参照：FOCUS 5-2",
    "tags": [
      "第一回",
      "FOCUS 5",
      "分詞構文",
      "with A doing"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_VOC_001",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: a majority of ～",
    "question": "a majority of ～ の意味として最も近いものは？",
    "choices": [
      "大多数の〜、大部分の～",
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 0,
    "explanation": "a majority of ～ は『大多数の〜、大部分の～』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_002",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: catch a cold",
    "question": "catch a cold の意味として最も近いものは？",
    "choices": [
      "風邪をひく",
      "〜によれば",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 0,
    "explanation": "catch a cold は『風邪をひく』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_003",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: wonder",
    "question": "wonder の意味として最も近いものは？",
    "choices": [
      "〜だろうかと思う",
      "〜する傾向がある",
      "〜に基づいている",
      "〜を干上がらせる"
    ],
    "answer": 0,
    "explanation": "wonder は『〜だろうかと思う』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_004",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: treatment",
    "question": "treatment の意味として最も近いものは？",
    "choices": [
      "治療法",
      "ボタン",
      "外側の",
      "巨大な"
    ],
    "answer": 0,
    "explanation": "treatment は『治療法』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_005",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: regular",
    "question": "regular の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "普通の、通常の",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "regular は『普通の、通常の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_006",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: out there",
    "question": "out there の意味として最も近いものは？",
    "choices": [
      "世の中には、どこかに",
      "（〜の）大きさがある",
      "～ではないかと恐れる",
      "～に仕える、奉仕する"
    ],
    "answer": 0,
    "explanation": "out there は『世の中には、どこかに』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_007",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: in fact",
    "question": "in fact の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "実際（は）",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "in fact は『実際（は）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_008",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: medicine",
    "question": "medicine の意味として最も近いものは？",
    "choices": [
      "客",
      "薬",
      "形",
      "剣"
    ],
    "answer": 1,
    "explanation": "medicine は『薬』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_009",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: according to ～",
    "question": "according to ～ の意味として最も近いものは？",
    "choices": [
      "〜に重なる",
      "～をまねる",
      "〜によれば",
      "～を減らす"
    ],
    "answer": 2,
    "explanation": "according to ～ は『〜によれば』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_010",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: the Center for Disease Control",
    "question": "the Center for Disease Control の意味として最も近いものは？",
    "choices": [
      "疾病管理センター",
      "〜する傾向がある",
      "〜だろうかと思う",
      "〜に基づいている"
    ],
    "answer": 0,
    "explanation": "the Center for Disease Control は『疾病管理センター』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_011",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: limited",
    "question": "limited の意味として最も近いものは？",
    "choices": [
      "〔形〕限られた、わずかな",
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "～を含む、～が入っている"
    ],
    "answer": 0,
    "explanation": "limited は『〔形〕限られた、わずかな』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_012",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: success",
    "question": "success の意味として最も近いものは？",
    "choices": [
      "成功",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "success は『成功』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_013",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: attack",
    "question": "attack の意味として最も近いものは？",
    "choices": [
      "～を襲う、攻撃する",
      "〜で満たされている",
      "…を〜に集中させる",
      "（卓球の）ラケット"
    ],
    "answer": 0,
    "explanation": "attack は『～を襲う、攻撃する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_014",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: blood",
    "question": "blood の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "血液",
      "滑る"
    ],
    "answer": 2,
    "explanation": "blood は『血液』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_015",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: as a result",
    "question": "as a result の意味として最も近いものは？",
    "choices": [
      "その結果",
      "～を許す",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 0,
    "explanation": "as a result は『その結果』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_016",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: breathe",
    "question": "breathe の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "呼吸する",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "breathe は『呼吸する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_017",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: in addition",
    "question": "in addition の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "さらに、加えて",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "in addition は『さらに、加えて』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_018",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: heat",
    "question": "heat の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "熱、熱さ",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "heat は『熱、熱さ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_019",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: fever",
    "question": "fever の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "（病気による）熱、発熱",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "fever は『（病気による）熱、発熱』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_020",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: at the same time",
    "question": "at the same time の意味として最も近いものは？",
    "choices": [
      "同時に",
      "ボタン",
      "外側の",
      "巨大な"
    ],
    "answer": 0,
    "explanation": "at the same time は『同時に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_021",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: sweat",
    "question": "sweat の意味として最も近いものは？",
    "choices": [
      "汗をかく",
      "～を許す",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 0,
    "explanation": "sweat は『汗をかく』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_022",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: finally",
    "question": "finally の意味として最も近いものは？",
    "choices": [
      "最後に",
      "ボタン",
      "外側の",
      "巨大な"
    ],
    "answer": 0,
    "explanation": "finally は『最後に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_023",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: pain",
    "question": "pain の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "痛み",
      "滑る"
    ],
    "answer": 2,
    "explanation": "pain は『痛み』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_024",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: miserable",
    "question": "miserable の意味として最も近いものは？",
    "choices": [
      "みじめな",
      "～を許す",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 0,
    "explanation": "miserable は『みじめな』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_025",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: actually",
    "question": "actually の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "実は、実際は",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "actually は『実は、実際は』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_026",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: take a bath",
    "question": "take a bath の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "風呂に入る",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 1,
    "explanation": "take a bath は『風呂に入る』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_027",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: take medicine",
    "question": "take medicine の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "薬を飲む",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "take medicine は『薬を飲む』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_028",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: a variety of ～",
    "question": "a variety of ～ の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "様々な〜",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "a variety of ～ は『様々な〜』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_029",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: breathing difficulty",
    "question": "breathing difficulty の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "呼吸困難",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 1,
    "explanation": "breathing difficulty は『呼吸困難』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_030",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: come in the form of ～",
    "question": "come in the form of ～ の意味として最も近いものは？",
    "choices": [
      "〜の形で手に入る［売られている］",
      "（ゴルフの）ティー、球をのせる台",
      "（線で描いた）絵、線画、デッサン",
      "〜から形成される、〜からできている"
    ],
    "answer": 0,
    "explanation": "come in the form of ～ は『〜の形で手に入る［売られている］』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_031",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: reason",
    "question": "reason の意味として最も近いものは？",
    "choices": [
      "理由",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "reason は『理由』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_032",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: create",
    "question": "create の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～を生み出す",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "create は『～を生み出す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_033",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: defense",
    "question": "defense の意味として最も近いものは？",
    "choices": [
      "防御（力）、防御手段",
      "（〜の）大きさがある",
      "～ではないかと恐れる",
      "～に仕える、奉仕する"
    ],
    "answer": 0,
    "explanation": "defense は『防御（力）、防御手段』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_034",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: properly",
    "question": "properly の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "適切に",
      "巨大な"
    ],
    "answer": 2,
    "explanation": "properly は『適切に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_035",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: amazing",
    "question": "amazing の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "驚くべき",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 1,
    "explanation": "amazing は『驚くべき』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_036",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y01）",
    "title": "重要単語: on one’s own",
    "question": "on one’s own の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "独力で、一人で",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "on one’s own は『独力で、一人で』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y01 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y01",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_037",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: customer",
    "question": "customer の意味として最も近いものは？",
    "choices": [
      "形",
      "剣",
      "客",
      "敵"
    ],
    "answer": 2,
    "explanation": "customer は『客』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_038",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: route",
    "question": "route の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "道順、経路",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 1,
    "explanation": "route は『道順、経路』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_039",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: lesson",
    "question": "lesson の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "教え、教訓",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "lesson は『教え、教訓』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_040",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: forgive",
    "question": "forgive の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "クレヨン",
      "ストレス"
    ],
    "answer": 0,
    "explanation": "forgive は『～を許す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_041",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: throw",
    "question": "throw の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～を投げる",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "throw は『～を投げる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_042",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: hidden",
    "question": "hidden の意味として最も近いものは？",
    "choices": [
      "隠れた、人目につかない",
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 0,
    "explanation": "hidden は『隠れた、人目につかない』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_043",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: backyard",
    "question": "backyard の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "裏庭",
      "滑る"
    ],
    "answer": 2,
    "explanation": "backyard は『裏庭』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_044",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: roll off ～",
    "question": "roll off ～ の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "～から転がり落ちる",
      "…を〜に集中させる",
      "（卓球の）ラケット"
    ],
    "answer": 1,
    "explanation": "roll off ～ は『～から転がり落ちる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_045",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: comet",
    "question": "comet の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "彗（すい）星、ほうき星",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "comet は『彗（すい）星、ほうき星』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_046",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: fall from ～",
    "question": "fall from ～ の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～から落ちる",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "fall from ～ は『～から落ちる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_047",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: smooth",
    "question": "smooth の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "滑らかな、すべすべした",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 1,
    "explanation": "smooth は『滑らかな、すべすべした』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_048",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: slip",
    "question": "slip の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "滑る",
      "起源"
    ],
    "answer": 2,
    "explanation": "slip は『滑る』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_049",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: back porch",
    "question": "back porch の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "裏口",
      "滑る"
    ],
    "answer": 2,
    "explanation": "back porch は『裏口』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_050",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: be afraid that ～",
    "question": "be afraid that ～ の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "～に仕える、奉仕する",
      "～ではないかと恐れる",
      "お気に入りの、好きな"
    ],
    "answer": 2,
    "explanation": "be afraid that ～ は『～ではないかと恐れる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_051",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: find out that ～",
    "question": "find out that ～ の意味として最も近いものは？",
    "choices": [
      "～ということを探り出す、～だと知る",
      "〜から形成される、〜からできている",
      "（感情・音などが）弱まる、なくなる",
      "〜の形で手に入る［売られている］"
    ],
    "answer": 0,
    "explanation": "find out that ～ は『～ということを探り出す、～だと知る』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_052",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: be sure that ～",
    "question": "be sure that ～ の意味として最も近いものは？",
    "choices": [
      "（規模が）大きくなる、拡大する",
      "（物の一部が）はがれる、取れる",
      "～だと確信している、自信がある",
      "～を打ち負かす、～に勝る、勝つ"
    ],
    "answer": 2,
    "explanation": "be sure that ～ は『～だと確信している、自信がある』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_053",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: feel guilty about ～",
    "question": "feel guilty about ～ の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "～を後ろめたいと感じる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 1,
    "explanation": "feel guilty about ～ は『～を後ろめたいと感じる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_054",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: greet",
    "question": "greet の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～に挨拶する",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "greet は『～に挨拶する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_055",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: uncomfortable",
    "question": "uncomfortable の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "居心地の悪い",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "uncomfortable は『居心地の悪い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_056",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: whenever",
    "question": "whenever の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～するたびに",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "whenever は『～するたびに』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_057",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: fix",
    "question": "fix の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～を修理する",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "fix は『～を修理する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_058",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: envelope",
    "question": "envelope の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "封筒",
      "滑る"
    ],
    "answer": 2,
    "explanation": "envelope は『封筒』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_059",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: note",
    "question": "note の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "メモ、短い手紙",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "note は『メモ、短い手紙』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_060",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: quietly",
    "question": "quietly の意味として最も近いものは？",
    "choices": [
      "静かに、目立たないように",
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな"
    ],
    "answer": 0,
    "explanation": "quietly は『静かに、目立たないように』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_061",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: continue",
    "question": "continue の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～を続ける",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "continue は『～を続ける』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_062",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y02）",
    "title": "重要単語: be proud of ～",
    "question": "be proud of ～ の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "～を誇りに思う、自慢する",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな"
    ],
    "answer": 1,
    "explanation": "be proud of ～ は『～を誇りに思う、自慢する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y02 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y02",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_063",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: stress",
    "question": "stress の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "ストレス",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "stress は『ストレス』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_064",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: coloring",
    "question": "coloring の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "塗り絵",
      "巨大な"
    ],
    "answer": 2,
    "explanation": "coloring は『塗り絵』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_065",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: activity",
    "question": "activity の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "滑る",
      "起源"
    ],
    "answer": 1,
    "explanation": "activity は『活動』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_066",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: worldwide",
    "question": "worldwide の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "世界中で［の］",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "worldwide は『世界中で［の］』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_067",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: choose",
    "question": "choose の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "クレヨン",
      "～を選ぶ",
      "ストレス"
    ],
    "answer": 2,
    "explanation": "choose は『～を選ぶ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_068",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: crayon",
    "question": "crayon の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "クレヨン",
      "～を選ぶ",
      "ストレス"
    ],
    "answer": 1,
    "explanation": "crayon は『クレヨン』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_069",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: marker",
    "question": "marker の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "〜に基づいている",
      "マーカー（ペン）"
    ],
    "answer": 3,
    "explanation": "marker は『マーカー（ペン）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_070",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: favorite",
    "question": "favorite の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "～ではないかと恐れる",
      "お気に入りの、好きな",
      "～に仕える、奉仕する"
    ],
    "answer": 2,
    "explanation": "favorite は『お気に入りの、好きな』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_071",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: fill 〜 in",
    "question": "fill 〜 in の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜を埋める、塗りつぶす",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 1,
    "explanation": "fill 〜 in は『〜を埋める、塗りつぶす』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_072",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: fun",
    "question": "fun の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "…を〜に集中させる",
      "楽しみ、楽しいもの",
      "（卓球の）ラケット"
    ],
    "answer": 2,
    "explanation": "fun は『楽しみ、楽しいもの』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_073",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: create",
    "question": "create の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～を作り出す",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "create は『～を作り出す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_074",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: latest",
    "question": "latest の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "最新の",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "latest は『最新の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_075",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: contain",
    "question": "contain の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "～を含む、～が入っている",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "contain は『～を含む、～が入っている』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_076",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: (be) filled with 〜",
    "question": "(be) filled with 〜 の意味として最も近いものは？",
    "choices": [
      "…を〜に集中させる",
      "（卓球の）ラケット",
      "〜で満たされている",
      "～から転がり落ちる"
    ],
    "answer": 2,
    "explanation": "(be) filled with 〜 は『〜で満たされている』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_077",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: hand-sketched",
    "question": "hand-sketched の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "手描きの",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 1,
    "explanation": "hand-sketched は『手描きの』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_078",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: drawing",
    "question": "drawing の意味として最も近いものは？",
    "choices": [
      "〜の形で手に入る［売られている］",
      "（ゴルフの）ティー、球をのせる台",
      "〜から形成される、〜からできている",
      "（線で描いた）絵、線画、デッサン"
    ],
    "answer": 3,
    "explanation": "drawing は『（線で描いた）絵、線画、デッサン』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_079",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: space",
    "question": "space の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "スペース、空白",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "space は『スペース、空白』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_080",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: exercise",
    "question": "exercise の意味として最も近いものは？",
    "choices": [
      "変化をもたらす、影響を与える、状況を変える",
      "（ある目的のための）行為、活動、練習課題",
      "〜から形成される、〜からできている",
      "（感情・音などが）弱まる、なくなる"
    ],
    "answer": 1,
    "explanation": "exercise は『（ある目的のための）行為、活動、練習課題』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_081",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: expert",
    "question": "expert の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "専門家",
      "巨大な"
    ],
    "answer": 2,
    "explanation": "expert は『専門家』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_082",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: reduce",
    "question": "reduce の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～を減らす",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "reduce は『～を減らす』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_083",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: focus … on 〜",
    "question": "focus … on 〜 の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "…を〜に集中させる",
      "（卓球の）ラケット",
      "～から転がり落ちる"
    ],
    "answer": 1,
    "explanation": "focus … on 〜 は『…を〜に集中させる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_084",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: task",
    "question": "task の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "作業、課題",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "task は『作業、課題』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_085",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: focus on 〜",
    "question": "focus on 〜 の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する",
      "〜を引き出す"
    ],
    "answer": 2,
    "explanation": "focus on 〜 は『〜に集中する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_086",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: trouble",
    "question": "trouble の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "問題、悩み事、心配事",
      "～ではないかと恐れる",
      "～に仕える、奉仕する"
    ],
    "answer": 1,
    "explanation": "trouble は『問題、悩み事、心配事』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_087",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: in addition",
    "question": "in addition の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB",
      "さらに、加えて"
    ],
    "answer": 3,
    "explanation": "in addition は『さらに、加えて』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_088",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: bring out 〜",
    "question": "bring out 〜 の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "〜を引き出す",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "bring out 〜 は『〜を引き出す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_089",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: take … back to 〜",
    "question": "take … back to 〜 の意味として最も近いものは？",
    "choices": [
      "…を〜に連れ戻す",
      "〜する傾向がある",
      "〜だろうかと思う",
      "〜に基づいている"
    ],
    "answer": 0,
    "explanation": "take … back to 〜 は『…を〜に連れ戻す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_090",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: childhood",
    "question": "childhood の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "子ども時代",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "childhood は『子ども時代』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_091",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: add",
    "question": "add の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "付け加えて言う、言い足す",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "add は『付け加えて言う、言い足す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_092",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: brain",
    "question": "brain の意味として最も近いものは？",
    "choices": [
      "客",
      "脳",
      "形",
      "剣"
    ],
    "answer": 1,
    "explanation": "brain は『脳』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_093",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: active",
    "question": "active の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "活発な、活動的な",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "active は『活発な、活動的な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_094",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: healthy",
    "question": "healthy の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "健康的な",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "healthy は『健康的な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_095",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: shape",
    "question": "shape の意味として最も近いものは？",
    "choices": [
      "客",
      "形",
      "剣",
      "敵"
    ],
    "answer": 1,
    "explanation": "shape は『形』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_096",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: material",
    "question": "material の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～をまねる",
      "材料、素材"
    ],
    "answer": 3,
    "explanation": "material は『材料、素材』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_097",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: look through 〜",
    "question": "look through 〜 の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す",
      "〜を埋める、塗りつぶす"
    ],
    "answer": 2,
    "explanation": "look through 〜 は『〜に（さっと）目を通す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_098",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: purity",
    "question": "purity の意味として最も近いものは？",
    "choices": [
      "純粋さ",
      "ボタン",
      "外側の",
      "巨大な"
    ],
    "answer": 0,
    "explanation": "purity は『純粋さ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_099",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: relax",
    "question": "relax の意味として最も近いものは？",
    "choices": [
      "〔動〕～をリラックスさせる",
      "～（ということ）を証明する",
      "～を滑らせる、さっと動かす",
      "決定する、強い影響を与える"
    ],
    "answer": 0,
    "explanation": "relax は『〔動〕～をリラックスさせる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_100",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: relaxing",
    "question": "relaxing の意味として最も近いものは？",
    "choices": [
      "〔形〕リラックスさせる",
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 0,
    "explanation": "relaxing は『〔形〕リラックスさせる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_101",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: fall away",
    "question": "fall away の意味として最も近いものは？",
    "choices": [
      "（感情・音などが）弱まる、なくなる",
      "〜から形成される、〜からできている",
      "～ということを探り出す、～だと知る",
      "〜の形で手に入る［売られている］"
    ],
    "answer": 0,
    "explanation": "fall away は『（感情・音などが）弱まる、なくなる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_102",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: blank",
    "question": "blank の意味として最も近いものは？",
    "choices": [
      "白紙の、何も書［描］いていない",
      "（規模が）大きくなる、拡大する",
      "（物の一部が）はがれる、取れる",
      "～だと確信している、自信がある"
    ],
    "answer": 0,
    "explanation": "blank は『白紙の、何も書［描］いていない』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_103",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: to the very end",
    "question": "to the very end の意味として最も近いものは？",
    "choices": [
      "最後の最後まで",
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 0,
    "explanation": "to the very end は『最後の最後まで』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_104",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: for now",
    "question": "for now の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "今のところ",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "for now は『今のところ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_105",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y03）",
    "title": "重要単語: demand for 〜",
    "question": "demand for 〜 の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB",
      "さらに、加えて"
    ],
    "answer": 0,
    "explanation": "demand for 〜 は『〜に対する需要』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y03 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y03",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_106",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: wonder",
    "question": "wonder の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜に基づいている",
      "〜だろうかと思う",
      "〜を干上がらせる"
    ],
    "answer": 2,
    "explanation": "wonder は『〜だろうかと思う』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_107",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: far away",
    "question": "far away の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "遠く離れて",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 1,
    "explanation": "far away は『遠く離れて』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_108",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: for sure",
    "question": "for sure の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "～ではないかと恐れる",
      "確かに、確実に（は）",
      "～に仕える、奉仕する"
    ],
    "answer": 2,
    "explanation": "for sure は『確かに、確実に（は）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_109",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: theory",
    "question": "theory の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "理論",
      "滑る"
    ],
    "answer": 2,
    "explanation": "theory は『理論』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_110",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: guess",
    "question": "guess の意味として最も近いものは？",
    "choices": [
      "推測",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "guess は『推測』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_111",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: prove",
    "question": "prove の意味として最も近いものは？",
    "choices": [
      "～（ということ）を証明する",
      "〔動〕～をリラックスさせる",
      "～を滑らせる、さっと動かす",
      "決定する、強い影響を与える"
    ],
    "answer": 0,
    "explanation": "prove は『～（ということ）を証明する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_112",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: correct",
    "question": "correct の意味として最も近いものは？",
    "choices": [
      "正しい、正確な",
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 0,
    "explanation": "correct は『正しい、正確な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_113",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: astronaut",
    "question": "astronaut の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "宇宙飛行士",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "astronaut は『宇宙飛行士』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_114",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: a piece of ～",
    "question": "a piece of ～ の意味として最も近いものは？",
    "choices": [
      "ひとかけらの〜、〜の一片",
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな"
    ],
    "answer": 0,
    "explanation": "a piece of ～ は『ひとかけらの〜、〜の一片』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_115",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: finally",
    "question": "finally の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "最後に、ついに、ようやく",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "finally は『最後に、ついに、ようやく』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_116",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: origin",
    "question": "origin の意味として最も近いものは？",
    "choices": [
      "違い",
      "起源",
      "活動",
      "滑る"
    ],
    "answer": 1,
    "explanation": "origin は『起源』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_117",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: be formed from ～",
    "question": "be formed from ～ の意味として最も近いものは？",
    "choices": [
      "（感情・音などが）弱まる、なくなる",
      "～ということを探り出す、～だと知る",
      "〜から形成される、〜からできている",
      "〜の形で手に入る［売られている］"
    ],
    "answer": 2,
    "explanation": "be formed from ～ は『〜から形成される、〜からできている』。授業プリント本文では the moon was formed from lighter materials の形で出ている。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_118",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: object",
    "question": "object の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "物体",
      "滑る"
    ],
    "answer": 2,
    "explanation": "object は『物体』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_119",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: huge",
    "question": "huge の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "巨大な",
      "外側の",
      "極端な"
    ],
    "answer": 1,
    "explanation": "huge は『巨大な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_120",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: break off",
    "question": "break off の意味として最も近いものは？",
    "choices": [
      "（物の一部が）はがれる、取れる",
      "（規模が）大きくなる、拡大する",
      "～だと確信している、自信がある",
      "～を打ち負かす、～に勝る、勝つ"
    ],
    "answer": 0,
    "explanation": "break off は『（物の一部が）はがれる、取れる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_121",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: orbit",
    "question": "orbit の意味として最も近いものは？",
    "choices": [
      "軌道",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "orbit は『軌道』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_122",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: brief",
    "question": "brief の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "短い",
      "滑る"
    ],
    "answer": 2,
    "explanation": "brief は『短い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_123",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: come together",
    "question": "come together の意味として最も近いものは？",
    "choices": [
      "一緒になる、集まる",
      "〜で満たされている",
      "…を〜に集中させる",
      "（卓球の）ラケット"
    ],
    "answer": 0,
    "explanation": "come together は『一緒になる、集まる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_124",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: impact",
    "question": "impact の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "衝突、衝撃",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "impact は『衝突、衝撃』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_125",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: explain",
    "question": "explain の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～を説明する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "explain は『～を説明する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_126",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: create",
    "question": "create の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "～を作り出す、生み出す",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "create は『～を作り出す、生み出す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_127",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: dry up ～",
    "question": "dry up ～ の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "〜を干上がらせる",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "dry up ～ は『〜を干上がらせる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_128",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: iron",
    "question": "iron の意味として最も近いものは？",
    "choices": [
      "客",
      "鉄",
      "形",
      "剣"
    ],
    "answer": 1,
    "explanation": "iron は『鉄』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_129",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: material",
    "question": "material の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "物質",
      "滑る"
    ],
    "answer": 2,
    "explanation": "material は『物質』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_130",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: make up ～",
    "question": "make up ～ の意味として最も近いものは？",
    "choices": [
      "〜を構成する",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "make up ～ は『〜を構成する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_131",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: outer",
    "question": "outer の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "巨大な",
      "外側の",
      "極端な"
    ],
    "answer": 2,
    "explanation": "outer は『外側の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_132",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: billion",
    "question": "billion の意味として最も近いものは？",
    "choices": [
      "10億（の）",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "billion は『10億（の）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_133",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: either A or B",
    "question": "either A or B の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB",
      "さらに、加えて"
    ],
    "answer": 2,
    "explanation": "either A or B は『AかあるいはB』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_134",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: support",
    "question": "support の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～を裏づける",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "support は『～を裏づける』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_135",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: for now",
    "question": "for now の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "今のところ（は）",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "for now は『今のところ（は）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_136",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y04）",
    "title": "重要単語: accept",
    "question": "accept の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "～を受け入れる、容認する",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "accept は『～を受け入れる、容認する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y04 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y04",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_137",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: complete",
    "question": "complete の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～を完成する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "complete は『～を完成する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_138",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: permit",
    "question": "permit の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～を許可する",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "permit は『～を許可する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_139",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: reporter",
    "question": "reporter の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "記者、レポーター",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "reporter は『記者、レポーター』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_140",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: conference",
    "question": "conference の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "会議、（定期的な）大会",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "conference は『会議、（定期的な）大会』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_141",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: take place",
    "question": "take place の意味として最も近いものは？",
    "choices": [
      "開催される",
      "〜によれば",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 0,
    "explanation": "take place は『開催される』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_142",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: develop",
    "question": "develop の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "～を開発する",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "develop は『～を開発する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_143",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: mortar",
    "question": "mortar の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "モルタル",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 1,
    "explanation": "mortar は『モルタル』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_144",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: material",
    "question": "material の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "素材、材料",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "material は『素材、材料』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_145",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: robotics",
    "question": "robotics の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "ロボット工学",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "robotics は『ロボット工学』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_146",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: advanced",
    "question": "advanced の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "進歩した、先進の",
      "〜だろうかと思う",
      "〜に基づいている"
    ],
    "answer": 1,
    "explanation": "advanced は『進歩した、先進の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_147",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: co-founder",
    "question": "co-founder の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "共同創設者",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "co-founder は『共同創設者』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_148",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: actually",
    "question": "actually の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "実際に、実は",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "actually は『実際に、実は』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_149",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: blow",
    "question": "blow の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "吹く、吹きつける",
      "〜だろうかと思う",
      "〜に基づいている"
    ],
    "answer": 1,
    "explanation": "blow は『吹く、吹きつける』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_150",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: dust",
    "question": "dust の意味として最も近いものは？",
    "choices": [
      "ほこり、ちり",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "dust は『ほこり、ちり』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_151",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: operate",
    "question": "operate の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "…を〜に集中させる",
      "作動する、機能する",
      "（卓球の）ラケット"
    ],
    "answer": 2,
    "explanation": "operate は『作動する、機能する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_152",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: extreme",
    "question": "extreme の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "極端な",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "extreme は『極端な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_153",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: disaster",
    "question": "disaster の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "災害",
      "滑る"
    ],
    "answer": 2,
    "explanation": "disaster は『災害』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_154",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: developing country",
    "question": "developing country の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "発展途上国",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "developing country は『発展途上国』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_155",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: lightweight",
    "question": "lightweight の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "軽量の",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "lightweight は『軽量の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_156",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: aluminum",
    "question": "aluminum の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "アルミニウム",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "aluminum は『アルミニウム』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_157",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: measure",
    "question": "measure の意味として最も近いものは？",
    "choices": [
      "～ではないかと恐れる",
      "～に仕える、奉仕する",
      "（〜の）大きさがある",
      "お気に入りの、好きな"
    ],
    "answer": 2,
    "explanation": "measure は『（〜の）大きさがある』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_158",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: on-site",
    "question": "on-site の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "現地で、現場で",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "on-site は『現地で、現場で』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_159",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: equipment",
    "question": "equipment の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～をまねる",
      "装置、機材"
    ],
    "answer": 3,
    "explanation": "equipment は『装置、機材』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_160",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: property",
    "question": "property の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "所有地、土地",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "property は『所有地、土地』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_161",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: quarter",
    "question": "quarter の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB",
      "さらに、加えて"
    ],
    "answer": 1,
    "explanation": "quarter は『4分の1（の）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_162",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: team up with ～",
    "question": "team up with ～ の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜に（さっと）目を通す",
      "〜と共同する、提携する",
      "〜を埋める、塗りつぶす"
    ],
    "answer": 2,
    "explanation": "team up with ～ は『〜と共同する、提携する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_163",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: attempt to do",
    "question": "attempt to do の意味として最も近いものは？",
    "choices": [
      "〜と共同する、提携する",
      "〜に（さっと）目を通す",
      "〜しようとする、企てる",
      "〜を埋める、塗りつぶす"
    ],
    "answer": 2,
    "explanation": "attempt to do は『〜しようとする、企てる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_164",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: provide A for B",
    "question": "provide A for B の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "AをBに提供する",
      "〜だろうかと思う",
      "〜に基づいている"
    ],
    "answer": 1,
    "explanation": "provide A for B は『AをBに提供する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_165",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: solution",
    "question": "solution の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "解決法、解決策",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "solution は『解決法、解決策』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_166",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: chief executive officer",
    "question": "chief executive officer の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "最高経営責任者（CEO）",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "chief executive officer は『最高経営責任者（CEO）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_167",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: magnitude",
    "question": "magnitude の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "大きさ、規模、重要性",
      "～ではないかと恐れる",
      "～に仕える、奉仕する"
    ],
    "answer": 1,
    "explanation": "magnitude は『大きさ、規模、重要性』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_168",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: face",
    "question": "face の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する",
      "～に直面する"
    ],
    "answer": 3,
    "explanation": "face は『～に直面する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_169",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: shelter",
    "question": "shelter の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "住まい",
      "巨大な"
    ],
    "answer": 2,
    "explanation": "shelter は『住まい』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_170",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: organization",
    "question": "organization の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "組織、団体",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 1,
    "explanation": "organization は『組織、団体』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_171",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: work on ～",
    "question": "work on ～ の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に集中する",
      "〜に取り組む",
      "〜を引き出す"
    ],
    "answer": 2,
    "explanation": "work on ～ は『〜に取り組む』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_172",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: neighborhood",
    "question": "neighborhood の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "近隣、地域",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "neighborhood は『近隣、地域』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_173",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: make a difference",
    "question": "make a difference の意味として最も近いものは？",
    "choices": [
      "（ある目的のための）行為、活動、練習課題",
      "変化をもたらす、影響を与える、状況を変える",
      "〜から形成される、〜からできている",
      "（感情・音などが）弱まる、なくなる"
    ],
    "answer": 1,
    "explanation": "make a difference は『変化をもたらす、影響を与える、状況を変える』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_174",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: expand",
    "question": "expand の意味として最も近いものは？",
    "choices": [
      "（物の一部が）はがれる、取れる",
      "～だと確信している、自信がある",
      "（規模が）大きくなる、拡大する",
      "～を打ち負かす、～に勝る、勝つ"
    ],
    "answer": 2,
    "explanation": "expand は『（規模が）大きくなる、拡大する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_175",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: add",
    "question": "add の意味として最も近いものは？",
    "choices": [
      "（規模が）大きくなる、拡大する",
      "（物の一部が）はがれる、取れる",
      "～を付け加える、～と言い添える",
      "～だと確信している、自信がある"
    ],
    "answer": 2,
    "explanation": "add は『～を付け加える、～と言い添える』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_176",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: traditional",
    "question": "traditional の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "伝統的な",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 1,
    "explanation": "traditional は『伝統的な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_177",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: homebuilding",
    "question": "homebuilding の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "クレヨン",
      "住宅建設"
    ],
    "answer": 3,
    "explanation": "homebuilding は『住宅建設』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_178",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y05）",
    "title": "重要単語: community",
    "question": "community の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "地域社会",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "community は『地域社会』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y05 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y05",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_179",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: modern",
    "question": "modern の意味として最も近いものは？",
    "choices": [
      "現代の",
      "ボタン",
      "外側の",
      "巨大な"
    ],
    "answer": 0,
    "explanation": "modern は『現代の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_180",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: equal",
    "question": "equal の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "平等な",
      "巨大な"
    ],
    "answer": 2,
    "explanation": "equal は『平等な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_181",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: difference",
    "question": "difference の意味として最も近いものは？",
    "choices": [
      "活動",
      "滑る",
      "違い",
      "起源"
    ],
    "answer": 2,
    "explanation": "difference は『違い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_182",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: button",
    "question": "button の意味として最も近いものは？",
    "choices": [
      "外側の",
      "ボタン",
      "巨大な",
      "極端な"
    ],
    "answer": 1,
    "explanation": "button は『ボタン』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_183",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: button up ～",
    "question": "button up ～ の意味として最も近いものは？",
    "choices": [
      "（卓球・テニスなどの）ラリー",
      "（規模が）大きくなる、拡大する",
      "〜のボタンを留める［掛ける］",
      "（物の一部が）はがれる、取れる"
    ],
    "answer": 2,
    "explanation": "button up ～ は『〜のボタンを留める［掛ける］』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_184",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: for sure",
    "question": "for sure の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "確かに、確実に",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "for sure は『確かに、確実に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_185",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: theory",
    "question": "theory の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "説、学説、理論",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "theory は『説、学説、理論』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_186",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: be based on ～",
    "question": "be based on ～ の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "〜を干上がらせる",
      "〜に基づいている"
    ],
    "answer": 3,
    "explanation": "be based on ～ は『〜に基づいている』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_187",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: right-handed",
    "question": "right-handed の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "右利きの",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "right-handed は『右利きの』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_188",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: in the past",
    "question": "in the past の意味として最も近いものは？",
    "choices": [
      "昔は、過去に",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "in the past は『昔は、過去に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_189",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: weapon",
    "question": "weapon の意味として最も近いものは？",
    "choices": [
      "武器",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "weapon は『武器』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_190",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: sword",
    "question": "sword の意味として最も近いものは？",
    "choices": [
      "客",
      "形",
      "剣",
      "敵"
    ],
    "answer": 2,
    "explanation": "sword は『剣』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_191",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: wealthy",
    "question": "wealthy の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "裕福な",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "wealthy は『裕福な』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_192",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: slide",
    "question": "slide の意味として最も近いものは？",
    "choices": [
      "〔動〕～をリラックスさせる",
      "～（ということ）を証明する",
      "～を滑らせる、さっと動かす",
      "決定する、強い影響を与える"
    ],
    "answer": 2,
    "explanation": "slide は『～を滑らせる、さっと動かす』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_193",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: enemy",
    "question": "enemy の意味として最も近いものは？",
    "choices": [
      "客",
      "形",
      "敵",
      "剣"
    ],
    "answer": 2,
    "explanation": "enemy は『敵』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_194",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: overlap",
    "question": "overlap の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～をまねる",
      "～を減らす"
    ],
    "answer": 1,
    "explanation": "overlap は『〜に重なる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_195",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: tend to do",
    "question": "tend to do の意味として最も近いものは？",
    "choices": [
      "〜だろうかと思う",
      "〜に基づいている",
      "〜を干上がらせる",
      "〜する傾向がある"
    ],
    "answer": 3,
    "explanation": "tend to do は『〜する傾向がある』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_196",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: be free to do",
    "question": "be free to do の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "自由に〜する［できる］",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "be free to do は『自由に〜する［できる］』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_197",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: breast-feed",
    "question": "breast-feed の意味として最も近いものは？",
    "choices": [
      "（赤ん坊が）母乳を飲む",
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "〜に（さっと）目を通す"
    ],
    "answer": 0,
    "explanation": "breast-feed は『（赤ん坊が）母乳を飲む』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_198",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: create",
    "question": "create の意味として最も近いものは？",
    "choices": [
      "～を作り上げる、生み出す",
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな"
    ],
    "answer": 0,
    "explanation": "create は『～を作り上げる、生み出す』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_199",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: on purpose",
    "question": "on purpose の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "わざと、故意に",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "on purpose は『わざと、故意に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_200",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: suggest",
    "question": "suggest の意味として最も近いものは？",
    "choices": [
      "示唆する",
      "～を許す",
      "～を選ぶ",
      "クレヨン"
    ],
    "answer": 0,
    "explanation": "suggest は『示唆する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_201",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: industrialization",
    "question": "industrialization の意味として最も近いものは？",
    "choices": [
      "産業化、工業化",
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 0,
    "explanation": "industrialization は『産業化、工業化』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_202",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: clothing",
    "question": "clothing の意味として最も近いものは？",
    "choices": [
      "衣類、衣料品",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "clothing は『衣類、衣料品』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_203",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: mass-produce",
    "question": "mass-produce の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "大量生産する",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "mass-produce は『大量生産する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_204",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: emphasize",
    "question": "emphasize の意味として最も近いものは？",
    "choices": [
      "～を強調する",
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 0,
    "explanation": "emphasize は『～を強調する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_205",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: especially",
    "question": "especially の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "特に",
      "滑る"
    ],
    "answer": 2,
    "explanation": "especially は『特に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_206",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: noble",
    "question": "noble の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "身分の高い",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 1,
    "explanation": "noble は『身分の高い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_207",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: dress oneself",
    "question": "dress oneself の意味として最も近いものは？",
    "choices": [
      "～を許す",
      "～を選ぶ",
      "服を着る",
      "クレヨン"
    ],
    "answer": 2,
    "explanation": "dress oneself は『服を着る』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_208",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: servant",
    "question": "servant の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "使用人、召使い",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "servant は『使用人、召使い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_209",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: mostly",
    "question": "mostly の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "たいてい、大部分は",
      "…を〜に集中させる",
      "（卓球の）ラケット"
    ],
    "answer": 1,
    "explanation": "mostly は『たいてい、大部分は』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_210",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: make sense",
    "question": "make sense の意味として最も近いものは？",
    "choices": [
      "理にかなう、筋が通っている",
      "〔動〕～をリラックスさせる",
      "～（ということ）を証明する",
      "～を滑らせる、さっと動かす"
    ],
    "answer": 0,
    "explanation": "make sense は『理にかなう、筋が通っている』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_211",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: determine",
    "question": "determine の意味として最も近いものは？",
    "choices": [
      "決定する、強い影響を与える",
      "〔動〕～をリラックスさせる",
      "～（ということ）を証明する",
      "～を滑らせる、さっと動かす"
    ],
    "answer": 0,
    "explanation": "determine は『決定する、強い影響を与える』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_212",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: copy",
    "question": "copy の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "～をまねる",
      "～を減らす"
    ],
    "answer": 2,
    "explanation": "copy は『～をまねる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_213",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: the rest",
    "question": "the rest の意味として最も近いものは？",
    "choices": [
      "残り",
      "違い",
      "活動",
      "滑る"
    ],
    "answer": 0,
    "explanation": "the rest は『残り』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_214",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: combination",
    "question": "combination の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "組み合わせ",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "combination は『組み合わせ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_215",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: factor",
    "question": "factor の意味として最も近いものは？",
    "choices": [
      "違い",
      "要因",
      "活動",
      "滑る"
    ],
    "answer": 1,
    "explanation": "factor は『要因』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_216",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: advance",
    "question": "advance の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "進歩",
      "滑る"
    ],
    "answer": 2,
    "explanation": "advance は『進歩』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_217",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: equality",
    "question": "equality の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "平等",
      "滑る"
    ],
    "answer": 2,
    "explanation": "equality は『平等』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_218",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: gender",
    "question": "gender の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "性、ジェンダー",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 1,
    "explanation": "gender は『性、ジェンダー』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_219",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: industrial robot",
    "question": "industrial robot の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "産業用ロボット",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "industrial robot は『産業用ロボット』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_220",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: per ～",
    "question": "per ～ の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな",
      "～を含む、～が入っている"
    ],
    "answer": 0,
    "explanation": "per ～ は『〜につき、〜あたり（の）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_221",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: density",
    "question": "density の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "密度",
      "滑る"
    ],
    "answer": 2,
    "explanation": "density は『密度』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_222",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: repetitive",
    "question": "repetitive の意味として最も近いものは？",
    "choices": [
      "繰り返しの多い",
      "〜に対する需要",
      "4分の1（の）",
      "AかあるいはB"
    ],
    "answer": 0,
    "explanation": "repetitive は『繰り返しの多い』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_223",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: emerge",
    "question": "emerge の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "出てくる、現れる",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "emerge は『出てくる、現れる』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_224",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: daily",
    "question": "daily の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "日常の",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "daily は『日常の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_225",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: robotic",
    "question": "robotic の意味として最も近いものは？",
    "choices": [
      "〜によれば",
      "〜に重なる",
      "ロボットの",
      "～をまねる"
    ],
    "answer": 2,
    "explanation": "robotic は『ロボットの』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_226",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: clerk",
    "question": "clerk の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "店員",
      "滑る"
    ],
    "answer": 2,
    "explanation": "clerk は『店員』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_227",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: elderly",
    "question": "elderly の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "高齢の",
      "外側の",
      "巨大な"
    ],
    "answer": 1,
    "explanation": "elderly は『高齢の』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_228",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: stage",
    "question": "stage の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "段階",
      "滑る"
    ],
    "answer": 2,
    "explanation": "stage は『段階』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_229",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: serve",
    "question": "serve の意味として最も近いものは？",
    "choices": [
      "（〜の）大きさがある",
      "～ではないかと恐れる",
      "～に仕える、奉仕する",
      "お気に入りの、好きな"
    ],
    "answer": 2,
    "explanation": "serve は『～に仕える、奉仕する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_230",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: beat",
    "question": "beat の意味として最も近いものは？",
    "choices": [
      "（規模が）大きくなる、拡大する",
      "（物の一部が）はがれる、取れる",
      "～を打ち負かす、～に勝る、勝つ",
      "～だと確信している、自信がある"
    ],
    "answer": 2,
    "explanation": "beat は『～を打ち負かす、～に勝る、勝つ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_231",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: rock-paper-scissors",
    "question": "rock-paper-scissors の意味として最も近いものは？",
    "choices": [
      "ジャンケン",
      "〜によれば",
      "〜に重なる",
      "～をまねる"
    ],
    "answer": 0,
    "explanation": "rock-paper-scissors は『ジャンケン』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_232",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: play fair",
    "question": "play fair の意味として最も近いものは？",
    "choices": [
      "〜しようとする、企てる",
      "〜と共同する、提携する",
      "フェアプレーで勝負する",
      "〜に（さっと）目を通す"
    ],
    "answer": 2,
    "explanation": "play fair は『フェアプレーで勝負する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_233",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: sense",
    "question": "sense の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～を感知する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "sense は『～を感知する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_234",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: shape",
    "question": "shape の意味として最も近いものは？",
    "choices": [
      "客",
      "剣",
      "形",
      "敵"
    ],
    "answer": 2,
    "explanation": "shape は『形』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_235",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: instantaneously",
    "question": "instantaneously の意味として最も近いものは？",
    "choices": [
      "〜に対する需要",
      "4分の1（の）",
      "即座に、瞬時に",
      "AかあるいはB"
    ],
    "answer": 2,
    "explanation": "instantaneously は『即座に、瞬時に』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_236",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: strategy",
    "question": "strategy の意味として最も近いものは？",
    "choices": [
      "違い",
      "戦略",
      "活動",
      "滑る"
    ],
    "answer": 1,
    "explanation": "strategy は『戦略』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_237",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: table tennis",
    "question": "table tennis の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "卓球",
      "滑る"
    ],
    "answer": 2,
    "explanation": "table tennis は『卓球』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_238",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: professional",
    "question": "professional の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "プロ（選手）",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "professional は『プロ（選手）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_239",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: imagine",
    "question": "imagine の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "～を想像する",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "imagine は『～を想像する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_240",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: participate in ～",
    "question": "participate in ～ の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "〜に集中する",
      "〜を引き出す"
    ],
    "answer": 0,
    "explanation": "participate in ～ は『〜に参加する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_241",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: tournament",
    "question": "tournament の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "トーナメント、勝ち抜き戦",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "tournament は『トーナメント、勝ち抜き戦』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_242",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: opponent",
    "question": "opponent の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "〔形〕限られた、わずかな",
      "～を含む、～が入っている"
    ],
    "answer": 1,
    "explanation": "opponent は『（試合・競技の）相手、敵』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_243",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: second",
    "question": "second の意味として最も近いものは？",
    "choices": [
      "客",
      "形",
      "秒",
      "剣"
    ],
    "answer": 2,
    "explanation": "second は『秒』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_244",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: accuracy",
    "question": "accuracy の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "〜に取り組む",
      "精度、正確さ",
      "〜に集中する"
    ],
    "answer": 2,
    "explanation": "accuracy は『精度、正確さ』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_245",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: paddle",
    "question": "paddle の意味として最も近いものは？",
    "choices": [
      "〜で満たされている",
      "（卓球の）ラケット",
      "…を〜に集中させる",
      "～から転がり落ちる"
    ],
    "answer": 1,
    "explanation": "paddle は『（卓球の）ラケット』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_246",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: sustain",
    "question": "sustain の意味として最も近いものは？",
    "choices": [
      "〜につき、〜あたり（の）",
      "（試合・競技の）相手、敵",
      "～を持続させる、継続する",
      "〔形〕限られた、わずかな"
    ],
    "answer": 2,
    "explanation": "sustain は『～を持続させる、継続する』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_247",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: rally",
    "question": "rally の意味として最も近いものは？",
    "choices": [
      "〜のボタンを留める［掛ける］",
      "（規模が）大きくなる、拡大する",
      "（卓球・テニスなどの）ラリー",
      "（物の一部が）はがれる、取れる"
    ],
    "answer": 2,
    "explanation": "rally は『（卓球・テニスなどの）ラリー』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_248",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: competitive",
    "question": "competitive の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "競争力のある",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "competitive は『競争力のある』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_249",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: version",
    "question": "version の意味として最も近いものは？",
    "choices": [
      "ボタン",
      "外側の",
      "巨大な",
      "型、版"
    ],
    "answer": 3,
    "explanation": "version は『型、版』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_250",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: tee",
    "question": "tee の意味として最も近いものは？",
    "choices": [
      "〜の形で手に入る［売られている］",
      "（線で描いた）絵、線画、デッサン",
      "（ゴルフの）ティー、球をのせる台",
      "〜から形成される、〜からできている"
    ],
    "answer": 2,
    "explanation": "tee は『（ゴルフの）ティー、球をのせる台』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_251",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: hole-in-one",
    "question": "hole-in-one の意味として最も近いものは？",
    "choices": [
      "変化をもたらす、影響を与える",
      "ホールインワン",
      "目的のための行為、活動、練習課題",
      "〜から形成される、〜からできている"
    ],
    "answer": 1,
    "explanation": "hole-in-one は『（ゴルフの）ホールインワン（ゴルフ競技において1打目でカップにボールを入れること）』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_252",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: crowd",
    "question": "crowd の意味として最も近いものは？",
    "choices": [
      "〜する傾向がある",
      "〜だろうかと思う",
      "群衆、観衆、聴衆",
      "〜に基づいている"
    ],
    "answer": 2,
    "explanation": "crowd は『群衆、観衆、聴衆』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_253",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: reaction",
    "question": "reaction の意味として最も近いものは？",
    "choices": [
      "違い",
      "活動",
      "反応",
      "滑る"
    ],
    "answer": 2,
    "explanation": "reaction は『反応』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_VOC_254",
    "testRound": "1st",
    "type": "teacher_vocab",
    "source": "1学期 先生指定重要単語（Cutting Edge Y06）",
    "title": "重要単語: delight",
    "question": "delight の意味として最も近いものは？",
    "choices": [
      "〜に参加する",
      "大喜び、歓喜",
      "〜に取り組む",
      "〜に集中する"
    ],
    "answer": 1,
    "explanation": "delight は『大喜び、歓喜』。先生指定の1学期重要単語として確認。参照：Cutting Edge Y06 重要単語",
    "tags": [
      "第一回",
      "1学期重要単語",
      "先生指定",
      "Cutting Edge Y06",
      "重要単語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_01_002",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 1-1",
    "title": "because of it の it",
    "question": "Despite our dependence on it, or perhaps because of it の it が指すものは？（it は「水」）この or perhaps because of it の意味として正しいものは？",
    "choices": [
      "水に依存できないにもかかわらず",
      "水に依存しているせいで、という意味",
      "水に依存しているのだから当然",
      "水に依存しないようにして、という意味"
    ],
    "answer": 1,
    "explanation": "because of X で「Xのせいで・Xが原因で」。or perhaps は「あるいはひょっとすると」。前の Despite（〜にもかかわらず）と対比になっている。参照：FOCUS 1",
    "tags": [
      "第一回",
      "FOCUS 1",
      "熟語"
    ],
    "mistakeTag": "meaning",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_01_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 1-1",
    "title": "be likely to do",
    "question": "and this problem is likely to increase. の is likely to increase の意味として正しいものは？",
    "choices": [
      "増大したにちがいない",
      "増大しそうにない",
      "増大する可能性が高い",
      "増大するのを好む"
    ],
    "answer": 2,
    "explanation": "be likely to do で「〜する可能性が高い・〜しそうだ」。this problem は水質汚染を指す。「この問題は増大する可能性が高い」。参照：FOCUS 1",
    "tags": [
      "第一回",
      "FOCUS 1",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_01_004",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 1-1",
    "title": "One of the effects of A on B",
    "question": "One of the effects of the growth of the human population on the earth is the high level of water pollution. の on the earth は何にかかるか？",
    "choices": [
      "One（効果の一つ）",
      "the growth（人口増加）",
      "the effects（影響）",
      "water pollution（水質汚染）"
    ],
    "answer": 1,
    "explanation": "the growth of the human population on the earth で「地球上での人口増加」。effect of A on B「AがBに及ぼす影響」の形も意識。「人口増加が及ぼす影響の一つが高レベルの水質汚染である」。参照：FOCUS 1",
    "tags": [
      "第一回",
      "FOCUS 1",
      "修飾"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_004",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-1",
    "title": "need to do",
    "question": "children need to recreate their experiences の need to recreate の意味として正しいものは？",
    "choices": [
      "再現するのをやめる",
      "再現したがっている",
      "再現するのが得意だ",
      "再現する必要がある"
    ],
    "answer": 3,
    "explanation": "need to do で「〜する必要がある」。recreate は「再現する・作り直す」。「子どもたちは経験したことを再現する必要がある」。参照：FOCUS 2",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_005",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-1",
    "title": "be associated with",
    "question": "Young children's thinking is closely associated with physical action の is closely associated with の意味として正しいものは？",
    "choices": [
      "〜を思い出させる",
      "〜と密接に結びついている",
      "〜から遠く離れている",
      "〜を強く嫌っている"
    ],
    "answer": 1,
    "explanation": "associate A with B「AをBと結びつける」の受動態 A be associated with B「AはBと結びついている」。closely は「密接に」。「幼い子どもの思考は身体を動かすことと密接に結びついている」。参照：FOCUS 2",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_02_006",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 2-1",
    "title": "be unable to do",
    "question": "they are unable to imagine the consequences of undone actions の are unable to imagine の意味として正しいものは？",
    "choices": [
      "想像するのが好きだ",
      "想像する必要がない",
      "想像しようとしない",
      "想像することができない"
    ],
    "answer": 3,
    "explanation": "be unable to do で「〜することができない」。the consequences of undone actions は「まだ行っていない行動の結果」。参照：FOCUS 2",
    "tags": [
      "第一回",
      "FOCUS 2",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 3-1",
    "title": "vital to ~ の後置修飾",
    "question": "He invented many of the technologies vital to the modern world. の vital to the modern world は何を修飾しているか？",
    "choices": [
      "invented（発明された、という動作）",
      "technologies（現代世界に重要な技術）",
      "He（重要な彼、という意味）",
      "many（多くの、という数量表現）"
    ],
    "answer": 1,
    "explanation": "形容詞句 vital to the modern world「現代世界にとってきわめて重要な」が直前の technologies を後ろから修飾している。「彼は現代世界にとってきわめて重要な技術の多くを発明した」。参照：FOCUS 3",
    "tags": [
      "第一回",
      "FOCUS 3",
      "修飾"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_004",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 3-1",
    "title": "Although の譲歩",
    "question": "Although he patented over 1,100 inventions, many were improvements to the inventions of others. の Although の意味として正しいものは？",
    "choices": [
      "〜する限り",
      "〜だけれども",
      "〜するとすぐに",
      "〜なので"
    ],
    "answer": 1,
    "explanation": "接続詞 Although は「〜だけれども・〜にもかかわらず」の譲歩。patent は「特許をとる」。「彼は1,100を超える発明品の特許をとったが、多くは他人の発明品を改良したものだった」。参照：FOCUS 3",
    "tags": [
      "第一回",
      "FOCUS 3",
      "接続詞"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_005",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 3-2",
    "title": "how to do",
    "question": "The goal of the American education system is to teach children how to learn の how to learn の意味として正しいものは？",
    "choices": [
      "学習の仕方",
      "学習する場所",
      "学習したい時",
      "学習する理由"
    ],
    "answer": 0,
    "explanation": "how to do で「〜する方法・仕方」。teach O how to do で「Oに〜の仕方を教える」。「子どもたちに学習の仕方を教えること」。参照：FOCUS 3",
    "tags": [
      "第一回",
      "FOCUS 3",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_03_006",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 3-2",
    "title": "help O (to) do",
    "question": "to help them reach their maximum potential の help them reach の意味として正しいものは？",
    "choices": [
      "彼らに〜に達するよう命じる",
      "彼らの代わりに〜に達する",
      "彼らが〜に達するのを妨げる",
      "彼らが〜に達するのを手助けする"
    ],
    "answer": 3,
    "explanation": "help O (to) do で「Oが〜するのを手助けする」。to が省略され help them reach の形。「彼らが自分の潜在能力を最大限に伸ばすのを手助けすること」。参照：FOCUS 3",
    "tags": [
      "第一回",
      "FOCUS 3",
      "構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_004",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 4-2",
    "title": "From a need to communicate",
    "question": "From a need to communicate, they begin to imitate the sound patterns. の From a need to communicate を自然に訳すときのポイントは？",
    "choices": [
      "From を「〜から来て」と場所で訳す",
      "need を「〜が必要だ」と否定で訳す",
      "名詞 need を「必要性から」と訳す（名詞構文）",
      "communicate を名詞で「通信」と訳す"
    ],
    "answer": 2,
    "explanation": "a need to communicate は「意志を伝える必要性」。From と合わせて「意志を伝える必要性から」と、名詞を中心に訳す名詞構文。参照：FOCUS 4",
    "tags": [
      "第一回",
      "FOCUS 4",
      "名詞構文"
    ],
    "mistakeTag": "transword",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_005",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-3",
    "title": "given の後置修飾",
    "question": "'Fan mail' is the name given to enthusiastic, admiring letters の given to ~ は何を修飾しているか？",
    "choices": [
      "letters（与えられた手紙）",
      "is（与えて存在する）",
      "the name（〜に与えられた名前）",
      "Fan mail（与えられたファンメール）"
    ],
    "answer": 2,
    "explanation": "過去分詞 given to ~「〜に与えられた」が直前の the name を後ろから修飾。「『ファンレター』とは、熱狂的で賞賛に満ちた手紙に与えられた名前である」。参照：FOCUS 4",
    "tags": [
      "第一回",
      "FOCUS 4",
      "分詞"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_006",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-3",
    "title": "tend to do",
    "question": "They tend to be uninhibited, sentimental and extravagant in style and content の tend to be の意味として正しいものは？",
    "choices": [
      "〜である傾向がある",
      "〜になろうとする",
      "〜であるふりをする",
      "〜であるべきだ"
    ],
    "answer": 0,
    "explanation": "tend to do で「〜する傾向がある」。「それら（手紙）は文体と内容において、形式ばらず、感傷的で大げさである傾向がある」。参照：FOCUS 4",
    "tags": [
      "第一回",
      "FOCUS 4",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-1",
    "title": "be divided into",
    "question": "The individual members of the society are divided into groups の are divided into の意味として正しいものは？",
    "choices": [
      "〜に分けられる",
      "〜を分ける",
      "〜に加わる",
      "〜から離れる"
    ],
    "answer": 0,
    "explanation": "divide A into B「AをBに分ける」の受動態 be divided into「〜に分けられる」。「その社会の個々の成員は集団に分けられる」。参照：FOCUS 5",
    "tags": [
      "第一回",
      "FOCUS 5",
      "構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_004",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 5-3",
    "title": "Faced with A の分詞構文",
    "question": "Faced with this situation, convenience store chains have had to employ new strategies. の Faced with this situation の訳として自然なものは？",
    "choices": [
      "この状況を無視して",
      "このような状況に直面して",
      "この状況に満足して",
      "この状況を作り出して"
    ],
    "answer": 1,
    "explanation": "be faced with A「Aに直面する」が分詞構文になった形。文頭で「このような状況に直面して」と訳す。参照：FOCUS 5",
    "tags": [
      "第一回",
      "FOCUS 5",
      "分詞構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_005",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-3",
    "title": "have had to do",
    "question": "convenience store chains have had to employ new strategies の have had to employ の意味として正しいものは？",
    "choices": [
      "採用したいと思った",
      "採用しなければならなくなった",
      "採用することができた",
      "採用するのをやめた"
    ],
    "answer": 1,
    "explanation": "have to do「〜しなければならない」の現在完了 have had to do「〜しなければならなくなった（今も続く）」。employ は「（戦略などを）とる・採用する」。参照：FOCUS 5",
    "tags": [
      "第一回",
      "FOCUS 5",
      "構文"
    ],
    "mistakeTag": "grammar",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_006",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-3",
    "title": "shift A from B to C",
    "question": "They are shifting their focus away from young people to the middle-aged, the elderly, and homemakers. の shifting ... away from ... to ... の意味として正しいものは？",
    "choices": [
      "焦点を〜のために失っている",
      "焦点を〜から〜へ移している",
      "焦点を〜と〜で比べている",
      "焦点を〜から〜へ戻している"
    ],
    "answer": 1,
    "explanation": "shift A away from B to C で「AをBから遠ざけてCへ移す」。the middle-aged / the elderly は〈the+形容詞〉で「中年の人々／年配者」。「焦点を若者から中高年や主婦に移しつつある」。参照：FOCUS 5",
    "tags": [
      "第一回",
      "FOCUS 5",
      "構文"
    ],
    "mistakeTag": "structure",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_V04_MINICTX_001",
    "testRound": "1st",
    "type": "mini_context",
    "source": "Cutting Edge Y01 問題1",
    "title": "短い文脈で読む",
    "question": "次の英文の It が指す内容として最も自然なものは？\n\n英文：\nA majority of people catch colds during the spring or winter. It makes us wonder why scientists can’t find a treatment for the regular cold.",
    "choices": [
      "大多数の人が春や冬に風邪をひくこと",
      "科学者たちが月に人を送れること",
      "普通の風邪の治療法そのもの",
      "春や冬という季節だけ"
    ],
    "answer": 0,
    "explanation": "It は直前の文全体を受けている。『大多数の人が春や冬に風邪をひくこと』が、なぜ普通の風邪の治療法を見つけられないのかと私たちに思わせる、という流れになる。",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "短文文脈",
      "指示語",
      "アプリ完結"
    ],
    "mistakeTag": "reference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_V04_ELIM_001",
    "testRound": "1st",
    "type": "choice_elimination",
    "source": "Cutting Edge Y01 問題1",
    "title": "条件のズレを見抜く",
    "question": "次の英文を読んで、選択肢『人は春にだけ風邪をひく』が英文内容と合わない理由として最も近いものは？\n\n英文：\nA majority of people catch colds during the spring or winter.",
    "choices": [
      "英文では spring or winter とあり、春だけに限定していないから",
      "英文では cold ではなく、月の乾燥だけを説明しているから",
      "英文では people ではなく、科学者だけが主語になっているから",
      "英文では、誰も風邪をひかないと反対の内容を述べているから"
    ],
    "answer": 0,
    "explanation": "英文は during the spring or winter なので、『春または冬の間に』という意味。『春にだけ』とすると条件を狭くしすぎている。",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "選択肢消去",
      "条件",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "partial_match",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_V04_EVIDENCE_001",
    "testRound": "1st",
    "type": "reading_evidence",
    "source": "Cutting Edge Y01 問題3",
    "title": "具体例の根拠",
    "question": "次の英文を読んで、『体が風邪を止めようと働く』ことの具体例として最も近いものはどれ？\n\n英文：\nWhen a cold attacks your body, your body works hard to stop it. For example, blood flows quickly to your nose and as a result, you can’t breathe very well.",
    "choices": [
      "血液が急速に鼻に流れ、その結果、呼吸しにくくなること",
      "大多数の人が春や冬に風邪をひく、と述べていること",
      "科学者が普通の風邪の治療法を探していること",
      "風邪薬がすぐに効く、と本文で説明していること"
    ],
    "answer": 0,
    "explanation": "For example の後が具体例。blood flows quickly to your nose と you can’t breathe very well が、体が風邪に反応している例になっている。",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "根拠探し",
      "具体例",
      "アプリ完結"
    ],
    "mistakeTag": "pinpoint",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_V04_ELIM_002",
    "testRound": "1st",
    "type": "choice_elimination",
    "source": "Cutting Edge Y01 問題3",
    "title": "本文にない情報を消す",
    "question": "次の英文を読んで、選択肢『風邪薬がすぐに効くこと』を具体例として選ばない理由として最も近いものは？\n\n英文：\nWhen a cold attacks your body, your body works hard to stop it. For example, blood flows quickly to your nose and as a result, you can’t breathe very well.",
    "choices": [
      "英文の具体例は体の反応であり、薬がすぐ効く話ではないから",
      "英文では薬の名前が4つ説明されているから",
      "英文では鼻ではなく耳の話だけをしているから",
      "英文では風邪をひく人はいないと述べているから"
    ],
    "answer": 0,
    "explanation": "この英文で示されている具体例は、血液が鼻に流れて呼吸しにくくなるという体の反応。薬がすぐ効くという情報は英文内にない。",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "選択肢消去",
      "本文にない情報",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "not_in_text",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y02_V04_NUMBER_001",
    "testRound": "1st",
    "type": "number_compare",
    "source": "Cutting Edge Y02 問題5",
    "title": "ago の数字を読む",
    "question": "次の英文から考えて、『現在の私』について正しいものはどれ？\n\n英文：\nForty-three years ago, I was twelve years old.",
    "choices": [
      "私は現在、55歳である",
      "私は現在、43歳である",
      "私は現在、12歳である",
      "この英文だけでは、現在の年齢はまったく判断できない"
    ],
    "answer": 0,
    "explanation": "Forty-three years ago は『43年前』。そのとき12歳だったので、現在は 12 + 43 = 55歳。43を現在の年齢として読まないことがポイント。",
    "tags": [
      "第一回",
      "Cutting Edge Y02",
      "数字",
      "ago",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y02_V04_ELIM_001",
    "testRound": "1st",
    "type": "choice_elimination",
    "source": "Cutting Edge Y02 問題5",
    "title": "数字の役割を見抜く",
    "question": "次の英文を読んで、選択肢『現在の私は43歳である』が合わない理由として最も近いものは？\n\n英文：\nForty-three years ago, I was twelve years old.",
    "choices": [
      "43は現在の年齢ではなく、『43年前』を表す数字だから",
      "43は12より小さい数字だから",
      "英文では年齢の話をしていないから",
      "英文では現在の私は12歳だと書かれているから"
    ],
    "answer": 0,
    "explanation": "43 years ago は『43年前』であり、現在の年齢ではない。数字が『年齢』なのか『何年前』なのかを見分ける必要がある。",
    "tags": [
      "第一回",
      "Cutting Edge Y02",
      "選択肢消去",
      "数字",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "number_mismatch",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_V04_MINICTX_001",
    "testRound": "1st",
    "type": "mini_context",
    "source": "Cutting Edge Y03 問題2",
    "title": "短い文脈で読む",
    "question": "次の英文の2文目の It が指す内容として最も自然なものは？\n\n英文：\nIt also has spaces to write about what you’re doing or thinking. It is called journaling.",
    "choices": [
      "自分がしていることや考えていることについて書くこと",
      "ノートにある spaces という空白そのもの",
      "紫色の花を選んでぬることそのもの",
      "ストレスを減らす専門家の説明そのもの"
    ],
    "answer": 0,
    "explanation": "It is called journaling. の It は、前の文の『自分の行動や考えについて書くこと』を受けている。空白そのものではなく、書く行為が journaling と呼ばれる。",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "短文文脈",
      "指示語",
      "アプリ完結"
    ],
    "mistakeTag": "reference",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_V04_ELIM_001",
    "testRound": "1st",
    "type": "choice_elimination",
    "source": "Cutting Edge Y03 問題4",
    "title": "追加の流れを読む",
    "question": "次の英文の空所に From now on が合いにくい理由として最も近いものは？\n\n英文：\nColoring can reduce stress. ______, coloring can bring out your imagination.",
    "choices": [
      "後ろの文は別の効果を追加しているので、「これからは」では流れが合わないから",
      "後ろの文は前の文と完全に逆の内容だけを述べているから",
      "前後の文はどちらも過去の出来事だけを説明しているから",
      "Coloring は人の名前として使われ、人物紹介になっているから"
    ],
    "answer": 0,
    "explanation": "前文は『ストレスを減らす』、後文は『想像力を引き出す』という別の効果の追加。したがって In addition のような追加表現が合う。From now on は『これからは』なので流れがズレる。",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "選択肢消去",
      "接続語",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "wrong_time",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_V04_NUMBER_001",
    "testRound": "1st",
    "type": "number_compare",
    "source": "Cutting Edge Y05 問題4",
    "title": "at full speed",
    "question": "次の英文を読んで、at full speed の場合について最も自然に言えることはどれ？\n\n英文：\nWe ran this printer at about a quarter speed to print this house, and we were able to complete the house in less than 48 hours of print time.\nAt full speed, the printing process could take as little as (4) hours.",
    "choices": [
      "4分の1のスピードより、さらに短い時間で印刷できる可能性がある",
      "4分の1のスピードより、必ず4倍長い時間がかかるとわかる",
      "全速力でも48時間ちょうどかかる、という意味である",
      "全速力なら48日以上かかる、という意味である"
    ],
    "answer": 0,
    "explanation": "at full speed は『全速力で』。英文では、約4分の1のスピードで48時間未満だった後に、At full speed, the printing process could take as little as (4) hours. と続く。したがって、全速力ならさらに短い時間で印刷できる可能性があると読む。参照：Cutting Edge Y05 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "数字",
      "比較",
      "number_compare",
      "原本突合済み"
    ],
    "mistakeTag": "tf",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_V04_ELIM_001",
    "testRound": "1st",
    "type": "choice_elimination",
    "source": "Cutting Edge Y05 問題1",
    "title": "文脈に合わない選択肢を消す",
    "question": "次の英文を読んで、選択肢『できるだけ早く完成することが重要』が最適ではない理由として最も近いものは？\n\n英文：\nThis house was actually printed in high winds, blowing dust and rain. It is important for the printing process to operate in extreme conditions.",
    "choices": [
      "直前では悪天候の中で印刷した話をしており、極端な状況で作動することが焦点だから",
      "直前では完成までの日数だけを説明していて、天候には触れていないから",
      "直前では訪問者に見せる予定だけを説明していて、印刷には触れていないから",
      "直前ではコンピュータソフトの名前だけを説明していて、家には触れていないから"
    ],
    "answer": 0,
    "explanation": "high winds, blowing dust and rain という悪条件が示されている。文脈の焦点は『速さ』ではなく、『極端な状況で作動できること』。",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "選択肢消去",
      "文脈判断",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "partial_match",
    "status": "draft"
  },
  {
    "id": "T2_CE_Y09_V04_FACTOP_001",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y09 問題1",
    "title": "事実？それとも考え？",
    "question": "次の英文は、本文の中でどんな役割をしている？\n\n英文：\nFrench people are proud of their native language, so even if they have a good English ability, they speak nothing but French.",
    "choices": [
      "筆者が実際に調査して確かめた「事実」として報告されている",
      "フランス政府が発表した公式データとして引用されている",
      "多くの人に信じられている「考え」として紹介されている",
      "筆者がこの後すぐに正しいと証明する結論になっている"
    ],
    "answer": 2,
    "explanation": "本文ではこの内容を this belief（この考え）と呼び、I wonder why this belief has been commonly accepted as if it were true.（なぜこの考えが、あたかも本当であるかのように受け入れられてきたのか）と続く。つまり「事実」ではなく「広く信じられている考え」として扱われている。「筆者が調査して確かめた」「政府のデータ」「証明する結論」はいずれも本文にない（not_in_text）。",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "not_in_text",
    "status": "active"
  },
  {
    "id": "T2_CE_Y09_V04_FACTOP_002",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y09 問題1",
    "title": "筆者の立ち位置を読む",
    "question": "次の英文から読み取れる、筆者の立ち位置として最も近いものはどれ？\n\n英文：\nI wonder why this belief has been commonly accepted as if it were true.",
    "choices": [
      "この考えが受け入れられてきたことに疑問を持っている",
      "この考えは完全な誤りだと、筆者ははっきり否定し切っている",
      "この考えを自分も正しいと信じて受け入れている",
      "この考えについて意見を述べることを避けている"
    ],
    "answer": 0,
    "explanation": "I wonder why ～ は「なぜ～なのだろうか」という疑問。as if it were true（あたかも本当であるかのように）という言い方から、筆者はこの考えをそのまま事実とは認めていないが、「完全な誤りだと否定」まではしていない（too_strong）。疑問を投げかけている段階であり、信じているわけでも、意見を避けているわけでもない。",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "too_strong",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_V04_FACTOP_003",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y14 問題6",
    "title": "報告？それとも呼びかけ？",
    "question": "次の英文は、本文の中でどんな役割をしている？\n\n英文：\nWe can also demand more inspections of factories to make sure that workers are not suffering.",
    "choices": [
      "工場の検査が既に増えたという「事実」の報告",
      "私たち読者に向けた、行動の「提案・呼びかけ」",
      "工場側が自主的に検査の強化を求めているという事例の紹介",
      "検査には効果がないという筆者の批判"
    ],
    "answer": 1,
    "explanation": "We can also demand ～ は「私たちは～を要求することもできる」という提案・呼びかけ。主語が We（私たち＝読者を含む）である点がポイント。「検査が既に増えた」という事実は書かれていない。「工場側が求めている」は主語のすり替え（wrong_subject）で、要求するのは私たちの側。検査への批判も本文にない。",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "wrong_subject",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_V04_FACTOP_004",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y17 問題6",
    "title": "断定？それとも推量？",
    "question": "次の英文の this may be a discovery for scholars の部分は、どう読むのが正しい？\n\n英文：\nExecutives of fast food chains have known that much for years, though this may be a discovery for scholars.",
    "choices": [
      "学者はこの事実を何年も前から知っていた、という報告",
      "学者は重役たちから直接この事実を教わった、という説明",
      "重役たちは学者の発見を営業に取り入れた、という事実",
      "学者にとっては新発見かもしれない、という筆者の推量"
    ],
    "answer": 3,
    "explanation": "may be は「～かもしれない」という推量で、断定ではない。何年も前から知っていたのは学者ではなく重役たち（Executives ... have known that much for years）なので、選択肢の1つ目は主体が逆。「営業に取り入れた」と断定するのは本文にない情報を付け足した読みすぎ（too_strong）。授業プリントでも「知っていたという記述のみ」と確認されている。",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "too_strong",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_V04_FACTOP_005",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y17 問題3",
    "title": "筆者の分析を見分ける",
    "question": "次の英文は、本文の中でどんな役割をしている？\n\n英文：\nAfter all, the barrier to purchase, when it comes to fast food, isn't cost or taste. It is a sense of guilt.",
    "choices": [
      "ファーストフード店の客へのアンケート調査の集計結果をそのまま示している",
      "「買うのをためらわせるのは罪悪感だ」という筆者の分析を述べている",
      "ファーストフードの値段と味に関する公式データを引用している",
      "罪悪感を持つべきだと読者に呼びかけている"
    ],
    "answer": 1,
    "explanation": "After all（結局のところ）で始まるこの部分は、「購入の壁はコストでも味でもなく、罪の意識だ」という筆者の分析・主張。アンケートの集計や公式データという記述は本文にない（not_in_text）。また「罪悪感を持つべきだ」という呼びかけではなく、客の心理がどうなっているかの説明である。",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "not_in_text",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_V04_FACTOP_006",
    "testRound": "2nd",
    "type": "fact_opinion",
    "source": "Cutting Edge Y14 問題6",
    "title": "評価と事実を区別する",
    "question": "次の2つの英文の関係として最も近いものはどれ？\n\n英文：\nSweatshop conditions are terrible.\nIn many sweatshops, workers can be children under 12 years old.",
    "choices": [
      "1文目は具体的な数字にもとづく報告で、2文目は筆者の個人的な感想である",
      "2つの文はどちらも、筆者の個人的な想像を述べている",
      "1文目は「ひどい」という評価で、2文目はそれを支える具体的な事実である",
      "2つの文は互いに矛盾する内容を述べている"
    ],
    "answer": 2,
    "explanation": "terrible（ひどい）は評価を表す語で、1文目は筆者のまとめ・評価。2文目の「12歳未満の子どもが働いていることがある」は、その評価を支える具体的事実。1文目に数字はなく、数字（12歳）があるのは2文目なので、1文目だけを見て「数字の報告」とするのは一部の特徴の取り違え（partial_match）。2つの文は矛盾ではなく「評価→根拠」の関係。",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "fact/opinion",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "partial_match",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_V04_SEQ_001",
    "testRound": "2nd",
    "type": "story_sequence",
    "source": "Cutting Edge Y15 問題5",
    "title": "電気自動車の歴史を並べる",
    "question": "次の英文から読み取れる、出来事の正しい順番はどれ？\n\n英文：\nThe first practical electric car was made in 1859, following the invention of a rechargeable battery.\nIn 1897, many of the taxis in London were powered by electricity.\nHowever, by 1920, electric cars became less common around the world.",
    "choices": [
      "充電式電池の発明 → 実用的な電気自動車 → ロンドンの電気タクシー → 世界的な衰退",
      "実用的な電気自動車 → 充電式電池の発明 → ロンドンの電気タクシー → 世界的な衰退",
      "ロンドンの電気タクシー → 充電式電池の発明 → 実用的な電気自動車 → 世界的な衰退",
      "充電式電池の発明 → 世界的な衰退 → 実用的な電気自動車 → ロンドンの電気タクシー"
    ],
    "answer": 0,
    "explanation": "following the invention of a rechargeable battery は「充電式電池の発明の後で」。つまり電池の発明が先、実用的な電気自動車（1859年）が後。その後1897年にロンドンのタクシー、1920年までに衰退という流れ。following を「〜より前」と読み違えると2つ目の選択肢のように順番が逆になる（wrong_time）。",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "時系列整理",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "wrong_time",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_V04_SEQ_002",
    "testRound": "2nd",
    "type": "story_sequence",
    "source": "Cutting Edge Y15 問題6",
    "title": "復活はいつ起きた？",
    "question": "次の英文から読み取れる、時代の流れとして正しいものはどれ？\n\n英文：\nHowever, by 1920, electric cars became less common around the world.\nFor the next 50 years almost all cars used gasoline, not electricity or steam.\nPeople began to look at making electric cars again in the 1970's, because of the high price of gasoline.",
    "choices": [
      "電気自動車は1920年に復活し、その後50年間主流であり続けた",
      "電気自動車は1920年までに衰退し、約50年のガソリン車時代を経て、1970年代に再び注目された",
      "ガソリン車は1970年代に初めて登場し、電気自動車に取って代わった",
      "電気自動車と蒸気自動車は、1920年から1970年までの約50年間、交互に流行をくり返していた"
    ],
    "answer": 1,
    "explanation": "by 1920 で衰退 → the next 50 years はガソリン車の時代 → in the 1970's に再注目、という3段階の流れ。again（再び）という語が、1970年代の動きが「復活」であることを示す。1920年は復活ではなく衰退の時期（wrong_time）。ガソリン車の初登場が1970年代という記述も、交互に流行したという記述もない。",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "時系列整理",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "wrong_time",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_V04_SEQ_003",
    "testRound": "2nd",
    "type": "story_sequence",
    "source": "Cutting Edge Y08 問題4",
    "title": "Kramerに起きたことの順番",
    "question": "次の英文から読み取れる、Kramer に起きた出来事の順番として正しいものはどれ？\n\n英文：\nKramer took out a patent on the IXI player and kept working on it to make it better.\nUnfortunately, ideas do not equal income. He could not continue to pay the expensive patent fees.",
    "choices": [
      "特許料が払えなくなった後で、初めて特許を取得した",
      "改良をやめてから、特許を取得した",
      "特許を取得して改良を続けたが、やがて特許料が払えなくなった",
      "特許料を問題なく払い続けながら、現在もIXIの改良を続けている"
    ],
    "answer": 2,
    "explanation": "took out a patent（特許を取得した）→ kept working on it（改良を続けた）→ could not continue to pay（払い続けられなくなった）の順。Unfortunately 以降が後の展開を示す。「払えなくなった後で特許取得」は順序が逆（opposite）。「現在も続けている」は could not continue と矛盾する。",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "時系列整理",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "opposite",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_V04_SEQ_004",
    "testRound": "2nd",
    "type": "story_sequence",
    "source": "Cutting Edge Y10 問題3・問題4",
    "title": "家ができるまでの手順",
    "question": "次の英文から読み取れる、家の建設手順として正しいものはどれ？\n\n英文：\nDepending on its size, the frame is then filled with between 10,000 and 25,000 recycled plastic bottles.\nOnce they are in place, necessary services like electric cables and water pipes are installed.\nFinally, standard windows, doors, and a roof are added to complete the structure.",
    "choices": [
      "窓とドアを付けてから、骨組みにペットボトルを詰める",
      "電気ケーブルや水道管などの設備を最初に取り付けてから、ペットボトルを詰める",
      "ペットボトル・窓とドア・電気水道の設備を、すべて同時に取り付ける",
      "骨組みにペットボトルを詰め、設備を取り付け、最後に窓・ドア・屋根を付ける"
    ],
    "answer": 3,
    "explanation": "then（それから）→ Once they are in place（ボトルがきちんと収まると）→ Finally（最後に）という順序を示す語がポイント。ボトル→設備→窓・ドア・屋根の順。最初の2つの選択肢は手順の前後を逆にしている（opposite）。「すべて同時」は Once や Finally の存在と合わない。",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "時系列整理",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "opposite",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_V04_SEQ_005",
    "testRound": "2nd",
    "type": "story_sequence",
    "source": "Cutting Edge Y10 問題6",
    "title": "収集と建設、どっちが先？",
    "question": "次の英文から読み取れる、ボトル収集と建設の関係として正しいものはどれ？\n\n英文：\nBezeau and his volunteer helpers collected over a million plastic bottles. Then, after the project ended, Bezeau had an idea to use all the collected bottles as building materials to construct new homes.",
    "choices": [
      "収集プロジェクトが終わった後で、ボトルを建材に使う考えを思いついた",
      "収集と建設の構想は、最初から同時に進められていた",
      "家を建てる計画が先にあり、足りない建材としてボトルを後から集めた",
      "収集したボトルは100万本に届かず、建設の構想は中止された"
    ],
    "answer": 0,
    "explanation": "Then, after the project ended（それから、そのプロジェクトが終わった後で）が決め手。収集→（収集終了）→建材化のアイデア、の順で、同時進行ではない。「100万本以上集めた」（over a million）は事実だが、それだけを根拠に「同時に進めた」と読むのは、時間関係を示す after を見落とした部分的な読み（partial_match）。建てる計画が先にあったという記述も、中止の記述もない。",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "時系列整理",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "partial_match",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_V04_CHARCHG_001",
    "testRound": "2nd",
    "type": "character_change",
    "source": "Cutting Edge Y10 問題1・本文第1段落",
    "title": "ベゾーを動かしたものは？",
    "question": "次の本文第1段落の英文を読んで、Robert Bezeau がリサイクル計画を始めた直接のきっかけとして正しいものはどれ？\n\n英文：\nAfter noticing plastic waste being carelessly left on the island's beautiful beaches, one island resident, Robert Bezeau, decided to set up a plastic recycling project.",
    "choices": [
      "島の政府からリサイクル計画の責任者に任命されたこと",
      "海外のリサイクル成功例を紹介するテレビ番組を見て感動したこと",
      "島の住民全員が集まって計画を立てることを決めたこと",
      "島の美しい海岸に放置されたプラスチックごみに気づいたこと"
    ],
    "answer": 3,
    "explanation": "After noticing plastic waste being carelessly left on the island's beautiful beaches が、計画を始めた直接のきっかけを示す。島の美しい海岸に放置されたプラスチックごみに気づき、その後 Bezeau が計画を立ち上げることを決めた。政府の任命・テレビ番組・住民全員の決定は本文にない。参照：Cutting Edge Y10 問題1・本文第1段落",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "人物の変化",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "wrong_subject",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_V04_CHARCHG_002",
    "testRound": "2nd",
    "type": "character_change",
    "source": "Cutting Edge Y11 問題6",
    "title": "Citraが子どもに望むこと",
    "question": "次の英文から読み取れる、Citra の願いとして正しいものはどれ？\n\n英文：\n\"I don't want my children to work here,\" she says, \"I want them to go to school and learn everything they need to get good jobs.\"",
    "choices": [
      "子どもたちにも、自分と同じように市場の仕事を継いでほしい",
      "自分の子どもには、ここで働くのではなく学校で学んでほしい",
      "子どもたちには、働きながら学校にも通ってほしい",
      "自分自身がもう一度学校に通い直したい"
    ],
    "answer": 1,
    "explanation": "I don't want my children to work here（子どもたちにここで働いてほしくない）と、I want them to go to school（学校に行ってほしい）の2つがCitraの願い。「仕事を継いでほしい」は本文と正反対（opposite）。「働きながら学校にも」は don't want ～ to work here と合わない。願いの対象は my children／them であって、Citra自身の通学ではない。",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "人物の変化",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "opposite",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_V04_CHARCHG_003",
    "testRound": "2nd",
    "type": "character_change",
    "source": "Cutting Edge Y08 問題4",
    "title": "Kramerの状況はどう変わった？",
    "question": "次の英文から読み取れる、Kramer の状況の変化として正しいものはどれ？\n\n英文：\nKramer took out a patent on the IXI player and kept working on it to make it better.\nUnfortunately, ideas do not equal income. He could not continue to pay the expensive patent fees.",
    "choices": [
      "特許を大企業に売って、大きな利益を手に入れた",
      "改良の努力が実り、IXIは大ヒット商品になった",
      "改良を続けていたが、お金が足りず特許を維持できなくなった",
      "最初から特許をいっさい取らずに、アイデアを無料で公開する道を選んだ"
    ],
    "answer": 2,
    "explanation": "kept working on it（改良を続けていた）状態から、ideas do not equal income（アイデアは収入にならない）ため could not continue to pay（払い続けられなくなった）へ変化した。「特許を売って利益を得た」「大ヒットした」は本文にない（not_in_text）。特許は取得している（took out a patent）ので「最初から取らなかった」も誤り。",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "人物の変化",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "not_in_text",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_V04_CHARCHG_004",
    "testRound": "2nd",
    "type": "character_change",
    "source": "Cutting Edge Y11 問題6",
    "title": "働くことの意味の変化",
    "question": "次の英文から読み取れる、Citra が市場で稼ぐお金に込めた将来の希望はどれ？\n\n英文：\nCitra hopes that when she has children, she will be able to send them to school using the money that she earns at the market.",
    "choices": [
      "将来、自分の子どもを学校に通わせるために使いたい",
      "市場の店を大きくするための資金にしたい",
      "これからも宿代と家族への仕送りだけに使い続けるつもりでいる",
      "貯金はせず、すべてその日の生活のために使いたい"
    ],
    "answer": 0,
    "explanation": "hopes that ～ she will be able to send them to school using the money が中心。市場で稼ぐお金を「将来の子どもの教育」につなげたいという希望。宿代や仕送りは本文の別の箇所にある現在のお金の使い道であり、この文が述べる「将来の希望」とは別（partial_match：本文にある情報だが、問われている内容とは一致しない）。店の拡大やその日暮らしの話はない。",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "人物の変化",
      "アプリ完結"
    ],
    "mistakeTag": "inference",
    "trapType": "partial_match",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_V04_OUTLINE_001",
    "testRound": "2nd",
    "type": "story_outline",
    "source": "Cutting Edge Y11 問題5",
    "title": "段落の中心をつかむ",
    "question": "次の英文のまとまりが伝えたい中心的な内容はどれ？\n\n英文：\nIt is especially difficult for girls to go to school: they are expected to help with housework and farming.\nIf there is a little money for education, it is used for boys in the family, and even when girls do go to school, in many countries, they leave at a younger age than their brothers.",
    "choices": [
      "女の子は手伝いやお金の使われ方のせいで、学校に通うことが特に難しい",
      "女の子は家事や農作業を手伝うことを期待されている",
      "教育のためのお金は家族の男の子のために使われる",
      "多くの国では、男の子も女の子もまったく同じ年齢で学校を卒業してやめていく"
    ],
    "answer": 0,
    "explanation": "1文目の It is especially difficult for girls to go to school が中心で、コロン（:）以下と2文目はその理由の説明。「家事や農作業の手伝い」も「お金が男の子に使われる」も本文にあるが、それぞれ理由の一部にすぎず、まとまり全体の中心ではない（partial_match）。「同じ年齢でやめる」は本文と逆（they leave at a younger age than their brothers）。",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "要旨把握",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "partial_match",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_V04_OUTLINE_002",
    "testRound": "2nd",
    "type": "story_outline",
    "source": "Cutting Edge Y12 問題1・問題5",
    "title": "ウミガメの能力の全体像",
    "question": "次の英文のまとまりが伝えたい中心的な内容はどれ？\n\n英文：\nAmerican scientists have found strong evidence that baby sea turtles are born with the ability to recognize and measure the Earth's magnetic fields.\nThey found that the sea turtles use the magnetic fields to guide them as they swim great distances across the ocean.",
    "choices": [
      "ウミガメの赤ちゃんは、生まれてから泳ぎ方を学習する",
      "ウミガメは地球の磁界を認識できる、という能力の紹介だけを述べている",
      "ウミガメは生まれつき磁界を認識でき、それを長距離移動の道しるべに使っている",
      "科学者はウミガメの赤ちゃんを道具として使い、地球の磁界の強さを測定している"
    ],
    "answer": 2,
    "explanation": "1文目は、ウミガメの赤ちゃんが地球の磁界を認識・測定する能力を生まれつき持つことを述べ、2文目は、その磁界を大洋を長距離移動するときの道しるべに使うことを述べている。したがって中心は「能力＋その使い方」。能力の紹介だけでは2文目を含まず不十分で、磁界を認識・測定する主体を科学者にすり替えるのも誤り。参照：Cutting Edge Y12 問題1・問題5",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "要旨把握",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "partial_match",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_V04_OUTLINE_003",
    "testRound": "2nd",
    "type": "story_outline",
    "source": "Cutting Edge Y12 問題4",
    "title": "環状海流とカメの関係",
    "question": "次の英文のまとまりが伝えたい中心的な内容はどれ？\n\n英文：\nWater in the gyre is generally warm and food there is plentiful.\nTurtles that leave the gyre often die from the cold water.",
    "choices": [
      "環状海流の外の海水は、実は栄養が豊富である",
      "環状海流を一度でも離れたカメは、例外なく必ず全て死んでしまう",
      "カメは冷たい海水を好んで、環状海流の外へ出たがる",
      "環状海流は温かく餌も豊富で、カメの生存を支えている"
    ],
    "answer": 3,
    "explanation": "「海流内は温かく餌が豊富」＋「離れると冷たい水で死ぬことが多い」の2文で、環状海流がカメの命綱であることを伝えている。often（しばしば）は「必ず」ではないので、「例外なく必ず死ぬ」は言いすぎ（too_strong）。栄養豊富なのは海流の中であって外ではない。カメが冷たい水を好むという記述はなく、むしろ逆。",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "要旨把握",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "too_strong",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_V04_OUTLINE_004",
    "testRound": "2nd",
    "type": "story_outline",
    "source": "Cutting Edge Y14 問題3",
    "title": "この段落は何の話？",
    "question": "次の英文のまとまりが伝えたい中心的な内容はどれ？\n\n英文：\nMany boycotts have been successful, including a huge one in the U.S., in which university students refused to buy popular college clothing (T-shirts, hats, etc. with logos of their schools) because it had been produced in sweatshops.",
    "choices": [
      "アメリカの大学生は、大学ロゴ入りの服が好きではない",
      "不買運動という消費者の行動が、搾取工場への対抗手段として成果を上げている",
      "大学ロゴ入りの服は、世界中どこでも例外なくすべて搾取工場で作られている",
      "アメリカでは不買運動がたびたび失敗してきた"
    ],
    "answer": 1,
    "explanation": "文の骨格は Many boycotts have been successful（多くの不買運動が成功している）で、アメリカの大学生の例（including ～）はその代表例。中心は「不買運動の成果」。大学生が買わなかったのは搾取工場製だったからで、服が嫌いだからではない。「すべて搾取工場製」とは書かれていない（too_strong）。「失敗してきた」は successful と正反対（opposite）。",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "要旨把握",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "opposite",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_V04_OUTLINE_005",
    "testRound": "2nd",
    "type": "story_outline",
    "source": "Cutting Edge Y17 問題2",
    "title": "「健康メニュー」の役割",
    "question": "次の英文のまとまりが伝えたい中心的な内容はどれ？\n\n英文：\nThey have introduced so-called \"healthy\" foods. They serve two vital purposes.\nFirst, they attract a group of customers who otherwise might never set foot in a fast food restaurant.",
    "choices": [
      "ファーストフード店は、健康メニューの値段を大きく下げることで客を集めている",
      "健康メニューは味の評判が悪く、客足を遠ざけている",
      "客は健康メニューが目当てで、ハンバーガーは注文しなくなった",
      "いわゆる健康メニューには、新しい客層を呼び込むという重要な役割がある"
    ],
    "answer": 3,
    "explanation": "They serve two vital purposes（2つの重要な目的を果たす）の First として、otherwise might never set foot（そうでなければ決して足を踏み入れないであろう）客層を引きつける役割が述べられている。値段を下げたという記述はこの部分にはない（not_in_text）。「客足を遠ざける」は attract（引きつける）と正反対。ハンバーガーを注文しなくなったという話も出てこない。",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "要旨把握",
      "アプリ完結"
    ],
    "mistakeTag": "tf",
    "trapType": "not_in_text",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_001",
    "testRound": "2nd",
    "type": "discourse_marker",
    "source": "Cutting Edge Y08 問題1",
    "title": "Surprisingly の働き",
    "question": "次の英文の空所に最も合う語は？\n\n英文：\nApple is also well-known for another product, the iPod, the digital media player. ( 1 ), the iPod was not the idea of Jobs, or Wozniak, or anyone at Apple.",
    "choices": [
      "Naturally",
      "Fortunately",
      "Surprisingly",
      "Undoubtedly"
    ],
    "answer": 2,
    "explanation": "iPodがApple社内の人物の発案ではなかった、という意外な事実を導くので Surprisingly（驚いたことに）が適切。参照：Cutting Edge Y08 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "接続副詞",
      "文脈判断"
    ],
    "mistakeTag": "inference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_002",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y08 問題3",
    "title": "this が指す内容",
    "question": "次の英文で this が指す内容として最も適切なものは？\n\n英文：\nHe thought that in the future music would be inputted directly into the IXI at shops or by telephone, and this is now what we have with Apple’s iTunes and other on-line music stores.",
    "choices": [
      "IXIの特許料金を支払うこと",
      "JobsがiPodを発明したこと",
      "音楽を店や電話でIXIへ直接入力すること",
      "オンライン音楽店がなくなること"
    ],
    "answer": 2,
    "explanation": "this は直前の内容、すなわち「音楽を店や電話でIXIへ直接入力すること」を受ける。参照：Cutting Edge Y08 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "指示語",
      "this"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_003",
    "testRound": "2nd",
    "type": "reading_reason",
    "source": "Cutting Edge Y08 問題4",
    "title": "開発を続けられなかった理由",
    "question": "次の英文から、KramerがIXIの開発を続けられなかった理由として最も適切なものは？\n\n英文：\nUnfortunately, ideas do not equal income. He could not continue to pay the expensive patent fees.",
    "choices": [
      "Appleに設計を断られたから",
      "IXIがすでに完成していたから",
      "オンライン音楽店を経営することにしたから",
      "十分な資金がなく、高額な特許料を払い続けられなかったから"
    ],
    "answer": 3,
    "explanation": "直接の根拠は He could not continue to pay the expensive patent fees.。高額な特許料を払い続けられなかったことが理由。参照：Cutting Edge Y08 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "理由説明",
      "本文根拠"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y08_004",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y08 本文第4段落",
    "title": "This changed の内容",
    "question": "次の英文を読んで、This changed が表す変化として最も適切なものは？\n\n英文：\nKramer later became a furniture designer and salesperson in England. He did not want to think about Apple and the iPod. This changed in 2007 when Kramer suddenly received a phone call from Apple. Apple needed his help to show that the iPod was based on Kramer's drawings and design system for the IXI.",
    "choices": [
      "Kramerが家具の仕事を辞め、再びゲーム会社で働き始めたこと",
      "AppleがiPodの販売をやめ、IXIをそのまま販売することにしたこと",
      "AppleとiPodを考えたくなかったKramerが、Appleから協力を求められて再び関わることになったこと",
      "KramerがAppleへ電話をかけ、iPodの売上金を要求したこと"
    ],
    "answer": 2,
    "explanation": "This changed は直前の He did not want to think about Apple and the iPod. を受ける。2007年にAppleから突然電話があり、iPodがKramerの図面とIXIの設計に基づくことを示すための協力を求められ、再びAppleとiPodに関わることになった。Kramerから電話したのではなく、売上金を要求したとも書かれていない。参照：Cutting Edge Y08 本文第4段落",
    "tags": [
      "第二回",
      "Cutting Edge Y08",
      "指示語",
      "本文根拠",
      "アプリ完結"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y09_001",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y09 問題1",
    "title": "this belief の内容",
    "question": "次の英文の this belief が指す考えとして最も適切なものは？\n\n英文：\nFrench people are proud of their native language, so even if they have a good English ability, they speak nothing but French. No one can tell whether French people or non-French people were the first to say this. However, quite a few people seem to have been convinced by the above words. I wonder why this belief has been commonly accepted as if it were true.",
    "choices": [
      "フランス人は英語を学ばないという考え",
      "フランス語は英語より簡単だという考え",
      "外国人はフランス語を話すべきだという考え",
      "フランス人は英語力があってもフランス語しか話さないという考え"
    ],
    "answer": 3,
    "explanation": "this belief は this、the above words とさかのぼり、冒頭の「英語力があってもフランス語しか話さない」という内容を指す。参照：Cutting Edge Y09 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "指示語",
      "this belief"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y09_002",
    "testRound": "2nd",
    "type": "vocab_context",
    "source": "Cutting Edge Y09 問題2",
    "title": "turn down の文脈意味",
    "question": "次の英文の turned down に最も近い意味は？\n\n英文：\nAt first I asked the way to sightseeing spots, but they frequently turned down my question by saying “No,” in French.",
    "choices": [
      "accepted",
      "appreciated",
      "refused",
      "misunderstood"
    ],
    "answer": 2,
    "explanation": "turn down はこの文脈では「断る」。選択肢では refused が最も近い。参照：Cutting Edge Y09 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "文脈語彙",
      "turn down"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_CE_Y09_003",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Cutting Edge Y09 問題4",
    "title": "unless と just because",
    "question": "次の英文の意味として最も自然なものは？\n\n英文：\nUnless people actually use English, they won’t be able to speak it just because they learned it at school.",
    "choices": [
      "学校で英語を学びさえすれば、実際に使わなくても話せるようになる",
      "実際に英語を使わない限り、学校で学んだというだけでは話せるようにならない",
      "学校で学ばなければ、英語を使うことはできない",
      "英語を話せる人は学校で学んだことがない"
    ],
    "answer": 1,
    "explanation": "unless は「〜しない限り」。否定文の just because は「単に〜という理由だけでは…ない」。参照：Cutting Edge Y09 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "和訳ポイント",
      "unless",
      "just because"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y09_004",
    "testRound": "2nd",
    "type": "reading_tf",
    "source": "Cutting Edge Y09 問題5",
    "title": "本文内容に合うもの",
    "question": "次のうち、本文内容に合うものはどれ？\n\n英文：\nFrench people are proud of their native language, so even if they have a good English ability, they speak nothing but French. However, quite a few people seem to have been convinced by the above words.",
    "choices": [
      "英語を話せるフランス人は一人もいない",
      "多くの人が、英語を話せるフランス人も英語を使わないことがあると信じている",
      "フランス人は外国人と話すことを恥ずかしがっている",
      "フランス人が最初に英語を作ったことが証明されている"
    ],
    "answer": 1,
    "explanation": "quite a few people seem to have been convinced by the above words が根拠。ほかは本文にない、または強すぎる。参照：Cutting Edge Y09 問題5",
    "tags": [
      "第二回",
      "Cutting Edge Y09",
      "内容一致",
      "本文根拠"
    ],
    "mistakeTag": "tf",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_001",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Cutting Edge Y10 問題1",
    "title": "after noticing の訳し方",
    "question": "次の英文の after noticing plastic waste being carelessly left ... の意味として最も自然なものは？\n\n英文：\nAfter noticing plastic waste being carelessly left on the island’s beautiful beaches, one island resident, Robert Bezeau, decided to set up a plastic recycling project.",
    "choices": [
      "プラスチックごみを海岸に置いた後",
      "海岸の美しさを宣伝した後",
      "リサイクル計画が中止されたことを知った後",
      "プラスチックごみが海岸にぞんざいに放置されているのに気づいた後"
    ],
    "answer": 3,
    "explanation": "notice O doing は「Oが〜しているのに気づく」。ここでは waste が being left（放置されている）状態。参照：Cutting Edge Y10 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "和訳ポイント",
      "notice O doing",
      "受け身"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_002",
    "testRound": "2nd",
    "type": "vocab_context",
    "source": "Cutting Edge Y10 問題2",
    "title": "purpose の言い換え",
    "question": "次の英文の purpose に最も近い意味は？\n\n英文：\nThirty-four hectares of undeveloped land were bought for the purpose, and the Plastic Bottle Village was born.",
    "choices": [
      "aim",
      "subject",
      "design",
      "proposal"
    ],
    "answer": 0,
    "explanation": "purpose は「目的」。最も近いのは aim。参照：Cutting Edge Y10 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "文脈語彙",
      "purpose"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_003",
    "testRound": "2nd",
    "type": "discourse_marker",
    "source": "Cutting Edge Y10 問題3",
    "title": "工程をつなぐ Once",
    "question": "次の英文の空所に最も適切な語は？\n\n英文：\nDepending on its size, the frame is then filled with between 10,000 and 25,000 recycled plastic bottles. ( 3 ) they are in place, necessary services like electric cables and water pipes are installed.",
    "choices": [
      "Once",
      "Before",
      "Even if",
      "Unless"
    ],
    "answer": 0,
    "explanation": "ペットボトルが所定の位置に入った「あとで」設備を設置する流れなので Once（いったん〜すると）が適切。参照：Cutting Edge Y10 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "接続詞",
      "Once",
      "手順"
    ],
    "mistakeTag": "inference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y10_004",
    "testRound": "2nd",
    "type": "discourse_marker",
    "source": "Cutting Edge Y10 問題4",
    "title": "So far の文脈判断",
    "question": "次の英文の空所に最も適切な語句は？\n\n英文：\nFinally, standard windows, doors, and a roof are added to complete the structure. ( 4 ), only a few houses have been completed, but, if everything goes according to plan, the final village will have 120 homes, a guest house, and a community park.",
    "choices": [
      "Fortunately",
      "Nevertheless",
      "So far",
      "As a result"
    ],
    "answer": 2,
    "explanation": "現時点までに完成した家はわずか、という意味なので So far（これまでのところ）が最適。参照：Cutting Edge Y10 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y10",
      "接続表現",
      "So far",
      "文脈判断"
    ],
    "mistakeTag": "inference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_001",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Cutting Edge Y11 問題2",
    "title": "コロンの働き",
    "question": "次の英文のコロン（:）の働きとして最も適切なものは？\n\n英文：\nIt is especially difficult for girls to go to school: they are expected to help with housework and farming.",
    "choices": [
      "前後を反対の内容にする",
      "前の内容の理由・補足説明を示す",
      "具体例を列挙せず省略する",
      "時間の前後関係を示す"
    ],
    "answer": 1,
    "explanation": "コロン以下が「女の子が学校に通うのが特に難しい」理由を補足している。参照：Cutting Edge Y11 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "句読法",
      "コロン",
      "理由"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_002",
    "testRound": "2nd",
    "type": "reading_reason",
    "source": "Cutting Edge Y11 問題2",
    "title": "女の子が通学しにくい理由",
    "question": "次の英文から、女の子が学校へ通うことが特に難しい理由として最も適切なものは？\n\n英文：\nIt is especially difficult for girls to go to school: they are expected to help with housework and farming. If there is a little money for education, it is used for boys in the family.",
    "choices": [
      "女の子は学校が嫌いだから",
      "学校が女子だけを受け入れないから",
      "女の子は家事や農作業を期待され、教育費が男の子に使われることがあるから",
      "女の子は男子より年上だから"
    ],
    "answer": 2,
    "explanation": "根拠は they are expected to help ... と money ... is used for boys。2つの理由をまとめた選択肢が正解。参照：Cutting Edge Y11 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "理由説明",
      "複数根拠"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_003",
    "testRound": "2nd",
    "type": "number_compare",
    "source": "Cutting Edge Y11 問題4",
    "title": "Citra の年齢",
    "question": "次の英文から、Citraの現在のおおよその年齢として最も適切なものは？\n\n英文：\nCitra started working at the fruit market in Jakarta when she was ten years old. For the past five years, she has worked from 5 a.m. until evening.",
    "choices": [
      "10歳",
      "約12歳",
      "約15歳",
      "約20歳"
    ],
    "answer": 2,
    "explanation": "10歳で働き始め、その後5年間働いているので約15歳。参照：Cutting Edge Y11 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "数字",
      "年齢計算"
    ],
    "mistakeTag": "tf",
    "status": "active"
  },
  {
    "id": "T2_CE_Y11_004",
    "testRound": "2nd",
    "type": "reading_evidence",
    "source": "Cutting Edge Y11 問題6",
    "title": "Citra の望み",
    "question": "Citraの望みを最もよく表す英文はどれ？",
    "choices": [
      "I want them to go to school and learn everything they need to get good jobs.",
      "She carries a huge basket loaded with fruit and vegetables on her head all day.",
      "For the past five years, she has worked from 5 a.m. until evening.",
      "Some of the money Citra sends home is used for her younger brother."
    ],
    "answer": 0,
    "explanation": "将来、自分の子どもに学校で学び、良い仕事を得てほしいという望みを直接述べた文。参照：Cutting Edge Y11 問題6",
    "tags": [
      "第二回",
      "Cutting Edge Y11",
      "本文根拠",
      "望み"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Cutting Edge Y12 問題1",
    "title": "be born with the ability to do",
    "question": "baby sea turtles are born with the ability to recognize and measure ... の意味として最も自然なものは？",
    "choices": [
      "ウミガメの赤ちゃんは認識され測定されるために生まれる",
      "ウミガメの赤ちゃんは生まれた後で能力を失う",
      "ウミガメの赤ちゃんは認識し測定する能力を持って生まれる",
      "ウミガメの赤ちゃんは能力について教えられる"
    ],
    "answer": 2,
    "explanation": "be born with the ability to do は「〜する能力を持って生まれる」。参照：Cutting Edge Y12 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "構文",
      "ability to do"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_002",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y12 問題3",
    "title": "that の指すもの",
    "question": "次の英文の that が指すものは？\n\n英文：\nWhenever the turtles were in a magnetic field like that found in the ocean, they swam in a direction that would keep them in the warm current.",
    "choices": [
      "the turtles",
      "a magnetic field",
      "the ocean",
      "the warm current"
    ],
    "answer": 1,
    "explanation": "like that found in the ocean の that は、直前の a magnetic field の代用。参照：Cutting Edge Y12 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "指示語",
      "that"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_003",
    "testRound": "2nd",
    "type": "reading_reason",
    "source": "Cutting Edge Y12 問題4",
    "title": "環状海流で生きられる理由",
    "question": "次の英文から、アカウミガメがNorth Atlantic gyreで生きられる主な理由は？\n\n英文：\nWater in the gyre is generally warm and food there is plentiful. Turtles that leave the gyre often die from the cold water.",
    "choices": [
      "海流が短く泳ぎやすいから",
      "海流の外に敵がいないから",
      "毎年同じ場所で生まれるから",
      "水が温かく、餌が豊富だから"
    ],
    "answer": 3,
    "explanation": "warm と food ... plentiful が直接の根拠。参照：Cutting Edge Y12 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "理由説明",
      "本文根拠"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y12_004",
    "testRound": "2nd",
    "type": "reading_tf",
    "source": "Cutting Edge Y12 問題5(2)",
    "title": "ほかの生物への広がり",
    "question": "次の英文から判断して、本文内容に合うものはどれ？\n\n英文：\nKenneth Lohmann says the findings provide direct evidence that turtles can use the Earth’s magnetic fields as markers. He says similar systems might exist in other ocean creatures and even some birds.",
    "choices": [
      "磁界を使うのはカメだけである",
      "ほかの海洋生物や一部の鳥も似た仕組みを使う可能性がある",
      "すべての鳥が磁界を使うことが証明された",
      "研究者は磁界の存在を否定している"
    ],
    "answer": 1,
    "explanation": "might exist が「存在する可能性」を表す。断定ではない点にも注意。参照：Cutting Edge Y12 問題5(2)",
    "tags": [
      "第二回",
      "Cutting Edge Y12",
      "内容一致",
      "might"
    ],
    "mistakeTag": "tf",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_001",
    "testRound": "2nd",
    "type": "reading_reason",
    "source": "Cutting Edge Y14 問題1",
    "title": "衣料産業に多い理由",
    "question": "次の英文から、sweatshopsが主に衣料産業に存在する理由として最も適切なものは？\n\n英文：\nSweatshops exist mainly in the clothing industry, where not every machine can replace detailed work by hand.",
    "choices": [
      "衣料品は機械で一切作れないから",
      "衣料産業には法律がないから",
      "衣服の需要がなくなったから",
      "細かな手作業のすべてを機械で代替できないから"
    ],
    "answer": 3,
    "explanation": "not every machine can replace detailed work by hand が理由。参照：Cutting Edge Y14 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "理由説明",
      "not every"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_002",
    "testRound": "2nd",
    "type": "vocab_context",
    "source": "Cutting Edge Y14 問題2",
    "title": "illegal immigrants",
    "question": "次の英文の illegal immigrants の意味として最も適切なものは？\n\n英文：\nSweatshops can even be found in the U.S., where firms employ illegal immigrants.",
    "choices": [
      "合法的に働く市民",
      "違法に入国・滞在している移民",
      "海外へ旅行する学生",
      "工場を検査する職員"
    ],
    "answer": 1,
    "explanation": "illegal は「違法な」、immigrants は「移民」。参照：Cutting Edge Y14 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "語彙",
      "illegal immigrants"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_003",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Cutting Edge Y14 問題3",
    "title": "in which の訳し方",
    "question": "次の英文の in which の訳し方として最も自然なものは？\n\n英文：\nMany boycotts have been successful, including a huge one in the U.S., in which university students refused to buy popular college clothing because it had been produced in sweatshops.",
    "choices": [
      "その衣服の中では",
      "その大学の前では",
      "その工場のために",
      "その不買運動では"
    ],
    "answer": 3,
    "explanation": "先行詞は a huge one（大規模な不買運動）。in which は「その不買運動では」と訳す。参照：Cutting Edge Y14 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "関係詞",
      "in which",
      "和訳ポイント"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y14_004",
    "testRound": "2nd",
    "type": "reading_tf",
    "source": "Cutting Edge Y14 問題6",
    "title": "改善策の内容一致",
    "question": "次の英文と内容が一致するものはどれ？\n\n英文：\nWe can also demand more inspections of factories to make sure that workers are not suffering.",
    "choices": [
      "労働者が苦しんでいないか確認するため、工場検査を増やすよう求められる",
      "工場検査をすべて廃止するべきだ",
      "労働者を工場から追い出すべきだ",
      "衣料品の価格を必ず上げるべきだ"
    ],
    "answer": 0,
    "explanation": "more inspections of factories と make sure that workers are not suffering をそのまま言い換えた選択肢。参照：Cutting Edge Y14 問題6",
    "tags": [
      "第二回",
      "Cutting Edge Y14",
      "内容一致",
      "改善策"
    ],
    "mistakeTag": "tf",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Cutting Edge Y15 問題2",
    "title": "無生物主語 make O C",
    "question": "次の英文の made gasoline-powered cars cheaper, faster and easier to use の構造として最も適切なものは？\n\n英文：\nBetter roads, cheaper gasoline and other developments made gasoline-powered cars cheaper, faster and easier to use.",
    "choices": [
      "make O C：SによってOがCになる",
      "make O do：Oに〜させる",
      "be made of：〜で作られる",
      "make up：〜を構成する"
    ],
    "answer": 0,
    "explanation": "made + O + C の形で、「より良い道路などによってガソリン車がより安く・速く・使いやすくなった」。参照：Cutting Edge Y15 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "構文",
      "make O C",
      "無生物主語"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_002",
    "testRound": "2nd",
    "type": "reading_reason",
    "source": "Cutting Edge Y15 問題2",
    "title": "電気自動車が減った理由",
    "question": "1920年までに電気自動車が一般的でなくなった理由として最も適切なものは？\n\n英文：\nBetter roads, cheaper gasoline and other developments made gasoline-powered cars cheaper, faster and easier to use.",
    "choices": [
      "電気が発明されていなかったから",
      "道路がすべて閉鎖されたから",
      "ガソリン車がより安く、速く、使いやすくなったから",
      "蒸気自動車が禁止されたから"
    ],
    "answer": 2,
    "explanation": "英文の cheaper, faster and easier to use が直接の理由。参照：Cutting Edge Y15 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "理由説明",
      "比較"
    ],
    "mistakeTag": "pinpoint",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_003",
    "testRound": "2nd",
    "type": "reading_tf",
    "source": "Cutting Edge Y15 問題4",
    "title": "Tesla の特徴",
    "question": "次の英文からわかるTesla社の特徴は？\n\n英文：\nOne new car company, Tesla, makes only electric cars, and the Tesla S is now the most popular electric car in North America.",
    "choices": [
      "ガソリン車だけを作る",
      "蒸気自動車を最初に発明した",
      "北米では自動車を販売していない",
      "電気自動車だけを作る"
    ],
    "answer": 3,
    "explanation": "makes only electric cars が根拠。参照：Cutting Edge Y15 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "内容一致",
      "only"
    ],
    "mistakeTag": "tf",
    "status": "active"
  },
  {
    "id": "T2_CE_Y15_004",
    "testRound": "2nd",
    "type": "number_compare",
    "source": "Cutting Edge Y15 問題6",
    "title": "not as long as の比較",
    "question": "次の英文から判断して正しいものはどれ？\n\n英文：\nElectric cars couldn’t be driven as long as steam-powered or gasoline-powered cars.",
    "choices": [
      "電気自動車は蒸気・ガソリン車より長距離を走れた",
      "電気自動車は蒸気・ガソリン車ほど長く走れなかった",
      "3種類の車は同じ距離を走れた",
      "蒸気自動車だけが走れなかった"
    ],
    "answer": 1,
    "explanation": "X not as ... as Y は「XはYほど…でない」。参照：Cutting Edge Y15 問題6",
    "tags": [
      "第二回",
      "Cutting Edge Y15",
      "比較",
      "not as as"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_001",
    "testRound": "2nd",
    "type": "vocab_context",
    "source": "Cutting Edge Y17 問題1",
    "title": "target の言い換え",
    "question": "次の英文の target に最も近い意味は？\n\n英文：\nOne of the fast food chains’ strategies is to target populations — kids, young people, and the poor in particular — who tend to ignore nutritional warnings.",
    "choices": [
      "attack",
      "focus on",
      "criticize",
      "defend"
    ],
    "answer": 1,
    "explanation": "target はここでは「〜を対象にする」。focus on が最も近い。参照：Cutting Edge Y17 問題1",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "文脈語彙",
      "target"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_002",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y17 問題2",
    "title": "they の指すもの",
    "question": "次の英文の2文目の They / they が指すものは？\n\n英文：\nThey have introduced so-called “healthy” foods. They serve two vital purposes. First, they attract a group of customers who otherwise might never set foot in a fast food restaurant.",
    "choices": [
      "fast food chains",
      "customers",
      "nutritional warnings",
      "so-called healthy foods"
    ],
    "answer": 3,
    "explanation": "直前に導入された複数名詞 so-called “healthy” foods を受ける。参照：Cutting Edge Y17 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "指示語",
      "they"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_003",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Cutting Edge Y17 問題2",
    "title": "otherwise の補い方",
    "question": "次の英文の otherwise の意味として最も自然なものは？\n\n英文：\nThey attract a group of customers who otherwise might never set foot in a fast food restaurant.",
    "choices": [
      "健康食品が導入されていなければ",
      "値段がもっと高ければ",
      "客が空腹でなければ",
      "レストランが閉店した後なら"
    ],
    "answer": 0,
    "explanation": "otherwise は「そうでなければ」。文脈上「いわゆる健康食品が導入されていなければ」を補う。参照：Cutting Edge Y17 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "和訳ポイント",
      "otherwise"
    ],
    "mistakeTag": "inference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y17_004",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y17 問題3",
    "title": "this psychological process",
    "question": "次の英文の this psychological process が指す内容として最も適切なものは？\n\n英文：\nAfter all, the barrier to purchase, when it comes to fast food, isn’t cost or taste. It is a sense of guilt. And executives of fast food chains are well aware of this psychological process.",
    "choices": [
      "ファーストフードを食べることに罪悪感を持つ心理",
      "価格が高いほど味がよくなるという心理",
      "栄養表示を必ず読む習慣",
      "店員が客に謝る行動"
    ],
    "answer": 0,
    "explanation": "直前の a sense of guilt、つまりファーストフードを食べることへの後ろめたさを指す。参照：Cutting Edge Y17 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y17",
      "指示語",
      "心理過程"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y18_001",
    "testRound": "2nd",
    "type": "vocab_context",
    "source": "Cutting Edge Y18 問題2",
    "title": "a matter of chance",
    "question": "次の英文の空所に最も適切な語は？\n\n英文：\nSometimes you win, sometimes you lose. It is a matter of ( ) whether we win or lose.",
    "choices": [
      "interest",
      "chance",
      "ability",
      "intelligence"
    ],
    "answer": 1,
    "explanation": "勝つことも負けることもある、という流れなので a matter of chance（運の問題）が自然。参照：Cutting Edge Y18 問題2",
    "tags": [
      "第二回",
      "Cutting Edge Y18",
      "語彙",
      "chance"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_CE_Y18_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Cutting Edge Y18 問題3",
    "title": "仮定法過去",
    "question": "次の英文の if there was ... が表すものとして最も適切なのは？\n\n英文：\nHow would you feel if there was a rock-paper-scissors player who could never be beaten?",
    "choices": [
      "過去に実際に起きた出来事",
      "未来に必ず起きる予定",
      "一般的な習慣",
      "現在の事実に反する、または現実性の低い仮定"
    ],
    "answer": 3,
    "explanation": "would と過去形 was を用いた仮定法過去で、現実とは異なる仮定を表す。参照：Cutting Edge Y18 問題3",
    "tags": [
      "第二回",
      "Cutting Edge Y18",
      "仮定法過去",
      "if"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_CE_Y18_003",
    "testRound": "2nd",
    "type": "reading_reference",
    "source": "Cutting Edge Y18 問題4",
    "title": "It might happen の内容",
    "question": "次の英文の It が指す内容として最も適切なものは？\n\n英文：\nBut imagine if robot table tennis players were allowed to participate in the tournaments. It might happen one day.",
    "choices": [
      "ロボット卓球選手が大会への参加を認められること",
      "人間の卓球選手が全員引退すること",
      "じゃんけんロボットが壊れること",
      "大会そのものがなくなること"
    ],
    "answer": 0,
    "explanation": "It は直前の if節の内容、ロボット卓球選手が大会参加を認められることを指す。参照：Cutting Edge Y18 問題4",
    "tags": [
      "第二回",
      "Cutting Edge Y18",
      "指示語",
      "it"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_CE_Y18_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Cutting Edge Y18 問題5",
    "title": "imagine O doing",
    "question": "次の英文の imagine a more competitive version coming soon の意味として最も自然なものは？\n\n英文：\nBut it is easy to imagine a more competitive version coming soon.",
    "choices": [
      "より競争力のある型がまもなく現れることを想像する",
      "競争をやめた型をすでに販売した",
      "より弱い型を作るよう命令する",
      "競争力のある型が来ないと否定する"
    ],
    "answer": 0,
    "explanation": "imagine O doing は「Oが〜することを想像する」。competitive は「競争力のある」。参照：Cutting Edge Y18 問題5",
    "tags": [
      "第二回",
      "Cutting Edge Y18",
      "構文",
      "imagine O doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 6-1",
    "title": "動名詞の働き",
    "question": "things like walking under a ladder or spilling salt の walking と spilling の働きとして正しいものは？",
    "choices": [
      "前置詞 like の目的語になる動名詞",
      "things を修飾する現在分詞",
      "命令文を作る動詞",
      "are thought と並列する動詞"
    ],
    "answer": 0,
    "explanation": "walking と spilling は前置詞 like の後ろに置かれ、「〜すること」を表す動名詞。or で並列されている。参照：FOCUS 6-1",
    "tags": [
      "第二回",
      "FOCUS 6",
      "動名詞",
      "並列"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 6-1",
    "title": "be thought to be",
    "question": "things ... are thought to be unlucky の are thought to be の意味として最も自然なものは？",
    "choices": [
      "不吉になるよう命じられている",
      "不吉だと考えられている",
      "不吉かどうか尋ねられている",
      "不吉であることを避けている"
    ],
    "answer": 1,
    "explanation": "think O to be C の受動態で、S is thought to be C は「SはCだと考えられている」。参照：FOCUS 6-1",
    "tags": [
      "第二回",
      "FOCUS 6",
      "受動態",
      "think O to be C"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_003",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 6-1",
    "title": "not doing の訳",
    "question": "Not walking under a ladder is a way ... の Not walking under a ladder の訳として最も自然なものは？",
    "choices": [
      "はしごの下を歩いた後で",
      "はしごの下を歩くために",
      "はしごの下を歩かないこと",
      "はしごの下を歩けない人"
    ],
    "answer": 2,
    "explanation": "not doing は動名詞の否定で「〜しないこと」。文全体の主語になっている。参照：FOCUS 6-1",
    "tags": [
      "第二回",
      "FOCUS 6",
      "動名詞",
      "否定"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 6-1",
    "title": "avoid doing",
    "question": "a way of avoiding having things dropped on your head の avoid doing の意味は？",
    "choices": [
      "〜することを勧める",
      "〜することを続ける",
      "〜することを想像する",
      "〜することを避ける"
    ],
    "answer": 3,
    "explanation": "avoid の後ろは動名詞で、avoid doing は「〜することを避ける」。参照：FOCUS 6-1",
    "tags": [
      "第二回",
      "FOCUS 6",
      "熟語",
      "avoid doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_005",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 6-1",
    "title": "have O done",
    "question": "having things dropped on your head を自然に訳すときのポイントは？",
    "choices": [
      "things が落とすと能動で訳す",
      "「頭上に物が落ちてくる」と受け身関係を自然に訳す",
      "having を「所有する」とだけ訳す",
      "dropped を「下げた」と訳す"
    ],
    "answer": 1,
    "explanation": "have O done は文脈により「Oを〜される」。ここでは「頭上に物が落ちてくる」と自然に訳す。参照：FOCUS 6-1",
    "tags": [
      "第二回",
      "FOCUS 6",
      "have O done",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 6-2",
    "title": "動名詞主語の訳",
    "question": "taking them away leads to further problems を自然に訳すとき、taking them away はどう処理する？",
    "choices": [
      "「それらを取り上げると」と条件的に訳す",
      "「それらが取り上げる」と訳す",
      "「それらを取り上げられた」と受動にする",
      "訳さず省略する"
    ],
    "answer": 0,
    "explanation": "taking them away は動名詞句の主語。「それらを取り上げることは」または自然に「取り上げると」と訳せる。参照：FOCUS 6-2",
    "tags": [
      "第二回",
      "FOCUS 6",
      "動名詞主語",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_007",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 6-2",
    "title": "分詞構文 Finding",
    "question": "Finding the phones useful, many parents buy them. の Finding the phones useful の意味として最も自然なものは？",
    "choices": [
      "携帯電話を見つけるために",
      "携帯電話が役立たないので",
      "携帯電話が役立つと思い",
      "携帯電話を役立てられて"
    ],
    "answer": 2,
    "explanation": "find O C は「OをCだと思う」。分詞構文なので「携帯電話が役立つと思い」と読む。参照：FOCUS 6-2",
    "tags": [
      "第二回",
      "FOCUS 6",
      "分詞構文",
      "find O C"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 6-2",
    "title": "insist on X doing",
    "question": "insist on their children having one の their children の役割は？",
    "choices": [
      "insist の直接目的語",
      "having を修飾する副詞",
      "one の所有者",
      "動名詞 having の意味上の主語"
    ],
    "answer": 3,
    "explanation": "X doing で「Xが〜すること」。their children は having の意味上の主語。参照：FOCUS 6-2",
    "tags": [
      "第二回",
      "FOCUS 6",
      "動名詞",
      "意味上の主語"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_06_009",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 6-3",
    "title": "too ... to be worth",
    "question": "student exchanges sometimes encounter too many difficulties to be worth trying の意味として最も自然なものは？",
    "choices": [
      "困難が多すぎて試みる価値がない",
      "困難が少ないので試す価値がある",
      "試せば困難がなくなる",
      "困難を試す価値がある"
    ],
    "answer": 0,
    "explanation": "too ... to do は「〜すぎて…できない」。be worth doing は「〜する価値がある」なので、全体は「困難が多すぎて試みる価値がない」。参照：FOCUS 6-3",
    "tags": [
      "第二回",
      "FOCUS 6",
      "too to",
      "be worth doing"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-1",
    "title": "関係詞節内の並列",
    "question": "someone who can walk into a room ... and ... give an accurate description の walk と give の関係は？",
    "choices": [
      "walk が give を修飾する",
      "give だけが someone を説明する",
      "can walk と (can) give が and で並列",
      "walk into a room が主節である"
    ],
    "answer": 2,
    "explanation": "who can の後ろで walk と give が and で並列し、どちらも someone の能力を説明する。参照：FOCUS 7-1",
    "tags": [
      "第二回",
      "FOCUS 7",
      "関係詞",
      "並列"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_002",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 7-1",
    "title": "description の動詞化",
    "question": "give an accurate description of the relationships ... を自然に訳すポイントは？",
    "choices": [
      "description を「説明書」と訳す",
      "give を必ず「与える」と訳す",
      "accurate を省略する",
      "名詞 description を「正確に述べる」と動詞的に訳す"
    ],
    "answer": 3,
    "explanation": "give a description は「説明を与える」より「説明する・述べる」と動詞化すると自然。参照：FOCUS 7-1",
    "tags": [
      "第二回",
      "FOCUS 7",
      "名詞構文",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-2",
    "title": "動名詞主語",
    "question": "Borrowing words from other languages is not the only way ... の主語はどれ？",
    "choices": [
      "Borrowing words from other languages",
      "other languages",
      "the only way",
      "a language"
    ],
    "answer": 0,
    "explanation": "Borrowing ... 全体が動名詞句として主語。「他の言語から単語を借用することは」。参照：FOCUS 7-2",
    "tags": [
      "第二回",
      "FOCUS 7",
      "動名詞主語",
      "文構造"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-2",
    "title": "the way in which",
    "question": "the way in which a language can develop its vocabulary の in which の働きは？",
    "choices": [
      "the way を否定する",
      "a language を所有格にする",
      "「言語が語彙を発達させる方法」と the way を説明する",
      "vocabulary と並列する"
    ],
    "answer": 2,
    "explanation": "the way in which S V は「SがVする方法」。in which 以下が the way を説明する。参照：FOCUS 7-2",
    "tags": [
      "第二回",
      "FOCUS 7",
      "関係詞",
      "the way in which"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_005",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-2",
    "title": "セミコロンの働き",
    "question": "vocabulary; there are many cases ... のセミコロンの働きとして最も適切なものは？",
    "choices": [
      "文を疑問文に変える",
      "関係の深い二つの文を接続する",
      "引用の始まりを示す",
      "語句を同格にする"
    ],
    "answer": 1,
    "explanation": "セミコロンは、内容的に関係の深い独立した二文をつなぐ。参照：FOCUS 7-2",
    "tags": [
      "第二回",
      "FOCUS 7",
      "句読法",
      "セミコロン"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 7-2",
    "title": "that is の働き",
    "question": "is developed “from within,” that is, by using the language’s existing resources の that is の働きは？",
    "choices": [
      "逆接を示す",
      "時を示す",
      "仮定を示す",
      "前の内容を「すなわち」と言い換える"
    ],
    "answer": 3,
    "explanation": "that is は「すなわち」。from within の具体的内容を by using ... で言い換えている。参照：FOCUS 7-2",
    "tags": [
      "第二回",
      "FOCUS 7",
      "言い換え",
      "that is"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_007",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 7-3",
    "title": "knowledge の動詞化",
    "question": "We don’t have enough knowledge of life. の自然な訳として最も適切なものは？",
    "choices": [
      "私たちは生命について十分な知識を所有していない",
      "私たちは生命を十分に知らない",
      "生命は私たちを十分に知らない",
      "私たちは生命の知識を作らない"
    ],
    "answer": 1,
    "explanation": "have knowledge of X は自然な日本語では「Xを知っている」。名詞 knowledge を動詞的に訳す。参照：FOCUS 7-3",
    "tags": [
      "第二回",
      "FOCUS 7",
      "名詞構文",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-3",
    "title": "find O doing",
    "question": "We continue to find microbes living in places ... の living in places は何を説明している？",
    "choices": [
      "We",
      "continue",
      "microbes",
      "places"
    ],
    "answer": 2,
    "explanation": "find O doing で「Oが〜しているのを見つける」。living ... は microbes の状態を説明する。参照：FOCUS 7-3",
    "tags": [
      "第二回",
      "FOCUS 7",
      "find O doing",
      "分詞"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_07_009",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 7-3",
    "title": "imagine O C の復元",
    "question": "in ways we never imagined possible の元の関係として最も適切なものは？",
    "choices": [
      "we never imagined ways possible",
      "ways never imagined us possible",
      "possible imagined ways",
      "we imagined possible never ways"
    ],
    "answer": 0,
    "explanation": "imagine O C の関係で、ways が目的語、possible が補語。「可能だとは思わなかった方法」。参照：FOCUS 7-3",
    "tags": [
      "第二回",
      "FOCUS 7",
      "imagine O C",
      "文構造"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_001",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 8-1",
    "title": "drawing の名詞構文",
    "question": "his drawing of the human body を自然に訳すときのポイントは？",
    "choices": [
      "drawing を「絵を描く」と命令形にする",
      "of 以下を省略する",
      "「彼が人体を描いたこと」と動詞的に訳す",
      "his を「彼のもの」とだけ訳す"
    ],
    "answer": 2,
    "explanation": "drawing は名詞だが、文脈では「彼が人体を描いたこと」と動詞化すると自然。参照：FOCUS 8-1",
    "tags": [
      "第二回",
      "FOCUS 8",
      "名詞構文",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 8-1",
    "title": "all of which の先行内容",
    "question": "He drew it in different layers and from different angles, all of which led him ... の which が受ける内容は？",
    "choices": [
      "人体だけ",
      "layers だけ",
      "angles だけ",
      "異なる層と角度から描いたこと全体"
    ],
    "answer": 3,
    "explanation": "all of which は直前の複数の内容、ここでは異なる層・角度から描いたこと全体を受ける。参照：FOCUS 8-1",
    "tags": [
      "第二回",
      "FOCUS 8",
      "関係詞",
      "all of which"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_003",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 8-1",
    "title": "無生物主語 lead",
    "question": "all of which led him to discover ... の自然な訳として最も適切なものは？",
    "choices": [
      "それらすべてによって彼は発見することになった",
      "それらは彼に発見を命令した",
      "彼はそれらを発見するために導いた",
      "それらは発見されることを拒んだ"
    ],
    "answer": 0,
    "explanation": "無生物主語 lead O to do は「SによってOは〜するようになる」と訳すと自然。参照：FOCUS 8-1",
    "tags": [
      "第二回",
      "FOCUS 8",
      "無生物主語",
      "lead O to do"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 8-2",
    "title": "継続用法 where",
    "question": "prisons are ... like “crime schools,” where the prisoners learn ... の where の意味は？",
    "choices": [
      "そのため",
      "そこで",
      "それにもかかわらず",
      "いつでも"
    ],
    "answer": 1,
    "explanation": "カンマ＋where は継続用法で、ここでは「そこで」と前の prisons/crime schools を受ける。参照：FOCUS 8-2",
    "tags": [
      "第二回",
      "FOCUS 8",
      "関係副詞",
      "継続用法"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_005",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 8-2",
    "title": "avoid punishment",
    "question": "new ways to avoid punishment の to avoid punishment は何を説明している？",
    "choices": [
      "prisoners",
      "new ways",
      "crime schools",
      "connections"
    ],
    "answer": 1,
    "explanation": "to avoid punishment は不定詞の形容詞用法で new ways を説明し、「刑罰を避ける新しい方法」。参照：FOCUS 8-2",
    "tags": [
      "第二回",
      "FOCUS 8",
      "不定詞",
      "修飾関係"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_006",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 8-2",
    "title": "which の目的格",
    "question": "new friends and connections which they can use after their release の which が指すものは？",
    "choices": [
      "prisoners",
      "punishment",
      "new friends and connections",
      "their release"
    ],
    "answer": 2,
    "explanation": "which は直前の new friends and connections を受け、use の目的語になっている。参照：FOCUS 8-2",
    "tags": [
      "第二回",
      "FOCUS 8",
      "関係代名詞",
      "指示対象"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_007",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 8-3",
    "title": "This confusion の内容",
    "question": "This confusion が指す内容として最も適切なものは？\n\n英文：\nIn watching television we tend to confuse the persona with the person. This confusion is especially common with young children.",
    "choices": [
      "テレビと現実を完全に同じだと考えること",
      "登場人物と演じている本人を混同すること",
      "子どもと大人を区別すること",
      "医者と司会者を比較すること"
    ],
    "answer": 1,
    "explanation": "直前の confuse the persona with the person を受け、「登場人物と本人を混同すること」。参照：FOCUS 8-3",
    "tags": [
      "第二回",
      "FOCUS 8",
      "指示語",
      "confuse A with B"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 8-3",
    "title": "be incapable of doing",
    "question": "young children, who are incapable of distinguishing between reality and fantasy の be incapable of doing の意味は？",
    "choices": [
      "〜する能力がない",
      "〜する義務がある",
      "〜することに慣れている",
      "〜することを許される"
    ],
    "answer": 0,
    "explanation": "be incapable of doing は「〜することができない」。参照：FOCUS 8-3",
    "tags": [
      "第二回",
      "FOCUS 8",
      "熟語",
      "be incapable of doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_08_009",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 8-3",
    "title": "継続用法 who の訳",
    "question": "This confusion is especially common with young children, who are incapable of ... の who を自然に訳すと？",
    "choices": [
      "そして彼らは",
      "もし彼らが",
      "彼らを除いて",
      "というのは彼らは〜だから"
    ],
    "answer": 3,
    "explanation": "継続用法の who は文脈に応じて補足・理由として訳せる。ここでは「というのは、彼らは区別できないから」。参照：FOCUS 8-3",
    "tags": [
      "第二回",
      "FOCUS 8",
      "関係代名詞",
      "継続用法"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-1",
    "title": "コロンの働き",
    "question": "My big sister once told me an interesting thing: by shutting my eyes ... のコロンの働きは？",
    "choices": [
      "前の an interesting thing の内容を後ろで説明する",
      "逆接を表す",
      "理由を表す接続詞になる",
      "疑問文を導く"
    ],
    "answer": 0,
    "explanation": "コロンは説明・定義・列挙を導く。後ろが an interesting thing の具体的内容。参照：FOCUS 9-1",
    "tags": [
      "第二回",
      "FOCUS 9",
      "句読法",
      "コロン"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-1",
    "title": "by doing",
    "question": "by shutting my eyes and blowing on a dandelion puff の by doing の意味は？",
    "choices": [
      "〜する前に",
      "〜することによって",
      "〜するにもかかわらず",
      "〜しない限り"
    ],
    "answer": 1,
    "explanation": "by doing は手段を表し「〜することによって」。shutting と blowing が並列。参照：FOCUS 9-1",
    "tags": [
      "第二回",
      "FOCUS 9",
      "by doing",
      "並列"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-1",
    "title": "make O V",
    "question": "I could make all my dreams come true. の make O V の意味として正しいものは？",
    "choices": [
      "OがVするのを妨げる",
      "OにVするよう頼む",
      "OをVさせる",
      "OがVしたように見える"
    ],
    "answer": 2,
    "explanation": "make O V は「OをVさせる」。make all my dreams come true は「夢をすべて実現させる」。参照：FOCUS 9-1",
    "tags": [
      "第二回",
      "FOCUS 9",
      "使役",
      "make O V"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_004",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 9-1",
    "title": "used to と would",
    "question": "I used to believe her and would wake up early ... の used to と would の説明として適切なものは？",
    "choices": [
      "どちらも未来の推量だけを表す",
      "used to は一度だけの動作、would は現在の習慣",
      "used to は義務、would は願望",
      "used to は過去の状態・習慣、would は回想中の習慣的動作"
    ],
    "answer": 3,
    "explanation": "used to は今とは違う過去の状態・習慣、would は過去の習慣的動作を表す。参照：FOCUS 9-1",
    "tags": [
      "第二回",
      "FOCUS 9",
      "used to",
      "would"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_005",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-2",
    "title": "compare A with B",
    "question": "compare the acquisition of English language skills with learning to play a musical instrument の A と B は？",
    "choices": [
      "A=英語技能の習得、B=楽器演奏を学ぶこと",
      "A=英語、B=音楽理論",
      "A=楽器、B=作曲",
      "A=技能、B=人"
    ],
    "answer": 0,
    "explanation": "compare A with B は「AをBと比較する」。参照：FOCUS 9-2",
    "tags": [
      "第二回",
      "FOCUS 9",
      "熟語",
      "compare A with B"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 9-2",
    "title": "may well の訳",
    "question": "One may well know a great deal about musical theory ... の may well の意味として最も自然なものは？",
    "choices": [
      "決して〜しない",
      "たぶん〜するだろう",
      "〜してはいけない",
      "〜する必要がない"
    ],
    "answer": 1,
    "explanation": "may well do は文脈により「たぶん〜するだろう」「〜するのももっともだ」。ここでは前者。参照：FOCUS 9-2",
    "tags": [
      "第二回",
      "FOCUS 9",
      "助動詞",
      "may well"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_007",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-2",
    "title": "yet の並列",
    "question": "One may well know ... yet be quite incapable ... の yet がつないでいるものは？",
    "choices": [
      "musical theory と compositions",
      "English と instrument",
      "know と be",
      "may と well"
    ],
    "answer": 2,
    "explanation": "主語 One と助動詞 may を共有し、know と be が yet で対比的に並列されている。参照：FOCUS 9-2",
    "tags": [
      "第二回",
      "FOCUS 9",
      "並列",
      "yet"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 9-3",
    "title": "must have done",
    "question": "Surely he must have burned his tongue enough times. の must have done の意味は？",
    "choices": [
      "〜したに違いない",
      "〜したかもしれない",
      "〜したはずがない",
      "〜する必要がある"
    ],
    "answer": 0,
    "explanation": "must have done は過去についての強い推量で「〜したに違いない」。参照：FOCUS 9-3",
    "tags": [
      "第二回",
      "FOCUS 9",
      "完了形",
      "must have done"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_09_009",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 9-3",
    "title": "過去文脈の would have to",
    "question": "He would have to find a way of eating the hot stuff. の would have to の訳として最も自然なものは？",
    "choices": [
      "方法を見つけるだろうと予言した",
      "方法を見つけたくなかった",
      "方法を見つけなければならなかった",
      "方法を見つけてもよかった"
    ],
    "answer": 2,
    "explanation": "過去の文脈で would は単純な未来推量ではなく、「〜しなければならなかった」と読む。参照：FOCUS 9-3",
    "tags": [
      "第二回",
      "FOCUS 9",
      "would have to",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 10-1",
    "title": "take O for granted",
    "question": "People in the Western world take this for granted. の take O for granted の意味は？",
    "choices": [
      "Oを当然のことと考える",
      "Oを無料で受け取る",
      "Oを秘密にする",
      "Oを根拠から外す"
    ],
    "answer": 0,
    "explanation": "take O for granted は「Oを当然のことと考える」。参照：FOCUS 10-1",
    "tags": [
      "第二回",
      "FOCUS 10",
      "熟語",
      "take O for granted"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_002",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 10-1",
    "title": "be foreign to",
    "question": "the idea is foreign to many other civilizations の foreign の意味として最も自然なものは？",
    "choices": [
      "外国製である",
      "異質でなじみがない",
      "海外へ移動する",
      "国際的に有名だ"
    ],
    "answer": 1,
    "explanation": "be foreign to X は「Xにとって異質である・なじみがない」。参照：FOCUS 10-1",
    "tags": [
      "第二回",
      "FOCUS 10",
      "語法",
      "be foreign to"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 10-1",
    "title": "同格の that",
    "question": "the belief that some mystery lies at the root of natural phenomena の that 以下の働きは？",
    "choices": [
      "belief の原因を表す副詞節",
      "belief を否定する節",
      "belief の内容を示す同格節",
      "mystery を修飾する関係詞節"
    ],
    "answer": 2,
    "explanation": "that 以下は完全文で、the belief の具体的内容を示す同格の that 節。参照：FOCUS 10-1",
    "tags": [
      "第二回",
      "FOCUS 10",
      "同格",
      "that節"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_004",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 10-1",
    "title": "継続用法 where の理由訳",
    "question": "many other civilizations, where the belief is commonly held ... の where を文脈に合うように訳すと？",
    "choices": [
      "いつでも",
      "どこへでも",
      "もしそこなら",
      "というのは、そこでは"
    ],
    "answer": 3,
    "explanation": "継続用法の where は補足を加える。ここでは前文の理由説明として「というのは、そこでは」。参照：FOCUS 10-1",
    "tags": [
      "第二回",
      "FOCUS 10",
      "関係副詞",
      "継続用法"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_005",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 10-2",
    "title": "同格 that の範囲",
    "question": "the idea in the American Constitution that each person has the right ... の that 以下は何を説明する？",
    "choices": [
      "the idea",
      "the American Constitution",
      "each person",
      "the right"
    ],
    "answer": 0,
    "explanation": "that 以下は「各人が権利を有するという」という the idea の内容を示す同格節。参照：FOCUS 10-2",
    "tags": [
      "第二回",
      "FOCUS 10",
      "同格",
      "修飾関係"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 10-2",
    "title": "doing so の内容",
    "question": "except where doing so may harm others の doing so が指す内容は？",
    "choices": [
      "憲法を書くこと",
      "自分で選択や決定を行うこと",
      "他人を助けること",
      "権利を放棄すること"
    ],
    "answer": 1,
    "explanation": "doing so は直前の make his or her own choices and decisions を受ける。参照：FOCUS 10-2",
    "tags": [
      "第二回",
      "FOCUS 10",
      "指示表現",
      "doing so"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_007",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 10-3",
    "title": "Whether節の主語",
    "question": "Whether we bother to correct ourselves or not seems to depend on ... の文全体の主語は？",
    "choices": [
      "we",
      "Whether we bother to correct ourselves or not",
      "ourselves",
      "seems"
    ],
    "answer": 1,
    "explanation": "Whether S V or not 全体が名詞節として主語になっている。参照：FOCUS 10-3",
    "tags": [
      "第二回",
      "FOCUS 10",
      "名詞節",
      "whether"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "FOCUS 10-3",
    "title": "how urgently 節",
    "question": "how urgently we want to get on with what we are saying の how urgently の意味は？",
    "choices": [
      "なぜ急いで",
      "どこで急いで",
      "どれほど急いで",
      "急がないように"
    ],
    "answer": 2,
    "explanation": "how＋副詞＋S V で「どれほど〜にSがVするか」。参照：FOCUS 10-3",
    "tags": [
      "第二回",
      "FOCUS 10",
      "間接疑問",
      "how＋副詞"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_FOCUS_10_009",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "FOCUS 10-3",
    "title": "for what they are",
    "question": "recognize our own mistakes for what they are の for what they are を自然に訳すと？",
    "choices": [
      "誤りになる前に",
      "誤りを隠すために",
      "誤りかどうかに関係なく",
      "誤りをそのまま、ありのままに"
    ],
    "answer": 3,
    "explanation": "what S is は「Sの本質・ありのままの姿」。ここでは「自分の誤りを誤りとして認識する」。参照：FOCUS 10-3",
    "tags": [
      "第二回",
      "FOCUS 10",
      "what節",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_05_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 05 問題1",
    "title": "It is important for A to do",
    "question": "「家族の構成員が互いに支え合うことは重要である」を表す英文の骨組みとして正しいものは？",
    "choices": [
      "It is important for family members to support each other.",
      "Family members are important supporting each other.",
      "It is family members important to support each other.",
      "Family members have important to support each other."
    ],
    "answer": 0,
    "explanation": "「Aが〜することは重要だ」は It is important for A to do。ここでは A が family members、do が support each other。参照：Insight Writing 05 問題1",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "英作文",
      "形式主語"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_002",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 05 問題1",
    "title": "each other の使い方",
    "question": "空所に最も適切な語句は？\n\nFamily members should support (      ).",
    "choices": [
      "themselves member",
      "each other",
      "one family",
      "another families"
    ],
    "answer": 1,
    "explanation": "each other は「互いに」。support each other で「互いに支え合う」。参照：Insight Writing 05 問題1",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "語法",
      "each other"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_IW_05_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 05 問題2",
    "title": "have a responsibility to do",
    "question": "「政府は〜する責任がある」を表す形として最も適切なものは？",
    "choices": [
      "Governments are responsibility to do ...",
      "Governments responsible doing ...",
      "Governments have a responsibility to do ...",
      "Governments have responsible for do ..."
    ],
    "answer": 2,
    "explanation": "have a responsibility to do で「〜する責任がある」。responsibility は名詞なので have と組み合わせる。参照：Insight Writing 05 問題2",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "英作文",
      "responsibility"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 05 問題2",
    "title": "make O do",
    "question": "make companies do the right thing の make O do の意味として正しいものは？",
    "choices": [
      "企業が正しいことをするのを待つ",
      "企業に正しいことを説明する",
      "企業が正しいことをしたように見せる",
      "企業に正しいことをさせる"
    ],
    "answer": 3,
    "explanation": "make O do は「Oに〜させる」。make companies do the right thing は「企業に正しいことをさせる」。参照：Insight Writing 05 問題2",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "使役",
      "make O do"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_005",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 05 問題3",
    "title": "目的を表す to do",
    "question": "空所に最も適切なものは？\n\nToday, in many countries, women need to work (      ) their families.",
    "choices": [
      "to support",
      "supporting for",
      "for support",
      "supported"
    ],
    "answer": 0,
    "explanation": "目的を表す不定詞で to support。「家族を支えるために働く」となる。参照：Insight Writing 05 問題3",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "不定詞",
      "目的"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 05 問題3",
    "title": "Today と Nowadays",
    "question": "一般的な現在の状況を表す語の組み合わせとして適切なものは？",
    "choices": [
      "Today は必ず過去形と使う",
      "Today / Nowadays / In many countries などを文頭に置ける",
      "Nowadays は未来形とだけ使う",
      "in many countries は文末に置けない"
    ],
    "answer": 1,
    "explanation": "一般的な現在の状況では Today や Nowadays、In many countries などを自然に組み合わせられる。参照：Insight Writing 05 問題3",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "語順",
      "時を表す表現"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_05_007",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 05 問題4",
    "title": "There are difficulties in life",
    "question": "「人生には困難なこともある」に最も近い英文は？",
    "choices": [
      "Life is difficulty there.",
      "There has difficult things in life.",
      "There are difficulties in life.",
      "Difficulties are life there."
    ],
    "answer": 2,
    "explanation": "存在を表す There are ... を使い、difficulties in life で「人生における困難」。参照：Insight Writing 05 問題4",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "There is構文",
      "英作文"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_008",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 05 問題4",
    "title": "ways to overcome them",
    "question": "ways to overcome them の to overcome them は何を説明している？",
    "choices": [
      "we",
      "must think",
      "difficulties",
      "ways"
    ],
    "answer": 3,
    "explanation": "to overcome them は不定詞の形容詞用法で ways を説明し、「それらを乗り越える方法」。参照：Insight Writing 05 問題4",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "不定詞",
      "修飾関係"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_009",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 05 問題5",
    "title": "see O do",
    "question": "I want to see him do his best. の see O do の意味として最も適切なものは？",
    "choices": [
      "彼が全力を尽くすのを見たい",
      "彼に全力を尽くしてもらうよう頼みたい",
      "彼が全力を尽くしたと聞きたい",
      "彼を全力で見る必要がある"
    ],
    "answer": 0,
    "explanation": "see O do は「Oが〜するのを見る」。want to see him do his best で「彼が全力を尽くすのを見たい」。参照：Insight Writing 05 問題5",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "知覚動詞",
      "see O do"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_05_010",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 05 問題5",
    "title": "be careful not to do",
    "question": "空所に最も適切なものは？\n\nI want him to be careful (      ) injured or sick before the game.",
    "choices": [
      "for not get",
      "not to get",
      "to not getting",
      "not getting to"
    ],
    "answer": 1,
    "explanation": "be careful not to do で「〜しないように気をつける」。ここでは not to get injured or sick。参照：Insight Writing 05 問題5",
    "tags": [
      "第二回",
      "Insight Writing 05",
      "不定詞の否定",
      "be careful"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_001",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 06 問題1",
    "title": "brush one’s teeth",
    "question": "「毎晩寝る前に歯磨きをしなさい」に最も近い英文は？",
    "choices": [
      "Wash your tooth before sleep every nights.",
      "Brush teeth yours before bed every night.",
      "Brush your teeth every night before going to bed.",
      "You brush your teeth before went to bed."
    ],
    "answer": 2,
    "explanation": "brush one’s teeth で「歯を磨く」。before going to bed で「寝る前に」。参照：Insight Writing 06 問題1",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "英作文",
      "語法"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 06 問題1",
    "title": "before doing",
    "question": "before going to bed の going が動名詞になる理由は？",
    "choices": [
      "命令文の動詞だから",
      "teeth を修飾するから",
      "現在進行形だから",
      "前置詞 before の後ろだから"
    ],
    "answer": 3,
    "explanation": "before が前置詞として使われているため、後ろは動名詞 going。before you go to bed と節にすることもできる。参照：Insight Writing 06 問題1",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "動名詞",
      "before doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 06 問題2",
    "title": "be good at doing",
    "question": "I’m not very good at speaking Japanese. の be good at doing の意味は？",
    "choices": [
      "〜するのが得意である",
      "〜する義務がある",
      "〜し始める",
      "〜するのを恐れる"
    ],
    "answer": 0,
    "explanation": "be good at doing は「〜するのが得意である」。否定文では not very good at ... で「あまり得意ではない」。参照：Insight Writing 06 問題2",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "熟語",
      "be good at doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_004",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 06 問題2",
    "title": "speak の語法",
    "question": "speak の使い方として正しいものは？",
    "choices": [
      "speak him Japanese",
      "speak Japanese",
      "speak the problem",
      "speak my idea him"
    ],
    "answer": 1,
    "explanation": "言語名は speak Japanese のように前置詞なしで続ける。人には speak to/with 人、話題には speak of/about 物。参照：Insight Writing 06 問題2",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "語法",
      "speak"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_IW_06_005",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 06 問題3",
    "title": "learn about values",
    "question": "「いろいろな価値観を知る」を表すとき、最も自然な表現は？",
    "choices": [
      "know new various values suddenly",
      "understand about value learn",
      "study values to know",
      "learn about different values"
    ],
    "answer": 3,
    "explanation": "新しく文化や価値観について知るという文脈では learn about different values が自然。参照：Insight Writing 06 問題3",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "語法",
      "learn about"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_06_006",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 06 問題3",
    "title": "by studying abroad",
    "question": "by studying abroad の by doing は何を表す？",
    "choices": [
      "目的",
      "逆接",
      "手段・方法",
      "時間の終点"
    ],
    "answer": 2,
    "explanation": "by doing は「〜することによって」と手段を表す。参照：Insight Writing 06 問題3",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "動名詞",
      "by doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_007",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 06 問題4",
    "title": "It is not easy to do",
    "question": "空所に最も適切なものは？\n\nIt is not easy (      ) a balanced meal when you eat out.",
    "choices": [
      "having",
      "for have",
      "have",
      "to have"
    ],
    "answer": 3,
    "explanation": "It is not easy to do で「〜するのは簡単ではない」。to have a balanced meal が正しい。参照：Insight Writing 06 問題4",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "形式主語",
      "不定詞"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_008",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 06 問題4",
    "title": "when you eat out",
    "question": "when you eat out の意味として最も自然なものは？",
    "choices": [
      "外食するとき",
      "食事を外へ運ぶとき",
      "外で食べ終えた後",
      "食べ物を持ち帰るために"
    ],
    "answer": 0,
    "explanation": "eat out は「外食する」。when you eat out で「外食するとき」。参照：Insight Writing 06 問題4",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "熟語",
      "eat out"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_IW_06_009",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 06 問題5",
    "title": "be afraid of doing",
    "question": "Many of us are afraid of getting involved ... の be afraid of doing の意味は？",
    "choices": [
      "〜することを期待する",
      "〜することを恐れる",
      "〜することを許可する",
      "〜することに成功する"
    ],
    "answer": 1,
    "explanation": "be afraid of doing は「〜することを恐れる」。of は前置詞なので getting。参照：Insight Writing 06 問題5",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "動名詞",
      "be afraid of"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_06_010",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 06 問題5",
    "title": "instead of doing",
    "question": "instead of helping others の意味として最も自然なものは？",
    "choices": [
      "他人を助けた結果",
      "他人を助けるために",
      "他人を助けるのではなく",
      "他人を助けると同時に"
    ],
    "answer": 2,
    "explanation": "instead of doing は「〜する代わりに／〜するのではなく」。選択・対比を表す。参照：Insight Writing 06 問題5",
    "tags": [
      "第二回",
      "Insight Writing 06",
      "熟語",
      "instead of doing"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_07_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 07 問題1",
    "title": "現在完了進行形",
    "question": "Recently, the number of people living alone has been increasing in Japan. の has been increasing が表すものは？",
    "choices": [
      "現在だけの一時的な状態",
      "過去の一度きりの出来事",
      "未来の予定",
      "過去から現在まで続く増加"
    ],
    "answer": 3,
    "explanation": "現在完了進行形 has been increasing は、過去から現在にかけて増え続けていることを表す。参照：Insight Writing 07 問題1",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "現在完了進行形",
      "時制"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_002",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 07 問題1",
    "title": "the number of",
    "question": "空所に最も適切なものは？\n\nRecently, (      ) people living alone has been increasing in Japan.",
    "choices": [
      "the number of",
      "an amount of",
      "many number",
      "the numbers"
    ],
    "answer": 0,
    "explanation": "可算名詞 people の人数の増加は the number of people。主語の中心は number なので has。参照：Insight Writing 07 問題1",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "数量表現",
      "主語一致"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 07 問題2",
    "title": "spend O doing",
    "question": "He spends hours reading novels on weekends. の spend O doing の意味は？",
    "choices": [
      "Oを読むために借りる",
      "Oを〜して過ごす",
      "Oを〜する前に終える",
      "Oを〜するよう勧める"
    ],
    "answer": 1,
    "explanation": "spend 時間 doing で「時間を〜して過ごす」。spends hours reading novels は「何時間も小説を読んで過ごす」。参照：Insight Writing 07 問題2",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "熟語",
      "spend O doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_004",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 07 問題2",
    "title": "on weekends",
    "question": "「週末に」を一般的な習慣として表す語句は？",
    "choices": [
      "in weekend",
      "at the weekends day",
      "on weekends",
      "for weekend"
    ],
    "answer": 2,
    "explanation": "一般的な「週末に」は on weekends。参照：Insight Writing 07 問題2",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "前置詞",
      "on weekends"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  },
  {
    "id": "T2_IW_07_005",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 07 問題3",
    "title": "分詞構文 feeling",
    "question": "I open a book feeling excited about reading it. の feeling excited ... を自然に訳すと？",
    "choices": [
      "本を読むことにわくわくしながら",
      "本を読ませるために",
      "本を読めないので",
      "本を読み終えた後で"
    ],
    "answer": 0,
    "explanation": "主語 I が共通の分詞構文で、「本を読むことにわくわくしながら」。参照：Insight Writing 07 問題3",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "分詞構文",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_07_006",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 07 問題3",
    "title": "feel excited about doing",
    "question": "feel excited about doing の意味として最も自然なものは？",
    "choices": [
      "〜することに失望する",
      "〜することにわくわくする",
      "〜することを恐れる",
      "〜することを避ける"
    ],
    "answer": 1,
    "explanation": "feel excited about doing は「〜することにわくわくする」。about は前置詞なので reading。参照：Insight Writing 07 問題3",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "熟語",
      "about doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_007",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 07 問題4",
    "title": "see O doing",
    "question": "we see young people walking on the streets ... の see O doing が表すものは？",
    "choices": [
      "動作の最初から最後までを見る",
      "Oに動作を命じる",
      "Oが動作している場面を見る",
      "Oが動作したと聞く"
    ],
    "answer": 2,
    "explanation": "see O doing は「Oが〜しているのを見る」で、動作の一場面を捉える。参照：Insight Writing 07 問題4",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "知覚動詞",
      "see O doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_008",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 07 問題4",
    "title": "while doing",
    "question": "空所に最も適切なものは？\n\nThese days, we see young people walking on the streets (      ) looking at their smartphones.",
    "choices": [
      "because of",
      "unless",
      "to",
      "while"
    ],
    "answer": 3,
    "explanation": "同じ人が「歩きながらスマホを見る」ので while looking が自然。参照：Insight Writing 07 問題4",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "接続詞",
      "while doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_009",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 07 問題5",
    "title": "spend time doing",
    "question": "If we do not spend time interacting with each other, ... の spend time doing の意味は？",
    "choices": [
      "〜することに時間をかける",
      "〜する時間を失う",
      "〜する前に時間を測る",
      "〜することを延期する"
    ],
    "answer": 0,
    "explanation": "spend time doing は「〜することに時間をかける」。interact with each other は「互いに交流する」。参照：Insight Writing 07 問題5",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "熟語",
      "spend time doing"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_07_010",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 07 問題5",
    "title": "risk doing",
    "question": "we risk losing something essential to the human experience の risk doing の意味は？",
    "choices": [
      "〜することを必ず防ぐ",
      "〜する危険がある",
      "〜する許可を得る",
      "〜する方法を学ぶ"
    ],
    "answer": 1,
    "explanation": "risk doing は「〜する危険がある」。ここでは「人間の経験に欠かせないものを失う危険がある」。参照：Insight Writing 07 問題5",
    "tags": [
      "第二回",
      "Insight Writing 07",
      "熟語",
      "risk doing"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_08_001",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題1",
    "title": "put off X until",
    "question": "Don’t put off what you can do today until tomorrow. の put off X until Y の意味は？",
    "choices": [
      "XをYまでに終える",
      "XをYと交換する",
      "XをYまで延期する",
      "XをYから始める"
    ],
    "answer": 2,
    "explanation": "put off X until Y は「XをYまで延期する」。参照：Insight Writing 08 問題1",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "熟語",
      "put off"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_002",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題1",
    "title": "what you can do today",
    "question": "what you can do today の what の働きとして最も適切なものは？",
    "choices": [
      "today を修飾する副詞",
      "命令文を作る疑問詞",
      "until の意味を強める語",
      "「今日できること」を表す名詞節を作る"
    ],
    "answer": 3,
    "explanation": "what S V で「SがVすること」。what you can do today 全体が put off の目的語。参照：Insight Writing 08 問題1",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "what節",
      "名詞節"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_003",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題2",
    "title": "By reading books",
    "question": "By reading books, you can experience emotions ... の By reading books の意味は？",
    "choices": [
      "本を読むことで",
      "本を読む前に",
      "本を読まない限り",
      "本を読むための本"
    ],
    "answer": 0,
    "explanation": "By doing は「〜することで」。手段を表す。参照：Insight Writing 08 問題2",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "by doing",
      "手段"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_004",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題2",
    "title": "関係詞節",
    "question": "emotions that you have never felt before の that 以下は何を説明する？",
    "choices": [
      "you",
      "emotions",
      "before",
      "reading books"
    ],
    "answer": 1,
    "explanation": "that you have never felt before が emotions を後ろから説明し、「今まで感じたことのない感情」。参照：Insight Writing 08 問題2",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "関係代名詞",
      "後置修飾"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_005",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 08 問題3",
    "title": "条件を表す if",
    "question": "空所に最も適切なものは？\n\n(      ) you want to succeed abroad in the future, it is important to imagine what you want to be.",
    "choices": [
      "Because of",
      "Until",
      "Despite",
      "If"
    ],
    "answer": 3,
    "explanation": "「〜したいのならば」は条件の if 節で表す。参照：Insight Writing 08 問題3",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "接続詞",
      "if"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_006",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 08 問題3",
    "title": "what you want to be",
    "question": "what you want to be の意味として最も自然なものは？",
    "choices": [
      "あなたが今いる場所",
      "あなたが過去にしたこと",
      "あなたがなりたい姿",
      "あなたが持っている物"
    ],
    "answer": 2,
    "explanation": "what S wants to be は「Sがなりたい姿」。参照：Insight Writing 08 問題3",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "what節",
      "和訳ポイント"
    ],
    "mistakeTag": "transword",
    "status": "active"
  },
  {
    "id": "T2_IW_08_007",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題4",
    "title": "distinguish A from B",
    "question": "distinguish what you really need from what you do not の distinguish A from B の意味は？",
    "choices": [
      "AをBに変える",
      "AをBと比べて増やす",
      "AをBから借りる",
      "AとBを見分ける"
    ],
    "answer": 3,
    "explanation": "distinguish A from B は「AをBと見分ける」。参照：Insight Writing 08 問題4",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "熟語",
      "distinguish A from B"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_008",
    "testRound": "2nd",
    "type": "translation_point",
    "source": "Insight Writing 08 問題4",
    "title": "省略された need",
    "question": "what you do not の後ろで省略されている内容は？\n\n英文：\nIt is important to distinguish what you really need from what you do not.",
    "choices": [
      "really need",
      "distinguish",
      "modern society",
      "important"
    ],
    "answer": 0,
    "explanation": "what you do not の後ろには need が省略されている。「本当に必要とするものと、必要としないもの」。参照：Insight Writing 08 問題4",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "省略",
      "what節"
    ],
    "mistakeTag": "reference",
    "status": "active"
  },
  {
    "id": "T2_IW_08_009",
    "testRound": "2nd",
    "type": "grammar_focus",
    "source": "Insight Writing 08 問題5",
    "title": "One important thing ... is",
    "question": "One important thing we can do is to raise awareness ... の文の骨組みとして正しいものは？",
    "choices": [
      "One important thing が目的語、raise が主語",
      "One important thing we can do が主語、is が動詞",
      "we が主語、can do is が動詞",
      "awareness が主語、raise が動詞"
    ],
    "answer": 1,
    "explanation": "One important thing we can do 全体が主語で、is が動詞。後ろの to raise ... が内容を示す。参照：Insight Writing 08 問題5",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "文構造",
      "関係詞省略"
    ],
    "mistakeTag": "structure",
    "status": "active"
  },
  {
    "id": "T2_IW_08_010",
    "testRound": "2nd",
    "type": "mini_test",
    "source": "Insight Writing 08 問題5",
    "title": "raise awareness of",
    "question": "空所に最も適切なものは？\n\nOne important thing we can do is to raise awareness (      ) environmental problems and biodiversity.",
    "choices": [
      "at",
      "with",
      "of",
      "by"
    ],
    "answer": 2,
    "explanation": "raise awareness of/about A で「Aについての意識を高める」。参照：Insight Writing 08 問題5",
    "tags": [
      "第二回",
      "Insight Writing 08",
      "熟語",
      "raise awareness"
    ],
    "mistakeTag": "meaning",
    "status": "active"
  }
,
{
  "id": "T2_CE_Y10_TEST_001",
  "testRound": "2nd",
  "type": "test_word_form",
  "source": "Cutting Edge Y10 本文・第2回定期テスト形式",
  "title": "語形変化：install",
  "question": "英文の空所に入る最も適切な形はどれ？\n\nOnce the bottles are in place, necessary services like electric cables and water pipes are (　　　).",
  "choices": [
    "install",
    "installed",
    "installing",
    "installation"
  ],
  "answer": 1,
  "explanation": "主語 services は「設置される」側なので、受け身 are installed が適切。参照：Cutting Edge Y10 建設工程。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "テスト形式",
    "語形変化",
    "受け身"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TEST_002",
  "testRound": "2nd",
  "type": "test_phrase_completion",
  "source": "Cutting Edge Y10 問題2・第2回定期テスト形式",
  "title": "語句補充：for the purpose",
  "question": "英文の空所に入る最も適切な語はどれ？\n\nThirty-four hectares of undeveloped land were bought (　　　) the purpose, and the Plastic Bottle Village was born.",
  "choices": [
    "at",
    "for",
    "by",
    "with"
  ],
  "answer": 1,
  "explanation": "for the purpose で「その目的のために」。purpose と結びつく前置詞をセットで確認する。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "テスト形式",
    "前置詞",
    "語句補充"
  ],
  "mistakeTag": "meaning",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TEST_003",
  "testRound": "2nd",
  "type": "test_sentence_insertion",
  "source": "Cutting Edge Y10 問題3・第2回定期テスト形式",
  "title": "文挿入：建設の順序",
  "question": "次の文を入れる位置として最も自然なのはどこ？\n\n【挿入する文】\nOnce they are in place, necessary services like electric cables and water pipes are installed.\n\n【本文】\nEach home is built by first constructing a steel frame.\n\n[A]\nDepending on its size, the frame is then filled with between 10,000 and 25,000 recycled plastic bottles.\n\n[B]\nThe bottle-filled frame is then covered with layers of concrete.\n\n[C]\nFinally, standard windows, doors, and a roof are added.\n\n[D]",
  "choices": [
    "[A]",
    "[B]",
    "[C]",
    "[D]"
  ],
  "answer": 1,
  "explanation": "they は直前の recycled plastic bottles を指す。ボトルを詰めた後、配線や水道管を設置し、その後コンクリートで覆う流れなので [B]。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "テスト形式",
    "文挿入",
    "指示語",
    "順序"
  ],
  "mistakeTag": "inference",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TEST_001",
  "testRound": "2nd",
  "type": "test_full_translation",
  "source": "FOCUS 8-1・第2回定期テスト形式",
  "title": "下線部和訳：all of which",
  "question": "次の英文の最も自然な日本語訳はどれ？\n\nHe drew the human body in different layers and from different angles, all of which led him to discover a great deal about the science of levers.",
  "choices": [
    "彼は人体を異なる層や角度から描き、そのすべてによって、てこの科学について多くのことを発見するに至った。",
    "彼は人体を一つの角度から描いたが、てこの科学については何も発見できなかった。",
    "人体の異なる層が彼を描き、角度がてこの科学を発見した。",
    "彼はてこの科学を発見するためだけに、人体を描くのをやめた。"
  ],
  "answer": 0,
  "explanation": "all of which は前の「異なる層・角度から描いたこと」全体を受ける。lead O to do は「それによってOは〜するに至る」と訳す。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "テスト形式",
    "下線部和訳",
    "all of which"
  ],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TEST_002",
  "testRound": "2nd",
  "type": "test_japanese_to_english",
  "source": "FOCUS 8-1・第2回定期テスト形式",
  "title": "日本語から英語：lead O to do",
  "question": "「そのすべてによって、彼は多くのことを発見するに至った」に最も近い英語はどれ？",
  "choices": [
    "all of which led him to discover a great deal",
    "all of him discovered which led a great deal",
    "which all led to him a great discovery",
    "all which he led to discover greatly"
  ],
  "answer": 0,
  "explanation": "all of which + led + him + to discover の順。lead O to do の形をそのまま使う。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "テスト形式",
    "日本語から英語",
    "lead O to do"
  ],
  "mistakeTag": "structure",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TEST_003",
  "testRound": "2nd",
  "type": "test_phrase_build",
  "source": "FOCUS 8-1・第2回定期テスト形式",
  "title": "英語表現：異なる角度から",
  "question": "「異なる層で、そして異なる角度から」に最も適切な英語はどれ？",
  "choices": [
    "in different layers and from different angles",
    "at different layers and by different angles",
    "from different layers and in different angles",
    "on different layers and with different angles"
  ],
  "answer": 0,
  "explanation": "layer には in、angle には from を用い、in different layers and from different angles。前置詞ごと表現を覚える。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "テスト形式",
    "英語表現",
    "前置詞"
  ],
  "mistakeTag": "grammar",
  "status": "active"
}
,
{
  "id": "T2_FOCUS_08_SELF_001",
  "testRound": "2nd",
  "type": "self_translation",
  "questionMode": "self_assessment",
  "source": "FOCUS 8-1・自己採点式試作",
  "title": "自分で訳す：all of which",
  "question": "次の英文を、自分で日本語に訳してみよう。\n\nHe drew the human body in different layers and from different angles, all of which led him to discover a great deal about the science of levers.",
  "selfInstruction": "紙に書くか、声に出して訳してから「答えを見る」を押そう。",
  "modelAnswer": "彼は人体を異なる層で、また異なる角度から描き、そのすべてによって、てこの科学について多くのことを発見するに至った。",
  "keyPoints": "all of which は前の内容全体を受ける。lead O to do は「それによってOは〜するに至る」。",
  "choices": ["できた", "要復習", "自己採点", "模範解答"],
  "answer": 0,
  "explanation": "模範訳と確認ポイントを見比べて自己採点しました。",
  "tags": ["第二回", "FOCUS 8", "自己採点", "下線部和訳", "all of which"],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_SELF_002",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "FOCUS 8-1・構文確認",
  "title": "構文の一部補充：lead O to do",
  "question": "空欄に入る最も適切な語はどれ？\n\nHe drew the human body in different layers and from different angles, all of which (      ) him to discover a great deal about the science of levers.",
  "choices": ["led", "lead", "leads", "leading"],
  "answer": 0,
  "explanation": "本文は過去の出来事なので lead の過去形 led。all of which led him to discover ... で「そのすべてによって、彼は〜を発見するに至った」。まずは lead O to do の形を一部補充で確認しよう。",
  "tags": ["第二回", "FOCUS 8", "構文確認", "一部補充", "lead O to do"],
  "mistakeTag": "structure",
  "status": "active"
}
,
{
  "id": "T2_CE_Y09_TESTFORM_001",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト I-1／実問題英文",
  "title": "see O do",
  "question": "次の空所に入る語句として正しいものは？\n\n英文：\nI want to (　) his best.",
  "choices": [
    "see him do",
    "see him to do",
    "see he does",
    "seeing him do"
  ],
  "answer": 0,
  "explanation": "see O do で「Oが〜するのを見る」。したがって see him do his best で「彼が全力を尽くすのを見たい」。実問題の英文に合わせた語句補充。",
  "tags": [
    "第二回",
    "実問題形式",
    "語句補充",
    "see O do"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_CE_Y09_TESTFORM_002",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト I-3／Cutting Edge Y09",
  "title": "move の語形",
  "question": "次の空所に入る語として正しいものは？\n\n英文：\nHe (　) to a new place two years ago.",
  "choices": [
    "moves",
    "moving",
    "moved",
    "move"
  ],
  "answer": 2,
  "explanation": "two years ago があるので過去形 moved。実問題では、日本語の意味に合うように語形を変えて入れる形式が出題された。",
  "tags": [
    "第二回",
    "Cutting Edge Y09",
    "実問題形式",
    "語形変化"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_CE_Y09_TESTFORM_003",
  "testRound": "2nd",
  "type": "vocab_context",
  "source": "第二回定期テスト III／Cutting Edge Y09 問題2",
  "title": "turn down",
  "question": "次の英文の空所に最も合う語句は？\n\n英文：\nAt first I asked the way to sightseeing spots, but they frequently (　) my question by saying “No,” in French.",
  "choices": [
    "looked after",
    "turned down",
    "gave up",
    "found out"
  ],
  "answer": 1,
  "explanation": "turn down は「申し出・依頼などを断る」。この英文は Cutting Edge Y09 原文の表現（turned down my question）をそのまま使用している。文脈では質問に“No”と答えて取り合わなかったことを表す。参照：Cutting Edge Y09 問題2。",
  "tags": [
    "第二回",
    "Cutting Edge Y09",
    "実問題形式",
    "語句補充"
  ],
  "mistakeTag": "meaning",
  "status": "active"
},
{
  "id": "T2_CE_Y09_TESTFORM_004",
  "testRound": "2nd",
  "type": "reading_reason",
  "source": "第二回定期テスト III／Cutting Edge Y09 問題4",
  "title": "短い内容説明",
  "question": "次の英文が伝えている内容として最も適切なものは？\n\n英文：\nUnless people actually use English, they won’t be able to speak it just because they learned it at school.",
  "choices": [
    "学校で学びさえすれば、実際に使わなくても英語を話せる",
    "実際に英語を使わない限り、学校で学んだだけでは話せるようにならない",
    "学校で英語を学ぶことは、実際に使うより重要である",
    "英語を話せる人は、学校で英語を学んでいない"
  ],
  "answer": 1,
  "explanation": "unless は「〜しない限り」。否定文中の just because は「単に〜という理由だけでは…ない」。参照：Cutting Edge Y09 問題4。",
  "tags": [
    "第二回",
    "Cutting Edge Y09",
    "実問題形式",
    "内容説明"
  ],
  "mistakeTag": "pinpoint",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TESTFORM_001",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト I／Cutting Edge Y10 問題1",
  "title": "left の語形",
  "question": "次の空所に入る語として正しいものは？\n\n英文：\nAfter noticing plastic waste being carelessly (　) on the island’s beautiful beaches, Robert Bezeau decided to set up a plastic recycling project.",
  "choices": [
    "leave",
    "leaving",
    "left",
    "leaves"
  ],
  "answer": 2,
  "explanation": "being left は受動態の動名詞で「放置されていること」。plastic waste は「放置する側」ではなく「放置される側」なので過去分詞 left を使う。参照：Cutting Edge Y10 問題1。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "実問題形式",
    "語形変化"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TESTFORM_002",
  "testRound": "2nd",
  "type": "discourse_marker",
  "source": "第二回定期テスト B／Cutting Edge Y10 問題3",
  "title": "Once の補充",
  "question": "次の空所に最も合う語は？\n\n英文：\nThe frame is filled with recycled plastic bottles. (　) they are in place, necessary services like electric cables and water pipes are installed.",
  "choices": [
    "Unless",
    "Before",
    "Once",
    "Even if"
  ],
  "answer": 2,
  "explanation": "Once S V は「いったん〜すると／〜したら」。ボトルが所定の位置に入った後、設備が取り付けられる流れ。参照：Cutting Edge Y10 問題3。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "実問題形式",
    "接続語"
  ],
  "mistakeTag": "inference",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TESTFORM_003",
  "testRound": "2nd",
  "type": "discourse_marker",
  "source": "第二回定期テスト B／Cutting Edge Y10 問題4",
  "title": "So far の補充",
  "question": "次の空所に最も合う語句は？\n\n英文：\n(　), only a few houses have been completed, but if everything goes according to plan, the final village will have 120 homes.",
  "choices": [
    "As a result",
    "So far",
    "Fortunately",
    "For example"
  ],
  "answer": 1,
  "explanation": "現在までに完成した家が少ない、という現在完了の内容なので So far「これまでのところ」が最適。参照：Cutting Edge Y10 問題4。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "実問題形式",
    "語句補充"
  ],
  "mistakeTag": "inference",
  "status": "active"
},
{
  "id": "T2_CE_Y10_TESTFORM_004",
  "testRound": "2nd",
  "type": "story_sequence",
  "source": "第二回定期テスト C／Cutting Edge Y10 問題3-4",
  "title": "文挿入",
  "question": "次の文を入れる位置として最も適切なのはどこ？\n\n挿入文：\nOnce they are in place, necessary services like electric cables and water pipes are installed.\n\n本文：\n① The steel frame is filled with recycled plastic bottles.\n② The bottle-filled frame is covered with layers of concrete.\n③ Finally, standard windows, doors, and a roof are added.\n④ The structure is complete.",
  "choices": [
    "①の前",
    "①と②の間",
    "②と③の間",
    "③と④の間"
  ],
  "answer": 1,
  "explanation": "they は recycled plastic bottles を指す。ボトルを詰めた直後、コンクリートで覆う前に設備を取り付ける流れなので①と②の間。",
  "tags": [
    "第二回",
    "Cutting Edge Y10",
    "実問題形式",
    "文挿入"
  ],
  "mistakeTag": "inference",
  "status": "active"
},
{
  "id": "T2_FOCUS_07_TESTFORM_001",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト F-1／FOCUS 7-1",
  "title": "within minutes",
  "question": "次の空所に最も合う前置詞は？\n\n英文：\nEveryone knows someone who can walk into a room full of people and, (　) minutes, give an accurate description of the relationships between those people.",
  "choices": [
    "at",
    "within",
    "from",
    "out"
  ],
  "answer": 1,
  "explanation": "within minutes は「数分以内に／ものの数分で」。実問題の前置詞補充形式を再現。参照：FOCUS 7-1。",
  "tags": [
    "第二回",
    "FOCUS 7",
    "実問題形式",
    "構文補充"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_FOCUS_07_TESTFORM_002",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト F-2／FOCUS 7-2",
  "title": "the way in which",
  "question": "次の空所に最も合う語は？\n\n英文：\nBorrowing words from other languages is not the only way (　) which a language can develop its vocabulary.",
  "choices": [
    "on",
    "at",
    "in",
    "for"
  ],
  "answer": 2,
  "explanation": "the way in which S V で「SがVする方法」。参照：FOCUS 7-2。",
  "tags": [
    "第二回",
    "FOCUS 7",
    "実問題形式",
    "構文補充"
  ],
  "mistakeTag": "structure",
  "status": "active"
},
{
  "id": "T2_FOCUS_07_TESTFORM_003",
  "testRound": "2nd",
  "type": "translation_point",
  "source": "第二回定期テスト II／FOCUS 7-2",
  "title": "developed from within",
  "question": "次の英文の下線部に相当する部分の訳として最も自然なものは？\n\n英文：\nThere are many cases where the vocabulary of a language is developed “from within,” that is, by using the language’s existing resources.\n\n対象：where 以下",
  "choices": [
    "ある言語の語彙が、既存の資源を使わず外部から借用される",
    "ある言語の語彙が、その言語の既存の資源を使うことによって「内部から」発達する",
    "ある言語が、語彙を減らすために他言語の資源を使う",
    "既存の言語は、語彙を発達させる唯一の方法である"
  ],
  "answer": 1,
  "explanation": "対象は where 以下のみ。where は cases を受け、from within は「内部から」、that is は「すなわち」、by using ... は手段を表す。主節 There are many cases の「場合が多い」は訳に含めない。参照：FOCUS 7-2。",
  "tags": [
    "第二回",
    "FOCUS 7",
    "実問題形式",
    "下線部和訳"
  ],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_07_TESTFORM_004",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト F-3／FOCUS 7-3",
  "title": "good for",
  "question": "次の空所に最も合う前置詞は？\n\n英文：\nThis project may be good (　) both humans and animals.",
  "choices": [
    "at",
    "for",
    "on",
    "from"
  ],
  "answer": 1,
  "explanation": "be good for 〜 は「〜のためになる／〜に良い」。実問題では good (　) の形で問われた。",
  "tags": [
    "第二回",
    "FOCUS 7",
    "実問題形式",
    "前置詞補充"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TESTFORM_001",
  "testRound": "2nd",
  "type": "translation_point",
  "source": "第二回定期テスト D／FOCUS 8-2",
  "title": "after their release",
  "question": "次の英文の after their release の意味として最も自然なものは？\n\n英文：\nThey also make new friends and connections which they can use after their release.",
  "choices": [
    "彼らが友人を解放したあとで",
    "彼らが釈放されたあとで",
    "彼らが関係を断ったあとで",
    "彼らが刑罰を受ける前に"
  ],
  "answer": 1,
  "explanation": "release はここでは名詞で「釈放」。after their release は自然な日本語では「彼らが釈放されたあとで」と訳す。参照：FOCUS 8-2。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "実問題形式",
    "語句の意味"
  ],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TESTFORM_002",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト D-3／FOCUS 8-1",
  "title": "all of which",
  "question": "次の英文の all of which が指す内容として最も適切なのは？\n\n英文：\nHe drew the human body in different layers and from different angles, all of which led him to discover a great deal about the science of levers.",
  "choices": [
    "the human body だけ",
    "different layers だけ",
    "different angles だけ",
    "人体をさまざまな層・角度から描いたこと全体"
  ],
  "answer": 3,
  "explanation": "all of which は直前の内容全体を受ける非制限用法。「そうしたことすべてが彼を発見へ導いた」。参照：FOCUS 8-1。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "実問題形式",
    "指示内容"
  ],
  "mistakeTag": "reference",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TESTFORM_003",
  "testRound": "2nd",
  "type": "translation_point",
  "source": "第二回定期テスト D-3／FOCUS 8-1",
  "title": "無生物主語 lead O to do",
  "question": "下線部に相当する部分の訳として最も自然なものは？\n\n英文：\n..., all of which led him to discover a great deal about the science of levers.\n\n対象：all of which 以下",
  "choices": [
    "そのすべてを、彼はてこの科学から隠した",
    "そうしたことのすべてによって、彼はてこの科学について多くのことを発見することになった",
    "彼は、てこの科学を発見したすべての人を導いた",
    "そのすべては、彼が人体を描くことを妨げた"
  ],
  "answer": 1,
  "explanation": "無生物主語 lead O to do は「SによってOは〜するようになる」と訳すと自然。参照：FOCUS 8-1。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "実問題形式",
    "下線部和訳"
  ],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_TESTFORM_004",
  "testRound": "2nd",
  "type": "grammar_focus",
  "source": "第二回定期テスト F-3／FOCUS 8",
  "title": "while の補充",
  "question": "次の空所に最も合う接続詞は？\n\n英文：\nThe team will focus on intonation, voice, and speaking style in human speech, (　) finding out how the two communicate.",
  "choices": [
    "While",
    "Unless",
    "Until",
    "If"
  ],
  "answer": 0,
  "explanation": "while doing は「〜する一方で／〜しながら」。実問題原本は how the two communicate（その2者がどのように意思疎通するか）であり、how to communicate ではない。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "実問題形式",
    "接続詞補充"
  ],
  "mistakeTag": "grammar",
  "status": "active"
},
{
  "id": "T2_FOCUS_07_SELFCHECK_001",
  "testRound": "2nd",
  "type": "self_translation",
  "questionMode": "self_assessment",
  "source": "第二回定期テスト II／FOCUS 7-2",
  "title": "下線部和訳（自己採点）",
  "question": "次の下線部に相当する部分を日本語に訳そう。\n\nThere are many cases where the vocabulary of a language is developed “from within,” that is, by using the language’s existing resources.\n\n対象：where 以下",
  "selfInstruction": "紙に書くか、声に出して訳してから「答えを見る」を押そう。",
  "modelAnswer": "ある言語の語彙が「内部から」、すなわち、その言語の既存の資源を使うことによって発達する。",
  "keyPoints": "・where が cases を修飾していることを踏まえて訳している\n・from within を「内部から」と訳している\n・that is を「すなわち」と訳している\n・by using を手段として訳している\n・the language’s existing resources の情報を落としていない",
  "choices": [
    "できた",
    "要復習",
    "自己採点",
    "模範解答"
  ],
  "answer": 0,
  "explanation": "対象は where 以下のみ。主節 There are many cases の「場合が多くある」は模範訳に含めない。that is は「すなわち」、by doing は「〜することによって」。",
  "tags": [
    "第二回",
    "FOCUS 7",
    "下線部和訳",
    "自己採点"
  ],
  "mistakeTag": "transword",
  "status": "active"
},
{
  "id": "T2_FOCUS_08_SELFCHECK_001",
  "testRound": "2nd",
  "type": "self_translation",
  "questionMode": "self_assessment",
  "source": "第二回定期テスト D-3／FOCUS 8-1",
  "title": "下線部和訳（自己採点）",
  "question": "次の下線部に相当する部分を日本語に訳そう。\n\nHe drew the human body in different layers and from different angles, all of which led him to discover a great deal about the science of levers.\n\n対象：all of which 以下",
  "selfInstruction": "紙に書くか、声に出して訳してから「答えを見る」を押そう。",
  "modelAnswer": "そうしたことのすべてによって、彼はてこの科学について多くのことを発見することになった。",
  "keyPoints": "・all of which が前の内容全体を受ける\n・lead O to do を自然な無生物主語で訳す\n・a great deal を「多くのこと」と訳す\n・about the science of levers の情報を落としていない",
  "choices": [
    "できた",
    "要復習",
    "自己採点",
    "模範解答"
  ],
  "answer": 0,
  "explanation": "all of which は前の内容全体を受ける。lead O to do は「SによってOは〜するようになる」。",
  "tags": [
    "第二回",
    "FOCUS 8",
    "下線部和訳",
    "自己採点"
  ],
  "mistakeTag": "transword",
  "status": "active"
}

];
