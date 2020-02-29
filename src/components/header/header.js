import React from "react"

import Style from "./header.module.scss"

const Header = ({ breadcrumbTitle }) => (
  <header data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="850">
    <section className={Style.headerWrapper}>
      <div className="gridContainer">
        <div className="grid">
          <div className="col">
            <p className={Style.breadcrumb}>
              Lars Mäder<span>{breadcrumbTitle}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
