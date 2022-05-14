import { useCallback, useEffect, useState } from 'react'

export function useStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [ value, setValue ] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) setValue(JSON.parse(item))
    } catch (error) { console.error(error) }
  }, [ key ])

  const set = useCallback((value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) { console.error(error) }
  }, [ key ])

  return [ value, set ]
}
