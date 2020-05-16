import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/Layout";
import ItemContainer from "../components/ItemContainer";

export default () => {
  const [sex, setSex] = useState("");

  const swapSex = (currentSex) => {
    setSex(currentSex);
  };

  return (
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
                sex
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
        <Layout site={data.site} swapSex={swapSex}>
          <ItemContainer data={data.products.edges} sex={sex} />
        </Layout>
      )}
    />
  );
};
