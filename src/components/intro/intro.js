import React from "react"
import { Link } from "gatsby"

import Style from "./intro.module.scss"

const IntroSection = () => (
  <section className={Style.introWrapper}>
    <div className="gridContainer">
      <div className="grid-3">
        <div className="col-12_lg-8">
          <h1>
            Hi, ich bin Lars&nbsp;Mäder&nbsp;
            <span role="img" aria-label="winkende Hand">
              👋
            </span>
          </h1>
          <p className={Style.lead}>
            Ich bin eine Person, die präzise Vermutungen anstellt, basierend auf
            unzuverlässigen Daten, die von Personen mit fragwürdigem Wissen
            geliefert werden – TLDR: Ich gestalte das Web.
          </p>
          <Link to="#curriculum-vitae">Gehe zu meinem CV</Link>
        </div>
      </div>
    </div>
  </section>
)

export default IntroSection
