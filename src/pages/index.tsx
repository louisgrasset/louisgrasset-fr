import * as React from "react";
import { Language } from "../types";
import { PageContext } from "gatsby/internal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

// Import data
import translations from "../data/translations";
import { SEO } from "../components/SEO";
import { navigate } from "gatsby";
import { Toast } from "../components/Toast";

export const Head = ({ pageContext }: { pageContext: PageContext }) => (
    <SEO pageContext={pageContext} />
);

const getBrowserLanguage = () => {
    const DEFAULT_LANGUAGE = "en";
    if (typeof navigator === `undefined`) {
        return DEFAULT_LANGUAGE;
    }

    const lang =
        navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return DEFAULT_LANGUAGE;

    switch (lang) {
        case "fr":
            return "fr";
        default:
            return "en";
    }
};

interface IndexPageProps {
    pageContext: PageContext;
    location: Location;
}
/**
 * A component that render the main page.
 */
function IndexPage({ pageContext, location }: IndexPageProps) {
    const [translationAvailable, setTranslationAvailable] = useState<
        Language | undefined
    >(undefined);
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
    const [showTranslationToast, setShowTranslationToast] = useState(true);
    const toast = useMemo(() => {
        if (translationAvailable && showTranslationToast) {
            return (
                <Toast
                    title={
                        translations[translationAvailable]
                            .toast_translation_title
                    }
                    message={
                        translations[translationAvailable]
                            .toast_translation_message
                    }
                    handleClick={() =>
                        navigate(`/${translationAvailable}/`, {
                            replace: false,
                        })
                    }
                    handleClose={() => setShowTranslationToast(false)}
                />
            );
        }
    }, [translationAvailable, showTranslationToast]);

    // Redirect non-French-speaking users when loading the root path
    useEffect(() => {
        if (location.pathname === "/") {
            const browserLanguage = getBrowserLanguage();

            if (browserLanguage !== "fr") {
                setTranslationAvailable(browserLanguage);
            }
        }
    }, []);

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

    return (
        <>
            <main className="pb-20 transition-colors" ref={refs.top}>
                <Alert
                    text={lang.alert_contact_text}
                    show={isContactFormSubmitted}
                    hideAlert={() => setContactFormSubmission(false)}
                />
                {translationAvailable && toast}
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
