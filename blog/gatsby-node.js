/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSomethingAboutABlog{
          edges{
            node{
              slug
            }
          }
        }
      }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
          result.data.allContentfulSomethingAboutABlog.edges.forEach((edge) => {
            createPage({
              path: edge.node.slug,
              component: require.resolve('./src/templates/blog-post.js'),
              context: {
                slug: edge.node.slug
              },
      })
})

    resolve()
})
  })
}
