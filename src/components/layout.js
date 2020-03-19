import React from "react"
import SEO from "../components/seo"
import { ParallaxProvider } from "react-scroll-parallax"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import sal from "sal.js"
import "sal.js/dist/sal.css"

export default ({ children, seo, crumb, animation }) => {
  sal({
    threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
    once: true, // Defines if animation needs to be launched once
    disable: false, // Flag for disabling animations
  })
  return (
    <ParallaxProvider>
      <SEO title={seo} />
      <Header dataSal={animation} crumb={crumb} />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  )
}
