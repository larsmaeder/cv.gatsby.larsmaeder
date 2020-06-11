import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

import Style from "./card.module.scss"

export default ({
  articleData: { title, description, background, mockup, pageAlias, bgColor },
}) => (
  <AniLink
    className={Style.articleLink}
    paintDrip
    to={`${pageAlias}`}
    hex={bgColor}
  >
    <div className={Style.cardWrapper}>
      <div className={Style.content}>
        <h1 className={Style.hugeTitle}>{title}</h1>
        <p className={Style.description}>{description}</p>
        <AniLink
          className={Style.contentLink}
          paintDrip
          to={`${pageAlias}`}
          hex={bgColor}
        >Mehr erfahren</AniLink>
      </div>
      <div className={Style.mockup} data-sal="slide-up" data-sal-easing="ease">
        <Parallax y={[16, -16]}>
          <Img
            className={Style.img}
            fluid={mockup.childImageSharp.fluid}
            alt={"Mockup für " + title}
          />
        </Parallax>
      </div>
      <div className={Style.background}>
        <Img
          className={Style.img}
          fluid={background.childImageSharp.fluid}
          alt={"Hintergrund für " + title}
        />
      </div>
    </div>
  </AniLink>
)

export const query = graphql`
  fragment fragmentArticleData on StrapiArticlesEdge {
    node {
      pageAlias
      bgColor
      project
      role
      status
      title
      strapiId
      description
      background {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mockup {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
