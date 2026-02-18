"use client";

import { useState, type FormEvent } from "react";

type LeadType = "sample" | "waitlist";

interface Props {
  type: LeadType;
  className?: string;
}

export default function LeadForm({ type, className = "" }: Props) {
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
        body: JSON.stringify({ email, facility, type }),
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
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <p className="text-green-800 font-bold mb-1">
          {type === "sample" ? "サンプルをお送りします" : "登録ありがとうございます"}
        </p>
        <p className="text-green-700 text-sm">
          {type === "sample"
            ? "ご入力のメールアドレスに無料サンプル（3枚＋進行台本）をお届けします。"
            : "発売開始時に優先してご案内いたします。"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div>
        <label htmlFor={`email-${type}`} className="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id={`email-${type}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@facility.jp"
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      <div>
        <label htmlFor={`facility-${type}`} className="block text-sm font-medium text-gray-700 mb-1">
          施設名・法人名（任意）
        </label>
        <input
          id={`facility-${type}`}
          type="text"
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
          placeholder="○○特別養護老人ホーム"
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full py-3 rounded font-bold text-sm transition-colors disabled:opacity-60 ${
          type === "sample"
            ? "bg-primary-700 text-white hover:bg-primary-800"
            : "bg-accent-600 text-white hover:bg-accent-700"
        }`}
      >
        {status === "sending"
          ? "送信中..."
          : type === "sample"
            ? "無料サンプルを受け取る（3枚＋台本）"
            : "発売通知を受け取る"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-xs text-center">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <p className="text-xs text-gray-400 text-center">
        <a href="/privacy" className="underline">プライバシーポリシー</a>に同意の上ご登録ください。
      </p>
    </form>
  );
}
