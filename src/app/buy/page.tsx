import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

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

      <div className="bg-white rounded-xl border-2 border-gray-200 p-10 shadow-sm">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">購入ページ準備中</h1>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          「5分で回せるKYTシート」スターター30の販売は近日開始予定です。
          <br />
          発売開始時に優先してご案内いたします。
        </p>

        <div className="max-w-sm mx-auto">
          <LeadForm type="waitlist" />
        </div>
      </div>
    </div>
  );
}
