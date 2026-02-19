import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { FOOTER_LINKS, BRAND_CATCH } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 border-t-3 border-ink-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-pop-sm bg-sage-400 border-3 border-ink-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-white" strokeWidth={3} />
              </span>
              <span className="font-black text-white text-base">ヨチトレ</span>
            </div>
            <p className="text-xs text-ink-400 leading-relaxed">
              {BRAND_CATCH}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold text-white text-sm mb-3">リンク</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-ink-400 hover:text-sage-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-white text-sm mb-3">お問い合わせ</p>
            <p className="text-xs text-ink-400 leading-relaxed">
              法人でのご利用・請求書払いなど、
              <br />
              お気軽に
              <Link href="/contact" className="underline hover:text-sage-400 transition-colors">
                お問い合わせ
              </Link>
              ください。
            </p>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-10 pt-6 text-center text-xs text-ink-500">
          &copy; {new Date().getFullYear()} ヨチトレ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
