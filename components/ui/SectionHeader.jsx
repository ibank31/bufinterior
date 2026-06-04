export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-4xl font-black tracking-[-0.025em] text-charcoal">
        {title}
      </h2>
      {children ? <div className="mt-4 text-base leading-8 text-muted">{children}</div> : null}
    </div>
  );
}
