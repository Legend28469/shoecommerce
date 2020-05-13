import React from "react";
import styles from "../styles/itemcontainer.module.scss";
import Item from "./Item";

const ItemContainer = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((product) => {
        const {
          node: { id, name, price, isFacingRight, image, shoeNumber },
        } = product;

        return (
          <Item
            key={id}
            name={name}
            price={price}
            isFacingRight={isFacingRight}
            image={image}
            shoeNumber={shoeNumber}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
