import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ご購入ありがとうございます",
};

export default function ThanksPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="bg-white rounded-2xl border border-navy-100 p-10 shadow-sm">
        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-navy-900 mb-3">
          ご購入ありがとうございます
        </h1>

        <div className="text-sm text-navy-600 leading-relaxed space-y-4 mb-8 text-left max-w-md mx-auto">
          <p>
            決済が完了しました。教材の受け取り方法は以下の通りです。
          </p>
          <div className="bg-navy-50 rounded-lg p-4 border border-navy-100">
            <p className="font-bold text-navy-800 mb-2">受け取り方法</p>
            <ol className="list-decimal pl-4 space-y-1 text-navy-600">
              <li>決済完了メールに記載のダウンロードリンクをクリック</li>
              <li>ZIP ファイルを解凍して、PDF・PPT・台本・テンプレをご確認ください</li>
              <li>不明点があれば <Link href="/contact" className="text-primary-700 underline">お問い合わせ</Link> ください</li>
            </ol>
          </div>
          <p className="text-xs text-navy-400">
            メールが届かない場合は、迷惑メールフォルダをご確認ください。
            それでも届かない場合は
            <Link href="/contact" className="text-primary-700 underline ml-1">
              お問い合わせ
            </Link>
            からご連絡ください。
          </p>
        </div>

        <Link
          href="/"
          className="inline-block text-sm text-primary-700 hover:underline"
        >
          &larr; トップページに戻る
        </Link>
      </div>
    </div>
  );
}
