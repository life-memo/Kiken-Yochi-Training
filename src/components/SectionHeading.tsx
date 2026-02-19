interface Props {
  id?: string;
  children: React.ReactNode;
  sub?: string;
}

export default function SectionHeading({ id, children, sub }: Props) {
  return (
    <div id={id} className="text-center mb-10 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-black text-ink-950 tracking-tight">
        {children}
      </h2>
      {sub && (
        <p className="mt-3 text-sm text-ink-500 font-medium">{sub}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1.5 bg-sage-400 rounded-full" />
    </div>
  );
}
