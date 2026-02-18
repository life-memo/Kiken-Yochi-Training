"use client";

import { useState, type FormEvent } from "react";
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

  return (
    <PageShell title="お問い合わせ">
      <p className="mb-6">
        法人でのご利用、請求書払い、ボリュームディスカウント、その他ご質問など、お気軽にお問い合わせください。
      </p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800 font-bold mb-1">送信完了</p>
          <p className="text-green-700 text-sm">
            お問い合わせありがとうございます。内容を確認のうえ、メールにてご返信いたします。
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="contact-facility" className="block text-sm font-medium text-gray-700 mb-1">
              施設名・法人名（任意）
            </label>
            <input
              id="contact-facility"
              type="text"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full md:w-auto px-8 py-3 bg-primary-700 text-white rounded font-bold text-sm hover:bg-primary-800 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-xs">
              送信に失敗しました。時間をおいて再度お試しください。
            </p>
          )}
        </form>
      )}
    </PageShell>
  );
}
