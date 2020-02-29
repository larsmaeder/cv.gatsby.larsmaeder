import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
// import { Link } from "gatsby"

import Style from "./intro.module.scss"

const Intro = () => (
  <section className={Style.introWrapper} data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease-in-out-cubic" data-sal-duration="1000">
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
            Ich bin ein Interaction Designer mit Leidenschaft für Code. Ich mag es, über meine Grenzen hinauszugehen und neue Fähigkeiten und Kenntnisse zu erwerben, um so grossartige Produkte zu kreieren.
          </p>
          <AnchorLink className={Style.primaryButton + " " + Style.button} offset="200" href="#cv-start">
            CV ansehen
          </AnchorLink>
          {/* <Link className={Style.secondaryButton + " " + Style.button} to="/">CV als PDF herunterladen</Link> */}
        </div>
      </div>
    </div>
  </section>
)

export default Intro
