import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Style from "./article.module.scss"
import Card from "../card/card"

export default () => (
  <StaticQuery
    query={graphql`
      query fetchArticleData {
        allStrapiArticles {
          edges {
            ...fragmentArticleData
          }
        }
      }
    `}
    render={data => (
      <div
        className={Style.articleWrapper}
        data-sal="fade"
        data-sal-easing="ease"
      >
        <div className="gridContainer-noGutter">
          <div className="grid-noBottom">
            <div className="col">
              {data.allStrapiArticles.edges.map(({ node }) => (
                <Card articleData={node} key={node.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  />
)
