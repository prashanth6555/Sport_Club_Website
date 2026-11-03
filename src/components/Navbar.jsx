import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { club, navLinks } from '../data/content'
import Button from './Button'
import { LogoMark } from './LogoMark'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition duration-300 ${
        scrolled || open ? 'bg-ink' : 'bg-gradient-to-b from-ink/85 to-transparent'
      }`}
    >
      <div className="flex h-20 w-full items-center justify-between gap-4 px-5 md:px-8 xl:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label={`${club.name} home`}>
          <LogoMark />
          <span className="leading-none">
            <span className="block font-display text-[1.7rem] tracking-wide text-white">CRESTFIELD</span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-white/60">Sports Club</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-[13px] uppercase tracking-[0.16em] transition ${isActive ? 'text-lime' : 'text-white/75 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={club.phoneHref} className="hidden text-sm text-white/80 hover:text-white lg:inline">
            {club.phoneDisplay}
          </a>
          <Button to="/membership" className="hidden sm:inline-flex">
            Join now
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/25 text-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-full bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 overflow-y-auto bg-ink px-6 py-8 transition duration-300 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `border-b border-white/10 py-3 font-display text-5xl uppercase ${isActive ? 'text-lime' : 'text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/membership" className="mt-8">
          Join now
        </Button>
      </div>
    </header>
  )
}
