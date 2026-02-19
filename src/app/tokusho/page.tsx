import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

export default function TokushoPage() {
  return (
    <PageShell title="特定商取引法に基づく表記">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ["販売業者", "【販売者名を入力】"],
              ["代表者", "【代表者名を入力】"],
              ["所在地", "【住所を入力】"],
              ["電話番号", "【電話番号を入力】※お問い合わせはメールにて承ります"],
              ["メールアドレス", "【メールアドレスを入力】"],
              ["販売URL", "【サイトURLを入力】"],
              ["商品名", "安全気づきトレーニング教材「ヨチトレ」スターター30"],
              ["販売価格", "商品ページに記載（税込価格を表示）"],
              ["商品代金以外の必要料金", "なし（インターネット接続料はお客様のご負担となります）"],
              ["支払方法", "クレジットカード決済（Visa / Mastercard / American Express / JCB）"],
              ["支払時期", "ご注文時に即時決済"],
              ["商品の引渡し時期", "決済完了後、即時ダウンロード可能"],
              [
                "返品・交換について",
                "デジタル商品の性質上、ダウンロード後の返品・返金はお受けできません。商品に欠陥（ファイル破損等）がある場合は、お問い合わせください。",
              ],
              [
                "動作環境",
                "PDF：Adobe Acrobat Reader等のPDF閲覧ソフト / スライド：Microsoft PowerPoint 2016以降 または互換ソフト",
              ],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-ink-100">
                <th className="py-3 pr-4 text-left font-black text-ink-700 align-top whitespace-nowrap w-40">
                  {label}
                </th>
                <td className="py-3 text-ink-600">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-400 text-xs mt-8">最終更新日：2025年1月1日</p>
    </PageShell>
  );
}
