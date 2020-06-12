import React from "react"

import Style from "./labelText.module.scss"

const LabelText = ({ children, level, classes, name }) => (
  <div className={classes}>
    <div className="grid-middle-noGutter">
      <div className={Style.imageWrapper}>{children}</div>
      <div className={Style.labelWrapper}>
        <p className={Style.labelLevel}>{level}</p>
        <h4 className={Style.labelName}>{name}</h4>
      </div>
    </div>
  </div>
)

export default LabelText
