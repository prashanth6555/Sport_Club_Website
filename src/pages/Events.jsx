import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chip from '../components/Chip'
import EventCard from '../components/EventCard'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { events, heroSlides, sports } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import { daysLabel, formatEventDate } from '../utils/helpers'

export default function Events() {
  usePageTitle('Events')
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    const list = filter === 'all' ? events : events.filter((event) => event.sportId === filter || event.sportId === 'all')
    return [...list].sort((a, b) => a.inDays - b.inDays)
  }, [filter])

  const [featured, ...rest] = visible
  const featuredDate = featured ? formatEventDate(featured.inDays) : null

  return (
    <>
      <PageHero
        eyebrow="Events & tournaments"
        title="Put the date in the diary."
        image={heroSlides[1]}
        imageAlt="Night football on a floodlit pitch"
      >
        Club cups, league nights, and one open morning for members who want to try a second sport.
      </PageHero>

      <div className="flex w-full gap-2 overflow-x-auto px-5 py-6 md:px-8 xl:px-10">
        <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
          All events
        </Chip>
        {sports.map((sport) => (
          <Chip key={sport.id} active={filter === sport.id} onClick={() => setFilter(sport.id)}>
            {sport.name}
          </Chip>
        ))}
      </div>

      {featured ? (
        <section className="grid w-full bg-ink text-white lg:grid-cols-2">
          <div className="relative min-h-[360px]">
            <Photo src={featured.image} alt={featured.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
              Next up · {daysLabel(featured.inDays)}
            </p>
            <h2 className="mt-3 font-display text-[clamp(3rem,6vw,5.2rem)] uppercase leading-[0.9]">{featured.title}</h2>
            <p className="mt-5 text-lg text-white/75">{featured.summary}</p>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="uppercase tracking-[0.16em] text-white/45">Date</dt>
                <dd className="mt-1">{featuredDate.full}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-white/45">Time</dt>
                <dd className="mt-1">{featured.time}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-white/45">Place</dt>
                <dd className="mt-1">{featured.place}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-white/45">Entry</dt>
                <dd className="mt-1">{featured.spots}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button to={`/contact?topic=${encodeURIComponent(featured.title)}`}>Register interest</Button>
            </div>
          </div>
        </section>
      ) : (
        <p className="px-5 py-16 text-lg md:px-8">No events in this sport yet. Check another filter.</p>
      )}

      {rest.length > 0 ? (
        <section className="w-full bg-sand px-5 py-16 md:px-8 xl:px-10">
          <h2 className="font-display text-5xl uppercase">Also coming up</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/60">
            Want a fixture that is not listed? <Link to="/contact" className="underline decoration-lime decoration-2 underline-offset-4">Write to the desk</Link>.
          </p>
        </section>
      ) : null}
    </>
  )
}
