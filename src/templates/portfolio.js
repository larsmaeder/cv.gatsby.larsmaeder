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
      <div data-sal="slide-up" data-sal-delay="750" data-sal-duration="1000">
        <h1>{article.title}</h1>
        <h1>Hello</h1>
      </div>
    </Layout>
  )
}

export default Portfolio
