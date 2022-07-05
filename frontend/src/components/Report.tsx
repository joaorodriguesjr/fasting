import { FunctionComponent } from 'react'
import Icon from './Icon'
import styles from './Report.module.css'

interface Props {
}

const Report: FunctionComponent<Props> = () => {
  return <>
    <div className={styles.container}>
        <div className={styles.control}>
          <button>
            <Icon name={'ChevronLeft'}/>
          </button>
        </div>
        <div className={styles.month}>January 2022</div>

        <div className={styles.content}>
          <div className={styles.days}>
            <div className={styles.day}>
              <div className={styles.number}>15</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '115px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>16</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '80px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>17</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '125px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>18</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '110px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>19</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '0px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>20</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '0px' }}></div>
              </div>
            </div>
            <div className={styles.day}>
              <div className={styles.number}>21</div>
              <div className={styles.hours}>
                <div className={styles.value} style={{ height: '0px' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.control}>
          <button>
            <Icon name={'ChevronRight'}/>
          </button>
        </div>
      </div>
  </>
}

export default Report
