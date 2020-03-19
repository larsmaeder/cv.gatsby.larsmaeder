import React from "react"
import { graphql } from "gatsby"

import Style from "./intro.module.scss"
import { ScrollDown } from "../icon/icon"

export default ({ introData: { title, lead } }) => (
  <div className={Style.introWrapper + " mb-3"}>
    <div className="gridContainer">
      <div className="grid-3">
        <div className="col-12_lg-8">
          <h1
            className={Style.sal}
            data-sal="slide-up"
            data-sal-easing="ease-in-out-cubic"
          >
            {title}
          </h1>
          <p
            className={Style.lead + " mb-1"}
            data-sal="slide-up"
            data-sal-easing="ease-in-out-cubic"
          >
            {lead}
          </p>
          <ScrollDown />
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  fragment fragmentIntroNode on StrapiIntrosEdge {
    node {
      title
      lead
    }
  }
`
