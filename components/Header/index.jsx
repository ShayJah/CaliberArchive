"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import CartDropdown from "./CartDropdown";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        setIsHidden(false);
      } else if (scrollDelta > 0) {
        setIsHidden(true);
      } else if (scrollDelta < 0) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`,
      );
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.header}${isHidden ? ` ${styles.hidden}` : ""}`}
    >
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Caliber Archive
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about" className={styles.navLink}>
              FW 2026
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              ARCHIVES 1/1
            </Link>
          </li>
        </ul>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about" className={styles.navLink}>
              T Shirts
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Hats
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.navLink}>
              Accessories
            </Link>
          </li>
        </ul>
        <ul className={styles.navLinks}>
          <li>
            <button type="button" onClick={() => setIsCartOpen((open) => !open)}>
              Cart (0)
            </button>
          </li>
          <li>
            <button type="button" >
              Search
            </button>
          </li>
          <li>
            <Link href="/login" className={styles.navLink}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <CartDropdown
        isOpen={isCartOpen}
        onClose={closeCart}
      />
    </header>
  );
}
