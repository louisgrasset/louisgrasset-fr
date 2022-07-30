import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Import components
import { Helmet } from "react-helmet";
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
import { Language } from "../types";
import { PageContext } from "gatsby/internal";

// Import data
import translations from "../data/translations";

interface IndexPageProps {
    pageContext: PageContext;
}

/**
 * A component that render the main page.
 */
function IndexPage({ pageContext }: IndexPageProps) {
    const [language] = useState<Language>(pageContext.langKey);
    const lang = useMemo(() => translations[language], [language]);

    const refs = {
        top: useRef(null),
        companies: useRef(null),
        footer: useRef(null),
    };

    const [isContactActive, setContactActive] = useState(false);

    const [light, setLight] = useState(true);

    const toggleContact = useCallback(() => {
        setContactActive(!isContactActive);
    }, [isContactActive]);

    useEffect(() => {
        // Close contact modal with escape key
        const onKeyUp = (event: KeyboardEvent) => {
            if (event.key === ("Escape" || "Esc") && isContactActive) {
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
        const { hash } = window.location;
        if (hash && hash.substring(1, hash.length) === "success") {
            window.history.replaceState(null, "", " ");
            toggleContactFormSubmission();
        }
    }, [toggleContactFormSubmission]);

    const metaTitle = lang.meta_title;
    const metaDescription = lang.meta_description;
    return (
        <>
            <Helmet
                title={metaTitle}
                meta={[
                    { name: "charset", content: "utf-8" },
                    { name: "description", content: metaDescription },
                    { name: "author", content: "Louis Grasset" },
                    {
                        name: "keywords",
                        content:
                            "freelance, louis, grasset, louisgrasset, fullstack, lyon, développeur, dev, développement, portfolio, php, css, sass, intégration, web, vitrine, laravel, reactjs, react, javascript, sql, html, entrepreneur",
                    },
                    { name: "twitter:card", content: "summary_large_image" },
                    { name: "twitter:creator", content: "@louisgrasset" },
                    { name: "twitter:site", content: "@louisgrasset" },
                    { name: "twitter:title", content: metaTitle },
                    { name: "twitter:description", content: metaDescription },
                    {
                        name: "twitter:image",
                        content: "https://louisgrasset.fr/tw-preview.png",
                    },
                    { name: "twitter:image:alt", content: "website preview" },
                    { property: "og:type", content: "article" },
                    { property: "og:locale", content: lang.language_code },
                    { property: "og:title", content: metaTitle },
                    { property: "og:description", content: metaDescription },
                    {
                        property: "og:image",
                        content: "https://louisgrasset.fr/og-preview.png",
                    },
                ]}
            >
                <html lang={language} />
            </Helmet>

            <main className="pb-20 transition-colors" ref={refs.top}>
                <Alert
                    text={lang.alert_contact_text}
                    show={isContactFormSubmitted}
                    hideAlert={() => setContactFormSubmission(false)}
                />
                <Nav refs={refs} />

                <div className="container relative flex px-5 pt-8 mx-auto align-middle md:px-10 xl:px-20">
                    <BeachBall />
                </div>

                <div className="container px-5 mx-auto mb-10 md:px-10 xl:px-20">
                    <Hero
                        lang={lang}
                        refs={refs}
                        toggleContact={toggleContact}
                    />
                    <ThemeSwitch
                        lang={lang}
                        light={light}
                        setLight={setLight}
                    />
                </div>

                <div
                    className="container px-5 pt-20 pb-10 mx-auto md:px-10 xl:px-20"
                    ref={refs.companies}
                >
                    <Headline
                        title={lang.companies_headline_title}
                        subtitle={lang.companies_headline_subtitle}
                    />
                    <Companies />
                </div>

                <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
                    <Headline
                        title={lang.portfolio_headline_title}
                        subtitle={lang.portfolio_headline_subtitle}
                    />
                    <Portfolio lang={lang} />
                </div>

                <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
                    <Headline
                        title={lang.skills_headline_title}
                        subtitle={lang.skills_headline_subtitle}
                    />
                    <Skills light={light} />
                </div>

                <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
                    <Headline
                        title={lang.workshop_headline_title}
                        subtitle={lang.workshop_headline_subtitle}
                    />
                    <Workshop />
                </div>

                <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
                    <Headline
                        title={lang.studies_headline_title}
                        subtitle={lang.studies_headline_subtitle}
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
}

export default IndexPage;
