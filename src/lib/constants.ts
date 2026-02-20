export const SITE_NAME = "ヨチトレ｜一人一人の安全意識を高める。事故を減らす気づきトレーニング。";
export const SITE_DESCRIPTION =
  "現場の朝礼がたった5分で回る安全気づきトレーニング教材。読むだけでヒヤリハットが減る。ヒトリdeヨチトレ・ミンナdeヨチトレの2種をご用意。";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kiken-yochi-training.vercel.app";

export const BRAND_NAME = "ヨチトレ";
export const BRAND_SLUG = "yochitore";
export const BRAND_CATCH = "一人一人の安全意識を高める。事故を減らす気づきトレーニング。";

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
  { href: "/#evidence", label: "なぜヨチトレか" },
  { href: "/#sample", label: "体験" },
  { href: "/#usage", label: "使い方" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FOOTER_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
