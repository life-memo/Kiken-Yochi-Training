import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import ImageModal from "@/components/ImageModal";
import { PURCHASE_URL } from "@/lib/constants";

/* ================================================================
   Primary CTA helper — 販売URL有無で切り替え
   ================================================================ */
function PrimaryCTA({ size = "md" }: { size?: "md" | "lg" }) {
  const py = size === "lg" ? "py-4" : "py-3";
  const text = size === "lg" ? "text-base" : "text-sm";

  if (PURCHASE_URL) {
    return (
      <a
        href={PURCHASE_URL}
        className={`inline-block w-full md:w-auto px-8 ${py} ${text} font-bold rounded-md bg-primary-700 text-white hover:bg-primary-800 transition-colors text-center`}
      >
        今すぐ購入する
      </a>
    );
  }
  return null;
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary-400 text-xs md:text-sm font-semibold tracking-wide mb-4">
          介護・福祉向け 安全ミニ教材｜危険予知/KYT対応
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance">
          今日も安全に！
        </h1>
        <p className="text-base md:text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto mb-4">
          介護・福祉の朝礼が&quot;読むだけ&quot;で回る安全ミニ教材（危険予知/KYT対応）
        </p>
        <p className="text-sm text-navy-300 leading-relaxed max-w-xl mx-auto mb-10">
          転倒・移乗・入浴・腰痛…よくあるヒヤリを「そのまま使える形」に。
          <br className="hidden md:block" />
          PDF30枚・PPT30枚・進行台本・記録テンプレ付き。
        </p>

        <div id="cta" className="max-w-md mx-auto scroll-mt-20">
          {PURCHASE_URL ? (
            <PrimaryCTA size="lg" />
          ) : (
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="font-bold text-sm mb-1">先行案内を受け取る</p>
              <p className="text-xs text-navy-300 mb-4">
                発売開始時に優先してご案内します
              </p>
              <LeadForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain Points ---------- */
function PainPoints() {
  const pains = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "KYTのネタが尽きた…毎月同じ内容の繰り返し",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "安全活動の準備に割ける時間がない",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "行政監査・第三者評価で「証跡」を求められる",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "安全の専門じゃない。何を言えばいいか分からない",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      text: "現場スタッフが乗ってこない。形骸化している",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading id="pain" sub="安全担当あるある、こんなお悩みありませんか？">
          こんなお悩みを抱えていませんか？
        </SectionHeading>
        <ul className="space-y-3">
          {pains.map((p, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-navy-50 rounded-xl p-5 border border-navy-100"
            >
              <span className="text-accent-500 flex-shrink-0 mt-0.5">{p.icon}</span>
              <span className="text-sm md:text-base text-navy-700">{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Solution / How It Works ---------- */
function HowItWorks() {
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
            <div
              key={s.num}
              className="text-center bg-white rounded-xl p-5 border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary-700 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {s.num}
              </div>
              <p className="font-bold text-sm text-navy-800 mb-1">{s.title}</p>
              <p className="text-xs text-navy-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contents / What's Included ---------- */
function Contents() {
  const items = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "KYTシート 30枚（PDF）",
      desc: "印刷してすぐ使えるA4サイズ。転倒・移乗・入浴・腰痛・食事・感染症など介護現場の主要テーマを網羅。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "KYTシート 30枚（PowerPoint）",
      desc: "文言の編集・施設名の追加など自由にカスタマイズ可能。プロジェクターやモニター投影にも対応。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "進行台本（5分版・10分版）",
      desc: "「何を言えばいいか分からない」を解決。読み上げるだけでKYTが進行できるスクリプト付き。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "実施記録テンプレート",
      desc: "日付・参加者・テーマ・気づき事項を記録。行政監査・第三者評価の証跡としてそのまま使えます。",
    },
  ];

  const previewItems = [
    { label: "転倒リスク（居室）", placeholder: true },
    { label: "移乗介助（ベッド→車いす）", placeholder: true },
    { label: "入浴介助（浴室環境）", placeholder: true },
  ];

  return (
    <section id="contents" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="買い切り。追加課金なし。">
          セットに含まれるもの
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-navy-50 rounded-xl p-6 border border-navy-100"
            >
              <span className="text-primary-600 flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-sm text-navy-800 mb-1">{item.title}</p>
                <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Preview section */}
        <div>
          <p className="text-center text-sm font-bold text-navy-600 mb-1">
            教材プレビュー
          </p>
          <p className="text-center text-xs text-navy-400 mb-5">
            クリックで拡大表示できます
          </p>
          <ImageModal items={previewItems} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Usage / Use Cases ---------- */
function UseCases() {
  const usages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "朝礼・申し送り（5分）",
      desc: "毎日の朝礼で1枚ずつ使用。月20営業日でも1.5ヶ月分。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "TBM（ツールボックスミーティング）",
      desc: "現場出発前の短時間ミーティングに。訪問介護チームにも最適。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "新人OJT・研修",
      desc: "新入職員に「うちの現場で起きやすい危険」を体感してもらう教材として。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
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
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary-600">{u.icon}</span>
                <p className="font-bold text-sm text-navy-800">{u.title}</p>
              </div>
              <p className="text-xs text-navy-500 leading-relaxed">{u.desc}</p>
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
        <div className="bg-white rounded-2xl border border-navy-100 p-8 md:p-10 text-center shadow-sm">
          <p className="text-sm text-navy-500 mb-3">
            介護・福祉向け安全ミニ教材「今日も安全に！」スターター30
          </p>
          <p className="text-3xl md:text-4xl font-bold text-navy-900 mb-1">
            近日公開
          </p>
          <p className="text-xs text-navy-400 mb-8">
            発売準備中 ― 先行登録で優先案内をお届けします
          </p>
          <div className="max-w-sm mx-auto">
            {PURCHASE_URL ? (
              <PrimaryCTA size="lg" />
            ) : (
              <LeadForm />
            )}
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
      a: "デジタル商品の性質上、ダウンロード後の返品・返金は原則承っておりません。プレビュー画像で内容をご確認のうえ、ご購入ください。",
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
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-navy-50 rounded-xl border border-navy-100"
            >
              <summary className="cursor-pointer p-5 text-sm font-medium text-navy-800 flex items-center justify-between">
                {f.q}
                <svg
                  className="w-4 h-4 text-navy-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-navy-600 leading-relaxed">
                {f.a}
              </div>
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
        <div className="bg-navy-50 rounded-xl border border-navy-100 p-6">
          <p className="font-bold text-sm text-navy-700 mb-3">
            安心してお使いいただくために
          </p>
          <ul className="space-y-2 text-xs text-navy-500 leading-relaxed">
            <li>
              ・本教材は安全教育の補助を目的としています。実際の現場判断は各施設の責任者の指示に従ってください。
            </li>
            <li>
              ・KYTシートの内容は一般的な介護現場のリスクを想定したものであり、すべての状況を網羅するものではありません。
            </li>
            <li>
              ・詳細は
              <a href="/terms" className="text-primary-700 underline">
                利用規約
              </a>
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
    <section className="py-16 md:py-20 bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          安全教育を、もっと手軽に。
        </h2>
        <p className="text-sm text-navy-300 mb-8">
          朝礼5分で完結。準備ゼロ、読むだけでKYTが回せます。
        </p>
        <div className="max-w-sm mx-auto">
          {PURCHASE_URL ? (
            <PrimaryCTA size="lg" />
          ) : (
            <LeadForm />
          )}
        </div>
        <p className="text-xs text-navy-400 mt-6">
          法人でのご利用・ご相談は
          <Link href="/contact" className="underline hover:text-white">
            こちら
          </Link>
        </p>
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
      <HowItWorks />
      <Contents />
      <UseCases />
      <TargetFacilities />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
    </>
  );
}
