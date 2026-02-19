export const SITE_NAME = "今日も安全に！｜介護・福祉向け安全ミニ教材";
export const SITE_DESCRIPTION =
  "介護・福祉の朝礼が「読むだけ」で回る安全ミニ教材（危険予知/KYT対応）。転倒・移乗・入浴・腰痛…よくあるヒヤリを「そのまま使える形」に。PDF30枚・PPT30枚・進行台本・記録テンプレ付き。";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kiken-yochi-training.vercel.app";

export const BRAND_NAME = "今日も安全に！";
export const BRAND_SLUG = "kyomo-anzeni";

export const PRODUCT_NAME =
  "介護・福祉向け安全ミニ教材「今日も安全に！」スターター30";

/** 外部決済URL（Stripe Payment Link 等） */
export const PURCHASE_URL =
  process.env.NEXT_PUBLIC_PURCHASE_URL || "/#pricing";

/** 税込価格（表示用） */
export const PRICE_YEN = process.env.NEXT_PUBLIC_PRICE_YEN || "2,980";

export const NAV_LINKS = [
  { href: "/#stats", label: "なぜ今" },
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
