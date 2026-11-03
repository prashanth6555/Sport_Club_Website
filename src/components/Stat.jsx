import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

export default function Stat({ value, suffix = '', label, light = false }) {
  const { ref, shown } = useInView(0.4)
  const count = useCountUp(value, shown)

  return (
    <div ref={ref}>
      <p className={`font-display text-5xl leading-none md:text-6xl ${light ? 'text-lime' : 'text-ink'}`}>
        {count.toLocaleString('en-IN')}
        {suffix}
      </p>
      <p className={`mt-3 text-sm uppercase tracking-[0.18em] ${light ? 'text-white/70' : 'text-ink/60'}`}>{label}</p>
    </div>
  )
}
