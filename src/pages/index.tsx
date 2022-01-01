import * as React from "react";
import { createRef, useCallback, useEffect, useMemo, useState } from "react";

// Import components
import { Alert } from "../components/Alert";
import { BeachBall } from "../components/BeachBall";
import { Nav } from "../components/Nav";
import { Headline } from "../components/Headline";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Portfolio } from "../components/Portfolio";
import { Studies } from "../components/Studies";
import { Companies } from "../components/Companies";
import { Footer } from "../components/Footer";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { Skills } from "../components/Skills";
import { Workshop } from "../components/Workshop";
import { PageRefs } from "../types/PageRefs";

// Import data
import translations from "../data/translations";
import { Helmet } from 'react-helmet';

interface IndexPageProps {
  pageContext: any
}

/**
 * A component that render the main page.
 */
const IndexPage = ({ pageContext }: IndexPageProps) => {
  const [language, _setLanguage] = useState(pageContext.langKey);
  const lang = useMemo(() => translations[language], [language]);

  let refs: PageRefs = {
    top: undefined,
    companies: undefined,
    footer: undefined
  };
  refs.top = createRef();
  refs.companies = createRef();
  refs.footer = createRef();

  const [isContactActive, setContactActive] = useState(false);

  const [light, setLight] = useState(true);

  const toggleContact = useCallback(() => {
    setContactActive(!isContactActive);
  }, [isContactActive]);

  useEffect(() => {
    // Close contact modal with escape key
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || 'Esc' && isContactActive) {
        toggleContact();
      }
    };
    document.addEventListener("keyup", (e) => onKeyUp(e));
    return () => {
      document.removeEventListener("keyup", (e) => onKeyUp(e));
    };
  }, [isContactActive, toggleContact]);

  useEffect(() => {
    document.body.classList.add(light ? "light" : "dark");
    document.body.classList.remove(light ? "dark" : "light");
  }, [light]);

  const [isContactFormSubmitted, setContactFormSubmission] = useState(false);
  const toggleContactFormSubmission = useCallback(() => {
    setContactFormSubmission(!isContactFormSubmitted);
  }, [isContactFormSubmitted]);

  useEffect(() => {
    // Get contact form success
    const hash = window.location.hash;
    if (hash && hash.substring(1, hash.length) === "success") {
      window.history.replaceState(null, null, " ");
      toggleContactFormSubmission();
    }
  }, [toggleContactFormSubmission]);

  let metaTitle = lang.meta.title;
  let metaDecription = lang.meta.decription;
  return (
    <>
      <Helmet
        title={metaTitle}
        meta={[
          { name: "charset", content: "utf-8" },
          { name: "description", content: metaDecription },
          { name: "author", content: "Louis Grasset" },
          {
            name: "keywords",
            content:
              "freelance, louis, grasset, louisgrasset, fullstack, lyon, développeur, dev, developpement, portolio, php, css, sass, intégration, web, vitrine, laravel, reactjs, react, javascript, sql, html, entrepreneur",
          },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:creator", content: "@louisgrasset" },
          { name: "twitter:site", content: "@louisgrasset" },
          { name: "twitter:title", content: metaTitle },
          { name: "twitter:description", content: metaDecription },
          {
            name: "twitter:image",
            content: "https://louisgrasset.fr/tw-preview.png",
          },
          { name: "twitter:image:alt", content: "website preview" },
          { property: "og:type", content: "article" },
          { property: "og:locale", content: lang.language.code },
          { property: "og:title", content: metaTitle },
          { property: "og:description", content: metaDecription },
          {
            property: "og:image",
            content: "https://louisgrasset.fr/og-preview.png",
          },
        ]}
      >
        <html lang={language} />
      </Helmet>

      <main
        className="pb-20 overflow-x-hidden transition-colors"
        ref={refs.top}
      >
        <Alert
          text={lang.alert.contact.text}
          show={isContactFormSubmitted}
          hideAlert={()=>setContactFormSubmission(false)}
        />
        <Nav refs={refs} />

        <div className="container relative flex px-5 pt-8 mx-auto align-middle md:px-10 xl:px-20">
          <BeachBall />
        </div>

        <div className="container flex px-5 mx-auto mb-10 align-middle md:px-10 xl:px-20">
          <Hero
            lang={lang}
            refs={refs}
            toggleContact={toggleContact}
          />
          <ThemeSwitch lang={lang} light={light} setLight={setLight} />
        </div>

        <div
          className="container px-5 pt-20 pb-10 mx-auto md:px-10 xl:px-20"
          ref={refs.companies}
        >
          <Headline
            title={lang.companies.headline.title}
            subtitle={lang.companies.headline.subtitle}
          />
          <Companies />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.portfolio.headline.title}
            subtitle={lang.portfolio.headline.subtitle}
          />
          <Portfolio lang={lang} />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.skills.headline.title}
            subtitle={lang.skills.headline.subtitle}
          />
          <Skills light={light} />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.workshop.headline.title}
            subtitle={lang.workshop.headline.subtitle}
          />
          <Workshop />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.studies.headline.title}
            subtitle={lang.studies.headline.subtitle}
          />
          <Studies lang={lang} />
        </div>

        <Contact
          lang={lang}
          show={isContactActive}
          close={setContactActive}
        />
      </main>
      <Footer
        language={language}
        lang={lang}
        refs={refs}
        toggleContact={toggleContact}
      />
    </>
  );
};

export default IndexPage;
