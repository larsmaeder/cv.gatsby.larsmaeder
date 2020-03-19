import React from "react"
import Style from "./scrollDown.module.scss"

export default () => (
  <div
    className={Style.iconWrapper}
    data-sal="slide-up"
    data-sal-easing="ease-in-out-cubic"
  >
    <div className={Style.scrollDown}></div>
  </div>
)
