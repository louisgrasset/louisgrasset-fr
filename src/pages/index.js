import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

import Alert from "../components/Alert/Alert";
import BeachBall from "../components/BeachBall/BeachBall";
import Nav from "../components/Nav/Nav";
import Headline from "../components/Headline/Headline";
import SocialAside from "../components/SocialAside/SocialAside";
import ContactModal from "../components/ContactModal/ContactModal";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

import companies from "../data/companies";
import scrollInto from "../utils/scrollInto";
import profile from "../images/profile.jpg";

const IndexPage = () => {
  let refs = [];
  refs.top = React.createRef();
  refs.companies = React.createRef();

  const [isContactModalActive, setContactModalActive] = React.useState(false);
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
    document.addEventListener('keyup', (e) => onKeyUp(e));
    return () => {
      document.removeEventListener('keyup', (e) => onKeyUp(e));
    };
  }, [isContactModalActive, toggleContactModal]);

  const [isContactFormSubmitted, setContactFormSubmission] = useState(false);
  const toggleContactFormSubmission = useCallback(() => {
    setContactFormSubmission(!isContactFormSubmitted);
  }, [isContactFormSubmitted]);

  useEffect(() => {
    // Get contact form success
    const hash = window.location.hash;
    if (hash && hash.substring(1, hash.length) === 'success') {
      window.history.replaceState(null, null, ' ');
      toggleContactFormSubmission();
    }

  }, [toggleContactFormSubmission]);


  return (
    <>
      <main className="overflow-x-hidden" ref={refs.top}>
        <Helmet>
          <title>Louis Grasset</title>
        </Helmet>
        <Alert text={"Votre message a bien été envoyé."} show={isContactFormSubmitted} />
        <div className="container relative flex px-5 pt-8 mx-auto align-middle xl:px-20">
          <BeachBall />
          <Nav />
        </div>
        <div className="container flex px-5 mx-auto mb-5 align-middle xl:px-20">
          <div className="py-20">
            <img src={profile} alt="Louis Grasset" className="w-20 h-20 mb-4 rounded-full shadow-md"></img>
            <h1 className="text-4xl font-medium text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="font-semibold text-black">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> Développeur web front end passionné. Je&nbsp;croque le web.<br />
            </h1>
            <p className="my-8 font-light text-gray-500 text-md">Actuellement en poste de Développeur R&amp;D chez <a href="https://yseop.com" className="underline">Yseop</a> et freelance.</p>
            <div className="grid grid-rows-2 gap-4 sm:max-w-md sm:grid-cols-2">
              <button onClick={toggleContactModal} className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-pink-500">
                Prendre contact
            </button>
              <button onClick={() => { scrollInto(refs.companies); }} className="block h-12 px-6 font-medium text-gray-900 uppercase bg-white border border-gray-100 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-pink-500">
                Me connaître
          </button>
            </div>
          </div>
        </div>
        <SocialAside />
        <ContactModal show={isContactModalActive} setContactModalActive={setContactModalActive} />
        <div className="container px-5 py-10 mx-auto xl:px-20" ref={refs.companies}>
          <Headline title="Entreprises" subtitle="Elles me font confiance" />
          <ul className="grid grid-cols-2 my-6 gap-x-3 gap-y-12 xl:gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:flex xl:justify-between xl:flex-wrap">
            {companies.map((link, key) => (
              <li key={key} className="xl:mr-8 xl:mb-8">
                <a
                  title={link.title}
                  href={`${link.url}`}
                  target="blank"
                  rel="noreferrer"
                >
                  <img src={link.icon} alt={link.title} className="h-12" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container px-5 py-10 mx-auto xl:px-20">
          <Headline title="Réalisations" subtitle="Projets sur lesquels j'ai travaillé" />
          <Portfolio />
        </div>
      </main >
      <Footer refs={refs} />
    </>
  );
};

export default IndexPage;
