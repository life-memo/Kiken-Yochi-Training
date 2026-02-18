import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-950 to-primary-900 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary-300 text-xs md:text-sm font-bold tracking-wide mb-4">
          介護・福祉向け KYTシート｜売り切りデジタル教材
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-balance">
          介護の朝礼が&quot;読むだけ&quot;で回る。
          <br className="hidden md:block" />
          5分KYTシート
        </h1>
        <p className="text-sm md:text-base text-primary-200 leading-relaxed max-w-2xl mx-auto mb-10">
          転倒・移乗・入浴・腰痛…現場で多いヒヤリを&quot;そのまま使える形&quot;にしました。
          <br className="hidden md:block" />
          模範解答と記録テンプレ付き。準備ゼロ、朝礼5分で安全教育が完了します。
        </p>

        <div id="cta" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto scroll-mt-20">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <p className="font-bold text-sm mb-1">まずは無料で試す</p>
            <p className="text-xs text-primary-300 mb-4">サンプル3枚＋進行台本を即ダウンロード</p>
            <LeadForm type="sample" />
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <p className="font-bold text-sm mb-1">発売通知を受け取る</p>
            <p className="text-xs text-primary-300 mb-4">30枚フルセットの発売時にご案内</p>
            <LeadForm type="waitlist" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain Points ---------- */
function PainPoints() {
  const pains = [
    { icon: "😩", text: "KYTのネタが尽きた…毎月同じ内容の繰り返し" },
    { icon: "⏰", text: "安全活動の準備に割ける時間がない" },
    { icon: "📋", text: "行政監査・第三者評価で「証跡」を求められる" },
    { icon: "🤷", text: "安全の専門じゃない。何を言えばいいか分からない" },
    { icon: "😶", text: "現場スタッフが乗ってこない。形骸化している" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading id="pain" sub="安全担当あるある、こんなお悩みありませんか？">
          こんなお悩みを抱えていませんか？
        </SectionHeading>
        <ul className="space-y-4">
          {pains.map((p, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
            >
              <span className="text-xl flex-shrink-0" role="img">{p.icon}</span>
              <span className="text-sm md:text-base text-gray-700">{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Solution / Flow ---------- */
function Solution() {
  const steps = [
    { num: "1", title: "配布", desc: "シートを印刷 or 画面表示（1分）" },
    { num: "2", title: "危険指摘", desc: "イラストを見て危険を指摘し合う（2分）" },
    { num: "3", title: "模範解答", desc: "付属の解答例で答え合わせ（1分）" },
    { num: "4", title: "指差し唱和", desc: "対策を全員で声に出して確認（30秒）" },
    { num: "5", title: "記録", desc: "テンプレに参加者・日付を記入（30秒）" },
  ];

  return (
    <section id="features" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="準備ゼロ。読むだけで安全教育が成立します">
          たった5分。この流れで回せます
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="text-center bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary-700 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {s.num}
              </div>
              <p className="font-bold text-sm text-gray-800 mb-1">{s.title}</p>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contents ---------- */
function Contents() {
  const items = [
    {
      icon: "📄",
      title: "KYTシート 30枚（PDF）",
      desc: "印刷してすぐ使えるA4サイズ。転倒・移乗・入浴・腰痛・食事・感染症など介護現場の主要テーマを網羅。",
    },
    {
      icon: "📊",
      title: "KYTシート 30枚（PowerPoint）",
      desc: "文言の編集・施設名の追加など自由にカスタマイズ可能。プロジェクターやモニター投影にも対応。",
    },
    {
      icon: "🎙️",
      title: "進行台本（5分版・10分版）",
      desc: "「何を言えばいいか分からない」を解決。読み上げるだけでKYTが進行できるスクリプト付き。",
    },
    {
      icon: "📝",
      title: "実施記録テンプレート",
      desc: "日付・参加者・テーマ・気づき事項を記録。行政監査・第三者評価の証跡としてそのまま使えます。",
    },
  ];

  return (
    <section id="contents" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="買い切り。追加課金なし。">
          セットに含まれるもの
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 bg-gray-50 rounded-lg p-5 border border-gray-100">
              <span className="text-2xl flex-shrink-0" role="img">{item.icon}</span>
              <div>
                <p className="font-bold text-sm text-gray-800 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sample placeholders */}
        <div>
          <p className="text-center text-sm font-bold text-gray-600 mb-4">サンプルイメージ</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-[3/4] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
              >
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">サンプル {n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Usage ---------- */
function Usage() {
  const usages = [
    {
      title: "朝礼・申し送り（5分）",
      desc: "毎日の朝礼で1枚ずつ使用。月20営業日でも1.5ヶ月分。",
    },
    {
      title: "TBM（ツールボックスミーティング）",
      desc: "現場出発前の短時間ミーティングに。訪問介護チームにも最適。",
    },
    {
      title: "新人OJT・研修",
      desc: "新入職員に「うちの現場で起きやすい危険」を体感してもらう教材として。",
    },
    {
      title: "安全衛生委員会",
      desc: "月次の委員会資料として活用。実施記録テンプレで報告も簡単。",
    },
  ];

  return (
    <section id="usage" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="朝礼だけじゃない、さまざまな場面で活用できます">
          活用シーン
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {usages.map((u, i) => (
            <div key={i} className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
              <p className="font-bold text-sm text-gray-800 mb-2">{u.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Target Facilities ---------- */
function TargetFacilities() {
  const facilities = [
    "特別養護老人ホーム",
    "介護老人保健施設",
    "デイサービス・デイケア",
    "訪問介護事業所",
    "グループホーム",
    "有料老人ホーム",
    "障害福祉サービス事業所",
    "小規模多機能型居宅介護",
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading sub="介護・福祉のあらゆる現場でお使いいただけます">
          こんな施設・事業所に
        </SectionHeading>
        <div className="flex flex-wrap justify-center gap-3">
          {facilities.map((f, i) => (
            <span
              key={i}
              className="bg-primary-50 text-primary-800 text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-primary-100"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeading>価格</SectionHeading>
        <div className="bg-white rounded-xl border-2 border-primary-200 p-8 text-center shadow-sm">
          <p className="text-sm text-gray-500 mb-2">介護・福祉向け「5分で回せるKYTシート」スターター30</p>
          <p className="text-3xl font-bold text-gray-800 mb-1">近日公開</p>
          <p className="text-xs text-gray-400 mb-6">発売準備中 ― 先行登録で優先案内をお届けします</p>
          <div className="max-w-sm mx-auto">
            <LeadForm type="waitlist" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "購入後の返品・返金はできますか？",
      a: "デジタル商品の性質上、ダウンロード後の返品・返金は原則承っておりません。ご購入前に無料サンプルでお試しください。",
    },
    {
      q: "印刷して配布してもいいですか？",
      a: "はい。ご購入いただいた施設・法人内での印刷・配布は自由です。ただし、第三者への再配布・転売はご遠慮ください。",
    },
    {
      q: "PowerPointを編集してもいいですか？",
      a: "はい。施設名の追加や、内容のアレンジなど自由に編集いただけます。編集後のファイルの再配布・販売は禁止です。",
    },
    {
      q: "複数拠点で使えますか？",
      a: "1購入＝1法人ライセンスです。同一法人内であれば拠点数に制限はありません。別法人への共有はご遠慮ください。",
    },
    {
      q: "データはどこに保存されますか？",
      a: "ダウンロード後はお客様の端末に保存されます。当方のサーバーにお客様の業務データが保存されることはありません。",
    },
    {
      q: "個人情報の取り扱いは？",
      a: "メールアドレスは商品のお届けと発売案内にのみ使用します。詳しくはプライバシーポリシーをご覧ください。",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading>よくあるご質問</SectionHeading>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-gray-50 rounded-lg border border-gray-100">
              <summary className="cursor-pointer p-4 text-sm font-medium text-gray-800 flex items-center justify-between">
                {f.q}
                <svg
                  className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust / Disclaimer ---------- */
function Trust() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <p className="font-bold text-sm text-gray-700 mb-3">安心してお使いいただくために</p>
          <ul className="space-y-2 text-xs text-gray-500 leading-relaxed">
            <li>
              ・本教材は安全教育の補助を目的としています。実際の現場判断は各施設の責任者の指示に従ってください。
            </li>
            <li>
              ・KYTシートの内容は一般的な介護現場のリスクを想定したものであり、すべての状況を網羅するものではありません。
            </li>
            <li>
              ・詳細は
              <a href="/terms" className="text-primary-700 underline">利用規約</a>
              をご確認ください。
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary-950 text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          まずは無料サンプルで、5分KYTを体験してください
        </h2>
        <p className="text-sm text-primary-300 mb-8">
          サンプル3枚＋進行台本をすぐにダウンロードできます。
        </p>
        <div className="max-w-sm mx-auto">
          <LeadForm type="sample" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <Contents />
      <Usage />
      <TargetFacilities />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
    </>
  );
}
