import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useFasts } from '@Hook/Fasts'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'
import Link from 'next/link'
import Icon from '@Component/Icon'


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
    {fasts.target}/{24 - fasts.target} <Icon name={'Cog'}/>
  </div>

  const progress = (fasts.current == null)
    ? <>
        <Progress start={0} target={0}>
          <div className={styles.stopwatch}>
            {protocol}
            00:00:00
          </div>
        </Progress>
        <button onClick={startFasting}>Start Fast</button>
      </>
    : <>
        <Progress start={fasts.current.start} target={fasts.target}>
          <div className={styles.stopwatch}>
            {protocol}
            <Stopwatch activation={ fasts.current.start } />
          </div>
        </Progress>
        <button onClick={stopFasting}>End Fast</button>
      </>

  return <>
    <div className={styles.container}>
      {progress}
    </div>
  </>
}

export default Home
