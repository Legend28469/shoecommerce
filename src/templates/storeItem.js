import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import styles from "../styles/storeItem.module.scss";
import { Link } from "gatsby";
import "../styles/itemColors.css";

const storeItem = ({ data }) => {
  const { image, name, price, backgroundColor } = data.datoCmsProduct;

  return (
    <>
      <Layout showSex={false}>
        <ul className={styles.sitemap}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>-</li>
          <li>{name}</li>
        </ul>

        <div className={styles.description}>
          <div className={styles.imgBox}>
            <img src={image.url} alt="" />
          </div>

          <div className={`${styles.text} ${backgroundColor}`}>
            <h3 className={styles.itemName}>{name}</h3>
            <h5 className={styles.price}>${price}</h5>
            <p>The {name} are awesome shoes. Buy it now before it's gone!</p>
          </div>
        </div>

        <div className={styles.buyButton}>
          <h4>Add to Cart</h4>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($shoeNumber: String!) {
    datoCmsProduct(shoeNumber: { eq: $shoeNumber }) {
      id
      name
      price
      shoeNumber
      backgroundColor
      image {
        url
        sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

export default storeItem;
