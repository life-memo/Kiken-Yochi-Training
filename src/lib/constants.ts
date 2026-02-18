export const SITE_NAME = "5分KYTシート｜介護・福祉向け危険予知トレーニング";
export const SITE_DESCRIPTION =
  "介護・福祉の現場で使える「5分で回せるKYTシート」スターター30。転倒・移乗・入浴・腰痛など、現場で多いヒヤリハットをそのまま使える形でお届けします。PDF＋PowerPoint＋進行台本＋記録テンプレート付き。";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kyt-sheet.example.com";

export const PRODUCT_NAME = "介護・福祉向け「5分で回せるKYTシート」スターター30";

// Stripe（将来実装用）
// export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || "";
// export const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "";

export const NAV_LINKS = [
  { href: "/#features", label: "特徴" },
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
