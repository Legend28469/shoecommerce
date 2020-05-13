import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/Layout";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
// import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              isFacingRight
              shoeNumber
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <ItemContainer data={data.products.edges} />
      </Layout>
    )}
  />
);
