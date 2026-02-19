"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

interface Props {
  items: { label: string; placeholder?: boolean }[];
}

export default function ImageModal({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openIndex, close]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group card-pop aspect-[3/4] flex items-center justify-center relative overflow-hidden hover:shadow-pop-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer bg-sage-50"
          >
            <div className="text-center text-ink-400">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 group-hover:text-sage-500 transition-colors" strokeWidth={1.5} />
              <p className="text-xs font-bold">{item.label}</p>
            </div>
            <span className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold text-ink-400 bg-white border-2 border-ink-200 px-2 py-1 rounded-pop-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3 h-3" />
              拡大
            </span>
          </button>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink-950/80 flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white border-3 border-ink-900 rounded-pop max-w-2xl w-full max-h-[90vh] overflow-auto shadow-pop-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b-3 border-ink-900">
                <p className="font-black text-sm text-ink-800">
                  {items[openIndex].label}
                </p>
                <button
                  onClick={close}
                  className="w-8 h-8 rounded-pop-sm bg-ink-100 border-2 border-ink-300 flex items-center justify-center hover:bg-ink-200 transition-colors"
                  aria-label="閉じる"
                >
                  <X className="w-4 h-4 text-ink-600" strokeWidth={3} />
                </button>
              </div>
              <div className="p-6">
                <div className="aspect-[3/4] bg-sage-50 rounded-pop-sm flex items-center justify-center border-3 border-ink-200">
                  <div className="text-center text-ink-400">
                    <ImageIcon className="w-16 h-16 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-sm font-bold">{items[openIndex].label}</p>
                    <p className="text-xs mt-1 text-ink-300">実際の教材画像が入ります</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
