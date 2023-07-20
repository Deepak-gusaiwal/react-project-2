import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <a href="/" className={styles.logoBox}>
          LOGO
        </a>

        <ul className={styles.navMenu}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
