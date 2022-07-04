import { FunctionComponent } from 'react'
import Icon from './Icon'
import styles from './Report.module.css'

interface Props {
}

const Report: FunctionComponent<Props> = () => {
  return <>
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
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '115px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>16</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '80px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>17</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '125px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>18</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '110px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>19</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '0px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>20</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '0px' }}></div>
              </div>
            </div>
            <div className={styles.report_day}>
              <div className={styles.report_number}>21</div>
              <div className={styles.report_hours}>
                <div className={styles.report_value} style={{ height: '0px' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.report_control}>
          <button>
            <Icon name={'ChevronRight'}/>
          </button>
        </div>
      </div>
  </>
}

export default Report
