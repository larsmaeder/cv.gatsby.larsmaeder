import React from "react"

import Style from "./card.module.scss"

const Card = ({ title, children }) => (
  <div className={Style.card + " grid-2-center-noBottom"}>
    <div className="col-12_lg-3">
      <h5>{title}</h5>
    </div>
    <div className="col-12_lg-9">{children}</div>
    <hr />
  </div>
)

export default Card
