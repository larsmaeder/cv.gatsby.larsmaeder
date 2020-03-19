import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query portfolioQuery($pageAlias: String!) {
    strapiArticles(pageAlias: { eq: $pageAlias }) {
      title
    }
  }
`

const Portfolio = ({ data }) => {
  const article = data.strapiArticles
  return (
    <Layout animation="disable" seo={article.title} crumb={article.title}>
      <h1 data-sal="slide-up">{article.title}</h1>
    </Layout>
  )
}

export default Portfolio
