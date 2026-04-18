type SectionCardProps = {
  title: string;
  text: string;
};

export function SectionCard({ title, text }: SectionCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 p-5">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
    </article>
  );
}
