import * as React from "react";
import { Helmet } from "react-helmet";

// Import components 
import Alert from "../components/Alert/Alert";
import BeachBall from "../components/BeachBall/BeachBall";
import Nav from "../components/Nav/Nav";
import Headline from "../components/Headline/Headline";
import ContactModal from "../components/ContactModal/ContactModal";
import Portfolio from "../components/Portfolio/Portfolio";
import Studies from "../components/Studies/Studies";
import Footer from "../components/Footer/Footer";

// Import data 
import companies from "../data/companies";
import scrollInto from "../utils/scrollInto";

const IndexPage = () => {
  let refs = [];
  refs.top = React.createRef();
  refs.companies = React.createRef();
  refs.footer = React.createRef();

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

  const [isContactFormSubmitted, setContactFormSubmission] = React.useState(false);
  const toggleContactFormSubmission = React.useCallback(() => {
    setContactFormSubmission(!isContactFormSubmitted);
  }, [isContactFormSubmitted]);

  React.useEffect(() => {
    // Get contact form success
    const hash = window.location.hash;
    if (hash && hash.substring(1, hash.length) === 'success') {
      window.history.replaceState(null, null, ' ');
      toggleContactFormSubmission();
    }

  }, [toggleContactFormSubmission]);

  return (
    <>
      <Helmet
        title="Louis Grasset - Développeur web front end freelance"
        meta={[
          { name: 'charset', content: 'utf-8' },
          { name: 'description', content: 'Louis Grasset, développeur web front end freelance. Développement adapté à vos besoins.' },
          { name: 'author', content: 'Louis Grasset' },
          { name: 'twitter:creator', content: '@louisgrasset' },
          { name: 'keywords', content: 'freelance, louis, grasset, louisgrasset, fullstack, lyon, développeur, dev, developpement, portolio, php, css, sass, intégration, web, vitrine, laravel, reactjs, react, javascript, sql, html, entrepreneur' },
        ]}
      >
        <html lang="fr" />
      </Helmet>
      <main className="overflow-x-hidden" ref={refs.top}>
        <Alert text={"Votre message a bien été envoyé."} show={isContactFormSubmitted} />
        <Nav refs={refs} />
        <div className="container relative flex px-5 pt-8 mx-auto align-middle md:px-10 xl:px-20">
          <BeachBall />
        </div>
        <div className="container flex px-5 mx-auto mb-5 align-middle md:px-10 xl:px-20">
          <div className="pt-20 pb-10">
            <img src={require('../images/profile.jpg')} alt="Louis Grasset" className="w-20 h-20 mb-4 rounded-full shadow-md" />
            <h1 className="text-4xl font-medium text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="font-semibold text-black">Louis Grasset</span> <span className="invisible block text-sm md:visible md:inline-block md:text-7xl lg:text-8xl">—</span> Développeur web front end passionné. Je&nbsp;croque le web.<br />
            </h1>
            <p className="my-8 font-light text-gray-500 text-md">Actuellement en poste de Développeur R&amp;D chez <a href="https://yseop.com" className="underline"><img className="inline h-6 -mt-1.5" src={require('../images/companies/yseop.svg')} alt="Yseop" /></a> et freelance.</p>
            <div className="grid grid-rows-2 gap-4 sm:max-w-md sm:grid-cols-2">
              <button onClick={toggleContactModal} className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md shadow-md focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                Dire bonjour&nbsp;&nbsp;<span role='img' aria-label="smiley">🙂</span>
              </button>
              <button onClick={() => { scrollInto(refs.companies); }} className="block h-12 px-6 font-medium text-gray-900 uppercase bg-white border border-gray-100 rounded-md shadow-md focus:ring-opacity-50 focus:outline-none focus:ring-4 focus:ring-pink-500">
                En savoir plus
          </button>
            </div>
          </div>
        </div>
        <ContactModal show={isContactModalActive} setContactModalActive={setContactModalActive} />
        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20" ref={refs.companies}>
          <Headline title="Entreprises" subtitle="Elles m'ont fait confiance" />
          <ul className="grid grid-cols-2 mt-6 gap-x-3 gap-y-12 xl:gap-y-6 sm:grid-cols-3 lg:grid-cols-6 xl:flex xl:justify-between xl:flex-wrap">
            {companies.map((link, key) => (
              <li key={key} className={(key !== companies.length - 1) ? "xl:mr-6 xl:mb-6" : ''}>
                <a
                  title={link.title}
                  href={`${link.url}`}
                  target="blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <img src={link.icon} alt={link.title} className="h-12 p-1" style={{ maxWidth: '9rem' }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline title="Réalisations" subtitle="Projets sur lesquels j'ai travaillé" />
          <Portfolio />
        </div>

        <div className="container px-5 py-10 mx-auto md:px-10 xl:px-20">
          <Headline title="Etudes" subtitle="Voici mon parcours" />
          <Studies />
        </div>
      </main>
      <Footer refs={refs} toggleContactModal={toggleContactModal} />
    </>
  );
};

export default IndexPage;
