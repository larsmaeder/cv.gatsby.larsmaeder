import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Style from "./intro.module.scss"

const IntroSection = () => (
  <section className={Style.introWrapper}>
    <div className="gridContainer">
      <div className="grid-3">
        <div className="col-12_lg-8">
          <h1>
            Hi! Ich bin Lars. &nbsp;
            <span role="img" aria-label="winkende Hand">
              👋
            </span>
          </h1>
          <p className={Style.lead}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <AnchorLink offset="100" href="#cv-start">Gehe zu meinem CV</AnchorLink>
        </div>
      </div>
    </div>
  </section>
)

export default IntroSection
