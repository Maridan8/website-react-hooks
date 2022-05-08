module.exports = {
  siteMetadata: {
    title: `João Carlos Magalhães`,
    description: `Criador, estudante & desenvolvedor. Eu sou João Carlos Magalhães, um estudante de 16 anos morando no Brasil. Instituto Federal | ENEM | Programação`,
    author: `@joaocarlos-mag`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/static/videos`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
