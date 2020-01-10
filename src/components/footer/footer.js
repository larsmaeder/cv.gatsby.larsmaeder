import React from "react"

import Style from "./footer.module.scss"
import { Avatar } from "../img/img"

const Footer = ({ classes }) => (
  <footer className={classes}>
    <section className={Style.footerWrapper}>
      <div className="gridContainer">
        <div className="grid-middle-noGutter">
          <div className="col-12_lg-8">
            <div className={Style.imageWrapper}>
              <Avatar />
            </div>
            <div className={Style.textWrapper}>
              <h2>
                Zu viel gescrollt?
                <br />
                Lass es nicht umsonst gewesen sein.
              </h2>
              <a href="mailto:mail@larsmaeder.ch">mail@larsmaeder.ch</a>
            </div>
          </div>
        </div>
        <div className="grid mt-4">
          <div className="col">
            <div className={Style.small}>
              <p>
                This site is powered by{" "}
                <a href="https://www.gatsbyjs.org">Gatsby.js</a>.<br></br>
                Found a bug? Help me to{" "}
                <a href="https://github.com/larsmaeder/cv.gatsby.larsmaeder/issues">fix it</a>.
              </p>
              <p>©&#x202F;2020 Lars Mäder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
