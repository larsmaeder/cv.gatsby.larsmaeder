import React from "react"
import SEO from "../components/seo"
import { ParallaxProvider } from "react-scroll-parallax"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default ({ children, seo, crumb, animation }) => (
  <ParallaxProvider>
    <SEO title={seo} />
    <Header dataSal={animation} crumb={crumb} />
    <main>{children}</main>
    <Footer />
  </ParallaxProvider>
)
