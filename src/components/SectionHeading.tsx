interface Props {
  id?: string;
  children: React.ReactNode;
  sub?: string;
}

export default function SectionHeading({ id, children, sub }: Props) {
  return (
    <div id={id} className="text-center mb-10 scroll-mt-20">
      <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">{children}</h2>
      {sub && <p className="text-sm text-navy-500">{sub}</p>}
    </div>
  );
}
