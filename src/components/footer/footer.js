import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Style from "./footer.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query fetchAvatar {
        file(
          relativePath: { eq: "f0c3f6decc593b2e69a2996d7a35d776-sticker.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="mt-3">
        <div className="gridContainer">
          <div className="grid">
            <div className="col-12">
              <div className={Style.outro}>
                <div className={Style.imageAvatar}>
                  <Img
                    className={Style.img}
                    fluid={data.file.childImageSharp.fluid}
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={Style.textWrapper}>
                <h2>
                  Endstation.
                  <br />
                  Sag Hallo.
                </h2>
                <a href="mailto:mail@larsmaeder.ch">mail@larsmaeder.ch</a>
              </div>
            </div>
          </div>
        </div>
        <div className="gridContainer-noGutter mt-3">
          <div className={Style.impressum}>
            <div className="gridContainer">
              <div className="grid-noGutter">
                <div className="col">
                  <p>
                    This site is running with{" "}
                    <a href="https://www.gatsbyjs.org">Gatsby.js</a>-Power.
                    <br></br>
                    You've found a{" "}
                    <span role="img" aria-label="Käfer Emoji (English: Bug)">
                      🐞
                    </span>
                    ? Help me to{" "}
                    <a href="https://github.com/larsmaeder/cv.gatsby.larsmaeder/issues">
                      fix it
                    </a>
                    .
                  </p>
                  <p>©&#x202F;2020 Lars Mäder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
