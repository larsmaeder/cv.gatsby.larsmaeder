import React from "react"

import Style from "./footer.module.scss"

const Footer = ({ classes }) => (
  <footer className={classes}>
    <section className={Style.footerWrapper}>
      <div className="gridContainer">
        <div className="grid">
          <div className="col">
            <p>Footer</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
