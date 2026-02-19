import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "ご購入ありがとうございます",
};

export default function ThanksPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="card-pop p-10">
        <div className="w-16 h-16 bg-sage-100 border-3 border-sage-400 rounded-pop-sm flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-sage-600" strokeWidth={3} />
        </div>

        <h1 className="text-2xl font-black text-ink-950 mb-3">
          ご購入ありがとうございます
        </h1>

        <div className="text-sm text-ink-600 leading-relaxed space-y-4 mb-8 text-left max-w-md mx-auto">
          <p>
            決済が完了しました。教材の受け取り方法は以下の通りです。
          </p>
          <div className="card-pop-sm p-4 bg-sage-50">
            <p className="font-black text-ink-800 mb-2">受け取り方法</p>
            <ol className="list-decimal pl-4 space-y-1 text-ink-600">
              <li>決済完了メールに記載のダウンロードリンクをクリック</li>
              <li>ZIP ファイルを解凍して、PDF・スライド・台本・テンプレをご確認ください</li>
              <li>不明点があれば <Link href="/contact" className="text-sage-600 underline font-bold">お問い合わせ</Link> ください</li>
            </ol>
          </div>
          <p className="text-xs text-ink-400">
            メールが届かない場合は、迷惑メールフォルダをご確認ください。
            それでも届かない場合は
            <Link href="/contact" className="text-sage-600 underline font-bold ml-1">
              お問い合わせ
            </Link>
            からご連絡ください。
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-bold text-sage-600 hover:text-sage-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
