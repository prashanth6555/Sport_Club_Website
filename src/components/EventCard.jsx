import { Link } from 'react-router-dom'
import { daysLabel, formatEventDate } from '../utils/helpers'
import Photo from './Photo'

export default function EventCard({ event }) {
  const date = formatEventDate(event.inDays)

  return (
    <article className="flex h-full flex-col border border-ink/10 bg-white">
      <div className="relative h-52 overflow-hidden bg-field">
        <Photo src={event.image} alt={event.imageAlt} className="h-full w-full object-cover" />
        <p className="absolute left-3 top-3 bg-lime px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
          {daysLabel(event.inDays)}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pine">{event.sport}</p>
        <h3 className="mt-2 font-display text-3xl uppercase leading-none text-ink">{event.title}</h3>
        <p className="mt-3 text-sm text-ink/70">
          {date.full}
          <span className="mx-2 text-ink/30">/</span>
          {event.time}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{event.summary}</p>
        <Link
          to={`/contact?topic=${encodeURIComponent(event.title)}`}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-ink underline decoration-lime decoration-2 underline-offset-4"
        >
          Register interest
        </Link>
      </div>
    </article>
  )
}
