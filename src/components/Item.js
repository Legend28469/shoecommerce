import React from "react";
import styles from "../styles/item.module.scss";
import "../styles/itemColors.css";

const Item = ({
  name,
  price,
  isFacingRight,
  image,
  shoeNumber,
  backgroundColor,
}) => {
  return (
    <div className={`${styles.container} ${backgroundColor}`}>
      <div className={styles.number}>{shoeNumber}</div>

      <div className={styles.shoe}>
        <img
          className={isFacingRight ? styles.flipped : styles.regular}
          src={image.url}
          alt=""
        />
      </div>

      <div className={styles.bottomBox}>
        <div className={styles.description}>
          <div className={styles.title}>{name}</div>
          <div className={styles.price}>${price}</div>
        </div>

        <div className={styles.buy}>+</div>
      </div>
    </div>
  );
};

export default Item;
