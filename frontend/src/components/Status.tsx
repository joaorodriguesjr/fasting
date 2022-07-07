import { FunctionComponent } from 'react'
import Icon from './Icon'
import styles from './Status.module.css'

interface Props {}

const Status: FunctionComponent<Props> = () => {
  return <>
    <div className={styles.container}>
      <div className={styles.status__line}>
        <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM0.8 4C0.8 5.76731 2.23269 7.2 4 7.2C5.76731 7.2 7.2 5.76731 7.2 4C7.2 2.23269 5.76731 0.8 4 0.8C2.23269 0.8 0.8 2.23269 0.8 4Z" fill="#7F7F7F"/>
          <path d="M8 36C8 38.2091 6.20914 40 4 40C1.79086 40 0 38.2091 0 36C0 33.7909 1.79086 32 4 32C6.20914 32 8 33.7909 8 36ZM0.8 36C0.8 37.7673 2.23269 39.2 4 39.2C5.76731 39.2 7.2 37.7673 7.2 36C7.2 34.2327 5.76731 32.8 4 32.8C2.23269 32.8 0.8 34.2327 0.8 36Z" fill="#45D865"/>
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
  </>
}

export default Status
