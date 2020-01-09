import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/intro/intro"
import BackgroundTitle from "../components/backgroundTitle/backgroundTitle"
import LabelText from "../components/labelText/labelText"
import Card from "../components/card/card"
import CardCourse from "../components/card/cardCourse"
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
} from "../components/img/img"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <ParallaxProvider>
    <SEO title="Curriculum Vitae" />
    <Header breadcrumbTitle="Curriculum Vitae" />
    <main>
      <Intro />
      <BackgroundTitle anchor="cv-start" classes="mt-4" title="Persönliches">
        <p>
          Ich bin ein Fan von digitalen Produkten und ihrer unbegrenzten
          Möglichkeiten. Ich strebe nach klarem, einfachem Design und besitze
          eine Ader für altbewährtes. Während ich mit neuen Frameworks und
          Bibliotheken experimentiere, verstehe ich, wie wichtig es ist, den
          Fokus auf das Endziel zu legen: dem Benutzer ein schönes, funktionales
          und verständliches Produkt zu liefern. Dank meiner langjährigen
          Erfahrung im Bereich Typografie&#x202F;&&#x202F;Design, kann ich
          bewährte Grundwerte in die digitale Welt adaptieren und so
          aussergewöhnliche Produkte entwickeln.
        </p>
        <p>
          Wenn ich nicht gerade hinter einem Computerbildschirm sitze, bin ich
          irgendwo unterwegs, um etwas zu erkunden, oder um Menschen und die
          Natur zu fotografieren, oder ich bleibe zu Hause und zeichne.
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
      <BackgroundTitle classes="mt-4" title="Schule">
        <Card title="SfGZ">
          <CardCourse date="2017–Aktuell">
            <h6>Höhere Fachschule</h6>
            <p>Interaction Design HF</p>
            <p>
              Dipl.&#x202F;Gestalter/-in HF Fachrichtung Kommunikationsdesign
              mit Vertiefungsrichtung Interaction Design
            </p>
          </CardCourse>
          <CardCourse date="2011–2015">
            <h6>Berufslehre</h6>
            <p>Polygraf EFZ</p>
            <p>Fachrichtung Mediaproduktion</p>
          </CardCourse>
        </Card>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Besuchte Kurse">
        <Card title="Meetup.com">
          <CardCourse date="2018">
            <h6>
              <a
                href="https://www.meetup.com/de-DE/Zurich-Web-Worknights/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zürich Web‑Worknights
              </a>
            </h6>
            <p>Werkstatt&#x202F;&&#x202F;React.js</p>
            <p>Lightning Talk zu React.js.</p>
          </CardCourse>
        </Card>
        <Card title="Adobe Kurs">
          <CardCourse date="2016">
            <h6>Web Design mit Adobe Muse CC</h6>
            <p>Für Fortgeschrittene</p>
          </CardCourse>
          <CardCourse date="2015">
            <h6>Web Design mit Adobe Muse CC</h6>
            <p>Für Beginner</p>
          </CardCourse>
        </Card>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Fähigkeiten">
        <h3>Design</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Erfahren"
            name="Adobe XD"
          >
            <AdobeXD />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Professionell"
            name="Sketch"
          >
            <Sketch />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Erfahren" name="Figma">
            <Figma />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Kompetent"
            name="InVision Studio"
          >
            <InVisionStudio />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Professionell"
            name="Adobe Creative Cloud"
          >
            <CreativeCloud />
          </LabelText>
        </div>
        <h3 className="mt-3">Prototyping</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Kompetent"
            name="InVision"
          >
            <InVision />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Kompetent" name="Craft">
            <Craft />
          </LabelText>
        </div>
        <h3 className="mt-3">Coding</h3>
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Fortgeschritten"
            name="Gatsby"
          >
            <Gatsby />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Kompetent" name="Github">
            <Github />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Erfahren" name="HTML5">
            <HTML />
          </LabelText>
          <LabelText classes="mt-2 col-12_lg-6" level="Erfahren" name="CSS3">
            <CSS />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Fortgeschritten"
            name="Javascript"
          >
            <Javascript />
          </LabelText>
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Kompetent"
            name="Visual Studio Code"
          >
            <VSCode />
          </LabelText>
        </div>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Sprachen">
        <h6>Deutsch</h6>
        <p>Muttersprache</p>
        <h6>Englisch</h6>
        <p>Fliessend</p>
        <h6>Französisch</h6>
        <p>Grundkenntnisse</p>
      </BackgroundTitle>
      <BackgroundTitle classes="mt-4" title="Uber-Rating">
        <div className="grid-2-middle">
          <LabelText
            classes="mt-2 col-12_lg-6"
            level="Beifahrer-Level: Professionell"
            name="4.60"
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
