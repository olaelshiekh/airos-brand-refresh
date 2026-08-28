/**
 * Terra-Tech Atlas: Editorial headings use left-aligned labels, coordinate counters, and
 * decisive display typography instead of generic centered title blocks.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-heading__index"><i aria-hidden="true" />{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  );
}
