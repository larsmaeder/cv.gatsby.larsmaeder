/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticles {
          edges {
            node {
              pageAlias
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create portfolio pages.
  const articles = result.data.articles.edges
  articles.forEach((article, index) => {
    createPage({
      path: `${article.node.pageAlias}`,
      component: require.resolve("./src/templates/portfolio.js"),
      context: {
        pageAlias: article.node.pageAlias,
      },
    })
  })
}
