export default function Chip({ active, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink hover:border-ink'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
