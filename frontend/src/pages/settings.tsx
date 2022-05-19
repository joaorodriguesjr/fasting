import type { NextPage } from 'next'
import styles from './settings.module.css'
import { useFasts } from '@Hook/Fasts'
import Icon from '@Component/Icon'
import Link from 'next/link'


const Settings: NextPage = () => {
  const { fasts, changeProtocol } = useFasts()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeProtocol(Number(e.target.value))
  }

  return <div className={styles.container}>
    <header>
      <Link href={'/'}>
        <span><Icon name={'ArrowLeft'}/></span>
      </Link>
    </header>
    <h2>Protocol</h2>
    <form name="protocols">
      <input id="12x12" type="radio" name="current" value="12" checked={fasts.target === 12} onChange={onChange}/>
      {fasts.target === 12 ? <Icon name={'CheckboxChecked'}></Icon> : <Icon name={'CheckboxBlank'}></Icon>}
      <label htmlFor="12x12">12/12</label>

      <input id="16x08" type="radio" name="current" value="16" checked={fasts.target === 16} onChange={onChange}/>
      {fasts.target === 16 ? <Icon name={'CheckboxChecked'}></Icon> : <Icon name={'CheckboxBlank'}></Icon>}
      <label htmlFor="16x08">16/08</label>

      <input id="20x04" type="radio" name="current" value="20" checked={fasts.target === 20} onChange={onChange}/>
      {fasts.target === 20 ? <Icon name={'CheckboxChecked'}></Icon> : <Icon name={'CheckboxBlank'}></Icon>}
      <label htmlFor="20x04">20/04</label>

      <input id="24x00" type="radio" name="current" value="24" checked={fasts.target === 24} onChange={onChange}/>
      {fasts.target === 24 ? <Icon name={'CheckboxChecked'}></Icon> : <Icon name={'CheckboxBlank'}></Icon>}
      <label htmlFor="24x00">24/00</label>
    </form>
  </div>
}

export default Settings
