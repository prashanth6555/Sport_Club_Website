import Photo from './Photo'

export default function CoachCard({ coach, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(coach)}
      className="group w-full border border-ink/10 bg-white text-left transition duration-300 hover:-translate-y-1 hover:border-ink"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-field">
        <Photo
          src={coach.image}
          alt={coach.imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pine">{coach.sport}</p>
        <h3 className="mt-2 font-display text-3xl uppercase text-ink">{coach.name}</h3>
        <p className="mt-2 text-sm text-ink/65">
          {coach.years} years · {coach.specialization}
        </p>
      </div>
    </button>
  )
}
