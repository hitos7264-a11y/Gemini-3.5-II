/* =========================================================
   Gemini 3.5 大予想 — Search Index
   全章の見出し・要約を検索可能に
   ========================================================= */
window.SEARCH_INDEX = [
    // 序章
    { url: "chapters/00-prologue.html", chapter: "序章", title: "なぜ「Gemini 3.5」を今語るのか",
      body: "2026年のAI業界は異様に早く進んでおり、OpenAIはGPT‑5.2/5.4、AnthropicはClaude Opus 4.5から4.6、xAIはGrok 5を公にした。Google DeepMindは2025年11月にGemini 3 Proを、2026年2月19日にGemini 3.1 ProをリリースしLMArenaで1501 Eloを獲得。次の本命として注目されるのがコード名Snow Bunny、通称Gemini 3.5。2026年5月19日〜20日のGoogle I/Oで発表される可能性が高い。",
      tags: "prologue 序章 Snow Bunny Google I/O 2026" },

    // 1章
    { url: "chapters/01-current.html", chapter: "第1章", title: "いまGoogleのモデル棚に並んでいるもの — 2026年4月の現在地",
      body: "フラッグシップは2月19日のGemini 3.1 Pro Preview。Low/Medium/Highのスリーティア・シンキングシステムを搭載。3月以降はFlash-Lite、embedding-2、Lyria 3、Flash Live、Veo 3.1 Lite、Flex/Priority推論ティア、Gemma 4、Robotics‑ER 1.6、Flash TTSなど周辺モデルが怒涛のアップデート。3.1ブランドを軸にエコシステムが肥大化。",
      tags: "Gemini 3.1 Pro Flash Flash-Lite TTS Robotics-ER Lyria Veo Gemma エコシステム" },

    // 2章
    { url: "chapters/02-release.html", chapter: "第2章", title: "リリース時期予想 — 本命はGoogle I/O 2026",
      body: "Geminiは半年周期で大バージョン、3ヶ月周期でマイナーのリズム。次の.5は2026年5月前後が自然で、Google I/O 2026(5月19-20日)が最有力。Polymarketでは6月30日までで20%、5月31日まで8%。Manifoldでは4.0は8月29%、9月31%。本命シナリオは4月末に3.2 Proブリッジ、5月I/Oで3.5 Preview、6-7月GA。",
      tags: "リリース 時期 Google I/O Polymarket Manifold Prediction Market 予測市場" },

    // 3章
    { url: "chapters/03-codenames.html", chapter: "第3章", title: "コードネーム「Snow Bunny」と2つの猛禽",
      body: "Snow Bunnyは2025年12月〜2026年1月に観測された初期チェックポイント。Fierce Falconは精密さ・論理・コーディング重視、Ghost Falconは創造性・ビジュアル・デザイン重視と役割分担の可能性。Ghost Falcon.orgは3 Flash/Pro GAと解釈する対立視点。3.5はマルチモデル・コラボレーションを前面に出す可能性。",
      tags: "Snow Bunny Snowbunny Fierce Falcon Ghost Falcon コードネーム LMArena LaMarina" },

    // 4章
    { url: "chapters/04-features.html", chapter: "第4章", title: "期待される機能 — DeepThink標準搭載と「フルスタック創造機」",
      body: "Deep Thinkモードの標準搭載が最有力。Gemini 3 Deep ThinkはARC‑AGI‑2で45.1%、HLEで41%台。3.5ではHighティアがデフォルトでさらに深くなる。一ショットでフルスタック生成(3000行以上のコード、Game Boyエミュレータ、3D群衆シミュレーション、ISSダッシュボード)。Flash Live/TTS/Veo/Lyria/Robotics‑ERとのオーケストレーター機能。",
      tags: "Deep Think フルスタック Game Boy エミュレータ Antigravity エージェント Orchestrator" },

    // 5章
    { url: "chapters/05-benchmarks.html", chapter: "第5章", title: "ベンチマーク予想 — 3.1 Proから「もう一段」",
      body: "Gemini 3.1 ProはARC-AGI-2 77.1%、HLE 44.4%、GPQA Diamond 94.3%、SWE-Bench Verified 80.6%、LiveCodeBench Pro 2887 Elo、BrowseComp 85.9%。3.5ではARC-AGI-2で82-85%、HLEで48-52%、GPQAで95-96%、SWE-Benchで83-85%、LiveCodeBench Proで3000 Elo超が現実的。LMArena Eloは1550-1600のレンジ。",
      tags: "ベンチマーク HLE ARC-AGI-2 GPQA SWE-Bench Terminal-Bench BrowseComp LiveCodeBench LMArena Elo MRCR MMMU" },

    // 6章
    { url: "chapters/06-context.html", chapter: "第6章", title: "コンテキストウィンドウとマルチモーダリティ",
      body: "3.1 Proは入力1Mトークン/出力64Kトークンだが、MRCR v2で1M時26.3%に落ちる弱点。3.5では実効コンテキストの改善が焦点。デフォルト入力2M、Enterprise Ultraで3M〜5Mプレビュー枠の可能性。マルチモーダリティはテキスト/画像/音声/動画/コード/ロボット知覚の6領域融合。動画→コード生成、Robotics-ER連携で空間推論強化。",
      tags: "コンテキスト トークン MRCR NIAH マルチモーダル 動画 画像 音声 2M 3M 5M" },

    // 7章
    { url: "chapters/07-pricing.html", chapter: "第7章", title: "価格・配信戦略 — Proは維持、Ultraは強化",
      body: "AI Plus 8ドル/月、AI Pro 19.99ドル/月、AI Ultra 249.99ドル/月(初回3ヶ月124.99ドル)を維持。API価格は3.1 Pro水準を踏襲、Flex/Priority 2ティア継続。配信チャネルはGemini App、AI Studio、API、Vertex、Enterprise、CLI、Antigravity、Android Studio、NotebookLM、Chrome、Workspace、Search、Maps、Pixel、Vids全方位。Personal Intelligence連携で生活に深く。",
      tags: "価格 料金 サブスクリプション AI Pro AI Ultra API Flex Priority 配信 Vertex Enterprise" },

    // 8章
    { url: "chapters/08-competition.html", chapter: "第8章", title: "競合状況 — GPT‑5.4、Claude Opus 4.6、Grok 5との三つ巴",
      body: "BenchLMではGPT‑5.4が84点、Gemini 3.1 Proが83点で互角。GPT‑5.4は数学・コード編集リード、Gemini 3.1 Proはエージェンティック・長文リード。Claude Opus 4.5→4.6はコーディング・ライティングに強み、Sonnet 5も近い。Polymarket月末最高モデルはGoogle圧倒、OpenAI 3%。3.5の勝ち筋はHLE/ARC‑AGI‑2突破、動画・ロボティクス統合、Antigravity連携。",
      tags: "競合 GPT-5.4 Claude Opus Sonnet Grok OpenAI Anthropic xAI" },

    // 9章
    { url: "chapters/09-infra.html", chapter: "第9章", title: "基盤インフラ — Ironwood TPUが支える垂直統合",
      body: "Ironwood TPU(TPUv7)はGemini 3を100% TPUで学習。1ポッド9216チップ、42.5 ExaFLOPS(FP8)、TPU v5比10倍ピーク性能、4倍ワット性能。各ホスト4チップ、1ラック64チップキューブ。Sunfish/Zebrafish系との3系統多層アーキテクチャ。Axion CPUと組み合わせたAI Hypercomputer。Nvidia非依存で推論コスト/遅延/供給の独立性を確保。",
      tags: "Ironwood TPU TPUv7 Sunfish Zebrafish Axion AI Hypercomputer インフラ" },

    // 10章
    { url: "chapters/10-naming.html", chapter: "第10章", title: "ネーミング戦略の謎 — 「3.5」を飛ばす可能性",
      body: "Redditでは「3.5スキップで4.0直行」案も。3→3.1→3.5の短期間ジャンプに見合う差別化の難しさ、1年で三段階という分かりにくさが背景。対抗仮説は(1)3.2 Proブリッジ後に.5名をDeep Thinkリブランド、(2).5飛ばして夏秋に4.0、(3)消費者向けは3.5、APIは3.1.5 Pro表記。Manifoldの.5市場は9月末までで20%未満の値付け。",
      tags: "ネーミング 命名 3.2 Pro 4.0 ブランド リブランド" },

    // 11章
    { url: "chapters/11-risks.html", chapter: "第11章", title: "懐疑論とリスク — 過熱した「リーク」をどう読むか",
      body: "Daniel Norin氏のHieroglyph 80%やAIME 2025 100%などは整合性に難あり、SEO目的で過去数値を書き直した可能性。Snow Bunnyのデモ動画はチェリーピックの可能性も。事前学習のスケーリング効率鈍化。3.5が3.1 Proに対し5-10ポイント程度の改善に留まれば「生成AI物理限界」ナラティブが強まる。Demis Hassabisは安全性・責任ある展開を強調、広告は2026年導入計画なしと明言。",
      tags: "リスク 懐疑 リーク Daniel Norin チェリーピック Hassabis 安全性 AGI" },

    // 12章
    { url: "chapters/12-summary.html", chapter: "第12章", title: "総合評価 — 最も可能性が高い本命シナリオ",
      body: "本命シナリオ: 5月19-20日I/Oで3.5発表、Preview配布、4月末3.2 Proブリッジ、6月末〜7月GA、7月末〜8月Deep Think Pro解禁。ラインナップはpro/flash/flash-lite/flash-live/flash-tts/deep-thinkの6種。機能はDeep Think標準、Fierce/Ghost協調、3000-5000行一ショット生成、2Mデフォルト、動画→コード生成、同一API空間推論、SynthID全面。目論見は総合首位再確保。",
      tags: "総合 本命 シナリオ ラインナップ Deep Think オーケストレーター 首位" },

    // Pages
    { url: "pages/timeline.html", chapter: "タイムライン", title: "2023〜2026 Geminiリリース全履歴と今後の予測",
      body: "Gemini 1.0 2023年12月、1.5 2024年2月、2.0 2024年12月、2.5 2025年3月Experimental→5月I/O正式、3.0 Pro 2025年11月、3.1 Pro 2026年2月19日。3月3日Flash-Lite、3月10日embedding-2、3月25日Lyria 3、3月26日Flash Live、3月31日Veo 3.1 Lite、4月1日Flex/Priority、4月2日Gemma 4、4月14日Robotics-ER 1.6、4月15日Flash TTS。4月末3.2 Pro予想、5月19-20日I/Oで3.5、6-7月GA。",
      tags: "タイムライン 履歴 時系列 リリース" },

    { url: "pages/lineup.html", chapter: "モデル一覧", title: "Gemini 3.5 想定モデルラインナップ",
      body: "gemini-3.5-pro(フラッグシップ)、flash(中速中コスト)、flash-lite(コスト最適化)、flash-live(リアルタイム音声)、flash-tts(表現力音声合成)、deep-think(超長考Ultra限定)。周辺にembedding-3、Veo 4、Lyria 3 Pro、Robotics-ER 2.0、Antigravity 2。",
      tags: "モデル ラインナップ pro flash lite live tts deep-think" },

    { url: "pages/benchmarks-dashboard.html", chapter: "ベンチマーク", title: "ベンチマーク比較ダッシュボード",
      body: "ARC-AGI-2、HLE、GPQA Diamond、SWE-Bench Verified、Terminal-Bench 2.0、LiveCodeBench Pro、BrowseComp、MMMU-Pro、MRCR v2、LMArena Elo。Gemini 3 Pro / 3.1 Pro / 3.5予想 / GPT-5.4 / Claude Opus 4.6の比較。",
      tags: "ベンチマーク ダッシュボード 比較 グラフ" },

    { url: "pages/glossary.html", chapter: "用語集", title: "Gemini 3.5関連用語集",
      body: "Snow Bunny、Fierce Falcon、Ghost Falcon、Deep Think、Ironwood、TPU、ARC-AGI-2、HLE、GPQA、SWE-Bench、Terminal-Bench、LiveCodeBench、BrowseComp、MMMU、MRCR、SynthID、Antigravity、Flex、Priority、Lyria、Veo、Robotics-ER、Flash、Flash-Lite、Flash Live、Flash TTS、Elo、LMArena、Polymarket、Manifold。",
      tags: "用語 辞書 定義 Glossary" },

    { url: "pages/sources.html", chapter: "情報源", title: "参照情報源一覧(120件超)",
      body: "公式(Google/DeepMind)、予測市場(Polymarket/Manifold)、リーク予想系(Julian Goldie/Geeky-Gadgets/Daniel Norin)、技術メディア(VentureBeat/DataCamp/BenchLM/Vellum)、経営層(Demis Hassabis Fortune)、Reddit(r/Bard/r/singularity)、X、YouTube、公式ドキュメントなど7層。",
      tags: "情報源 ソース リファレンス" },

    { url: "pages/about.html", chapter: "この予想について",title: "この予想サイトについて",
      body: "2026年4月18日時点で公開情報・リーク・予測市場・歴代リリースパターンを総合したGemini 3.5の大予想。高確度/中確度/低確度を明示し、責任ある推論を心がける。",
      tags: "概要 about 執筆方針" }
];
