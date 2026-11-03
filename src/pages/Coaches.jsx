import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Chip from '../components/Chip'
import CoachCard from '../components/CoachCard'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { coaches, heroSlides, sports } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

const filters = [{ id: 'all', name: 'All coaches' }, ...sports.map((sport) => ({ id: sport.id, name: sport.name })), { id: 'strength', name: 'Strength' }]

export default function Coaches() {
  usePageTitle('Coaches')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'all' ? coaches : coaches.filter((coach) => coach.sportId === filter)),
    [filter],
  )

  useEffect(() => {
    if (!selected) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <>
      <PageHero
        eyebrow="Coaches & trainers"
        title="They still take the session."
        image={heroSlides[1]}
        imageAlt="Footballer striking the ball"
      >
        Experience is listed in years on court, not in slogans. Open a profile for the qualification and the part of the game they obsess over.
      </PageHero>

      <div className="flex w-full gap-2 overflow-x-auto px-5 py-6 md:px-8 xl:px-10">
        {filters.map((item) => (
          <Chip key={item.id} active={filter === item.id} onClick={() => setFilter(item.id)}>
            {item.name}
          </Chip>
        ))}
      </div>

      <section className="w-full px-5 pb-20 md:px-8 xl:px-10">
        <div key={filter} className="grid animate-rise gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((coach) => (
            <CoachCard key={coach.id} coach={coach} onSelect={setSelected} />
          ))}
        </div>
      </section>

      {selected
        ? createPortal(
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/70 p-0 sm:items-center sm:p-6" role="presentation" onClick={() => setSelected(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coach-title"
            className="grid max-h-[92vh] w-full overflow-auto bg-paper sm:max-w-4xl sm:grid-cols-[0.8fr_1.2fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <Photo src={selected.image} alt={selected.imageAlt} className="h-80 w-full object-cover sm:min-h-[560px]" />
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">{selected.sport}</p>
              <h2 id="coach-title" className="mt-2 font-display text-5xl uppercase leading-none">
                {selected.name}
              </h2>
              <p className="mt-3 text-ink/70">{selected.title}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="uppercase tracking-[0.16em] text-ink/45">Experience</dt>
                  <dd className="mt-1">{selected.years} years</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.16em] text-ink/45">Specialization</dt>
                  <dd className="mt-1">{selected.specialization}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.16em] text-ink/45">Credentials</dt>
                  <dd className="mt-1">{selected.credentials}</dd>
                </div>
              </dl>
              <p className="mt-6 leading-relaxed text-ink/75">{selected.bio}</p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-8 border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  )
}
