"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PURCHASE_URL } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-xl font-black text-primary tracking-tight">
            ヨチトレ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sub hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="w-px h-5 bg-line" />
          <Link
            href="/contact"
            className="text-sm font-medium text-sub hover:text-primary transition-colors"
          >
            法人相談
          </Link>
          <a
            href={PURCHASE_URL}
            className="btn-cta px-5 py-2 text-sm"
            aria-label="ヨチトレを購入する"
          >
            購入する
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-main"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden overflow-hidden bg-surface border-t border-line px-5 pb-5"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-sub hover:text-primary border-b border-line/50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-sub hover:text-primary border-b border-line/50"
              onClick={() => setMenuOpen(false)}
            >
              法人相談
            </Link>
            <a
              href={PURCHASE_URL}
              className="btn-cta w-full mt-4 py-3 text-sm"
              onClick={() => setMenuOpen(false)}
              aria-label="ヨチトレを購入する"
            >
              購入する
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
