import * as React from "react";
import Helmet from "react-helmet";

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
    url: "https://twitter.com/louisgraset",
    icon: twitter,
  },
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/louisgrasset",
    icon: linkedin,
  },
];

const IndexPage = () => {
  return ([
    <main className="relative">
      <Helmet>
        <title>Louis Grasset</title>
      </Helmet>
      <div className="container relative flex pt-8 mx-auto align-middle">
        <div className="absolute top-0 right-0 " style={{ animation: 'spin 15s linear infinite', zIndex: '-1' }}>
          <div className="relative grid grid-cols-2 origin-center transform -rotate-45 opacity-70 filter-blur-70">
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
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="inline-block"><a href="./grasset-louis-cv.pdf">CV</a></li>
          </ul>
        </nav>
      </div>
      <div className="container flex min-h-screen mx-auto align-middle">
        <div className="py-20 lg:px-20 w-100">
          <h1 className="font-medium text-8xl">
            Louis Grasset <span className="invisible block text-sm md:visible md:inline-block md:text-8xl">—</span> Développeur web front end passionné qui croque le web.<br />
          </h1>
          <p className="my-8 font-light text-gray-500 text-md">Actuellement en poste Développeur R&D chez <a href="https://yseop.com" className="underline">Yseop</a> et freelance.</p>
          <button className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md focus:outline-none focus:ring focus:border-gray-800">
            Prendre contact
          </button>
        </div>
      </div>
      <ul className="fixed flex flex-col w-10 p-2 left-4 top-1/2">
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
    </main>,
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
