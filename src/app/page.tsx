import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ImageModal from "@/components/ImageModal";
import PurchaseButton from "@/components/PurchaseButton";
import { PRICE_YEN } from "@/lib/constants";

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
          介護・福祉の朝礼が&quot;読むだけ&quot;で回る。安全ミニ教材（危険予知/KYT）
        </p>
        <p className="text-sm text-navy-300 leading-relaxed max-w-xl mx-auto mb-10">
          転倒・移乗・入浴・腰痛…現場のヒヤリを、毎朝5分で共有できる形に。
          <br className="hidden md:block" />
          PDF30／PPT30／読み上げ台本／記録テンプレ付き。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PurchaseButton size="lg" />
          <Link
            href="/contact"
            className="text-sm text-navy-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            法人でのご相談はこちら
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats Cards (厚労省データ) ---------- */
function StatsCards() {
  const cards = [
    {
      label: "2,546人",
      sub: "上半期・前年比+4%",
      body: "福祉・介護の労働災害は増加傾向が続いている",
    },
    {
      label: "転倒 31%",
      sub: "前年比+8%",
      body: "転倒は災害全体の約3割を占め、増加が続く",
    },
    {
      label: "9-11時台",
      sub: "発生ピーク",
      body: "転倒・腰痛は午前中に集中。朝礼で先回りできる時間帯",
    },
  ];

  return (
    <section id="stats" className="py-14 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent-600 mb-1">
                {c.label}
              </p>
              <p className="text-xs font-medium text-navy-400 mb-3">{c.sub}</p>
              <p className="text-sm text-navy-700 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-navy-400 text-center mt-4">
          出典：厚生労働省「社会福祉・介護事業における労働災害の発生状況」
        </p>
      </div>
    </section>
  );
}

/* ---------- Why KYT ---------- */
function WhyKYT() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading>だから、朝礼でKYT（危険予知）を。</SectionHeading>
        <div className="bg-white rounded-xl border border-navy-100 p-6 md:p-8">
          <p className="text-sm md:text-base text-navy-700 leading-relaxed mb-4">
            KYTは、仕事を始める前に「どんな危険が潜んでいるか」を揃えて確認し、
            うっかり・勘違い・思い込みによる災害を減らすための取り組みです。
          </p>
          <p className="text-sm md:text-base text-navy-700 leading-relaxed">
            <strong className="text-navy-900">今日も安全に！</strong>は、それを朝礼で&quot;読むだけ&quot;で回すためのキットです。
          </p>
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
      title: "PDF（30テーマ）",
      desc: "印刷してすぐ使えるA4サイズ。転倒・移乗・入浴・腰痛・食事・感染症など介護現場の主要テーマを網羅。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "PowerPoint（30テーマ）",
      desc: "文言の編集・施設名の追加など自由にカスタマイズ可能。プロジェクターやモニター投影にも対応。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "読み上げ台本（5分/10分）",
      desc: "「何を言えばいいか分からない」を解決。読み上げるだけでKYTが進行できるスクリプト付き。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "記録テンプレート",
      desc: "日付・参加者・テーマ・気づき事項を記録。行政監査・第三者評価の証跡としてそのまま使えます。",
    },
  ];

  return (
    <section id="contents" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="買い切り。追加課金なし。">
          入っているもの
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      </div>
    </section>
  );
}

/* ---------- Usage 3-step ---------- */
function Usage() {
  const steps = [
    {
      num: "1",
      title: "今日の1枚を開く",
      desc: "PDFを印刷、またはPPTをモニターに表示",
    },
    {
      num: "2",
      title: "読む（台本どおりでOK）",
      desc: "付属の読み上げ台本をそのまま進行。準備ゼロ",
    },
    {
      num: "3",
      title: "「今日気をつける一言」を揃える",
      desc: "記録テンプレに書いて終了。5分で完結",
    },
  ];

  return (
    <section id="usage" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading>朝礼での使い方（5分）</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="text-center bg-white rounded-xl p-6 border border-navy-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary-700 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {s.num}
              </div>
              <p className="font-bold text-base text-navy-800 mb-2">{s.title}</p>
              <p className="text-xs text-navy-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Preview ---------- */
function Preview() {
  const previewItems = [
    { label: "転倒リスク（居室）", placeholder: true },
    { label: "移乗介助（ベッド→車いす）", placeholder: true },
    { label: "入浴介助（浴室環境）", placeholder: true },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="クリックで拡大表示できます">
          教材プレビュー
        </SectionHeading>
        <ImageModal items={previewItems} />
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
          <p className="text-sm text-navy-500 mb-4">
            介護・福祉向け安全ミニ教材「今日も安全に！」スターター30
          </p>
          <p className="mb-1">
            <span className="text-4xl md:text-5xl font-bold text-navy-900">
              &yen;{PRICE_YEN}
            </span>
            <span className="text-sm text-navy-500 ml-2">（税込・買い切り）</span>
          </p>
          <p className="text-xs text-navy-400 mb-8">
            現場の朝礼でそのまま使える形に整えています。購入後すぐ利用できます。
          </p>
          <PurchaseButton size="lg" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "どのくらいの時間でできますか？",
      a: "1回あたり5分で完結できるように設計しています。台本どおりに進行するだけでOKです。10分版の台本も付属しているので、少し深堀りしたいときにも対応できます。",
    },
    {
      q: "印刷して使えますか？（PDF）",
      a: "はい。A4サイズのPDFなので、そのまま印刷して配布できます。ご購入いただいた施設・法人内での印刷・配布は自由です。",
    },
    {
      q: "PowerPointは編集できますか？",
      a: "はい。施設名の追加や、内容のアレンジなど自由に編集いただけます。プロジェクターやモニターへの投影にも対応しています。",
    },
    {
      q: "記録はどう残せますか？",
      a: "付属の実施記録テンプレート（Excel/PDF）に日付・参加者・テーマ・気づき事項を記入するだけです。行政監査や第三者評価の証跡としてそのまま使えます。",
    },
    {
      q: "複数拠点で使えますか？",
      a: "1購入＝1法人ライセンスです。同一法人内であれば拠点数に制限はありません。別法人への共有はご遠慮ください。",
    },
    {
      q: "返品・キャンセルはできますか？",
      a: "デジタル商品の性質上、購入後の返品・返金は原則承っておりません。プレビュー画像で内容をご確認のうえ、ご購入ください。詳しくは利用規約・特定商取引法に基づく表記をご覧ください。",
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
        <PurchaseButton size="lg" />
        <p className="text-xs text-navy-400 mt-6">
          法人でのご利用・ご相談は
          <Link href="/contact" className="underline hover:text-white ml-1">
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
      <StatsCards />
      <WhyKYT />
      <Contents />
      <Usage />
      <Preview />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
    </>
  );
}
