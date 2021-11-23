import * as React from "react";
import { Helmet } from "react-helmet";

// Import components
import { Alert } from "../components/Alert";
import { BeachBall } from "../components/BeachBall";
import { Nav } from "../components/Nav";
import { Headline } from "../components/Headline";
import { Hero } from "../components/Hero";
import { ContactModal } from "../components/ContactModal";
import { Portfolio } from "../components/Portfolio";
import { Studies } from "../components/Studies";
import { Companies } from "../components/Companies";
import { Footer } from "../components/Footer";
import { LightSwitch } from "../components/LightSwitch";
import { Skills } from "../components/Skills";
import { Workshop } from "../components/Workshop";

// Import data
import translations from "../data/translations";

const IndexPage = ({ pageContext, ...props }) => {
  const [language, setLanguage] = React.useState(pageContext.langKey);
  const lang = React.useMemo(() => translations[language], [language]);

  let refs = [];
  refs.top = React.createRef();
  refs.companies = React.createRef();
  refs.footer = React.createRef();

  const [isContactModalActive, setContactModalActive] = React.useState(false);

  const [light, setLight] = React.useState(true);

  const toggleContactModal = React.useCallback(() => {
    setContactModalActive(!isContactModalActive);
  }, [isContactModalActive]);

  React.useEffect(() => {
    // Close contact modal with escape key
    const onKeyUp = (event) => {
      if (event.keyCode === 27 && isContactModalActive) {
        toggleContactModal();
      }
    };
    document.addEventListener("keyup", (e) => onKeyUp(e));
    return () => {
      document.removeEventListener("keyup", (e) => onKeyUp(e));
    };
  }, [isContactModalActive, toggleContactModal]);

  React.useEffect(() => {
    document.body.classList.add(light ? "light" : "dark");
    document.body.classList.remove(light ? "dark" : "light");
  }, [light]);

  const [isContactFormSubmitted, setContactFormSubmission] =
    React.useState(false);
  const toggleContactFormSubmission = React.useCallback(() => {
    setContactFormSubmission(!isContactFormSubmitted);
  }, [isContactFormSubmitted]);

  React.useEffect(() => {
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
          hideAlert={setContactFormSubmission}
        />
        <Nav refs={refs} />

        <div className="container relative flex px-5 pt-8 mx-auto align-middle md:px-10 xl:px-20">
          <BeachBall />
        </div>

        <div className="container flex px-5 mx-auto mb-10 align-middle md:px-10 xl:px-20">
          <Hero
            lang={lang}
            refs={refs}
            toggleContactModal={toggleContactModal}
          />
          <LightSwitch lang={lang} light={light} setLight={setLight} />
        </div>

        <div
          className="container px-5 pt-20 pb-10 mx-auto md:px-10 xl:px-20"
          ref={refs.companies}
        >
          <Headline
            title={lang.companies.headline.title}
            subtitle={lang.companies.headline.subtitle}
          />
          <Companies lang={lang} />
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
          <Skills lang={lang} light={light} />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.workshop.headline.title}
            subtitle={lang.workshop.headline.subtitle}
          />
          <Workshop lang={lang} />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline
            title={lang.studies.headline.title}
            subtitle={lang.studies.headline.subtitle}
          />
          <Studies lang={lang} />
        </div>

        <ContactModal
          lang={lang}
          show={isContactModalActive}
          close={setContactModalActive}
        />
      </main>
      <Footer
        translations={translations}
        language={language}
        lang={lang}
        refs={refs}
        toggleContactModal={toggleContactModal}
      />
    </>
  );
};

export default IndexPage;
