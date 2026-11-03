import { Link } from 'react-router-dom'
import Photo from './Photo'

export default function SportCard({ sport }) {
  return (
    <Link
      to={`/sports#${sport.id}`}
      className="group relative block h-full min-h-[460px] overflow-hidden bg-field focus-visible:z-10"
    >
      <Photo
        src={sport.image}
        alt={sport.imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-lime">{sport.tag}</p>
        <h3 className="mt-2 font-display text-4xl uppercase text-white">{sport.name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 transition-all duration-500 group-hover:max-h-24">
          {sport.blurb}
        </p>
      </div>
    </Link>
  )
}
