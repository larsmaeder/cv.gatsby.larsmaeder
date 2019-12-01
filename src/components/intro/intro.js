import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"

import Style from "./intro.module.scss"

const Intro = () => (
  <section className={Style.introWrapper}>
    <div className="gridContainer">
      <div className="grid-3">
        <div className="col-12_lg-8">
          <h1>
            Hi! Ich bin Lars.&nbsp;
            <span role="img" aria-label="Emoji winkende Hand">
              👋
            </span>
          </h1>
          <p className={Style.lead}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <AnchorLink className={Style.primaryButton + " " + Style.button} offset="100" href="#cv-start">
            CV ansehen
          </AnchorLink>
          <Link className={Style.secondaryButton + " " + Style.button} to="/">CV herunterladen</Link>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
