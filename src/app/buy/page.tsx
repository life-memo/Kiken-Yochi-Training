import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PURCHASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ご購入",
};

/**
 * /buy - 購入ページ
 * PURCHASE_URL が外部リンク（https://...）の場合はリダイレクト。
 * フォールバックはトップの価格セクション。
 */
export default function BuyPage() {
  if (PURCHASE_URL.startsWith("http")) {
    redirect(PURCHASE_URL);
  }
  redirect("/#pricing");
}
