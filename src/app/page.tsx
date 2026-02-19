"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Building2,
  CheckCircle2,
  User,
  Users,
  ShowerHead,
  Eye,
  Footprints,
  Megaphone,
  BrainCircuit,
  TriangleAlert,
  ArrowRight,
  Info,
  ShoppingCart,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ImageModal from "@/components/ImageModal";
import PurchaseButton from "@/components/PurchaseButton";
import { PLAN_A_URL, PLAN_B_URL } from "@/lib/constants";

/* ====== Shared ====== */

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

/* ====== 1. Hero ====== */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-50 py-20 md:py-28 border-b-3 border-ink-900">
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
            仕事は毎回同じではないから、起こりうることを事前に想定する。
            <br className="hidden md:block" />
            その力を育てる気づきトレーニング教材です。
          </p>
          <p className="text-xs text-ink-400 max-w-lg mx-auto mb-10">
            個人向け・チーム向けの2プランをご用意。買い切り・追加課金なし。
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/#pricing"
              whileHover={{ x: 2, y: 2 }}
              whileTap={{ x: 4, y: 4 }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 text-base font-black border-3 border-ink-900 rounded-pop-sm bg-coral-500 text-white shadow-pop hover:shadow-pop-hover active:shadow-none transition-shadow"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={3} />
              プランを選ぶ
            </motion.a>
            <Link
              href="/#sample"
              className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 hover:text-sage-700 transition-colors"
            >
              <Eye className="w-4 h-4" />
              まずは体験してみる
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ====== 2. ヨチトレとは ====== */

function AboutSection() {
  const [detailOpen, setDetailOpen] = useState(false);

  const details = [
    {
      icon: <BrainCircuit className="w-5 h-5" strokeWidth={2.5} />,
      title: "KY活動（危険予知活動）とは",
      body: "作業手順に沿って「この場面で何が起きうるか」を事前に洗い出す活動です。手順のどこにリスクがあるかを把握し、対策を決めてから仕事に臨むことで、事故・災害を未然に防ぎます。",
    },
    {
      icon: <Eye className="w-5 h-5" strokeWidth={2.5} />,
      title: "「危険感受性」を育てる",
      body: "危険を危険として捉えられる感覚＝危険感受性。日常に慣れると鈍くなりがちなこの感覚を、繰り返しのトレーニングで研ぎ澄まし続けることが大切です。",
    },
    {
      icon: <Megaphone className="w-5 h-5" strokeWidth={2.5} />,
      title: "予想外が起きたら「報告→再KY」",
      body: "想定と異なる状況が発生したらすぐに上司に報告し、改めてKYを行います。「気づいたら声に出す」文化がチーム全体の安全力を底上げします。",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="KY（危険予知）活動の力を高めるトレーニング">
            ヨチトレとは
          </SectionHeading>
        </FadeIn>

        {/* Summary card */}
        <FadeIn delay={0.1}>
          <div className="card-pop p-6 md:p-8 mb-6">
            <p className="text-sm md:text-base text-ink-700 leading-relaxed">
              仕事は毎回同じではないため、
              <strong className="text-ink-900 font-black">起こり得ることを事前に想定</strong>
              して事故につなげないことが大事です。
              作業前に危険・注意点・対策を洗い出すのが
              <strong className="text-ink-900 font-black">KY（危険予知）活動</strong>。
              その力を高める訓練が「ヨチトレ」です。
            </p>
          </div>
        </FadeIn>

        {/* "もっと詳しく" toggle */}
        <FadeIn delay={0.15}>
          <button
            onClick={() => setDetailOpen(!detailOpen)}
            className="btn-pop bg-sage-100 text-sage-800 px-5 py-2.5 text-sm gap-2 mx-auto flex mb-6"
          >
            <Info className="w-4 h-4" strokeWidth={3} />
            {detailOpen ? "閉じる" : "もっと詳しく"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${detailOpen ? "rotate-180" : ""}`}
              strokeWidth={3}
            />
          </button>
        </FadeIn>

        <AnimatePresence>
          {detailOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-2">
                {details.map((d, i) => (
                  <div key={i} className="card-pop p-5 h-full">
                    <div className="w-10 h-10 rounded-pop-sm bg-sage-100 border-2 border-sage-300 flex items-center justify-center text-sage-700 mb-3">
                      {d.icon}
                    </div>
                    <p className="font-black text-sm text-ink-800 mb-2">{d.title}</p>
                    <p className="text-xs text-ink-500 leading-relaxed">{d.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ====== 3. Stats Cards ====== */

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
    <section id="why" className="py-16 md:py-20 bg-sage-50 border-y-3 border-ink-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="厚生労働省データより">
            なぜ今、気づきトレーニング？
          </SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-pop p-6 text-center h-full">
                <div className={`w-12 h-12 rounded-pop-sm ${c.color} flex items-center justify-center mx-auto mb-4 border-2 border-ink-200`}>
                  {c.icon}
                </div>
                <p className="text-2xl md:text-3xl font-black text-ink-900 mb-1">{c.label}</p>
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

/* ====== 4. Sample Training (入浴介助事例) ====== */

function SampleTraining() {
  const [step, setStep] = useState(0); // 0=scene, 1=Q1, 2=Q2, 3=answer

  const learnings = [
    {
      icon: <CheckCircle2 className="w-4 h-4 text-sage-500" strokeWidth={3} />,
      text: "ブレーキのロック確認（指差し確認）を行う",
    },
    {
      icon: <Footprints className="w-4 h-4 text-rescue-500" strokeWidth={3} />,
      text: "キャリーの真後ろに足を置かない立ち位置の工夫",
    },
    {
      icon: <Megaphone className="w-4 h-4 text-coral-500" strokeWidth={3} />,
      text: "立ち上がる時の反動を予測した声かけ",
    },
  ];

  return (
    <section id="sample" className="py-16 md:py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading sub="入浴介助の事例で、ヨチトレを体験">
            体験してみよう
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card-pop overflow-hidden">
            {/* Scene header */}
            <div className="bg-sage-50 border-b-3 border-ink-900 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-pop-sm bg-sage-400 border-3 border-ink-900 text-white flex items-center justify-center shadow-pop-sm">
                  <ShowerHead className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-[11px] font-bold text-ink-400">SAMPLE CASE</p>
                  <p className="font-black text-base text-ink-800">シャワーキャリーを使った入浴介助</p>
                </div>
              </div>
              <p className="text-sm text-ink-600 leading-relaxed">
                シャワーキャリーを使用した入浴介助中、ブレーキをかけずに利用者を立たせたため、
                キャリーが動き出し、スタッフの右足甲に車輪が乗り上げ骨折した事例です。
              </p>
            </div>

            {/* Step indicator */}
            <div className="flex border-b-3 border-ink-900 bg-ink-50">
              {["シーン", "何が気になる？", "どうすれば？", "学びポイント"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`flex-1 py-3 text-xs md:text-sm font-black text-center transition-colors border-r last:border-r-0 border-ink-200 ${
                    step === i
                      ? "bg-white text-sage-700"
                      : "text-ink-400 hover:bg-white/60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Step content */}
            <div className="p-5 md:p-6 min-h-[220px]">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <p className="text-sm text-ink-700 leading-relaxed mb-4">
                      入浴介助のため、利用者をシャワーキャリーに乗せて浴室まで移動しました。
                      浴室に到着後、利用者を立たせようとしています。
                    </p>
                    <div className="card-pop-sm p-4 bg-rescue-50">
                      <div className="flex items-start gap-2">
                        <TriangleAlert className="w-5 h-5 text-rescue-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <p className="text-sm text-ink-700">
                          <strong className="font-black">この場面で、何が起こりうるでしょうか？</strong>
                          <br />
                          <span className="text-xs text-ink-500">次のステップで考えてみましょう。</span>
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="btn-pop bg-sage-400 text-white px-6 py-2.5 text-sm mt-5 gap-1"
                    >
                      考えてみる <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-pop-sm bg-rescue-400 border-3 border-ink-900 text-white font-black text-xs flex items-center justify-center shadow-pop-sm">
                        Q1
                      </span>
                      <p className="font-black text-base text-ink-800">何が気になる？</p>
                    </div>
                    <div className="bg-white border-3 border-ink-200 rounded-pop-sm p-4 min-h-[80px] mb-2"
                         style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e5e7eb 28px)", lineHeight: "28px" }}>
                      <p className="text-sm text-ink-500 italic">
                        「ブレーキがかかっていないかも」「立ち上がった反動でキャリーが動きそう」「足の位置が車輪の近くにある」
                      </p>
                    </div>
                    <p className="text-[11px] text-ink-400 mb-4">（実際の教材では自由に書き込めます）</p>
                    <button
                      onClick={() => setStep(2)}
                      className="btn-pop bg-sage-400 text-white px-6 py-2.5 text-sm gap-1"
                    >
                      次へ <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-pop-sm bg-sage-500 border-3 border-ink-900 text-white font-black text-xs flex items-center justify-center shadow-pop-sm">
                        Q2
                      </span>
                      <p className="font-black text-base text-ink-800">どうすれば安心？</p>
                    </div>
                    <div className="bg-white border-3 border-ink-200 rounded-pop-sm p-4 min-h-[80px] mb-2"
                         style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e5e7eb 28px)", lineHeight: "28px" }}>
                      <p className="text-sm text-ink-500 italic">
                        「立たせる前にブレーキを指差し確認」「車輪の近くに足を置かない」「声かけしてから立ち上がってもらう」
                      </p>
                    </div>
                    <p className="text-[11px] text-ink-400 mb-4">（実際の教材では自由に書き込めます）</p>
                    <button
                      onClick={() => setStep(3)}
                      className="btn-pop bg-sage-400 text-white px-6 py-2.5 text-sm gap-1"
                    >
                      学びポイントを見る <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <p className="font-black text-base text-ink-800 mb-4">
                      <Lightbulb className="w-5 h-5 inline-block text-rescue-400 mr-1 -mt-0.5" strokeWidth={3} />
                      この事例の学びポイント
                    </p>
                    <div className="space-y-3 mb-5">
                      {learnings.map((l, i) => (
                        <div key={i} className="card-pop-sm p-4 flex items-start gap-3">
                          <span className="mt-0.5 flex-shrink-0">{l.icon}</span>
                          <p className="text-sm text-ink-700 font-bold leading-relaxed">{l.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-ink-500 leading-relaxed mb-4">
                      このように、具体的な場面を通じて「気づく→考える→対策を言葉にする」流れを繰り返すのがヨチトレです。
                      30テーマの教材で、さまざまな現場のリスクをカバーします。
                    </p>
                    <button
                      onClick={() => setStep(0)}
                      className="btn-pop bg-ink-100 text-ink-700 px-5 py-2 text-xs gap-1"
                    >
                      もう一度見る
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ====== 5. Contents ====== */

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
      desc: "施設名の追加や文言の編集など自由にカスタマイズ可能。モニター投影にも対応。",
    },
    {
      icon: <Mic className="w-7 h-7" strokeWidth={2.5} />,
      title: "読み上げ台本（5分/10分）",
      desc: "「何を言えばいいか分からない」を解決。台本どおりに読むだけで進行できます。",
      badge: "みんなでプランのみ",
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
              <div className="card-pop p-6 flex gap-4 h-full relative">
                <span className="w-12 h-12 rounded-pop-sm bg-sage-100 border-2 border-sage-300 flex items-center justify-center flex-shrink-0 text-sage-700">
                  {item.icon}
                </span>
                <div>
                  <p className="font-black text-sm text-ink-800 mb-1">{item.title}</p>
                  <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
                {item.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-rescue-100 text-rescue-700 border-2 border-rescue-300 px-2 py-0.5 rounded-pop-sm">
                    {item.badge}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== 6. Usage ====== */

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
      title: "考える・話し合う",
      desc: "「何が気になる？」「どうすれば安心？」を書き出す",
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

/* ====== 7. Preview ====== */

function Preview() {
  const previewItems = [
    { label: "転倒リスク（居室）", placeholder: true },
    { label: "移乗介助（ベッド→車いす）", placeholder: true },
    { label: "入浴介助（浴室環境）", placeholder: true },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
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

/* ====== 8. Pricing (2 Plans) ====== */

function Pricing() {
  const plans = [
    {
      id: "solo",
      icon: <User className="w-6 h-6" strokeWidth={2.5} />,
      name: "お一人でヨチトレ",
      sub: "じっくり集中。台本なしで自分の気づきを試す。",
      price: "10,800",
      tax: "税抜",
      color: "bg-sage-50",
      borderColor: "border-sage-400",
      btnBg: "bg-sage-500",
      url: PLAN_A_URL,
      features: [
        { text: "PDF 30テーマ", included: true },
        { text: "スライド 30テーマ", included: true },
        { text: "記録テンプレート", included: true },
        { text: "読み上げ台本", included: false },
      ],
    },
    {
      id: "team",
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      name: "みんなでヨチトレ",
      sub: "チームで意見交換。台本ありでディスカッションを円滑に。",
      price: "14,980",
      tax: "税抜",
      color: "bg-coral-50",
      borderColor: "border-coral-400",
      btnBg: "bg-coral-500",
      url: PLAN_B_URL,
      popular: true,
      features: [
        { text: "PDF 30テーマ", included: true },
        { text: "スライド 30テーマ", included: true },
        { text: "記録テンプレート", included: true },
        { text: "読み上げ台本（5分/10分）", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-sage-50 border-y-3 border-ink-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <SectionHeading>プラン</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.12}>
              <div className={`card-pop ${plan.color} relative h-full flex flex-col`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[11px] font-black px-4 py-1 rounded-pop-sm border-3 border-ink-900 shadow-pop-sm">
                    おすすめ
                  </div>
                )}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-11 h-11 rounded-pop-sm ${plan.borderColor} border-3 border-ink-900 flex items-center justify-center text-ink-700 shadow-pop-sm ${plan.color}`}>
                      {plan.icon}
                    </span>
                    <div>
                      <p className="font-black text-base text-ink-900">{plan.name}</p>
                      <p className="text-xs text-ink-500">{plan.sub}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-black text-ink-950">&yen;{plan.price}</span>
                    <span className="text-xs text-ink-400 ml-2 font-bold">（{plan.tax}）</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-2 text-sm">
                        {f.included ? (
                          <CheckCircle2 className="w-4 h-4 text-sage-500 flex-shrink-0" strokeWidth={3} />
                        ) : (
                          <span className="w-4 h-4 rounded-full border-2 border-ink-200 flex-shrink-0" />
                        )}
                        <span className={`font-bold ${f.included ? "text-ink-700" : "text-ink-300"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA - fixed at bottom */}
                  <motion.a
                    href={plan.url}
                    whileHover={{ x: 2, y: 2 }}
                    whileTap={{ x: 4, y: 4 }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-black border-3 border-ink-900 rounded-pop-sm ${plan.btnBg} text-white shadow-pop hover:shadow-pop-hover active:shadow-none transition-shadow`}
                  >
                    <ShoppingCart className="w-4 h-4" strokeWidth={3} />
                    このプランを購入する
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-xs text-ink-400 mt-6">
            いずれも買い切り。1購入＝1法人ライセンス（拠点数制限なし）。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ====== 9. FAQ ====== */

function FAQ() {
  const faqs = [
    {
      q: "どのくらいの時間でできますか？",
      a: "1回あたり5分で完結できるように設計しています。台本どおりに進行するだけでOK。10分版の台本も「みんなでヨチトレ」プランに付属しています。",
    },
    {
      q: "「お一人で」と「みんなで」の違いは？",
      a: "「お一人でヨチトレ」は台本なしで自分のペースで取り組むプラン。「みんなでヨチトレ」は読み上げ台本付きでチームディスカッションがスムーズに回せるプランです。",
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

/* ====== 10. Trust ====== */

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

/* ====== 11. Final CTA ====== */

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PurchaseButton size="lg" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm font-bold text-ink-400 hover:text-sage-400 transition-colors"
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

/* ====== Page ====== */

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsCards />
      <SampleTraining />
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
