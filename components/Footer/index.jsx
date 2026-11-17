import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'

const index = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footergroup}>
            <Link href="#" className={styles.footerLink}>Home</Link>
            <Link href="#" className={styles.footerLink}>About</Link>
            <Link href="#" className={styles.footerLink}>Contact</Link>
            </div>
            <div className={styles.footergroup}>
            <Link href="#" className={styles.footerLink}>Home</Link>
            <Link href="#" className={styles.footerLink}>About</Link>
            <Link href="#" className={styles.footerLink}>Contact</Link>
            </div>
        </div>
    </footer>
  )
}

export default index