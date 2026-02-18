import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-sm mb-2">5分KYTシート</p>
            <p className="text-xs text-gray-400">
              介護・福祉の現場で使える危険予知トレーニング教材
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
                    className="text-xs text-gray-400 hover:text-white transition-colors"
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
            <p className="text-xs text-gray-400">
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

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} 5分KYTシート All rights reserved.
        </div>
      </div>
    </footer>
  );
}
