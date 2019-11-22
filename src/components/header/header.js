import React from "react"
import VisibilitySensor from "react-visibility-sensor"

import Style from "./header.module.scss"

function onChange(isVisible) {
  console.log("Element is now %s", isVisible ? "visible" : "hidden")
}

const HeaderSection = ({ breadcrumbTitle }) => (
  <VisibilitySensor partialVisibility onChange={onChange}>
    <header className="animUp animUp--active">
      <section className={Style.headerWrapper}>
        <div className="gridContainer">
          <div className="grid-noBottom">
            <div className="col">
              <p className={Style.breadcrumb}>
                Lars Mäder<span>{breadcrumbTitle}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  </VisibilitySensor>
)

export default HeaderSection
