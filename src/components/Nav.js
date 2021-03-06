import React from "react";
import styles from "../styles/nav.module.scss";
import { Link } from "gatsby";

const Nav = ({ swapSex, showSex }) => (
  <>
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <h1 className={styles.title}>
        <Link to="/">Shoecommerce</Link>
      </h1>

      {showSex ? (
        <div className={styles.sexes}>
          <span
            className={`${styles.item} ${styles.men}`}
            onClick={() => swapSex("Men")}
          >
            Men
          </span>
          <span
            className={`${styles.item} ${styles.women}`}
            onClick={() => swapSex("Women")}
          >
            Women
          </span>
        </div>
      ) : (
        ""
      )}

      <div className={`${styles.cart} snipcart-checkout snipcart-summary`}>
        Cart <span className={`${styles.number} snipcart-total-items`}></span>
      </div>
    </div>
  </>
);

export default Nav;
