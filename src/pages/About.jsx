import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import SectionHeading from '../components/SectionHeading'
import Stat from '../components/Stat'
import { achievements, facilities, heroSlides, milestones } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero
        eyebrow="About the club"
        title="A ground with a memory."
        image={heroSlides[0]}
        imageAlt="Athletes training outdoors"
      >
        Crestfield opened in 1998 on a cricket outfield in Koramangala. The buildings got better. The habit did not change: come often, and the club will coach you like a regular.
      </PageHero>

      <section className="grid w-full lg:grid-cols-2">
        <div className="px-5 py-16 md:px-10 lg:py-24">
          <SectionHeading
            eyebrow="History"
            title="From one pitch to five sports."
            text="The first members shared a tap and a scorebook. Indoor badminton arrived in 2006, the basketball court came inside in 2014, and the football pitch finally kept its shape through a monsoon. We still keep one front desk."
          />
        </div>
        <div className="relative min-h-[360px] bg-field">
          <Photo
            src={facilities[1].image}
            alt={facilities[1].imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid w-full md:grid-cols-2">
        <article className="bg-ink px-5 py-16 text-white md:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-lime">Mission</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9]">Make serious sport easy to repeat.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            A member should be able to book a session, find the coach, and play at the level they are actually at. We publish the timetable, cap the groups, and keep the courts for the sport on the door.
          </p>
        </article>
        <article className="bg-sand px-5 py-16 md:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-pine">Vision</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9]">The club the city recommends by name.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            We want juniors who grow up on these courts, adults who stay past their first season, and teams that can travel without borrowing kit. Growth is welcome. A second logo on the gate is not the plan.
          </p>
        </article>
      </section>

      <section className="w-full px-5 py-20 md:px-8 xl:px-10">
        <SectionHeading eyebrow="Timeline" title="How the ground grew." />
        <ol className="mt-12 border-l border-ink/15">
          {milestones.map((item) => (
            <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 bg-pine" />
              <p className="font-display text-3xl text-pine">{item.year}</p>
              <h3 className="mt-1 font-display text-2xl uppercase">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-ink/70">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="w-full bg-field px-5 py-20 md:px-8 xl:px-10">
        <SectionHeading inverse eyebrow="Achievements" title="Results, kept on the board." />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <Stat key={item.label} value={item.value} suffix={item.suffix} label={item.label} light />
          ))}
        </div>
      </section>

      <section className="w-full bg-sand">
        <div className="px-5 py-16 md:px-8 xl:px-10">
          <SectionHeading
            eyebrow="The ground"
            title="What you walk into."
            text="Every sport has a home on site. Shoes, bookings, and lost water bottles all come back to the same desk."
          />
        </div>
        <div className="grid md:grid-cols-2">
          {facilities.map((facility) => (
            <article key={facility.title} className="relative min-h-[340px] overflow-hidden bg-field">
              <Photo src={facility.image} alt={facility.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-display text-4xl uppercase text-white">{facility.title}</h3>
                <p className="mt-2 max-w-md text-white/80">{facility.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
