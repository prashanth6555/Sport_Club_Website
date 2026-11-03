import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className = '', delay = 0 }) {
  const { ref, shown } = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
