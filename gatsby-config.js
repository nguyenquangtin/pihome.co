const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Metsys Gatsby`,
  },
  // flags: {
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   PRESERVE_WEBPACK_CACHE: true,
  //   THE_FLAG: false,
  //   DEV_SSR: true,
  //   FAST_REFRESH: true,
  // },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`,`image`),
        // `${__dirname}/src/assets/image`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgroundImage`,
        path: path.join(__dirname, `src`, `assets`,`image`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-remark`,
  ],
}
