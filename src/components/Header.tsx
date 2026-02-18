"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, PURCHASE_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ctaLabel = PURCHASE_URL ? "今すぐ購入" : "先行案内を受け取る";
  const ctaHref = PURCHASE_URL || "/#pricing";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-sm md:text-base text-navy-900">
          今日も安全に！
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy-600 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-navy-600 hover:text-primary-700 transition-colors"
          >
            法人相談
          </Link>
          <Link
            href={ctaHref}
            className="text-sm bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-colors"
          >
            {ctaLabel}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-navy-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-navy-100 bg-white px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-navy-600 hover:text-primary-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block py-2 text-sm text-navy-600 hover:text-primary-700"
            onClick={() => setMenuOpen(false)}
          >
            法人相談
          </Link>
          <Link
            href={ctaHref}
            className="block mt-2 text-center text-sm bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800"
            onClick={() => setMenuOpen(false)}
          >
            {ctaLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
