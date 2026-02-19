export const SITE_NAME = "ヨチトレ｜サクッと、安心。ヒヤリを減らす気づきトレ。";
export const SITE_DESCRIPTION =
  "介護・事務の朝礼がたった5分で回る安全気づきトレーニング教材。読むだけでヒヤリハットが減る。お一人プラン・チームプランの2種をご用意。";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kiken-yochi-training.vercel.app";

export const BRAND_NAME = "ヨチトレ";
export const BRAND_SLUG = "yochitore";
export const BRAND_CATCH = "サクッと、安心。ヒヤリを減らす気づきトレ。";

export const PRODUCT_NAME =
  "安全気づきトレーニング教材「ヨチトレ」";

/** 外部決済URL（Stripe Payment Link 等） */
export const PURCHASE_URL =
  process.env.NEXT_PUBLIC_PURCHASE_URL || "/#pricing";

/** プランA 決済URL */
export const PLAN_A_URL =
  process.env.NEXT_PUBLIC_PLAN_A_URL || "/#pricing";

/** プランB 決済URL */
export const PLAN_B_URL =
  process.env.NEXT_PUBLIC_PLAN_B_URL || "/#pricing";

export const NAV_LINKS = [
  { href: "/#about", label: "ヨチトレとは" },
  { href: "/#why", label: "なぜ今" },
  { href: "/#sample", label: "体験" },
  { href: "/#pricing", label: "プラン" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
