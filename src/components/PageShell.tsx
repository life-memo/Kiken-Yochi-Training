import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PageShell({ title, children }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-1 text-sm font-bold text-sage-600 hover:text-sage-700 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" strokeWidth={3} />
        トップページに戻る
      </Link>
      <h1 className="text-2xl font-black text-ink-950 mb-8">{title}</h1>
      <div className="prose prose-sm prose-gray max-w-none [&>h2]:text-lg [&>h2]:font-black [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:text-ink-800 [&>h3]:text-base [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>p]:mb-4 [&>p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
