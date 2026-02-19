"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [facility, setFacility] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          facility,
          type: "contact",
          name,
          message,
        }),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border-3 border-ink-200 rounded-pop-sm text-sm focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none bg-white transition-colors";

  return (
    <PageShell title="お問い合わせ">
      <p className="mb-6">
        法人でのご利用、請求書払い、ボリュームディスカウント、その他ご質問など、お気軽にお問い合わせください。
      </p>

      {status === "success" ? (
        <div className="card-pop p-6 text-center bg-sage-50">
          <CheckCircle2 className="w-8 h-8 text-sage-600 mx-auto mb-2" strokeWidth={3} />
          <p className="text-ink-900 font-black mb-1">送信完了</p>
          <p className="text-ink-600 text-sm">
            お問い合わせありがとうございます。内容を確認のうえ、メールにてご返信いたします。
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-black text-ink-700 mb-1">
              お名前 <span className="text-coral-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-black text-ink-700 mb-1">
              メールアドレス <span className="text-coral-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-facility" className="block text-sm font-black text-ink-700 mb-1">
              施設名・法人名（任意）
            </label>
            <input
              id="contact-facility"
              type="text"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-black text-ink-700 mb-1">
              お問い合わせ内容 <span className="text-coral-500">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-pop bg-sage-500 text-white px-8 py-3 text-sm gap-2 disabled:opacity-60"
          >
            <Send className="w-4 h-4" strokeWidth={3} />
            {status === "sending" ? "送信中..." : "送信する"}
          </button>

          {status === "error" && (
            <p className="text-coral-600 text-xs font-bold">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}
        </form>
      )}
    </PageShell>
  );
}
