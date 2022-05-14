import { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useFasts } from '@Hook/Fasts'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'


const Home: NextPage = () => {
  const [ reload, setReload ] = useState(0)
  const { fasts, startFasting, stopFasting, changeProtocol } = useFasts()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReload(Date.now())
    }, 1000)

    return () => clearTimeout(timeout)
  }, [ reload ])

  return <>
    <div className={styles.container}>
      <select onChange={(event) => changeProtocol(Number(event.target.value))} value={ fasts.target }>
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
            <button onClick={() => stopFasting()}>Stop</button>
          </>
        : <button onClick={() => startFasting()}>Start</button>
      }
      {/* <pre>
        { JSON.stringify(fasts, null, 2) }
      </pre> */}
    </div>
  </>
}

export default Home
