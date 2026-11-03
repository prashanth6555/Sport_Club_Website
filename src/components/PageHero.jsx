import Photo from './Photo'

export default function PageHero({ eyebrow, title, image, imageAlt, children }) {
  return (
    <section className="relative flex min-h-[58vh] w-full items-end overflow-hidden bg-ink">
      <Photo
        src={image}
        alt={imageAlt}
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="relative z-10 w-full px-5 pb-12 pt-32 md:px-8 xl:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">{eyebrow}</p>
        <h1 className="mt-3 max-w-5xl font-display text-[clamp(3.2rem,8vw,6.6rem)] uppercase leading-[0.88] text-white">
          {title}
        </h1>
        {children ? <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{children}</div> : null}
      </div>
    </section>
  )
}
