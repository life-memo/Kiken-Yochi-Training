import Link from "next/link";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PageShell({ title, children }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-primary-700 hover:underline mb-6 inline-block">
        &larr; トップページに戻る
      </Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">{title}</h1>
      <div className="prose prose-sm prose-gray max-w-none [&>h2]:text-lg [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-base [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>p]:mb-4 [&>p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}
