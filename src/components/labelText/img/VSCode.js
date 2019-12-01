import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "vsCode-logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Visual Studio Code"
      title="Visual Studio Code"
    />
  )
}
