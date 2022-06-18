import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from './index.module.css'
import { useFasts } from '@Hook/Fasts'
import Stopwatch from '@Component/Stopwatch'
import Progress from '@Component/Progress'
import Link from 'next/link'
import Icon from '@Component/Icon'
import Head from 'next/head'


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

  const status = <div className={styles.status}>
    <div className={styles.status__line}>
      <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM0.8 4C0.8 5.76731 2.23269 7.2 4 7.2C5.76731 7.2 7.2 5.76731 7.2 4C7.2 2.23269 5.76731 0.8 4 0.8C2.23269 0.8 0.8 2.23269 0.8 4Z" fill="#7F7F7F"/>
        <path d="M8 36C8 38.2091 6.20914 40 4 40C1.79086 40 0 38.2091 0 36C0 33.7909 1.79086 32 4 32C6.20914 32 8 33.7909 8 36ZM0.8 36C0.8 37.7673 2.23269 39.2 4 39.2C5.76731 39.2 7.2 37.7673 7.2 36C7.2 34.2327 5.76731 32.8 4 32.8C2.23269 32.8 0.8 34.2327 0.8 36Z" fill="#FFD000"/>
        <line x1="4" y1="8" x2="4" y2="32" stroke="#595959" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    </div>
    <table>
      <tbody>
        <tr>
          <th>Started</th>
          <td className={styles.highlight}>Today, 12:58 pm</td>
          <td><Icon name={'Edit'}/></td>
        </tr>
        <tr>
          <th>Target</th>
          <td colSpan={2}>Tomorrow, 04:58 am</td>
        </tr>
      </tbody>
    </table>
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
        {status}
        <div className={styles.action}>
          <button onClick={stopFasting}>End Fast</button>
        </div>
      </>

  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
    </Head>
    <div className={styles.container}>
      {progress}

      <div className={styles.report}>
        <div className={styles.report_control}>
          <button>
            <Icon name={'ChevronLeft'}/>
          </button>
        </div>
        <div className={styles.report_month}>January 2022</div>

        <div className={styles.report_content}>
          <div className={styles.report_days}>
            <div className={styles.report_day}>
              <div className={styles.report_number}>15</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>16</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>17</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>18</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>19</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>20</div>
              <div className={styles.report_hours}></div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>21</div>
              <div className={styles.report_hours}></div>
            </div>
          </div>
        </div>

        <div className={styles.report_control}>
          <button>
            <Icon name={'ChevronRight'}/>
          </button>
        </div>
      </div>
    </div>
  </>
}

export default Home
