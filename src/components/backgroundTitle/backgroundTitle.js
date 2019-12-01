import React from "react"
import VisibilitySensor from "../react-visibility-sensor-once"
import { Parallax } from "react-scroll-parallax"

import Style from "./backgroundTitle.module.scss"

const backgroundTitle = ({ children, anchor, classes, title }) => (
  <VisibilitySensor minTopValue={"100"} partialVisibility once>
    {({ isVisible }) => (
      <section
        id={anchor}
        className={classes + " animUp" + (isVisible ? " in" : " off")}
      >
        <div className="gridContainer">
          <div className="grid-3-center">
            <div className="col-12">
              <Parallax y={[-16, 24]}>
                <h1 className={Style.hugeTitle}>{title}</h1>
              </Parallax>
            </div>
            <div className="col-12_md-10">
              <h2>{title}</h2>
              {children}
            </div>
          </div>
        </div>
      </section>
    )}
  </VisibilitySensor>
)

export default backgroundTitle
