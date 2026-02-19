"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { NAV_LINKS, PURCHASE_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-3 border-ink-900">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-pop-sm bg-sage-400 border-3 border-ink-900 flex items-center justify-center shadow-pop-sm group-hover:shadow-pop-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
            <ShieldCheck className="w-5 h-5 text-white" strokeWidth={3} />
          </span>
          <span className="font-black text-lg text-ink-950 tracking-tight">
            ヨチトレ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-ink-600 hover:text-sage-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-bold text-ink-600 hover:text-sage-600 transition-colors"
          >
            法人相談
          </Link>
          <a
            href={PURCHASE_URL}
            className="btn-pop bg-coral-500 text-white px-5 py-2 text-sm"
          >
            今すぐ購入
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X className="w-6 h-6" strokeWidth={3} /> : <Menu className="w-6 h-6" strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t-3 border-ink-900 bg-white px-4 pb-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-bold text-ink-700 hover:text-sage-600 border-b border-ink-100"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 text-sm font-bold text-ink-700 hover:text-sage-600 border-b border-ink-100"
              onClick={() => setMenuOpen(false)}
            >
              法人相談
            </Link>
            <a
              href={PURCHASE_URL}
              className="btn-pop bg-coral-500 text-white w-full mt-3 py-3 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              今すぐ購入
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
