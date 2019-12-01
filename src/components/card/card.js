import React from "react"

import Style from "./card.module.scss"

const LabelText = ({ title, children }) => (
  <div className={Style.lineBottom + " grid-2-center-noBottom"}>
    <div className="col-12_sm-3">
      <div>
        <h3>{title}</h3>
      </div>
    </div>
    <div className="col-12_sm-9">
      <div>{children}</div>
    </div>
    <hr></hr>
  </div>
)

export default LabelText
