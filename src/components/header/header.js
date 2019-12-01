import React from "react"
import VisibilitySensor from "../react-visibility-sensor-once"

import Style from "./header.module.scss"

const Header = ({ breadcrumbTitle }) => (
  <VisibilitySensor partialVisibility once>
    {({ isVisible }) => (
      <header className={"animUp" + (isVisible ? " in" : " off")}>
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
    )}
  </VisibilitySensor>
)

export default Header
