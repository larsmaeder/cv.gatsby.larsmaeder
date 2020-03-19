import React from "react"
import { Link } from "gatsby"

import Style from "./header.module.scss"

const Header = ({ crumb, dataSal }) => (
  <header data-sal={dataSal || "slide-up"} data-sal-easing="ease">
    <section className={Style.headerWrapper}>
      <div className="gridContainer">
        <div className="grid">
          <div className="col">
            <p className={Style.breadcrumb}>
              <Link to="/">Lars Mäder</Link><span>{crumb}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
