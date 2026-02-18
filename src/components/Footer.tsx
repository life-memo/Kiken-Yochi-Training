import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-sm mb-2">今日も安全に！</p>
            <p className="text-xs text-navy-400">
              介護・福祉の朝礼が&quot;読むだけ&quot;で回る安全ミニ教材（危険予知/KYT対応）
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold text-white text-sm mb-2">リンク</p>
            <ul className="space-y-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-navy-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-white text-sm mb-2">お問い合わせ</p>
            <p className="text-xs text-navy-400">
              法人でのご利用・請求書払いなど、
              <br />
              お気軽に
              <Link href="/contact" className="underline hover:text-white">
                お問い合わせ
              </Link>
              ください。
            </p>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 text-center text-xs text-navy-500">
          &copy; {new Date().getFullYear()} 今日も安全に！ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
