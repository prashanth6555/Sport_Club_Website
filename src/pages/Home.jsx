import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import EventCard from '../components/EventCard'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SportCard from '../components/SportCard'
import Stat from '../components/Stat'
import { coaches, events, heroSlides, plans, reasons, sports, stats } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import { rupee } from '../utils/helpers'

export default function Home() {
  usePageTitle('')
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [])

  const featuredEvents = [...events].sort((a, b) => a.inDays - b.inDays).slice(0, 3)
  const featuredCoaches = coaches.slice(0, 3)

  return (
    <>
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink">
        {heroSlides.map((src, index) => (
          <Photo
            key={src}
            src={src}
            alt=""
            priority={index === 0}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === slide ? 'animate-ken opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative flex h-full flex-col">
          <div className="flex flex-1 flex-col justify-end px-5 pb-8 md:px-8 xl:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime">
              Bengaluru · Est. 1998
            </p>
            <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.4rem,10vw,8.4rem)] uppercase leading-[0.86] text-white">
              Where the
              <br />
              city comes
              <br />
              to play.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Cricket, football, basketball, badminton, and tennis. Coached sessions, a real timetable, and a desk that answers the phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/membership">
                Join now <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </Button>
              <Button to="/sports" variant="ghost">
                View sports
              </Button>
            </div>
            <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero images">
              {heroSlides.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={index === slide}
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setSlide(index)}
                  className={`h-1.5 transition-all ${index === slide ? 'w-10 bg-lime' : 'w-5 bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden border-t border-white/15 bg-ink/75 py-4 backdrop-blur">
            <div className="animate-marquee flex w-max">
              {[...sports, ...sports].map((sport, index) => (
                <span key={`${sport.id}-${index}`} className="px-6 font-display text-2xl uppercase tracking-wide text-white">
                  {sport.name}
                  <span className="ml-6 text-lime">●</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full bg-field sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="border-white/10 px-5 py-10 md:px-8 xl:border-l xl:px-10 xl:first:border-l-0">
            <Stat value={item.value} suffix={item.suffix} label={item.label} light />
          </div>
        ))}
      </section>

      <section className="grid w-full lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 lg:py-24">
          <SectionHeading
            eyebrow="The club"
            title="Show up. We’ll know your name."
            text="Crestfield is a single ground in Koramangala, not a chain. You get a coach, a court or a pitch, and a membership that matches how often you actually play."
          />
          <div className="mt-8">
            <Button to="/about" variant="ink">
              Our story
            </Button>
          </div>
        </div>
        <div className="relative min-h-[380px] bg-field">
          <Photo
            src={sports[0].image}
            alt="Cricket training at the club"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="w-full bg-sand">
        <div className="px-5 py-16 md:px-8 xl:px-10">
          <SectionHeading
            eyebrow="Featured activities"
            title="Five sports. One membership desk."
            text="Pick a sport to train in, or use a Match plan and move between them through the week."
          />
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-5">
          {sports.map((sport, index) => (
            <Reveal
              key={sport.id}
              delay={index * 70}
              className={`h-full ${index === sports.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
            >
              <SportCard sport={sport} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-paper px-5 py-20 md:px-8 xl:px-10">
        <SectionHeading eyebrow="Why members stay" title="Built for regulars." />
        <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="bg-paper p-8">
              <p className="font-display text-5xl text-pine">{reason.number}</p>
              <h3 className="mt-4 font-display text-3xl uppercase text-ink">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-ink px-5 py-20 text-white md:px-8 xl:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            inverse
            eyebrow="Coaches"
            title="The people running the session."
            text="Six leads cover the five sports and the strength room. Open a profile for credentials and how they coach."
          />
          <Button to="/coaches" variant="ghost">
            All coaches
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {featuredCoaches.map((coach) => (
            <Link key={coach.id} to="/coaches" className="group border border-white/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Photo
                  src={coach.image}
                  alt={coach.imageAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-lime">{coach.sport}</p>
                <h3 className="mt-2 font-display text-3xl uppercase">{coach.name}</h3>
                <p className="mt-2 text-sm text-white/65">{coach.years} years · {coach.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full bg-sand px-5 py-20 md:px-8 xl:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Upcoming" title="Events on the board." />
          <Button to="/events" variant="line">
            Full calendar
          </Button>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="w-full bg-paper px-5 py-20 md:px-8 xl:px-10">
        <SectionHeading
          eyebrow="Membership"
          title="Pick a plan and a start date."
          text="Yearly billing covers twelve months for the price of ten. You can change sport after the first month."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col border p-7 ${plan.featured ? 'border-ink bg-ink text-white' : 'border-ink/10 bg-white text-ink'}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${plan.featured ? 'text-lime' : 'text-pine'}`}>
                {plan.featured ? 'Most chosen' : 'Membership'}
              </p>
              <h3 className="mt-3 font-display text-5xl uppercase">{plan.name}</h3>
              <p className={`mt-2 ${plan.featured ? 'text-white/70' : 'text-ink/65'}`}>{plan.tagline}</p>
              <p className="mt-6 font-display text-5xl">
                {rupee(plan.monthly)}
                <span className="ml-2 font-sans text-sm font-normal uppercase tracking-[0.14em] opacity-70">/ month</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={`mt-1 h-2 w-2 shrink-0 ${plan.featured ? 'bg-lime' : 'bg-pine'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button to={`/membership?plan=${plan.id}`} variant={plan.featured ? 'lime' : 'ink'} className="mt-8">
                Choose {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-ink">
        <Photo
          src={heroSlides[1]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative px-5 py-24 md:px-8 xl:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-lime">Next session</p>
          <h2 className="mt-3 max-w-4xl font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] text-white">
            Your season starts on the day you pick.
          </h2>
          <div className="mt-8">
            <Button to="/membership">Join the club</Button>
          </div>
        </div>
      </section>
    </>
  )
}
