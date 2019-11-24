import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Style from "./imgAvatar.module.scss"

const Image = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Img
          className={Style.imageWrapper}
          fluid={data.file.childImageSharp.fluid}
        />
      )}
    />
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "682988026050e761c0f35c1392548e3e-avatar.webp" }) {
      childImageSharp {
        fluid(maxWidth: 165) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Image
