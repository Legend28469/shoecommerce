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
    const shoeNumber = edge.node.shoeNumber;
    actions.createPage({
      path: shoeNumber,
      component: require.resolve(`./src/templates/storeItem.js`),
      context: { shoeNumber: shoeNumber },
    });
  });
};
