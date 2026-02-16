/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Something about a Blog?`,
    description: `Come scream out into the void. Nobody will hear you, but at least you tried.`,
    author: `@RobertWard`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: "Robert Ward",
      company: "Ward Industries",
      address: "PO Box 1997",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: `t15igd2w1kum`,
      accessToken: `e2M0_L7RcEyctezU8ZoEjOUwPsh5TcHY8CH_xoGeagc`
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
