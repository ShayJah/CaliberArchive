"use client";

import { useEffect } from "react";
import styles from "./cartDropdown.module.scss";
import { lockBodyFixed, unlockBodyFixed } from "@/lib/bodyLock";

export default function CartDropdown({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    lockBodyFixed();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockBodyFixed();
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={styles.gridOverlay}>
        <aside
          className={`${styles.panel} ${isOpen ? styles.open : ""}`}
          aria-hidden={!isOpen}
          role="dialog"
          aria-label="Shopping Cart"
        >
          {isOpen && (
            <div className={styles.contentFade}>
              <CartView onClose={onClose} />
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

function CartView({ onClose }) {
  const items = [];

  return (
    <div className={styles.viewLayout}>
      <div className={styles.panelHeader}>
        <span>Cart ({items.length})</span>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close cart"
        >
          X
        </button>
      </div>

      <div className={styles.scrollBody}>
        {items.length === 0 ? (
          <p className={styles.emptyState}>Your cart is empty.</p>
        ) : (
          <ul className={styles.cartList}>{

            
          }</ul>
        )}
      </div>

      <div className={styles.panelFooter}>
        <div className={styles.subtotalRow}>
          <span>Estimated Total</span>
          <span>$0.00</span>
        </div>
        <button
          type="button"
          className={styles.checkoutBtn}
          disabled={items.length === 0}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
