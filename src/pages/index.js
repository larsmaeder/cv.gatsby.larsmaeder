import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/intro/intro"
import BackgroundTitle from "../components/backgroundTitle/backgroundTitle"
import LabelText from "../components/labelText/labelText"
import Card from "../components/card/card"
import {
  AdobeXD,
  Craft,
  CreativeCloud,
  Figma,
  Gatsby,
  InVision,
  InVisionStudio,
  Sketch,
  Uber,
  Github,
  HTML,
  CSS,
  Javascript,
  VSCode,
} from "../components/labelText/img"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <ParallaxProvider>
    <SEO title="Curriculum Vitae" />
    <Header breadcrumbTitle="Curriculum Vitae" />
    <main>
      <Intro />
      <BackgroundTitle anchor="cv-start" classes="mt-4" title="Persönliches">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Berufserfahrung">
        <h3>Interaction Designer (UI/UX)</h3>
        <h5>Lithop Electronic Media AG</h5>
        <p>2019–Aktuell</p>
        <h3>Polygraf EFZ</h3>
        <h5>Lithop Electronic Media AG</h5>
        <p>2011–2019</p>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Fähigkeiten">
        <h3>Design</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Proficient"
            name="Adobe XD"
          >
            <AdobeXD />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Expert" name="Sketch">
            <Sketch />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Proficient" name="Figma">
            <Figma />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Competent"
            name="InVision Studio"
          >
            <InVisionStudio />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Expert"
            name="Adobe Creative Cloud"
          >
            <CreativeCloud />
          </LabelText>
        </div>
        <h3 className="mt-3">Prototyping</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Competent"
            name="InVision"
          >
            <InVision />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Competent" name="Craft">
            <Craft />
          </LabelText>
        </div>
        <h3 className="mt-3">Coding</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Advanced Beginnner"
            name="Gatsby"
          >
            <Gatsby />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Competent" name="Github">
            <Github />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Proficient" name="HTML5">
            <HTML />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Proficient" name="CSS3">
            <CSS />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Advanced Beginnner"
            name="Javascript"
          >
            <Javascript />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Competent"
            name="Visual Studio Code"
          >
            <VSCode />
          </LabelText>
        </div>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Lorem Ipsum">
        <Card title="Lorem Ipsum">
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </Card>
        <Card title="Lorem Ipsum">
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </Card>
        <Card title="Lorem Ipsum">
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </Card>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Anderes">
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Beifahrer-Level: Expert"
            name="4.59"
          >
            <Uber />
          </LabelText>
        </div>
      </BackgroundTitle>
      <Footer classes="mt-4" />
    </main>
  </ParallaxProvider>
)

export default IndexPage
