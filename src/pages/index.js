import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Intro from "../components/intro/intro"
import Article from "../components/article/article"

export default ({ data }) => (
  <Layout seo="Home" crumb="Home">
    <section>
      {data.allStrapiIntros.edges.map(({ node }) => (
        <Intro introData={node} key={node.id} />
      ))}
    </section>
    <section>
      <Article />
    </section>
  </Layout>
)

export const query = graphql`
  query fetchIntroData {
    allStrapiIntros(filter: { strapiId: { eq: 1 } }) {
      edges {
        ...fragmentIntroNode
      }
    }
  }
`
