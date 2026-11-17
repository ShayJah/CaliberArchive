import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'

const index = () => {
  return (
    <footer className={styles.footer}>
        <p>Caliber Archives</p>

        <p>© 2027</p>
        <nav className={styles.nav}>
            <div className={styles.footergroup}>
            <label className={styles.footerLabel}>About</label>
            <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>Our Story</Link></li>
            </ul>
            </div>
            <div className={styles.footergroup}>
            <label className={styles.footerLabel}>Help</label>
            <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>Shipping</Link></li>
            <li><Link href="/about" className={styles.navLink}>Returns</Link></li>
            <li><Link href="/about" className={styles.navLink}>FAQ</Link></li>
            </ul>
            </div>
            <div className={styles.footergroup}>
            <label className={styles.footerLabel}>Social</label>
            <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>Instagram</Link></li>
            <li><Link href="/about" className={styles.navLink}>TikTok</Link></li>
            <li><Link href="/about" className={styles.navLink}>Youtube</Link></li>
            </ul>
            </div>
            <div className={styles.footergroup}>
            <label className={styles.footerLabel}>Legal</label>
            <ul className={styles.navLinks}>
            <li><Link href="/about" className={styles.navLink}>Terms & Conditions</Link></li>
            <li><Link href="/about" className={styles.navLink}>Privacy Policy</Link></li>
            <li><Link href="/about" className={styles.navLink}>Cookie Policy</Link></li>
            </ul>
            </div>
        </nav>
    </footer>
  )
}

export default index