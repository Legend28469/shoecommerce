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
    console.log("Shoe Number: ", shoeNumber, " type: ", typeof shoeNumber);
    actions.createPage({
      path: shoeNumber,
      component: require.resolve(`./src/templates/storeItem.js`),
      context: { shoeNumber: shoeNumber },
    });
  });
};
