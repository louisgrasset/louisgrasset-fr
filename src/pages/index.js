import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

import Alert from "../components/Alert/Alert";

import companies from "../data/companies";

import profile from "../images/profile.jpg";
import linkedin from "../images/social/linkedin.svg";
import malt from "../images/social/malt.svg";
import twitter from "../images/social/twitter.svg";

const socials = [
  {
    title: "Malt",
    url: "https://malt.com/profile/louisgrasset",
    icon: malt,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/louisgrasset",
    icon: twitter,
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/louisgrasset",
    icon: linkedin,
  },
];

const IndexPage = () => {
  let refs = [];
  refs.top = React.createRef();
  refs.companies = React.createRef();

  const scrollInto = (element) => {
    element.current.scrollIntoView({ behavior: "smooth" });
  };


  const [isContactModalActive, setContactModalActive] = useState(false);
  const toggleContactModal = useCallback(() => {
    setContactModalActive(!isContactModalActive);
  }, [isContactModalActive]);

  const [isContactFormSubmitted, setContactFormSubmission] = useState(false);
  const toggleContactFormSubmission = useCallback(() => {
    setContactFormSubmission(!isContactFormSubmitted);
  }, [isContactFormSubmitted]);

  useEffect(() => {
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

  useEffect(() => {
    // Get contact form success
    const hash = window.location.hash;
    if (hash && hash.substring(1, hash.length) === 'success') {
      window.history.replaceState(null, null, ' ');
      toggleContactFormSubmission();
    }

  }, [toggleContactFormSubmission]);


  return ([
    <main className="overflow-x-hidden" ref={refs.top}>
      <Helmet>
        <title>Louis Grasset</title>
      </Helmet>
      <Alert text={"Votre message a bien été envoyé."} show={isContactFormSubmitted} />
      <div className="container relative flex px-5 pt-8 mx-auto align-middle xl:px-20">
        <div className="absolute top-0 right-0 overflow-hidden filter-blur-40" style={{ animation: 'spin 14s ease-out alternate infinite', zIndex: '-1' }}>
          <div className="relative grid grid-cols-2 origin-center transform -rotate-45 opacity-70 filter-blur-40">
            <div className="top-0 left-0 bg-yellow-500 rounded-full rounded-br-none w-60 h-60"></div>
            <div className="top-0 right-0 bg-pink-500 rounded-full rounded-bl-none w-60 h-60"></div>
            <div className="bottom-0 right-0 bg-purple-400 rounded-full rounded-tr-none w-60 h-60"></div>
            <div className="bottom-0 left-0 bg-blue-400 rounded-full rounded-tl-none w-60 h-60"></div>
          </div>
        </div>
        <nav className="flex justify-between w-full">
          <a href="./">Louis Grasset</a>
          <ul>
            {socials.map((link, key) => (
              <li key={key} className="inline-block mr-4">
                <a
                  title={link.title}
                  href={`${link.url}`}
                  target="blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="inline-block"><a href="./grasset-louis-cv.pdf" className="hover:underline">CV</a></li>
          </ul>
        </nav>
      </div>
      <div className="container flex min-h-screen px-5 mx-auto align-middle xl:px-20">
        <div className="py-20">
          <img src={profile} alt="Louis Grasset" className="w-20 h-20 mb-4 rounded-full shadow-md"></img>
          <h1 className="text-6xl font-medium text-gray-900 md:text-7xl lg:text-8xl">
            <span className="font-semibold text-black">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> Développeur web front end passionné. Je croque le web.<br />
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
      <ul className="fixed top-0 flex-col items-center justify-center hidden w-10 h-screen p-2 px-5 md:flex left-4">
        {socials.map((link, key) => (
          <li key={key} className="mb-4">
            <span>
              <a
                title={link.title}
                href={`${link.url}`}
                target="blank"
                rel="noreferrer"
              >
                <img src={link.icon} alt={link.title} className="w-6 h-6" />
              </a>
            </span>
          </li>
        ))}
      </ul>
      <div className={(isContactModalActive ? "flex" : "hidden") + " fixed top-0 left-0 items-center justify-center w-full h-screen backdrop-blur-5"}>
        <div onClick={toggleContactModal} role="button" aria-label="Fermer la modale de contact" tabIndex="0" className="absolute w-full h-full bg-gray-900 cursor-pointer opacity-20" style={{ zIndex: -1 }}></div>
        <div className="container grid max-w-xl gap-8 p-10 overflow-x-auto bg-white shadow-2xl xl:gap-0 xl:max-w-3xl rounded-xl xl:grid-cols-2">
          <div className="flex-col pr-0 xl:pr-12">
            <h2 className="mb-4 text-2xl font-bold">Par où préfèrez-vous me contacter ?</h2>
            <div className="font-light text-gray-700">
              <p className="mb-2">N'hésitez pas à me suivre puis à m'envoyer un message privé.</p>
              <p>Le formulaire ci-contre vous permet également de prendre contact avec moi.</p>
            </div>
            <ul className="justify-self-end">
              {socials.filter(link => link.title === 'Twitter' || link.title === 'Linkedin').map((link, key) => (
                <li key={key} className="inline-block mt-4 mr-4">
                  <span>
                    <a
                      title={link.title}
                      href={`${link.url}`}
                      target='blank'
                    >
                      <img src={link.icon} alt={link.title} className="w-5 h-5" />
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <form name="contact" action="/#success" method="POST" data-netlify="true" className="grid grid-cols-1 gap-4 pl-0 border-gray-200 xl:pl-12 xl:border-l">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="mb-2 sm:mb-0">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" name="firstname" id="firstname" className="block w-full px-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" name="lastname" id="lastname" className="block w-full px-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" name="email" id="email" className="block w-full px-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" className="block w-full px-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm h-30"></textarea>
            </div>
            <div>
              <input required className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-500 focus:border-pink-500" type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
      <div className="container px-5 py-20 mx-auto xl:px-20" ref={refs.companies}>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Entreprises</h2>
        <p className="text-gray-500 text-md md:text-lg">Elles me font confiance</p>
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
    </main >,
    <footer className="px-5 py-10 font-light text-gray-700 bg-gray-200 ">
      <div className="container grid justify-between grid-flow-row gap-4 mx-auto align-top md:grid-flow-col md:grid-cols-3">
        <span>
          Louis Grasset<br />
      Tous droits réservés.
      Design inspiré par <a href="https://dribbble.com/shots/14572884-Redesigning-my-portfolio-Webflow" target="_blank" rel="noreferrer" className="underline"> ce shot</a>.
        </span>
        <ul className="flex md:justify-center">
          {socials.map((link, key) => (
            <li key={key} className="inline-block mr-6">
              <span>
                <a
                  title={link.title}
                  href={`${link.url}`}
                  target='blank'
                >
                  <img src={link.icon} alt={link.title} className="w-5 h-5" />
                </a>
              </span>
            </li>
          ))}
        </ul>
        <button className="block w-48 h-12 px-6 font-medium bg-white rounded-md md:justify-self-end focus:outline-none focus:ring-4 focus:ring-pink-500" onClick={() => scrollInto(refs.top)}>
          Retour en haut
        </button>
      </div>
    </footer>
  ]);
};

export default IndexPage;
