interface Props {
  id?: string;
  children: React.ReactNode;
  sub?: string;
}

export default function SectionHeading({ id, children, sub }: Props) {
  return (
    <div id={id} className="text-center mb-10 scroll-mt-20">
      <h2 className="text-2xl md:text-[2rem] font-bold text-main tracking-[-0.02em] leading-snug">
        {children}
      </h2>
      {sub && (
        <p className="mt-3 text-sm text-mute font-normal leading-relaxed">{sub}</p>
      )}
    </div>
  );
}
