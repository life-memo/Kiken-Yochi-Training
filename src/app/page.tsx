"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
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
  TriangleAlert,
  ArrowRight,
  ShoppingCart,
  RefreshCw,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ImageModal from "@/components/ImageModal";
import { PLAN_A_URL, PLAN_B_URL } from "@/lib/constants";

/* ====== Shared ====== */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* CountUp animation for statistics */
function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{inView ? count.toLocaleString() : "0"}{suffix}
    </span>
  );
}

/* ====== 1. Hero ====== */

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-[var(--section-padding-y)] md:py-32"
      style={{
        background: "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(44,110,73,0.06), transparent)",
      }}
    >
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <span className="glass-badge inline-block rounded-pill px-4 py-1.5 text-sm font-medium text-primary mb-8">
                福祉・介護向けコンテンツ配信中
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <p className="text-sm tracking-[0.15em] text-mute font-medium mb-5">
                危険<span className="text-accent font-bold">予知</span> × <span className="text-accent font-bold">トレ</span>ーニング
              </p>
              <h1
                className="font-black text-main leading-[1.2] tracking-[-0.03em] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.75rem)" }}
              >
                「危ない」と
                <br />
                <span className="text-primary">気づける</span>人を、
                <br />
                増やす。
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-sub leading-[1.8] max-w-xl mx-auto lg:mx-0 mb-8">
                事故を減らすには、設備やルールより先に、
                一人ひとりの「気づく力」が必要です。
                ヨチトレは、具体的な現場シーンで繰り返し鍛える
                危険予知トレーニング教材です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="/#sample"
                className="btn-cta px-8 py-3.5 text-lg font-bold w-full sm:w-auto"
                aria-label="ヨチトレを体験してみる"
              >
                <Eye className="w-5 h-5" />
                まずは体験してみる
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sub hover:text-primary transition-colors"
              >
                購入・料金を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: KYT Training Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-card-xl overflow-hidden shadow-card">
              <Image
                src="/images/kyt-training.jpg"
                alt="危険予知トレーニングの様子 — スタッフがテーブルを囲んでKYT研修を行っている"
                width={640}
                height={427}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-card-xl ring-1 ring-inset ring-black/5" />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 1.0 }}
          className="mt-14 text-xs text-mute animate-bounce text-center"
        >
          ↓ scroll
        </motion.p>
      </div>
    </section>
  );
}

/* ====== 2. Problem ====== */

function Problem() {
  return (
    <section className="py-[var(--section-padding-y)] bg-surface">
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-5">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-bold text-main text-center leading-relaxed tracking-[-0.02em] mb-8">
            なぜ、現場の事故は
            <br className="md:hidden" />
            なくならないのか。
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-base text-sub leading-[1.8] text-center space-y-5">
            <p>ルールはある。設備も整えた。でも事故は起きる。</p>
            <p>
              それは、「一人ひとりが危険を危険と感じる力」が
              十分に育っていないからかもしれません。
            </p>
            <p>
              マニュアルを読んで頭では分かっていても、
              実際の現場で「あ、これ危ないかも」と
              瞬時に気づくことができるかどうか——
              <br />
              そこに、大きな差があります。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 3. Why ====== */

function Why() {
  return (
    <section className="py-[var(--section-padding-y)] bg-surface-alt">
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-5">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-bold text-main text-center leading-relaxed tracking-[-0.02em] mb-8">
            「気づく力」は、繰り返しで育つ。
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-base text-sub leading-[1.8] text-center space-y-5">
            <p>危険を察知する力は、知識ではなく「習慣」です。</p>
            <p>
              具体的な場面を見て、自分で考え、言葉にする。
              その積み重ねが、現場での咄嗟の気づきにつながります。
            </p>
            <p>
              だから「やったことがある」では足りない。
              短くていい、頻繁に、続けることが大事です。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 4. Solution (Bento Grid) ====== */

function Solution() {
  const features = [
    {
      icon: <Eye className="w-7 h-7" strokeWidth={1.8} />,
      num: "01",
      title: "具体的な現場シーンで考える",
      body: "実際に起きた事例をもとにしたイラスト付きシートで、「この場面で何が起こりうるか」を自分ごととして考えられる。",
      large: true,
    },
    {
      icon: <RefreshCw className="w-6 h-6" strokeWidth={1.8} />,
      num: "02",
      title: "繰り返せる設計",
      body: "30テーマを収録。毎回違うシーンで、くり返し鍛えられる。「やり尽くした」にならない。",
    },
    {
      icon: <Zap className="w-6 h-6" strokeWidth={1.8} />,
      num: "03",
      title: "準備ゼロ、5分で完結",
      body: "台本を読むだけで進行できる。担当者の負担なしで、すぐ始められる。",
    },
  ];

  return (
    <section id="about" className="py-[var(--section-padding-y)] bg-surface scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading>ヨチトレが選ばれる理由</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`card-clean p-6 md:p-8 h-full flex flex-col ${
                  f.large ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <span className="text-xs font-bold text-mute tracking-wider mb-3">{f.num}</span>
                <div className="w-11 h-11 rounded-card bg-surface-alt flex items-center justify-center text-primary mb-4">
                  {f.icon}
                </div>
                <p className="font-bold text-lg text-main mb-2">{f.title}</p>
                <p className="text-sm text-sub leading-[1.8] flex-1">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== 5. Evidence (Bento Grid + CountUp) ====== */

function Evidence() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      value: 2546,
      suffix: "人",
      label: "上半期・前年比+4%",
      body: "労働災害は増加傾向。福祉・介護分野は特に顕著",
      bg: "bg-[#eef6f0]",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" strokeWidth={2} />,
      prefix: "転倒 ",
      value: 31,
      suffix: "%",
      label: "前年比+8%",
      body: "転倒は災害全体の約3割を占め、増加が続く",
      bg: "bg-[#f0f5ee]",
    },
    {
      icon: <Clock className="w-6 h-6" strokeWidth={2} />,
      static: "9-11時台",
      label: "発生ピーク",
      body: "転倒・腰痛は午前中に集中。朝礼で先回りできる時間帯",
      bg: "bg-[#edf4ec]",
    },
  ];

  return (
    <section id="evidence" className="py-[var(--section-padding-y)] bg-surface-alt scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading sub="厚生労働省データより">
            労働災害は、今も増え続けている。
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-base text-sub text-center leading-[1.8] max-w-xl mx-auto mb-10">
            「うちの施設は大丈夫」——
            そう思っていても、数字は現実を示しています。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: message card */}
          <Reveal delay={0.1}>
            <div className="card-clean p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-sub leading-[1.8] mb-6">
                  転倒・腰痛のピークは午前中。
                  つまり、<strong className="font-bold text-main">始業前に「今日の危険」を意識するだけで、</strong>
                  事故のリスクを下げられる可能性があります。
                </p>
              </div>
              <p className="text-xs text-mute">
                出典：厚生労働省「社会福祉・介護事業における労働災害の発生状況」
              </p>
            </div>
          </Reveal>

          {/* Right: stat cards stacked */}
          <div className="grid gap-4">
            {stats.map((s, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div className={`card-clean p-5 flex items-center gap-5 ${s.bg}`}>
                  <div className="w-11 h-11 rounded-card bg-surface flex items-center justify-center text-primary shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-black text-main leading-none mb-1"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                    >
                      {s.static ? (
                        s.static
                      ) : (
                        <CountUp target={s.value!} suffix={s.suffix || ""} prefix={s.prefix || ""} />
                      )}
                    </p>
                    <p className="text-xs font-medium text-mute">{s.label}</p>
                  </div>
                  <p className="hidden sm:block text-xs text-sub leading-relaxed max-w-[160px]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== 6. Try (体験) ====== */

function SampleTraining() {
  const [step, setStep] = useState(0);

  const learnings = [
    { icon: <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={2.5} />, text: "ブレーキのロック確認（指差し確認）を行う" },
    { icon: <Footprints className="w-4 h-4 text-accent" strokeWidth={2.5} />, text: "キャリーの真後ろに足を置かない立ち位置の工夫" },
    { icon: <Megaphone className="w-4 h-4 text-primary-light" strokeWidth={2.5} />, text: "立ち上がる時の反動を予測した声かけ" },
  ];

  return (
    <section id="sample" className="py-[var(--section-padding-y)] bg-surface scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading>実際に体験してみてください。</SectionHeading>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-base text-sub text-center leading-[1.8] max-w-xl mx-auto mb-10">
            購入前に、ヨチトレがどんな教材かを体験できます。
            「具体的な場面を見て、考えて、気づく」——
            その感覚を、まず味わってみてください。
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-clean overflow-hidden max-w-3xl mx-auto">
            {/* Scene header */}
            <div className="bg-surface-alt border-b border-line p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-card bg-primary text-white flex items-center justify-center">
                  <ShowerHead className="w-5 h-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-medium text-mute tracking-wider">SAMPLE CASE</p>
                  <p className="font-bold text-base text-main">シャワーキャリーを使った入浴介助</p>
                </div>
              </div>
              <p className="text-sm text-sub leading-[1.8]">
                シャワーキャリーを使用した入浴介助中、ブレーキをかけずに利用者を立たせたため、
                キャリーが動き出し、スタッフの右足甲に車輪が乗り上げ骨折した事例です。
              </p>
            </div>

            {/* Step indicator */}
            <div className="flex border-b border-line bg-surface-alt/50">
              {["シーン", "何が気になる？", "どうすれば？", "学びポイント"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`flex-1 py-3 text-xs md:text-sm font-medium text-center transition-colors border-r last:border-r-0 border-line/50 ${
                    step === i ? "bg-surface text-primary font-bold" : "text-mute hover:bg-surface/60"
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
                    <p className="text-sm text-sub leading-[1.8] mb-4">
                      入浴介助のため、利用者をシャワーキャリーに乗せて浴室まで移動しました。
                      浴室に到着後、利用者を立たせようとしています。
                    </p>
                    <div className="card-clean-sm p-4 bg-badge-bg">
                      <div className="flex items-start gap-2">
                        <TriangleAlert className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <p className="text-sm text-main">
                          <strong className="font-bold">この場面で、何が起こりうるでしょうか？</strong>
                          <br />
                          <span className="text-xs text-mute">次のステップで考えてみましょう。</span>
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setStep(1)} className="btn-cta px-5 py-2.5 text-sm mt-5">
                      考えてみる <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-card bg-accent text-white font-bold text-xs flex items-center justify-center">Q1</span>
                      <p className="font-bold text-base text-main">何が気になる？</p>
                    </div>
                    <div className="bg-surface border border-line rounded-card p-4 min-h-[80px] mb-2"
                         style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, var(--color-border) 28px)", lineHeight: "28px" }}>
                      <p className="text-sm text-mute italic">
                        「ブレーキがかかっていないかも」「立ち上がった反動でキャリーが動きそう」「足の位置が車輪の近くにある」
                      </p>
                    </div>
                    <p className="text-xs text-mute mb-4">（実際の教材では自由に書き込めます）</p>
                    <button onClick={() => setStep(2)} className="btn-cta px-5 py-2.5 text-sm">
                      次へ <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-card bg-primary text-white font-bold text-xs flex items-center justify-center">Q2</span>
                      <p className="font-bold text-base text-main">どうすれば安心？</p>
                    </div>
                    <div className="bg-surface border border-line rounded-card p-4 min-h-[80px] mb-2"
                         style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, var(--color-border) 28px)", lineHeight: "28px" }}>
                      <p className="text-sm text-mute italic">
                        「立たせる前にブレーキを指差し確認」「車輪の近くに足を置かない」「声かけしてから立ち上がってもらう」
                      </p>
                    </div>
                    <p className="text-xs text-mute mb-4">（実際の教材では自由に書き込めます）</p>
                    <button onClick={() => setStep(3)} className="btn-cta px-5 py-2.5 text-sm">
                      学びポイントを見る <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    <p className="font-bold text-base text-main mb-4">
                      <Lightbulb className="w-5 h-5 inline-block text-accent mr-1 -mt-0.5" strokeWidth={2.5} />
                      この事例の学びポイント
                    </p>
                    <div className="space-y-3 mb-5">
                      {learnings.map((l, i) => (
                        <div key={i} className="card-clean-sm p-4 flex items-start gap-3">
                          <span className="mt-0.5 flex-shrink-0">{l.icon}</span>
                          <p className="text-sm text-main font-medium leading-relaxed">{l.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-sub leading-[1.8] mb-4">
                      このように、具体的な場面を通じて「気づく→考える→対策を言葉にする」流れを繰り返すのがヨチトレです。
                      30テーマの教材で、さまざまな現場のリスクをカバーします。
                    </p>
                    <button onClick={() => setStep(0)} className="inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-sub bg-surface-alt border border-line rounded-card hover:bg-line/30 transition-colors">
                      もう一度見る
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 7. HowToUse ====== */

function HowToUse() {
  const scenes = ["朝礼（5分）", "安全委員会", "新人研修", "個人学習"];

  const steps = [
    { num: "1", icon: <BookOpen className="w-6 h-6" strokeWidth={1.8} />, title: "今日の1枚を開く", desc: "PDFを印刷するか、スライドをモニターに表示する。" },
    { num: "2", icon: <MessageSquare className="w-6 h-6" strokeWidth={1.8} />, title: "考える・話し合う", desc: "「何が気になる？」「どうすれば安心？」を書き出したり、声に出して話し合う。" },
    { num: "3", icon: <Lightbulb className="w-6 h-6" strokeWidth={1.8} />, title: "気づきを共有・記録する", desc: "記録テンプレートに書いて終了。たった5分、それだけでいい。" },
  ];

  return (
    <section id="usage" className="py-[var(--section-padding-y)] bg-surface-alt scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading>こんな場面で使えます。</SectionHeading>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {scenes.map((s) => (
              <span key={s} className="inline-block text-sm font-medium text-sub bg-surface border border-line px-4 py-1.5 rounded-pill">
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="card-clean text-center p-6 md:p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <div className="mb-3 text-primary flex justify-center">{s.icon}</div>
                <p className="font-bold text-base text-main mb-2">{s.title}</p>
                <p className="text-sm text-sub leading-[1.8]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== 8. Contents (Bento Grid + Preview) ====== */

function Contents() {
  const items = [
    { icon: <FileText className="w-7 h-7" strokeWidth={1.8} />, title: "PDF（30テーマ）", desc: "A4印刷でそのまま使える。福祉・介護向け30テーマを収録。" },
    { icon: <Presentation className="w-7 h-7" strokeWidth={1.8} />, title: "スライド（30テーマ）", desc: "自由にカスタマイズ可能。モニター投影にも対応。" },
    { icon: <Mic className="w-7 h-7" strokeWidth={1.8} />, title: "読み上げ台本（5分/10分）", desc: "台本どおりに読むだけで進行できます。", badge: "ミンナdeのみ" },
    { icon: <ClipboardCheck className="w-7 h-7" strokeWidth={1.8} />, title: "記録テンプレート", desc: "監査や第三者評価の証跡にも使えます。" },
  ];

  const previewItems = [
    { label: "転倒リスク（居室）", placeholder: true },
    { label: "移乗介助（ベッド→車いす）", placeholder: true },
    { label: "入浴介助（浴室環境）", placeholder: true },
  ];

  return (
    <section id="contents" className="py-[var(--section-padding-y)] bg-surface scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading sub="買い切り・追加課金なし。すぐ使えるものが、すべて揃っています。">
            セット内容
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-clean p-5 h-full relative">
                <div className="w-11 h-11 rounded-card bg-surface-alt flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-main mb-1">{item.title}</p>
                <p className="text-xs text-sub leading-[1.8]">{item.desc}</p>
                {item.badge && (
                  <span className="glass-badge-accent absolute top-4 right-4 rounded-sm px-2 py-0.5 text-xs font-semibold text-accent">
                    {item.badge}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="text-sm font-medium text-mute text-center mt-12 mb-5">
            実際の教材イメージ（クリックで拡大）
          </p>
          <ImageModal items={previewItems} />
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 9. Pricing ====== */

function Pricing() {
  const plans = [
    {
      id: "solo",
      icon: <User className="w-6 h-6" strokeWidth={1.8} />,
      name: "ヒトリdeヨチトレ",
      sub: "じっくり集中。台本なしで自分の気づきを試す。",
      price: "9,980",
      tax: "税抜",
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
      icon: <Users className="w-6 h-6" strokeWidth={1.8} />,
      name: "ミンナdeヨチトレ",
      sub: "チームで意見交換。台本ありでディスカッションを円滑に。",
      price: "14,980",
      tax: "税抜",
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
    <section id="pricing" className="py-[var(--section-padding-y)] bg-surface-alt scroll-mt-16">
      <div className="max-w-[var(--max-width-base)] mx-auto px-5">
        <Reveal>
          <SectionHeading>料金・タイプ</SectionHeading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.12}>
              <div className="card-clean relative h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 glass-badge-primary rounded-pill px-4 py-1 text-xs font-bold text-primary">
                    おすすめ
                  </div>
                )}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-11 h-11 rounded-card bg-surface-alt border border-line flex items-center justify-center text-primary">
                      {plan.icon}
                    </span>
                    <div>
                      <p className="font-bold text-base text-main">{plan.name}</p>
                      <p className="text-xs text-mute">{plan.sub}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-black text-main">&yen;{plan.price}</span>
                    <span className="text-xs text-mute ml-2">（{plan.tax}）</span>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-2 text-sm">
                        {f.included ? (
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                        ) : (
                          <span className="w-4 h-4 rounded-full border-2 border-line flex-shrink-0" />
                        )}
                        <span className={`font-medium ${f.included ? "text-main" : "text-mute"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.url}
                    className="btn-cta w-full py-3.5 text-sm"
                    aria-label={`${plan.name}を購入する`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    購入する
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="text-center text-xs text-mute mt-6">
            買い切り・追加課金なし。同一法人内であれば、拠点数・スタッフ数に制限はありません。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 10. FAQ ====== */

function FAQ() {
  const faqs = [
    { q: "どのくらいの時間でできますか？", a: "1回あたり5分で完結できるように設計しています。台本どおりに進行するだけでOK。10分版の台本も「ミンナdeヨチトレ」に付属しています。" },
    { q: "「ヒトリde」と「ミンナde」の違いは？", a: "「ヒトリdeヨチトレ」は台本なしで自分のペースで取り組むタイプ。「ミンナdeヨチトレ」は読み上げ台本付きでチームディスカッションがスムーズに回せるタイプです。" },
    { q: "印刷して使えますか？", a: "はい。A4サイズのPDFなので、そのまま印刷して配布できます。施設・法人内での印刷・配布は自由です。" },
    { q: "スライドは編集できますか？", a: "はい。施設名の追加や内容のアレンジなど自由に編集いただけます。モニター投影にも対応しています。" },
    { q: "複数拠点で使えますか？", a: "1購入＝1法人ライセンスです。同一法人内であれば拠点数に制限はありません。" },
    { q: "返品・キャンセルはできますか？", a: "デジタル商品の性質上、購入後の返品・返金は原則承っておりません。プレビュー画像で内容をご確認のうえ、ご購入ください。" },
    { q: "どんな施設・業種に向いていますか？", a: "現在は福祉・介護施設向けのコンテンツを中心に展開しています。転倒・移乗・入浴・腰痛・感染症など、介護現場でよく起きる事例を30テーマ収録しています。製造・建設など他業種向けコンテンツは今後追加予定です。" },
  ];

  return (
    <section id="faq" className="py-[var(--section-padding-y)] bg-surface scroll-mt-16">
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-5">
        <Reveal>
          <SectionHeading>よくあるご質問</SectionHeading>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group card-clean-sm overflow-hidden">
                <summary className="cursor-pointer p-5 text-sm font-bold text-main flex items-center justify-between">
                  {f.q}
                  <ChevronDown className="w-4 h-4 text-mute group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5 text-sm text-sub leading-[1.8] border-t border-line pt-4">
                  {f.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====== Trust ====== */

function Trust() {
  return (
    <section className="py-10 md:py-14 bg-surface">
      <div className="max-w-[var(--max-width-narrow)] mx-auto px-5">
        <Reveal>
          <div className="card-clean-sm p-6 bg-surface-alt">
            <p className="font-bold text-sm text-main mb-3">安心してお使いいただくために</p>
            <ul className="space-y-2 text-xs text-sub leading-[1.8]">
              <li className="flex gap-2">
                <span className="text-mute flex-shrink-0">•</span>
                本教材は安全教育の補助を目的としています。現場判断は各施設の責任者の指示に従ってください。
              </li>
              <li className="flex gap-2">
                <span className="text-mute flex-shrink-0">•</span>
                シートの内容は一般的な現場のリスクを想定したものであり、すべての状況を網羅するものではありません。
              </li>
              <li className="flex gap-2">
                <span className="text-mute flex-shrink-0">•</span>
                <span>詳細は<a href="/terms" className="text-primary underline font-medium">利用規約</a>をご確認ください。</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== 11. Final CTA ====== */

function FinalCTA() {
  return (
    <section className="py-[var(--section-padding-y)] bg-main text-white">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-[-0.02em]">
            「気づける人」が増えると、現場が変わる。
          </h2>
          <p className="text-sm opacity-60 mb-8 leading-[1.8]">
            まずは無料で体験してみてください。
            <br />
            5分で、ヨチトレの感覚がわかります。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="/#sample"
              className="btn-cta px-8 py-3.5 text-base font-bold w-full sm:w-auto"
              aria-label="ヨチトレを体験してみる"
            >
              <Eye className="w-5 h-5" />
              まずは体験してみる
            </a>
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4" />
              購入・料金を見る
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium opacity-40 hover:opacity-80 transition-opacity"
          >
            <Building2 className="w-4 h-4" />
            法人でのご相談はこちら
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ====== Sticky CTA Bar (desktop only) ====== */

function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 hidden lg:block"
          style={{ background: "rgba(44, 110, 73, 0.96)" }}
        >
          <div className="max-w-[var(--max-width-base)] mx-auto px-5 h-14 flex items-center justify-between">
            <span className="font-bold text-white text-sm tracking-tight">ヨチトレ</span>
            <div className="flex items-center gap-4">
              <a
                href="/#sample"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-5 py-2 rounded-card hover:bg-surface-alt transition-colors"
                aria-label="ヨチトレを体験してみる"
              >
                まずは体験してみる
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#pricing"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                購入・料金を見る
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====== Page ====== */

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Why />
      <Solution />
      <Evidence />
      <SampleTraining />
      <HowToUse />
      <Contents />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
      <StickyCtaBar />
    </>
  );
}
