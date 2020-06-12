import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { AiOutlineIdcard } from "react-icons/ai"

import Style from "./header.module.scss"

const Header = ({ crumb, dataSal }) => (
  <header data-sal={dataSal || "slide-up"} data-sal-easing="ease">
    <section className={Style.headerWrapper}>
      <div className="gridContainer">
        <div className="grid">
          <div className="col">
            <p className={Style.breadcrumb}>
              <Link to="/">Lars Mäder</Link>
              <span>{crumb}</span>
            </p>
          </div>
          <div className="col">
            <div className={Style.cv}>
              <AniLink paintDrip to="/cv" hex="#e9eaeb">
                <div>
                  <AiOutlineIdcard className={Style.icon} />
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
