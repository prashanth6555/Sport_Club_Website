import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chip from '../components/Chip'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { heroSlides, sports } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Sports() {
  usePageTitle('Sports')
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? sports : sports.filter((sport) => sport.id === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Sports & activities"
        title="Five ways to spend the evening."
        image={heroSlides[2]}
        imageAlt="Basketball player driving toward the basket"
      >
        Each sport has its own coach, timetable, and room. Read the session, then book a start date with membership.
      </PageHero>

      <div className="flex w-full gap-2 overflow-x-auto px-5 py-6 md:px-8 xl:px-10">
        <Chip active={filter === 'all'} onClick={() => setFilter('all')}>
          All sports
        </Chip>
        {sports.map((sport) => (
          <Chip key={sport.id} active={filter === sport.id} onClick={() => setFilter(sport.id)}>
            {sport.name}
          </Chip>
        ))}
      </div>

      <div key={filter} className="animate-rise">
        {visible.map((sport, index) => {
          const imageFirst = index % 2 === 0
          return (
            <article id={sport.id} key={sport.id} className="grid w-full bg-paper lg:grid-cols-2">
              <div className={`relative min-h-[360px] bg-field ${imageFirst ? '' : 'lg:order-2'}`}>
                <Photo src={sport.image} alt={sport.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center px-5 py-14 md:px-10 lg:py-20">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pine">{sport.tag}</p>
                <h2 className="mt-3 font-display text-6xl uppercase leading-none">{sport.name}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/75">{sport.summary}</p>
                <p className="mt-4 leading-relaxed text-ink/70">{sport.details}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink/50">
                  Coach · {sport.coach}
                </p>
                <p className="mt-2 text-sm text-ink/70">{sport.facility}</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Levels</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {sport.levels.map((level) => (
                        <li key={level}>{level}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">This week</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {sport.schedule.map((slot) => (
                        <li key={slot}>{slot}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to={`/membership?sport=${sport.id}`}>Train in {sport.name}</Button>
                  <Link
                    to="/coaches"
                    className="inline-flex items-center px-2 text-sm font-semibold uppercase tracking-[0.16em] underline decoration-lime decoration-2 underline-offset-4"
                  >
                    Meet the coach
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
