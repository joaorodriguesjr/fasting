import { useCallback } from 'react'
import { useStorage } from '@Hook/Storage'

interface Fast { start: number, finish: number }

interface Fasts {
  target: number
  current: Fast | null
  list: Fast[]
}

export function useFasts() {
  const [ fasts, setFasts ] = useStorage<Fasts>('fasts', { target: 12, current: null, list: [] })

  const startFasting = useCallback(() => {
    const fast = { start: Date.now(), finish: 0 }
    fasts.list.push(fast)
    fasts.current = fast
    setFasts({ ...fasts })
  }, [ fasts ])

  const stopFasting = useCallback(() => {
    if (fasts.current === null) return

    for (const fast of fasts.list) {
      if (fast.start !== fasts.current.start) {
        continue
      }

      fast.finish = Date.now()
    }

    fasts.current = null
    setFasts({ ...fasts })
  }, [ fasts ])

  const changeProtocol = useCallback((target: number) => {
    if (target === fasts.target) return

    setFasts({ ...fasts, target })
  }, [ fasts ])

  return { fasts, startFasting, stopFasting, changeProtocol }
}
