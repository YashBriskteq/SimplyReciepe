/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Simply Reciepes",
    description: "Reciepes of all food",
    author: "@yashpandya",
    person: { name: "yash", age: 21 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "yash", age: 21 },
      { name: "jay", age: 21 },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
