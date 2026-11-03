export const inputClass =
  'w-full border border-ink/15 bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-ink'

export function fieldClass(hasError) {
  return `${inputClass} ${hasError ? 'border-ember' : ''}`
}

export default function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-ember" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
