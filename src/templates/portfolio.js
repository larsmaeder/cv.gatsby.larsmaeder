import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

// import SimpleImageSlider from "react-simple-image-slider"

import Style from "./portfolio.module.scss"

export default ({ data }) => (
  <Layout
    animation="disabled"
    seo={data.strapiArticles.title}
    crumb={data.strapiArticles.title}
  >
    <div className={Style.container}>
      <div className="gridContainer">
        <div className="grid">
          <div className="col-12_lg-8">
            <h1>{data.strapiArticles.title}</h1>
            <p>{data.strapiArticles.description}</p>
          </div>
          <div className="col-12">
            <Img
              className={Style.img}
              fluid={data.strapiArticles.background.childImageSharp.fluid}
              alt={"Hintergrund für " + data.strapiArticles.title}
            />
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
          <div className="col-12_lg-8">
            <ReactMarkdown
              className={Style.content}
              source={data.strapiArticles.content}
              transformImageUri={uri =>
                uri.startsWith("http") ? uri : `${process.env.API_URL}${uri}`
              }
            />
            {/* <SimpleImageSlider
              width={896}
              height={504}
              images={data.strapiArticles.carousel.map(function(x) {
                return [`${process.env.API_URL}${x.url}`].join("")
              })}
            /> */}
          </div>
        </div>
        <div className="grid">
          <div className="col-12">
            <div className={Style.updated}>
              <hr></hr>
              <h6>Zuletzt aktualisiert</h6>
              <p>{data.strapiArticles.lastUpdated}</p>
            </div>
          </div>
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
      content
      carousel {
        url
      }
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
