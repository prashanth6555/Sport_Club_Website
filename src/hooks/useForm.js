import { useCallback, useState } from 'react'

export function useForm(initial, validate) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = useCallback((partial) => {
    setValues((current) => ({ ...current, ...partial }))
  }, [])

  function handleChange(event) {
    const { name, type, checked, value } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      document.getElementById(Object.keys(nextErrors)[0])?.focus()
      return false
    }
    setStatus('success')
    return true
  }

  function reset(next = initial) {
    setValues(next)
    setErrors({})
    setStatus('idle')
  }

  return { values, errors, status, handleChange, handleSubmit, reset, update, setStatus }
}
