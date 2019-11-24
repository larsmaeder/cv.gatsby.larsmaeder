import React from "react"
import VisibilitySensor from "../react-visibility-sensor-once"

import Style from "./bodyCopy.module.scss"

const bodyCopySection = ({ anchor, classes, title, children }) => (
  <VisibilitySensor partialVisibility once>
    {({ isVisible }) => (
      <section id={anchor} className={classes + " animUp" + (isVisible ? " in" : " off")}>
        <div className="gridContainer">
          <div className="grid-3">
            <div className="col-12 ovrflw-hidden">
              <h1 className={Style.backgroundTitle}>{title}</h1>
            </div>
            <div className="col-12_md-10" data-push-left="off-0_md-2">
              <div className={Style.offsetContent}>
                <h5>{title}</h5>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  </VisibilitySensor>
)

export default bodyCopySection
