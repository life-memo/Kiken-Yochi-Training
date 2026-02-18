"use client";

import { useState, useCallback, useEffect } from "react";

interface Props {
  /** サムネイル一覧（番号 or 画像URL） */
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group aspect-[3/4] bg-navy-50 border border-navy-200 rounded-lg flex items-center justify-center relative overflow-hidden hover:border-primary-400 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="text-center text-navy-400">
              <svg
                className="w-12 h-12 mx-auto mb-2 group-hover:text-primary-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xs">{item.label}</p>
            </div>
            <span className="absolute bottom-2 right-2 text-[10px] text-navy-300 bg-white/80 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              クリックで拡大
            </span>
          </button>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-navy-100">
              <p className="font-bold text-sm text-navy-800">
                プレビュー — {items[openIndex].label}
              </p>
              <button
                onClick={close}
                className="p-1 text-navy-400 hover:text-navy-800 transition-colors"
                aria-label="閉じる"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-[3/4] bg-navy-50 rounded-lg flex items-center justify-center border border-navy-200">
                <div className="text-center text-navy-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">{items[openIndex].label}</p>
                  <p className="text-xs mt-1 text-navy-300">実際の教材画像が入ります</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
