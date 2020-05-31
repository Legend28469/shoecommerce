require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "Shoecommerce",
  },
  plugins: [
    { resolve: "gatsby-plugin-sass" },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: "gatsby-source-datocms",
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1",
        autopop: true,
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["700"],
          },
          {
            family: "Roboto",
            variants: ["400"],
          },
        ],
      },
    },
  ],
};
