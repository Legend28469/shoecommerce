exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDatoCmsProduct {
        edges {
          node {
            shoeNumber
          }
        }
      }
    }
  `);

  data.allDatoCmsProduct.edges.forEach((edge) => {
    const slug = edge.node.shoeNumber;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/storeItem.js`),
      context: { slug: slug },
    });
  });
};
