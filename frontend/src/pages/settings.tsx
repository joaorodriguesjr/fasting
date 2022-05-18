import type { NextPage } from 'next'
import styles from './settings.module.css'
import { useFasts } from '@Hook/Fasts'


const Settings: NextPage = () => {
  const { fasts, changeProtocol } = useFasts()

  return <div className={styles.container}>
    <h2>Protocol</h2>
    <form name="protocols">
      <input id="12x12" type="radio" name="current"  value="12" checked={fasts.target === 12} onChange={(event) => changeProtocol(Number(event.target.value))}/>
      <label htmlFor="12x12">12/12</label>

      <input id="16x08" type="radio" name="current"  value="16" checked={fasts.target === 16} onChange={(event) => changeProtocol(Number(event.target.value))}/>
      <label htmlFor="16x08">16/08</label>

      <input id="20x04" type="radio" name="current"  value="20" checked={fasts.target === 20} onChange={(event) => changeProtocol(Number(event.target.value))}/>
      <label htmlFor="20x04">20/04</label>

      <input id="24x00" type="radio" name="current"  value="24" checked={fasts.target === 24} onChange={(event) => changeProtocol(Number(event.target.value))}/>
      <label htmlFor="24x24">24/24</label>
    </form>
  </div>
}

export default Settings
