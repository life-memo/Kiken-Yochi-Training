import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { PURCHASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ご購入",
};

/**
 * /buy - 購入ページ（準備中）
 *
 * 将来の Stripe Checkout 実装イメージ:
 *
 * 1. .env に以下を設定：
 *    STRIPE_SECRET_KEY=sk_live_xxx
 *    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxx
 *    STRIPE_PRICE_ID=price_xxx
 *    STRIPE_WEBHOOK_SECRET=whsec_xxx
 *
 * 2. /api/checkout/route.ts を作成：
 *    - Stripe Checkout Session を作成
 *    - success_url, cancel_url を設定
 *    - クライアントにsession URLをレスポンス
 *
 * 3. このページの「購入する」ボタンから /api/checkout にPOST
 *    → Stripe Checkout にリダイレクト
 *
 * 4. /api/webhook/route.ts で checkout.session.completed を受け取り
 *    → ダウンロードリンクをメール送信（Resend等）
 */

export default function BuyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <Link href="/" className="text-sm text-primary-700 hover:underline mb-8 inline-block">
        &larr; トップページに戻る
      </Link>

      <div className="bg-white rounded-2xl border border-navy-100 p-10 shadow-sm">
        <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-navy-900 mb-3">購入ページ準備中</h1>
        <p className="text-sm text-navy-500 mb-8 leading-relaxed">
          安全ミニ教材「今日も安全に！」スターター30の販売は近日開始予定です。
          <br />
          発売開始時に優先してご案内いたします。
        </p>

        <div className="max-w-sm mx-auto">
          {PURCHASE_URL ? (
            <a
              href={PURCHASE_URL}
              className="inline-block w-full py-3 font-bold text-sm rounded-md bg-primary-700 text-white hover:bg-primary-800 transition-colors text-center"
            >
              今すぐ購入する
            </a>
          ) : (
            <LeadForm />
          )}
        </div>
      </div>
    </div>
  );
}
