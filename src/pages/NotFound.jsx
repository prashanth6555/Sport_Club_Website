import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="flex min-h-[70vh] w-full flex-col justify-center bg-ink px-5 py-32 text-white md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-lime">404</p>
      <h1 className="mt-3 font-display text-7xl uppercase">That page is off the pitch.</h1>
      <Link to="/" className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-lime">
        Back home
      </Link>
    </section>
  )
}
