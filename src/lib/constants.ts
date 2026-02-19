export const SITE_NAME = "ヨチトレ｜サクッと、安心。ヒヤリを減らす気づきトレ。";
export const SITE_DESCRIPTION =
  "介護・事務の朝礼がたった5分で回る安全気づきトレーニング教材。PDF30枚・スライド30枚・進行台本・記録テンプレ付き。読むだけでヒヤリハットが減る。";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kiken-yochi-training.vercel.app";

export const BRAND_NAME = "ヨチトレ";
export const BRAND_SLUG = "yochitore";
export const BRAND_CATCH = "サクッと、安心。ヒヤリを減らす気づきトレ。";

export const PRODUCT_NAME =
  "安全気づきトレーニング教材「ヨチトレ」スターター30";

/** 外部決済URL（Stripe Payment Link 等） */
export const PURCHASE_URL =
  process.env.NEXT_PUBLIC_PURCHASE_URL || "/#pricing";

/** 税込価格（表示用） */
export const PRICE_YEN = process.env.NEXT_PUBLIC_PRICE_YEN || "2,980";

export const NAV_LINKS = [
  { href: "/#why", label: "なぜ今" },
  { href: "/#contents", label: "内容" },
  { href: "/#usage", label: "使い方" },
  { href: "/#pricing", label: "価格" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
