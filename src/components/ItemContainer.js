import React from "react";
import styles from "../styles/itemcontainer.module.scss";
import Item from "./Item";

const ItemContainer = ({ data, sex }) => {
  return (
    <div className={styles.container}>
      {data.map((product, i) => {
        const {
          node: { id, name, price, isFacingRight, image, shoeNumber },
        } = product;

        if (sex === "Men" && product.node.sex === "Male") {
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
        } else if (sex === "Women" && product.node.sex === "Female") {
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
        } else if (!sex) {
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
        }
      })}
    </div>
  );
};

export default ItemContainer;
