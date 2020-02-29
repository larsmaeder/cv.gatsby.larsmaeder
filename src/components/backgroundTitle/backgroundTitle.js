import React from "react"
import { Parallax } from "react-scroll-parallax"

import Style from "./backgroundTitle.module.scss"

const backgroundTitle = ({ children, anchor, classes, title }) => (
  <section
    id={anchor}
    className={classes}
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
    data-sal-duration="850"
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
)

export default backgroundTitle
