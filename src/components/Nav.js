import React from "react";
import styles from "../styles/nav.module.scss";

const Nav = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <h1 className={styles.title}>Shoecommerce</h1>

        <div className={styles.sexes}>
          <span className={`${styles.item} ${styles.men}`}>Men</span>
          <span className={`${styles.item} ${styles.women}`}>Women</span>
        </div>

        <div className={styles.cart}>
          Cart <span className={styles.number}>0</span>
        </div>

        <div className={styles.menu}>Menu</div>
      </div>
    </>
  );
};

export default Nav;
