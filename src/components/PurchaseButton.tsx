"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { PURCHASE_URL } from "@/lib/constants";

interface Props {
  size?: "md" | "lg";
  className?: string;
}

export default function PurchaseButton({ size = "md", className = "" }: Props) {
  const py = size === "lg" ? "py-4" : "py-3";
  const text = size === "lg" ? "text-base" : "text-sm";
  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4";

  return (
    <motion.a
      href={PURCHASE_URL}
      whileHover={{ x: 2, y: 2 }}
      whileTap={{ x: 4, y: 4 }}
      className={`inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 ${py} ${text} font-black border-3 border-ink-900 rounded-pop-sm bg-coral-500 text-white shadow-pop hover:shadow-pop-hover active:shadow-none transition-shadow ${className}`}
    >
      <ShoppingCart className={iconSize} strokeWidth={3} />
      プランを選ぶ
    </motion.a>
  );
}
