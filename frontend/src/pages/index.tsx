import { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useStorage } from '@Hook/Storage'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'

interface Fast {
  start: number
  finish: number
}

interface Fasts {
  target: number
  current: Fast | null
  list: Fast[]
}

const Home: NextPage = () => {
  const [ reload, setReload ] = useState(0)
  const [ fasts, setFasts ] = useStorage<Fasts>('fasts', { target: 12, current: null, list: [] })

  const handleStart = useCallback(() => {
    const fast = { start: Date.now(), finish: 0 }
    fasts.list.push(fast)
    fasts.current = fast
    setFasts({ ...fasts })
  }, [ fasts ])

  const handleStop = useCallback(() => {
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

  const handleProtocolChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = Number(event.target.value)
    if (target === fasts.target) return

    setFasts({ ...fasts, target })
  }, [ fasts ])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReload(Date.now())
    }, 1000)

    return () => clearTimeout(timeout)
  }, [ reload ])

  return <>
    <div className={styles.container}>
      <select onChange={handleProtocolChange} value={ fasts.target }>
        <option value="12">12/12</option>
        <option value="14">14/10</option>
        <option value="16">16/08</option>
        <option value="18">18/06</option>
        <option value="20">20/04</option>
        <option value="22">22/02</option>
        <option value="24">24/00</option>
      </select>
      {
        fasts.current
        ? <>
            <Progress start={fasts.current.start} target={fasts.target} />
            <Stopwatch activation={ fasts.current.start } />
            <button onClick={handleStop}>Stop</button>
          </>
        : <button onClick={handleStart}>Start</button>
      }
      {/* <pre>
        { JSON.stringify(fasts, null, 2) }
      </pre> */}
    </div>
  </>
}

export default Home
