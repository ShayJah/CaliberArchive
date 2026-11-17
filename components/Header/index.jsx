import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'

const index = () => {
  return (
    <header className={styles.header}>
       <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Caliber Archive</Link>
        <ul className={styles.navLinks}>
          <li><Link href="/about" className={styles.navLink}>FW 2026</Link></li>
          <li><Link href="/contact" className={styles.navLink}>ARCHIVES 1/1</Link></li>
        </ul>
        <ul className={styles.navLinks}>
          <li><Link href="/about" className={styles.navLink}>T Shirts</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Hats</Link></li>
          <li><Link href="/products" className={styles.navLink}>Accessories</Link></li>
        </ul>
        <ul className={styles.navLinks}>
          <li><Link href="/about" className={styles.navLink}>Cart</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Search</Link></li>
          <li><Link href="/products" className={styles.navLink}>Account</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default index