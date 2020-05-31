import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/Layout";
import ItemContainer from "../components/ItemContainer";

export default () => {
  const [sex, setSex] = useState("");

  const swapSex = (currentSex) => {
    // setSex(currentSex);
    if (currentSex === sex) {
      setSex("");
    } else {
      setSex(currentSex);
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query CatalogueQuery {
          products: allDatoCmsProduct(sort: { fields: shoeNumber }) {
            edges {
              node {
                id
                name
                price
                isFacingRight
                shoeNumber
                sex
                backgroundColor
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
        <Layout site={data.site} swapSex={swapSex} showSex={true}>
          <ItemContainer data={data.products.edges} sex={sex} />
        </Layout>
      )}
    />
  );
};
