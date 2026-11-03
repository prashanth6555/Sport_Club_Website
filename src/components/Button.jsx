import { Link } from 'react-router-dom'

const variants = {
  lime: 'bg-lime text-ink hover:bg-white',
  ink: 'bg-ink text-white hover:bg-field',
  ghost: 'border border-white/50 text-white hover:bg-white hover:text-ink',
  line: 'border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white',
}

export default function Button({ to, variant = 'lime', className = '', children, ...props }) {
  const classes = `group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] transition duration-300 disabled:cursor-wait disabled:opacity-60 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
