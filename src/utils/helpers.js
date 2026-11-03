export function rupee(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function eventDate(inDays) {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + inDays)
  return date
}

export function formatEventDate(inDays) {
  const date = eventDate(inDays)
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    full: date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  }
}

export function daysLabel(inDays) {
  if (inDays <= 0) return 'Today'
  if (inDays === 1) return 'Tomorrow'
  return `In ${inDays} days`
}

export function todayISO() {
  const date = new Date()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 14
}

export function isValidName(value) {
  return /^[a-zA-Z][a-zA-Z\s'.-]{1,60}$/.test(value.trim())
}

export function saveLocal(key, entry) {
  try {
    const previous = JSON.parse(localStorage.getItem(key) || '[]')
    const next = Array.isArray(previous) ? previous : []
    next.push(entry)
    localStorage.setItem(key, JSON.stringify(next))
  } catch {
    localStorage.setItem(key, JSON.stringify([entry]))
  }
}
