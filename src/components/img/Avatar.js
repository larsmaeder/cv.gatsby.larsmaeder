import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "682988026050e761c0f35c1392548e3e-avatar.png" }) {
        childImageSharp {
          fixed(width: 160, height: 160, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Avatar"
      title="Avatar"
    />
  )
}
