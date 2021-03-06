import React from "react";
import styles from "../styles/itemcontainer.module.scss";
import Item from "./Item";

/*
  Build footer
  Use sex data here to make titles {Shoes, Mens Shoes, Womens Shoes}
  Host
*/

const ItemContainer = ({ data, sex }) => {
  return (
    <div className={styles.container}>
      {data.map((product, i) => {
        const {
          node: {
            id,
            name,
            price,
            isFacingRight,
            image,
            shoeNumber,
            backgroundColor,
          },
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
              backgroundColor={backgroundColor}
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
              backgroundColor={backgroundColor}
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
              backgroundColor={backgroundColor}
            />
          );
        }

        return <React.Fragment key={id}></React.Fragment>;
      })}
    </div>
  );
};

export default ItemContainer;
