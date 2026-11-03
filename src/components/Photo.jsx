import { useState } from 'react'

export default function Photo({ src, alt, className = '', priority = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`bg-[linear-gradient(160deg,#163028,#101410)] ${className}`}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
