"use client";

import { useState, type FormEvent } from "react";

interface Props {
  className?: string;
}

export default function LeadForm({ className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [facility, setFacility] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, facility, type: "waitlist" }),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      setStatus("success");
      setEmail("");
      setFacility("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-primary-50 border border-primary-200 rounded-lg p-6 text-center ${className}`}>
        <p className="text-primary-900 font-bold mb-1">登録ありがとうございます</p>
        <p className="text-primary-800 text-sm">
          発売開始時に優先してご案内いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div>
        <label htmlFor="email-waitlist" className="sr-only">
          メールアドレス
        </label>
        <input
          id="email-waitlist"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          className="w-full px-4 py-3 border border-navy-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      <div>
        <label htmlFor="facility-waitlist" className="sr-only">
          施設名・法人名
        </label>
        <input
          id="facility-waitlist"
          type="text"
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
          placeholder="施設名・法人名（任意）"
          className="w-full px-4 py-3 border border-navy-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 rounded-md font-bold text-sm bg-primary-700 text-white hover:bg-primary-800 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "送信中..." : "先行案内を受け取る"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-xs text-center">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <p className="text-xs text-navy-400 text-center">
        <a href="/privacy" className="underline">プライバシーポリシー</a>に同意の上ご登録ください。
      </p>
    </form>
  );
}
