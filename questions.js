// questions_test1.js
// 第一回英語定期テスト対策アプリ用 追加問題データ
// 作成方針: status は確認前のため draft。確認後に active へ変更。
// 注意: GitHub に授業プリントPDFは置かず、この questions.js データだけを統合する想定。

const QUESTIONS = [
  {
    "id": "T1_CE_Y01_001",
    "testRound": "1st",
    "type": "reading_reference",
    "source": "Cutting Edge Y01 問題1",
    "title": "it が指す内容",
    "question": "It makes us wonder why scientists can’t find a treatment for the regular cold ... の It が指す内容として最も自然なものは？",
    "choices": [
      "scientists can’t find a treatment",
      "the regular cold",
      "spring or winter",
      "most people catch colds in spring or winter"
    ],
    "answer": 3,
    "explanation": "It を spring or winter や the regular cold に置き換えると不自然。ここでは直前の文内容全体、つまり『大多数の人々が春や冬の間に風邪をひくこと（most people catch colds in spring or winter）』を受けている。参照：Cutting Edge Y01 問題1",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "指示語",
      "it"
    ],
    "mistakeTag": "指示語の戻り先ミス",
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
    "mistakeTag": "構文を拾えていない",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y01_003",
    "testRound": "1st",
    "type": "reading_example",
    "source": "Cutting Edge Y01 問題3",
    "title": "具体例を探す",
    "question": "When a cold attacks your body, your body works hard to stop it. の具体例として最も本文に合うものは？",
    "choices": [
      "春や冬に風邪をひきやすいこと",
      "鼻の血流が増え呼吸が苦しくなること",
      "月に人を送る技術があること",
      "風邪薬がすぐに効くこと"
    ],
    "answer": 1,
    "explanation": "直後の For example 以下が具体例。blood flows quickly to your nose and as a result, you can’t breathe very well が『体が風邪を止めようと働く』例になっている。参照：Cutting Edge Y01 問題3",
    "tags": [
      "第一回",
      "Cutting Edge Y01",
      "具体例",
      "本文根拠"
    ],
    "mistakeTag": "本文根拠を見つけられない",
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
    "mistakeTag": "文脈判断ミス",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "選択肢の読み違い",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_001",
    "testRound": "1st",
    "type": "reading_reference",
    "source": "Cutting Edge Y03 問題2",
    "title": "It is called journaling.",
    "question": "It is called journaling. の It が指す内容として最も自然なものは？",
    "choices": [
      "紫色の花",
      "自分の行動や考えを書くこと",
      "ストレスを減らす専門家",
      "塗り絵の本そのもの"
    ],
    "answer": 1,
    "explanation": "It は前文内容を受ける。代入して『自分の行動や考えを書くことは journaling と呼ばれる』とすると自然。参照：Cutting Edge Y03 問題2",
    "tags": [
      "第一回",
      "Cutting Edge Y03",
      "指示語",
      "it"
    ],
    "mistakeTag": "指示語の戻り先ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_002",
    "testRound": "1st",
    "type": "discourse_marker",
    "source": "Cutting Edge Y03 問題4",
    "title": "In addition",
    "question": "coloring can reduce stress という内容に続けて、coloring can bring out your imagination ... と追加する空所に最も合う語句は？",
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
    "mistakeTag": "文脈判断ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y03_003",
    "testRound": "1st",
    "type": "translation_point",
    "source": "Cutting Edge Y03 問題5",
    "title": "Sitting down and coloring の主語化",
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
    "mistakeTag": "構文を拾えていない",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y04_001",
    "testRound": "1st",
    "type": "reading_reason",
    "source": "Cutting Edge Y04 問題4",
    "title": "月が乾燥している理由",
    "question": "the moon is very dry because the impact created so much heat that it dried up all the water. の理由説明として最も自然なものは？",
    "choices": [
      "月が地球から遠く離れているから",
      "月の中心部に鉄が多く含まれていたから",
      "衝突で水が干上がるほどの熱が生じたから",
      "宇宙飛行士が月の石を持ち帰ったから"
    ],
    "answer": 2,
    "explanation": "because 以下が理由。impact は前の『大きな物体と地球の衝突』を指し、その衝突で水が干上がるほどの熱が生じた。参照：Cutting Edge Y04 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y04",
      "理由説明",
      "本文根拠"
    ],
    "mistakeTag": "本文根拠を見つけられない",
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
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_001",
    "testRound": "1st",
    "type": "reading_reason",
    "source": "Cutting Edge Y05 問題1",
    "title": "It is important for ... to do",
    "question": "It is important for the printing process ( 1 ). の空所に最も合うものは？",
    "choices": [
      "to operate in extreme conditions",
      "to be completed as quickly as possible in the near future",
      "to start according to the plan designed by computer software programs",
      "to be shown to everyone visiting the company"
    ],
    "answer": 0,
    "explanation": "前文に high winds, blowing dust and rain とあり、悪条件の中でプリントできたことが述べられている。よって『極端な状況の中で機能すること』が最もつながる。参照：Cutting Edge Y05 問題1",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "文脈判断",
      "不定詞"
    ],
    "mistakeTag": "文脈判断ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_002",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y05 問題2",
    "title": "on-site の推測",
    "question": "The homes are printed on-site, so the equipment has to be light enough to move from one property to the next. の on-site の意味として最も自然なものは？",
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
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y05_003",
    "testRound": "1st",
    "type": "reading_tf",
    "source": "Cutting Edge Y05 問題4",
    "title": "quarter speed と full speed",
    "question": "4分の1のスピードで48時間足らずなら、全速力では何時間程度と考えられる？",
    "choices": [
      "約48時間",
      "約192時間",
      "約24時間",
      "約12時間"
    ],
    "answer": 3,
    "explanation": "4分の1のスピードで48時間なので、全速力では48÷4=12時間程度。参照：Cutting Edge Y05 問題4",
    "tags": [
      "第一回",
      "Cutting Edge Y05",
      "内容一致",
      "数字"
    ],
    "mistakeTag": "本文根拠を見つけられない",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y06_001",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y06",
    "title": "be based on",
    "question": "This theory is based on ... の be based on の意味として最も近いものは？",
    "choices": [
      "〜に基づいている",
      "〜と重なる",
      "〜をわざと行う",
      "〜する傾向がある"
    ],
    "answer": 0,
    "explanation": "be based on は『〜に基づいている』。説や理論の根拠を示すときに使う。参照：Cutting Edge Y06",
    "tags": [
      "第一回",
      "Cutting Edge Y06",
      "重要表現",
      "be based on"
    ],
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
  },
  {
    "id": "T1_CE_Y06_002",
    "testRound": "1st",
    "type": "vocab_context",
    "source": "Cutting Edge Y06",
    "title": "tend to do",
    "question": "Women’s clothes tend to button up differently. の tend to do の意味として最も近いものは？",
    "choices": [
      "〜することを許可する",
      "〜しないようにする",
      "〜する自由がある",
      "〜する傾向がある"
    ],
    "answer": 3,
    "explanation": "tend to do は『〜する傾向がある』。習慣・一般的傾向を表す。参照：Cutting Edge Y06",
    "tags": [
      "第一回",
      "Cutting Edge Y06",
      "重要表現",
      "tend to do"
    ],
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
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
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_01_001",
    "testRound": "1st",
    "type": "translation_point",
    "source": "FOCUS 1-1",
    "title": "名詞を動詞化して訳す",
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
    "mistakeTag": "日本語化ミス",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_04_003",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 4-2",
    "title": "過去分詞の後置修飾",
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
    "mistakeTag": "構文を拾えていない",
    "status": "draft"
  },
  {
    "id": "T1_FOCUS_05_001",
    "testRound": "1st",
    "type": "grammar_focus",
    "source": "FOCUS 5-1",
    "title": "独立分詞構文",
    "question": "each having a specialized function の each having はどのように考える？",
    "choices": [
      "each が意味上の主語になる分詞構文",
      "命令文の主語",
      "比較表現の一部",
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
    "mistakeTag": "構文を拾えていない",
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
    "mistakeTag": "構文を拾えていない",
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
      "説、学説、理論",
      "驚くべき",
      "理にかなう、筋が通っている"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "実際（は）",
      "素材、材料",
      "組織、団体"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（病気による）熱、発熱",
      "素材、材料",
      "～ではないかと恐れる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜に集中する",
      "～を修理する",
      "薬"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "世の中には、どこかに",
      "ひとかけらの〜、〜の一片",
      "普通の、通常の",
      "理にかなう、筋が通っている"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "適切に",
      "楽しみ、楽しいもの",
      "大量生産する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（病気による）熱、発熱",
      "理由",
      "実際（は）",
      "わざと、故意に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "治療法",
      "薬",
      "～を含む、～が入っている",
      "ジャンケン"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を持続させる、継続する",
      "住宅建設",
      "〜によれば",
      "作動する、機能する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "形",
      "～を説明する",
      "AをBに提供する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜のボタンを留める［掛ける］",
      "静かに、目立たないように",
      "ジャンケン"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（試合・競技の）相手、敵",
      "密度",
      "～を完成する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "開催される",
      "教え、教訓",
      "～を投げる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "さらに、加えて",
      "滑らかな、すべすべした",
      "血液",
      "素材、材料"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～から落ちる",
      "軽量の",
      "極端な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "客",
      "現代の",
      "呼吸する",
      "段階"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "巨大な",
      "さらに、加えて",
      "鉄",
      "実は、実際は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "実際に、実は",
      "日常の",
      "熱、熱さ",
      "薬"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（赤ん坊が）母乳を飲む",
      "（規模が）大きくなる、拡大する",
      "（病気による）熱、発熱",
      "要因"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（物の一部が）はがれる、取れる",
      "呼吸困難",
      "～を想像する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に挨拶する",
      "理由",
      "（感情・音などが）弱まる、なくなる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "違い",
      "最後に、ついに、ようやく",
      "～を受け入れる、容認する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を作り出す",
      "隠れた、人目につかない",
      "痛み",
      "大多数の〜、大部分の～"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〔動〕～をリラックスさせる",
      "競争力のある",
      "問題、悩み事、心配事"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "世の中には、どこかに",
      "ひとかけらの〜、〜の一片",
      "実は、実際は",
      "ストレス"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "スペース、空白",
      "風呂に入る",
      "モルタル",
      "10億（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "物体",
      "大多数の〜、大部分の～",
      "薬を飲む",
      "裏口"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "居心地の悪い",
      "治療法",
      "様々な〜",
      "〜を埋める、塗りつぶす"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に挨拶する",
      "呼吸困難",
      "遠く離れて",
      "発展途上国"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "今のところ",
      "〜と共同する、提携する",
      "痛み"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "外側の",
      "衣類、衣料品",
      "道順、経路"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "共同創設者",
      "近隣、地域",
      "～を生み出す",
      "反応"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（卓球・テニスなどの）ラリー",
      "物質",
      "～を持続させる、継続する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜の形で手に入る［売られている］",
      "～（ということ）を証明する",
      "適切に",
      "物体"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を襲う、攻撃する",
      "驚くべき",
      "武器",
      "薬"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "確かに、確実に",
      "〜しようとする、企てる",
      "独力で、一人で",
      "〜だろうかと思う"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜で満たされている",
      "密度",
      "客",
      "～するたびに"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "スペース、空白",
      "道順、経路",
      "～するたびに",
      "〜を構成する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "汗をかく",
      "住まい",
      "教え、教訓",
      "裕福な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "地域社会",
      "巨大な",
      "〜につき、〜あたり（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に挨拶する",
      "適切に",
      "～を投げる",
      "群衆、観衆、聴衆"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "戦略",
      "滑らかな、すべすべした",
      "作業、課題"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（〜の）大きさがある",
      "4分の1（の）",
      "裏庭",
      "昔は、過去に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を減らす",
      "～から転がり落ちる",
      "起源",
      "進歩"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "痛み",
      "日常の",
      "彗（すい）星、ほうき星",
      "説、学説、理論"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "ストレス",
      "〜に対する需要",
      "～から落ちる",
      "現地で、現場で"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜の形で手に入る［売られている］",
      "滑らかな、すべすべした",
      "ロボット工学",
      "材料、素材"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "教え、教訓",
      "ロボット工学",
      "滑る",
      "住まい"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（感情・音などが）弱まる、なくなる",
      "独力で、一人で",
      "裏口",
      "（病気による）熱、発熱"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "鉄",
      "平等な",
      "～ではないかと恐れる",
      "反応"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "説、学説、理論",
      "現代の",
      "鉄"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "さらに、加えて",
      "住まい",
      "～だと確信している、自信がある",
      "専門家"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "決定する、強い影響を与える",
      "～を後ろめたいと感じる",
      "型、版",
      "薬"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "汗をかく",
      "共同創設者",
      "～に挨拶する",
      "実際に、実は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "秒",
      "特に",
      "居心地の悪い",
      "〜を干上がらせる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "AかあるいはB",
      "～するたびに",
      "〜に集中する",
      "健康的な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "4分の1（の）",
      "滑らかな、すべすべした",
      "～を修理する",
      "～に挨拶する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "住まい",
      "～を投げる",
      "封筒",
      "ジャンケン"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "会議、（定期的な）大会",
      "メモ、短い手紙",
      "ほこり、ちり",
      "〜に対する需要"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～ということを探り出す、～だと知る",
      "自由に〜する［できる］",
      "AかあるいはB"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "伝統的な",
      "〜に基づいている",
      "～を続ける",
      "理由"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "薬",
      "～を誇りに思う、自慢する",
      "～に直面する",
      "〜だろうかと思う"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "今のところ（は）",
      "静かに、目立たないように",
      "ストレス",
      "理論"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "モルタル",
      "〜しようとする、企てる",
      "塗り絵",
      "（試合・競技の）相手、敵"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "風呂に入る",
      "活動",
      "実際（は）",
      "その結果"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～（ということ）を証明する",
      "（〜の）大きさがある",
      "世界中で［の］",
      "～を選ぶ"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "ひとかけらの〜、〜の一片",
      "白紙の、何も書［描］いていない",
      "～を選ぶ",
      "実は、実際は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～だと確信している、自信がある",
      "クレヨン",
      "～を感知する",
      "彗（すい）星、ほうき星"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "子ども時代",
      "ボタン",
      "～（ということ）を証明する",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を強調する",
      "卓球",
      "お気に入りの、好きな",
      "様々な〜"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "進歩",
      "〜を埋める、塗りつぶす",
      "理由",
      "10億（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "フェアプレーで勝負する",
      "ロボットの",
      "楽しみ、楽しいもの",
      "教え、教訓"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "物質",
      "クレヨン",
      "～を作り出す",
      "一緒になる、集まる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "同時に",
      "最新の",
      "（ある目的のための）行為、活動、練習課題",
      "道順、経路"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "地域社会",
      "精度、正確さ",
      "～を含む、～が入っている",
      "治療法"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "出てくる、現れる",
      "成功",
      "〜で満たされている",
      "～を減らす"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "軌道",
      "手描きの",
      "～から落ちる",
      "〜によれば"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "世の中には、どこかに",
      "衣類、衣料品",
      "反応",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "遠く離れて",
      "～を説明する",
      "スペース、空白",
      "〜を干上がらせる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "住まい",
      "（ある目的のための）行為、活動、練習課題",
      "起源",
      "驚くべき"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に直面する",
      "～を投げる",
      "専門家",
      "特に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "秒",
      "（卓球・テニスなどの）ラリー",
      "～を減らす",
      "性、ジェンダー"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "最新の",
      "…を〜に集中させる",
      "確かに、確実に（は）",
      "純粋さ"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を許す",
      "～を付け加える、～と言い添える",
      "作業、課題",
      "宇宙飛行士"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "一緒になる、集まる",
      "さらに、加えて",
      "〜に集中する",
      "～を含む、～が入っている"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "物質",
      "問題、悩み事、心配事",
      "右利きの",
      "正しい、正確な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を受け入れる、容認する",
      "トーナメント、勝ち抜き戦",
      "実際に、実は",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "ロボット工学",
      "（ある目的のための）行為、活動、練習課題",
      "〜を引き出す",
      "～を付け加える、～と言い添える"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に直面する",
      "違い",
      "大喜び、歓喜"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "実際に、実は",
      "（ある目的のための）行為、活動、練習課題",
      "子ども時代",
      "変化をもたらす、影響を与える、状況を変える"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "近隣、地域",
      "～に挨拶する",
      "付け加えて言う、言い足す",
      "活動"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜と共同する、提携する",
      "脳",
      "…を〜に集中させる",
      "薬を飲む"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "右利きの",
      "ほこり、ちり",
      "活発な、活動的な",
      "滑らかな、すべすべした"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "店員",
      "〜によれば",
      "健康的な",
      "物体"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "一緒になる、集まる",
      "形",
      "日常の",
      "～に挨拶する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "治療法",
      "推測",
      "昔は、過去に",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "理論",
      "実際に、実は",
      "〜に（さっと）目を通す",
      "裕福な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "巨大な",
      "確かに、確実に",
      "現代の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "その結果",
      "～から転がり落ちる",
      "～を続ける"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "住まい",
      "世の中には、どこかに",
      "今のところ"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜だろうかと思う",
      "クレヨン",
      "群衆、観衆、聴衆"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を滑らせる、さっと動かす",
      "健康的な",
      "正しい、正確な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "進歩した、先進の",
      "〜だろうかと思う",
      "確かに、確実に（は）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "さらに、加えて",
      "普通の、通常の",
      "今のところ",
      "材料、素材"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "大量生産する",
      "所有地、土地",
      "住宅建設"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "起源",
      "現代の",
      "〜だろうかと思う",
      "脳"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "競争力のある",
      "遠く離れて",
      "普通の、通常の",
      "マーカー（ペン）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "滑る",
      "宇宙飛行士",
      "確かに、確実に（は）",
      "〜を構成する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "群衆、観衆、聴衆",
      "衝突、衝撃",
      "理論",
      "～を投げる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "競争力のある",
      "〜だろうかと思う",
      "〜に取り組む"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "適切に",
      "同時に",
      "呼吸困難"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に直面する",
      "〜する傾向がある",
      "宇宙飛行士"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "繰り返しの多い",
      "秒",
      "宇宙飛行士",
      "～から落ちる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "使用人、召使い",
      "大喜び、歓喜",
      "〜に参加する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "さらに、加えて",
      "特に",
      "最後に、ついに、ようやく",
      "素材、材料"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "軌道",
      "起源",
      "変化をもたらす、影響を与える、状況を変える",
      "確かに、確実に（は）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "記者、レポーター",
      "成功",
      "〜から形成される、〜からできている",
      "軽量の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "群衆、観衆、聴衆",
      "〜しようとする、企てる",
      "物体",
      "（〜の）大きさがある"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を続ける",
      "巨大な",
      "右利きの",
      "4分の1（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に直面する",
      "〜を干上がらせる",
      "～を説明する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "作業、課題",
      "～を生み出す",
      "フェアプレーで勝負する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（病気による）熱、発熱",
      "形",
      "短い",
      "伝統的な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を強調する",
      "～を後ろめたいと感じる",
      "開催される"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～ということを探り出す、～だと知る",
      "敵",
      "衝突、衝撃",
      "～ではないかと恐れる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "今のところ（は）",
      "～を説明する",
      "彗（すい）星、ほうき星",
      "～を投げる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を受け入れる、容認する",
      "呼吸する",
      "～を作り出す、生み出す",
      "実は、実際は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を持続させる、継続する",
      "～から落ちる",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "世界中で［の］",
      "鉄",
      "変化をもたらす、影響を与える、状況を変える",
      "（ゴルフの）ホールインワン（ゴルフ競技において1打目でカップにボールを入れること）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "確かに、確実に（は）",
      "実は、実際は",
      "物質",
      "道順、経路"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "即座に、瞬時に",
      "出てくる、現れる",
      "～を作り上げる、生み出す"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "示唆する",
      "〜を干上がらせる",
      "外側の",
      "…を〜に集中させる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "静かに、目立たないように",
      "薬を飲む",
      "競争力のある"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "確かに、確実に",
      "～を続ける",
      "AかあるいはB",
      "…を〜に集中させる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "起源",
      "～を裏づける",
      "確かに、確実に",
      "開催される"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "進歩した、先進の",
      "呼吸困難",
      "今のところ（は）",
      "〜を干上がらせる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "汗をかく",
      "最後に",
      "～を受け入れる、容認する",
      "最高経営責任者（CEO）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "平等な",
      "～を完成する",
      "～を説明する",
      "手描きの"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "決定する、強い影響を与える",
      "裕福な",
      "～を許可する",
      "（卓球・テニスなどの）ラリー"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "現代の",
      "〜に取り組む",
      "記者、レポーター",
      "～するたびに"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "右利きの",
      "示唆する",
      "会議、（定期的な）大会",
      "出てくる、現れる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "作動する、機能する",
      "呼吸困難",
      "確かに、確実に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に直面する",
      "高齢の",
      "～を開発する",
      "剣"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "形",
      "モルタル",
      "決定する、強い影響を与える",
      "共同創設者"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "変化をもたらす、影響を与える、状況を変える",
      "～に挨拶する",
      "素材、材料",
      "ストレス"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "物体",
      "封筒",
      "ロボット工学",
      "一緒になる、集まる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "10億（の）",
      "進歩した、先進の",
      "近隣、地域",
      "～を許す"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を作り出す、生み出す",
      "密度",
      "共同創設者",
      "ほこり、ちり"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "痛み",
      "宇宙飛行士",
      "実際に、実は",
      "裏口"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "日常の",
      "吹く、吹きつける",
      "適切に",
      "普通の、通常の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "教え、教訓",
      "〜によれば",
      "組み合わせ"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "今のところ（は）",
      "軌道",
      "作動する、機能する",
      "地域社会"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "服を着る",
      "極端な",
      "フェアプレーで勝負する",
      "AをBに提供する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "モルタル",
      "～を投げる",
      "災害",
      "（規模が）大きくなる、拡大する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "示唆する",
      "敵",
      "発展途上国",
      "健康的な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "メモ、短い手紙",
      "軽量の",
      "〔形〕リラックスさせる",
      "脳"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "風呂に入る",
      "世界中で［の］",
      "アルミニウム",
      "～を後ろめたいと感じる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "様々な〜",
      "～をまねる",
      "（〜の）大きさがある",
      "〜で満たされている"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "最高経営責任者（CEO）",
      "現地で、現場で",
      "普通の、通常の",
      "最後に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "進歩",
      "成功",
      "メモ、短い手紙",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "性、ジェンダー",
      "説、学説、理論",
      "所有地、土地",
      "問題、悩み事、心配事"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "同時に",
      "4分の1（の）",
      "説、学説、理論",
      "実は、実際は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "形",
      "理由",
      "〜と共同する、提携する",
      "実は、実際は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "武器",
      "〜のボタンを留める［掛ける］",
      "〜しようとする、企てる",
      "〜の形で手に入る［売られている］"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "純粋さ",
      "AをBに提供する",
      "正しい、正確な",
      "現代の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "驚くべき",
      "日常の",
      "解決法、解決策",
      "衝突、衝撃"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "滑る",
      "～を強調する",
      "最高経営責任者（CEO）",
      "敵"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を続ける",
      "大きさ、規模、重要性",
      "地域社会",
      "純粋さ"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～（ということ）を証明する",
      "平等な",
      "決定する、強い影響を与える",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を許す",
      "10億（の）",
      "住まい",
      "所有地、土地"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "残り",
      "組織、団体",
      "10億（の）",
      "滑らかな、すべすべした"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "実際に、実は",
      "巨大な",
      "〜に取り組む",
      "装置、機材"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "普通の、通常の",
      "ロボットの",
      "近隣、地域",
      "（卓球の）ラケット"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "大量生産する",
      "変化をもたらす、影響を与える、状況を変える",
      "4分の1（の）",
      "（ゴルフの）ホールインワン（ゴルフ競技において1打目でカップにボールを入れること）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "確かに、確実に（は）",
      "付け加えて言う、言い足す",
      "（規模が）大きくなる、拡大する",
      "宇宙飛行士"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "…を〜に連れ戻す",
      "発展途上国",
      "～を付け加える、～と言い添える",
      "産業用ロボット"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "熱、熱さ",
      "伝統的な",
      "平等な",
      "戦略"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "汗をかく",
      "塗り絵",
      "〜しようとする、企てる",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "住宅建設",
      "同時に",
      "地域社会",
      "決定する、強い影響を与える"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "身分の高い",
      "地域社会",
      "成功"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "実際に、実は",
      "～だと確信している、自信がある",
      "平等な",
      "呼吸困難"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "出てくる、現れる",
      "進歩した、先進の",
      "違い",
      "治療法"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "右利きの",
      "ボタン",
      "〜しようとする、企てる",
      "血液"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を許す",
      "〜に基づいている",
      "〜のボタンを留める［掛ける］",
      "即座に、瞬時に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "さらに、加えて",
      "発展途上国",
      "確かに、確実に",
      "独力で、一人で"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "驚くべき",
      "説、学説、理論",
      "風邪をひく",
      "剣"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "武器",
      "秒",
      "実際に、実は",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "近隣、地域",
      "物体",
      "右利きの",
      "～に直面する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（卓球の）ラケット",
      "〔動〕～をリラックスさせる",
      "～に直面する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に挨拶する",
      "AをBに提供する",
      "最新の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "道順、経路",
      "～から落ちる",
      "剣",
      "進歩"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "近隣、地域",
      "裕福な",
      "地域社会",
      "～（ということ）を証明する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "発展途上国",
      "熱、熱さ",
      "～を滑らせる、さっと動かす",
      "裏庭"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "大多数の〜、大部分の～",
      "フェアプレーで勝負する",
      "敵",
      "開催される"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "卓球",
      "〜に重なる",
      "〜する傾向がある",
      "〜に参加する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に仕える、奉仕する",
      "身分の高い",
      "呼吸する",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜に対する需要",
      "密度",
      "自由に〜する［できる］",
      "〜と共同する、提携する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "世界中で［の］",
      "～を強調する",
      "衝突、衝撃"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜の形で手に入る［売られている］",
      "～を裏づける",
      "裕福な"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（線で描いた）絵、線画、デッサン",
      "わざと、故意に",
      "進歩",
      "高齢の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を減らす",
      "～を生み出す",
      "鉄"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "子ども時代",
      "推測",
      "～を完成する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "最後に、ついに、ようやく",
      "軽量の",
      "出てくる、現れる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "その結果",
      "～を強調する",
      "大量生産する",
      "裏庭"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "決定する、強い影響を与える",
      "裕福な",
      "変化をもたらす、影響を与える、状況を変える"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "宇宙飛行士",
      "極端な",
      "特に",
      "メモ、短い手紙"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を作り上げる、生み出す",
      "身分の高い",
      "精度、正確さ",
      "～を滑らせる、さっと動かす"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～に仕える、奉仕する",
      "遠く離れて",
      "服を着る",
      "活動"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "店員",
      "昔は、過去に",
      "使用人、召使い",
      "〔形〕リラックスさせる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "理由",
      "たいてい、大部分は",
      "～を選ぶ",
      "10億（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "推測",
      "平等",
      "段階"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "記者、レポーター",
      "理由",
      "〜に基づいている"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "現地で、現場で",
      "ロボットの",
      "～をまねる",
      "群衆、観衆、聴衆"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "熱、熱さ",
      "武器",
      "4分の1（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "最後に",
      "～を選ぶ",
      "組み合わせ",
      "〜する傾向がある"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～ではないかと恐れる",
      "要因",
      "滑る",
      "解決法、解決策"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "その結果",
      "現代の",
      "進歩",
      "昔は、過去に"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "最新の",
      "〜に集中する",
      "平等",
      "素材、材料"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "呼吸困難",
      "性、ジェンダー",
      "成功",
      "群衆、観衆、聴衆"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "痛み",
      "ひとかけらの〜、〜の一片",
      "産業用ロボット",
      "4分の1（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "確かに、確実に（は）",
      "驚くべき",
      "群衆、観衆、聴衆"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "封筒",
      "汗をかく",
      "密度",
      "〜を構成する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "進歩",
      "産業用ロボット",
      "みじめな"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "活発な、活動的な",
      "要因",
      "出てくる、現れる",
      "～を投げる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "裕福な",
      "日常の",
      "マーカー（ペン）",
      "〜する傾向がある"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "独力で、一人で",
      "身分の高い",
      "ロボットの",
      "発展途上国"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（赤ん坊が）母乳を飲む",
      "住宅建設",
      "店員",
      "裏庭"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "お気に入りの、好きな",
      "高齢の",
      "さらに、加えて",
      "秒"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～を投げる",
      "～を完成する",
      "段階",
      "所有地、土地"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～だと確信している、自信がある",
      "～から転がり落ちる",
      "～に仕える、奉仕する",
      "形"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜しようとする、企てる",
      "理由",
      "～を打ち負かす、～に勝る、勝つ",
      "高齢の"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "服を着る",
      "ほこり、ちり",
      "物質"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "ストレス",
      "ほこり、ちり",
      "フェアプレーで勝負する",
      "～を持続させる、継続する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "プロ（選手）",
      "～を感知する",
      "～を裏づける",
      "薬"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "問題、悩み事、心配事",
      "平等な",
      "形",
      "4分の1（の）"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜のボタンを留める［掛ける］",
      "専門家",
      "即座に、瞬時に",
      "（卓球・テニスなどの）ラリー"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜を引き出す",
      "戦略",
      "〜を埋める、塗りつぶす",
      "〔形〕リラックスさせる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "要因",
      "隠れた、人目につかない",
      "卓球",
      "薬を飲む"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "脳",
      "要因",
      "プロ（選手）",
      "（規模が）大きくなる、拡大する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "（物の一部が）はがれる、取れる",
      "～を想像する",
      "（規模が）大きくなる、拡大する",
      "使用人、召使い"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～から転がり落ちる",
      "居心地の悪い",
      "（病気による）熱、発熱"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "戦略",
      "痛み",
      "トーナメント、勝ち抜き戦",
      "～をまねる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "店員",
      "（試合・競技の）相手、敵",
      "独力で、一人で",
      "（病気による）熱、発熱"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜に取り組む",
      "鉄",
      "秒",
      "世界中で［の］"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "吹く、吹きつける",
      "滑る",
      "精度、正確さ",
      "大きさ、規模、重要性"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "〜に参加する",
      "（卓球の）ラケット",
      "近隣、地域",
      "実際に、実は"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "風呂に入る",
      "形",
      "～を持続させる、継続する",
      "卓球"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "クレヨン",
      "メモ、短い手紙",
      "（卓球・テニスなどの）ラリー",
      "性、ジェンダー"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "記者、レポーター",
      "競争力のある",
      "滑らかな、すべすべした",
      "～を許可する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "産業化、工業化",
      "クレヨン",
      "装置、機材",
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "産業化、工業化",
      "変化をもたらす、影響を与える、状況を変える",
      "（ゴルフの）ティー、球をのせる台",
      "衣類、衣料品"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "形",
      "（ゴルフの）ホールインワン（ゴルフ競技において1打目でカップにボールを入れること）",
      "群衆、観衆、聴衆",
      "～を修理する"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "剣",
      "塗り絵",
      "群衆、観衆、聴衆",
      "一緒になる、集まる"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "～ではないかと恐れる",
      "～ということを探り出す、～だと知る",
      "反応",
      "〜に対する需要"
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
    "mistakeTag": "単語・熟語の意味ミス",
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
      "大多数の〜、大部分の～",
      "大喜び、歓喜",
      "～を作り上げる、生み出す",
      "～に挨拶する"
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
    "mistakeTag": "単語・熟語の意味ミス",
    "status": "draft"
  }
];

// ブラウザ直読み用: const QUESTIONS を参照
// Node/CommonJS で確認したい場合用
if (typeof module !== "undefined") {
  module.exports = QUESTIONS;
}
