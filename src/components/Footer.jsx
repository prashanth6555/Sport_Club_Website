import { Link } from 'react-router-dom'
import { club, navLinks, sports } from '../data/content'
import { LogoMark } from './LogoMark'

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-white">
      <div className="grid gap-12 px-5 py-16 md:px-8 lg:grid-cols-4 xl:px-10">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="font-display text-3xl tracking-wide">CRESTFIELD</p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            A Bengaluru club for cricket, football, basketball, badminton, and tennis. Est. {club.established}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {club.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a href={club.phoneHref} className="mt-4 block text-sm text-white hover:text-lime">
            {club.phoneDisplay}
          </a>
          <a href={`mailto:${club.email}`} className="mt-1 block text-sm text-white hover:text-lime">
            {club.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {club.hours.map(([day, time]) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            {sports.map((sport) => (
              <li key={sport.id}>
                <Link to={`/sports#${sport.id}`} className="text-white/80 hover:text-white">
                  {sport.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="overflow-hidden px-5 font-display text-[17vw] uppercase leading-[0.8] text-white/10 md:px-8">
        Crestfield
      </p>
      <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-5 text-xs uppercase tracking-[0.16em] text-white/50 sm:flex-row sm:justify-between md:px-8 xl:px-10">
        <p>© {new Date().getFullYear()} Crestfield Sports Club</p>
        <p>Demonstration website · fictional club</p>
      </div>
    </footer>
  )
}
