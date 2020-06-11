import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"

import Style from "./portfolio.module.scss"

export default ({ data }) => (
  <Layout
    animation="disable"
    seo={data.strapiArticles.title}
    crumb={data.strapiArticles.title}
  >
    <div className="gridContainer">
      <div className="grid">
        <div className="col-12_lg-8">
          <h1>{data.strapiArticles.title}</h1>
          <p>{data.strapiArticles.description}</p>
        </div>
      </div>
      <div className={Style.infoBox}>
        <div className="grid-noBottom">
          <div className="col-12_sm-4">
            <h6>Datum</h6>
            <p>{data.strapiArticles.date}</p>
          </div>
          <div className="col-12_sm-4">
            <h6>Endprodukt</h6>
            <p>{data.strapiArticles.status}</p>
          </div>
          <div className="col-12_sm-4">
            <h6>Projekt</h6>
            <p>{data.strapiArticles.project}</p>
          </div>
        </div>
      </div>
      <div className={Style.labelBox}>
        <div className="grid-noBottom">
          <div className="col-12">
            <p
              className={Style.label}
              dangerouslySetInnerHTML={{ __html: data.strapiArticles.role }}
            ></p>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-12_lg-6-">
          <h2>Leistung</h2>
          <p>{data.strapiArticles.deliverables}</p>
        </div>
        <div className="col-12_lg-6-">
          <h2>Service</h2>
          <p>{data.strapiArticles.service}</p>
        </div>
      </div>
      <div className="grid">
        <div className="col-12">
          <h6>Zuletzt aktualisiert</h6>
          <p>{data.strapiArticles.lastUpdated}</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query portfolioQuery($pageAlias: String!) {
    strapiArticles(pageAlias: { eq: $pageAlias }) {
      title
      description
      date(formatString: "YYYY")
      status
      project
      role
      deliverables
      service
      lastUpdated(formatString: "DD.MM.YYYY")
      background {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
