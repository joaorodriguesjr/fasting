import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useFasts } from '@Hook/Fasts'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'
import Icon from '@Component/Icon'
import Head from 'next/head'
import Report from '@Component/Report'
import Status from '@Component/Status'


const Home: NextPage = () => {
  const [ reload, setReload ] = useState(Date.now())
  const { fasts, startFasting, stopFasting, changeProtocol } = useFasts()

  useEffect(() => {
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
        <div className={styles.action}>
          <button onClick={startFasting}>Start Fast</button>
        </div>
      </>
    : <>
        <Progress start={fasts.current.start} target={fasts.target}>
          <div className={styles.stopwatch}>
            {protocol}
            <Stopwatch activation={ fasts.current.start } />
          </div>
        </Progress>
        <Status/>
        <div className={styles.action}>
          <button onClick={stopFasting}>End Fast</button>
        </div>
      </>

  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
      <title>Fasting Tracker</title>
      <meta name="description" content="A fasting tracker that doesn't show ads or collect data."/>
    </Head>
    <div className={styles.container}>
      {progress}

      <Report/>
    </div>
  </>
}

export default Home
