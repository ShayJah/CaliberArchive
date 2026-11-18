import React from 'react'
import styles from './filters.module.scss'

const index = () => {
  return (
    <div className={styles.filters}>
      <button>
        filters
      </button>
      <button>
        sort by :
      </button>
    </div>
  )
}

export default index