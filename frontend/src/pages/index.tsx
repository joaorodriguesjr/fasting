import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useFasts } from '@Hook/Fasts'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'
import Link from 'next/link'


const Home: NextPage = () => {
  const [ reload, setReload ] = useState(0)
  const { fasts, startFasting, stopFasting, changeProtocol } = useFasts()

  useEffect(() => {
    setReload(Date.now())

    const timeout = setTimeout(() => {
      setReload(Date.now())
    }, 1000)

    return () => clearTimeout(timeout)
  }, [ reload ])

  const protocol = <div className={styles.protocol}>
    {fasts.target}/{24 - fasts.target}
  </div>

  return <>
    <div className={styles.settings}>
      <Link href={'/settings'}>⚙️</Link>
    </div>
    <div className={styles.container}>
    <div className={styles.report}>
      {
        fasts.current
        ? <Progress start={fasts.current.start} target={fasts.target}>
            {protocol}
            <div className={styles.stopwatch}>
              <Stopwatch activation={ fasts.current.start } />
            </div>
            <button onClick={() => stopFasting()}>Stop</button>
          </Progress>
        : <Progress start={0} target={0}>
            {protocol}
            <div className={styles.stopwatch}>
              00:00:00
            </div>
            <button onClick={() => startFasting()}>Start</button>
          </Progress>
      }
    </div>
    </div>
  </>
}

export default Home
