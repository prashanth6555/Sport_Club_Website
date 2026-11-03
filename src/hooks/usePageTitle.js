import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Crestfield Sports Club` : 'Crestfield Sports Club'
  }, [title])
}
