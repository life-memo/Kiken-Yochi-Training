import Link from "next/link";
import { FOOTER_LINKS, BRAND_CATCH } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-main text-mute">
      <div className="max-w-[1100px] mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-black text-white text-lg tracking-tight">
              ヨチトレ
            </span>
            <p className="mt-2 text-sm leading-relaxed opacity-70">
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
                    className="text-sm opacity-60 hover:opacity-100 hover:text-primary-light transition-all"
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
            <p className="text-sm leading-relaxed opacity-60">
              法人でのご利用・請求書払いなど、
              <br />
              お気軽に
              <Link href="/contact" className="underline hover:opacity-100 hover:text-primary-light transition-all">
                お問い合わせ
              </Link>
              ください。
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs opacity-40">
          &copy; {new Date().getFullYear()} ヨチトレ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
