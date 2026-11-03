export default function SectionHeading({ eyebrow, title, text, inverse = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.32em] ${inverse ? 'text-lime' : 'text-pine'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-[clamp(2.5rem,6vw,4.75rem)] uppercase leading-[0.9] ${inverse ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {text ? <p className={`mt-5 text-lg leading-relaxed ${inverse ? 'text-white/75' : 'text-ink/70'}`}>{text}</p> : null}
    </div>
  )
}
