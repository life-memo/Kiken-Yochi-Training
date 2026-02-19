"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Clock,
  FileText,
  Presentation,
  Mic,
  ClipboardCheck,
  BookOpen,
  MessageSquare,
  Lightbulb,
  ChevronDown,
  Heart,
  Building2,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ImageModal from "@/components/ImageModal";
import PurchaseButton from "@/components/PurchaseButton";
import { PRICE_YEN } from "@/lib/constants";

/* ---------- Fade-in wrapper ---------- */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-50 py-20 md:py-28 border-b-3 border-ink-900">
      {/* 背景装飾 */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-rescue-200 rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-sage-300 rounded-full opacity-30 blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-white border-3 border-ink-900 rounded-pop-sm px-4 py-2 shadow-pop-sm mb-8">
            <ShieldCheck className="w-4 h-4 text-sage-500" strokeWidth={3} />
            <span className="text-xs font-bold text-ink-600">介護・事務の安全気づきトレーニング</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-black text-ink-950 leading-tight mb-4 tracking-tight">
            ヨチトレ
          </h1>
          <p className="text-lg md:text-xl font-bold text-sage-700 mb-6">
            サクッと、安心。ヒヤリを減らす気づきトレ。
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm md:text-base text-ink-500 leading-relaxed max-w-xl mx-auto mb-4">
            朝礼で読むだけ5分。転倒・移乗・入浴・腰痛…
            <br className="hidden md:block" />
            現場のヒヤリを「気づき」に変える安全教材。
          </p>
          <p className="text-xs text-ink-400 max-w-lg mx-auto mb-10">
            PDF30枚・スライド30枚・読み上げ台本・記録テンプレ付き。買い切り。
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PurchaseButton size="lg" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 hover:text-sage-700 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              法人でのご相談
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Stats Cards ---------- */
function StatsCards() {
  const cards = [
    {
      icon: <TrendingUp className="w-6 h-6" strokeWidth={3} />,
      color: "bg-coral-50 text-coral-500",
      label: "2,546人",
      sub: "上半期・前年比+4%",
      body: "福祉・介護の労働災害は増加傾向が続いている",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" strokeWidth={3} />,
      color: "bg-rescue-50 text-rescue-500",
      label: "転倒 31%",
      sub: "前年比+8%",
      body: "転倒は災害全体の約3割を占め、増加が続く",
    },
    {
      icon: <Clock className="w-6 h-6" strokeWidth={3} />,
      color: "bg-sage-50 text-sage-600",
      label: "9-11時台",
      sub: "発生ピーク",
      body: "転倒・腰痛は午前中に集中。朝礼で先回りできる時間帯",
    },
  ];

  return (
    <section id="why" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading sub="厚生労働省データより">
          なぜ今、朝礼で気づきトレーニング？
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-pop p-6 text-center h-full">
                <div className={`w-12 h-12 rounded-pop-sm ${c.color} flex items-center justify-center mx-auto mb-4 border-2 border-ink-200`}>
                  {c.icon}
                </div>
                <p className="text-2xl md:text-3xl font-black text-ink-900 mb-1">
                  {c.label}
                </p>
                <p className="text-[11px] font-bold text-ink-400 mb-3">{c.sub}</p>
                <p className="text-sm text-ink-600 leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-[11px] text-ink-400 text-center mt-5">
          出典：厚生労働省「社会福祉・介護事業における労働災害の発生状況」
        </p>
      </div>
    </section>
  );
}

/* ---------- Why Yochitore ---------- */
function WhySection() {
  return (
    <section className="py-16 md:py-20 bg-sage-50 border-y-3 border-ink-900">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn>
          <SectionHeading>だから、朝礼で気づきトレーニングを。</SectionHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="card-pop p-6 md:p-8">
            <p className="text-sm md:text-base text-ink-700 leading-relaxed mb-4">
              仕事を始める前に「今日はどんなヒヤリがありそうか」をみんなで確認する。
              それだけで、うっかり・思い込みによる事故はグッと減ります。
            </p>
            <p className="text-sm md:text-base text-ink-700 leading-relaxed">
              <strong className="text-ink-900 font-black">ヨチトレ</strong>は、それを朝礼で読むだけで回すためのキットです。
              「何が気になる？」「どうすれば安心？」の2つの問いかけで、
              自然に気づく力が育ちます。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Contents ---------- */
function Contents() {
  const items = [
    {
      icon: <FileText className="w-7 h-7" strokeWidth={2.5} />,
      title: "PDF（30テーマ）",
      desc: "A4印刷でそのまま使える。転倒・移乗・入浴・腰痛・食事・感染症など主要テーマを網羅。",
    },
    {
      icon: <Presentation className="w-7 h-7" strokeWidth={2.5} />,
      title: "スライド（30テーマ）",
      desc: "文言の編集・施設名の追加など自由にカスタマイズ可能。モニター投影にも対応。",
    },
    {
      icon: <Mic className="w-7 h-7" strokeWidth={2.5} />,
      title: "読み上げ台本（5分/10分）",
      desc: "「何を言えばいいか分からない」を解決。台本どおりに読むだけで進行できます。",
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" strokeWidth={2.5} />,
      title: "記録テンプレート",
      desc: "日付・参加者・テーマ・気づき事項を記録。監査や第三者評価の証跡にも。",
    },
  ];

  return (
    <section id="contents" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="買い切り。追加課金なし。">
            入っているもの
          </SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="card-pop p-6 flex gap-4 h-full">
                <span className="w-12 h-12 rounded-pop-sm bg-sage-100 border-2 border-sage-300 flex items-center justify-center flex-shrink-0 text-sage-700">
                  {item.icon}
                </span>
                <div>
                  <p className="font-black text-sm text-ink-800 mb-1">{item.title}</p>
                  <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Usage ---------- */
function Usage() {
  const steps = [
    {
      num: "1",
      icon: <BookOpen className="w-6 h-6" strokeWidth={2.5} />,
      title: "今日の1枚を開く",
      desc: "PDFを印刷、またはスライドをモニターに表示",
    },
    {
      num: "2",
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2.5} />,
      title: "読む（台本どおりでOK）",
      desc: "付属の台本をそのまま読み上げ。準備ゼロ",
    },
    {
      num: "3",
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2.5} />,
      title: "「今日の気づき」を共有",
      desc: "記録テンプレに書いて終了。たった5分",
    },
  ];

  return (
    <section id="usage" className="py-16 md:py-20 bg-sage-50 border-y-3 border-ink-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading>朝礼での使い方（5分）</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1}>
              <div className="card-pop text-center p-6 h-full">
                <div className="w-14 h-14 rounded-pop-sm bg-sage-400 border-3 border-ink-900 text-white font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-pop-sm">
                  {s.num}
                </div>
                <div className="mb-3 text-sage-600 flex justify-center">{s.icon}</div>
                <p className="font-black text-base text-ink-800 mb-2">{s.title}</p>
                <p className="text-xs text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- App Preview (2-step concept) ---------- */
function AppPreview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="2つの問いかけで、自然に気づく力が育つ">
            気づきトレの流れ
          </SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={0.1}>
            <div className="card-pop p-6 bg-rescue-50 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-pop-sm bg-rescue-400 border-3 border-ink-900 text-white font-black text-sm flex items-center justify-center shadow-pop-sm">
                  Q1
                </span>
                <p className="font-black text-base text-ink-800">何が気になる？</p>
              </div>
              <div className="bg-white border-3 border-ink-200 rounded-pop-sm p-4 min-h-[100px]">
                <p className="text-xs text-ink-300 font-bold mb-2">例：書き込みイメージ</p>
                <p className="text-sm text-ink-600 leading-relaxed italic">
                  「床が濡れている」「利用者さんが急に立ち上がりそう」
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="card-pop p-6 bg-sage-50 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-pop-sm bg-sage-500 border-3 border-ink-900 text-white font-black text-sm flex items-center justify-center shadow-pop-sm">
                  Q2
                </span>
                <p className="font-black text-base text-ink-800">どうすれば安心？</p>
              </div>
              <div className="bg-white border-3 border-ink-200 rounded-pop-sm p-4 min-h-[100px]">
                <p className="text-xs text-ink-300 font-bold mb-2">例：書き込みイメージ</p>
                <p className="text-sm text-ink-600 leading-relaxed italic">
                  「モップで拭いてから声かけ」「立ち上がる前にブレーキ確認」
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------- Material Preview ---------- */
function Preview() {
  const previewItems = [
    { label: "転倒リスク（居室）", placeholder: true },
    { label: "移乗介助（ベッド→車いす）", placeholder: true },
    { label: "入浴介助（浴室環境）", placeholder: true },
  ];

  return (
    <section className="py-16 md:py-20 bg-sage-50 border-y-3 border-ink-900">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="クリックで拡大表示できます">
            教材プレビュー
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ImageModal items={previewItems} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-2xl mx-auto px-4">
        <FadeIn>
          <SectionHeading>価格</SectionHeading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="card-pop p-8 md:p-10 text-center bg-white">
            <div className="inline-flex items-center gap-2 bg-sage-100 border-2 border-sage-300 rounded-pop-sm px-3 py-1 mb-6">
              <Heart className="w-3 h-3 text-coral-500" strokeWidth={3} />
              <span className="text-xs font-bold text-sage-700">買い切り・追加課金なし</span>
            </div>
            <p className="text-sm text-ink-500 mb-4 font-bold">
              安全気づきトレーニング教材「ヨチトレ」スターター30
            </p>
            <p className="mb-2">
              <span className="text-5xl md:text-6xl font-black text-ink-950">
                &yen;{PRICE_YEN}
              </span>
            </p>
            <p className="text-xs text-ink-400 mb-8 font-medium">
              税込・買い切り｜購入後すぐ利用可能
            </p>
            <PurchaseButton size="lg" />
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["PDF30枚", "スライド30枚", "読み上げ台本", "記録テンプレ"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-ink-500">
                  <CheckCircle2 className="w-4 h-4 text-sage-500 flex-shrink-0" strokeWidth={3} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "どのくらいの時間でできますか？",
      a: "1回あたり5分で完結できるように設計しています。台本どおりに進行するだけでOK。10分版の台本も付属しています。",
    },
    {
      q: "印刷して使えますか？",
      a: "はい。A4サイズのPDFなので、そのまま印刷して配布できます。施設・法人内での印刷・配布は自由です。",
    },
    {
      q: "スライドは編集できますか？",
      a: "はい。施設名の追加や内容のアレンジなど自由に編集いただけます。モニター投影にも対応しています。",
    },
    {
      q: "記録はどう残せますか？",
      a: "付属の記録テンプレートに日付・参加者・テーマ・気づき事項を記入するだけ。監査や第三者評価の証跡にも使えます。",
    },
    {
      q: "複数拠点で使えますか？",
      a: "1購入＝1法人ライセンスです。同一法人内であれば拠点数に制限はありません。",
    },
    {
      q: "返品・キャンセルはできますか？",
      a: "デジタル商品の性質上、購入後の返品・返金は原則承っておりません。プレビュー画像で内容をご確認のうえ、ご購入ください。",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn>
          <SectionHeading>よくあるご質問</SectionHeading>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <details className="group card-pop-sm overflow-hidden">
                <summary className="cursor-pointer p-5 text-sm font-black text-ink-800 flex items-center justify-between">
                  {f.q}
                  <ChevronDown className="w-4 h-4 text-ink-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" strokeWidth={3} />
                </summary>
                <div className="px-5 pb-5 text-sm text-ink-600 leading-relaxed border-t-2 border-ink-100 pt-4">
                  {f.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn>
          <div className="card-pop-sm p-6 bg-ink-50">
            <p className="font-black text-sm text-ink-700 mb-3">
              安心してお使いいただくために
            </p>
            <ul className="space-y-2 text-xs text-ink-500 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-ink-400 flex-shrink-0">&#x2022;</span>
                本教材は安全教育の補助を目的としています。現場判断は各施設の責任者の指示に従ってください。
              </li>
              <li className="flex gap-2">
                <span className="text-ink-400 flex-shrink-0">&#x2022;</span>
                シートの内容は一般的な介護現場のリスクを想定したものであり、すべての状況を網羅するものではありません。
              </li>
              <li className="flex gap-2">
                <span className="text-ink-400 flex-shrink-0">&#x2022;</span>
                <span>
                  詳細は
                  <a href="/terms" className="text-sage-600 underline font-bold">
                    利用規約
                  </a>
                  をご確認ください。
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-ink-950 text-white border-t-3 border-ink-900">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-xl md:text-2xl font-black mb-3 tracking-tight">
            安全の気づきを、もっと手軽に。
          </h2>
          <p className="text-sm text-ink-400 mb-8">
            朝礼5分で完結。準備ゼロ、読むだけで気づきトレーニングが回せます。
          </p>
          <PurchaseButton size="lg" />
          <p className="text-xs text-ink-500 mt-6">
            法人でのご利用・ご相談は
            <Link href="/contact" className="underline hover:text-sage-400 ml-1 font-bold">
              こちら
            </Link>
          </p>
        </FadeIn>
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
      <WhySection />
      <Contents />
      <Usage />
      <AppPreview />
      <Preview />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
    </>
  );
}
