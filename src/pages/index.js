import * as React from "react";
import { useState } from "react";

import Helmet from "react-helmet";

import profile from "../images/profile.jpg";
import linkedin from "../images/linkedin.svg";
import malt from "../images/malt.svg";
import twitter from "../images/twitter.svg";

const socialLinks = [
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
  const [isContactModalActive, setContactModalActive] = useState('false');
  const toggleContactModal = () => {
    setContactModalActive(!isContactModalActive);
  };

  return ([
    <main className="px-5 overflow-x-hidden lg:px-0">
      <Helmet>
        <title>Louis Grasset</title>
      </Helmet>
      <div className="container relative flex pt-8 mx-auto align-middle xl:px-20">
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
            {socialLinks.map((link, key) => (
              <li key={link.title} className="inline-block mr-4">
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
      <div className="container flex min-h-screen mx-auto align-middle xl:px-20">
        <div className="py-20">
          <img src={profile} alt="Louis Grasset" className="w-20 h-20 mb-4 rounded-full shadow-md"></img>
          <h1 className="text-6xl font-medium text-gray-900 md:text-7xl lg:text-8xl">
            <span className="font-semibold text-black">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> Développeur web front end passionné qui croque le web.<br />
          </h1>
          <p className="my-8 font-light text-gray-500 text-md">Actuellement en poste de Développeur R&amp;D chez <a href="https://yseop.com" className="underline">Yseop</a> et freelance.</p>
          <button onClick={toggleContactModal} className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md focus:outline-none focus:ring focus:border-gray-800">
            Prendre contact
          </button>
        </div>
      </div>
      <ul className="fixed top-0 flex-col items-center justify-center hidden w-10 h-full p-2 xl:flex left-4">
        {socialLinks.map((link, key) => (
          <li key={link.title} className="mb-4">
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
        <div onClick={toggleContactModal} className="absolute w-full h-full bg-gray-900 cursor-pointer opacity-20" style={{ zIndex: -1 }}></div>
        <div className="container grid max-w-xl gap-8 p-10 overflow-x-auto bg-white shadow-2xl xl:gap-0 xl:max-w-3xl rounded-xl xl:grid-cols-2">
          <div className="flex-col pr-0 xl:pr-12">
            <h2 className="mb-4 text-2xl font-bold">Par où préfèrez-vous me contacter ?</h2>
            <div className="font-light text-gray-700">
              <p className="mb-2">N'hésitez pas à me suivre puis à m'envoyer un message privé.</p>
              <p>Le formulaire ci-contre vous permet également de prendre contact avec moi.</p>
            </div>
            <ul className="justify-self-end">
              {socialLinks.filter(link => link.title === 'Twitter' || link.title === 'Linkedin').map((link, key) => (
                <li key={link.title} className="inline-block mt-4 mr-4">
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
          <form name="contact" method="POST" data-netlify="true" className="grid grid-cols-1 gap-4 pl-0 border-gray-200 xl:pl-12 xl:border-l">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="mb-2 sm:mb-0">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" name="firstname" id="firstname" class="focus:ring-blue-400 focus:border-blue-400 block w-full px-3 sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" name="lastname" id="lastname" class="focus:ring-blue-400 focus:border-blue-400 block w-full px-3 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="text" name="email" id="email" class="focus:ring-blue-400 focus:border-blue-400 block w-full px-3 sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" class="focus:ring-blue-400 focus:border-blue-400 block w-full px-3 sm:text-sm border-gray-300 rounded-md h-30"></textarea>
            </div>
            <div>
              <input className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md cursor-pointer focus:outline-none focus:ring focus:border-gray-800" type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </main >,
    <footer className="py-10 font-light text-gray-700 bg-gray-200">
      <div className="container flex justify-between mx-auto align-top">
        <span>
          Louis Grasset<br />
      Tous droits réservés.
      </span>
        <ul>
          {socialLinks.map((link, key) => (
            <li key={link.title} className="inline-block mx-6">
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
        <button className="block h-12 px-6 bg-white" onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
          Retour en haut
          </button>
      </div>
    </footer >
  ]);
};

export default IndexPage;
