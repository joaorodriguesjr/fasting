import { FunctionComponent } from 'react'
import styles from './Progress.module.css'

interface ProgressProps {
  start: number, target: number
  children: React.ReactNode
}

const Progress: FunctionComponent<ProgressProps> = ({ start, target, children }) => {
  const difference = Date.now() - start
  const max = target * 1000 * 60 * 60
  const remaining = (100 - (difference / max * 100)) / 100
  const strokeDashoffset = difference >= max ? 0 : 950 * remaining

  const marker = (start === 0)
    ? <></>
    : <circle className={styles.circle__01} strokeDashoffset={strokeDashoffset} cx="50%" cy="50%" r="115" strokeLinecap="round"/>


  return <div className={styles.container}>
    <svg className={styles.svg} viewBox="0 0 250 250">
      <circle className={styles.circle__00} cx="50%" cy="50%" r="115" strokeLinecap="round"/>
      {marker}
    </svg>
    <div className={styles.children}>{children}</div>
  </div>
}

export default Progress
