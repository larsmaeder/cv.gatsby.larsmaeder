import React from "react"

import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/intro/intro"

const IndexPage = () => (
  <>
    <SEO title="Curriculum Vitae" />
    <Header breadcrumbTitle="Curriculum Vitae" />
    <main>
    <Intro />
    </main>
  </>
)

export default IndexPage
