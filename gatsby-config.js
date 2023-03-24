// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mwuusoat15cb`,
        accessToken: `Mm-l1j7Hhh204cfPyYCfR6POb0kpp6q_4PlX7b8i7M8`,
      },
    },
  ],
};
