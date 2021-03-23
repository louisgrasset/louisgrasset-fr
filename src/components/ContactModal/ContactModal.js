import * as React from 'react';
import socials from '../../data/socials';
import iconClose from '../../images/icons/close.svg';
import iconForm from '../../images/icons/form.svg';

export const ContactModal = ({ show, close }) => {
    const [showForm, setShowForm] = React.useState(false);
    return (
        <div id="contact" className={(show ? "flex" : "hidden") + " items-end fixed top-0 left-0 md:items-center justify-center w-full h-screen backdrop-blur-5 z-50"}>
            <div onClick={() => { setShowForm(false); close(false); }} role="button" aria-label="Fermer" tabIndex="0" className="absolute w-full h-full bg-gray-900 cursor-pointer dark:bg-gray-100 opacity-20" style={{ zIndex: -1 }}></div>
            <div className="container relative max-w-xl mt-5 bg-white shadow-2xl dark:text-white dark:bg-gray-800 md:mt-0 xl:max-w-3xl rounded-t-xl md:rounded-xl">
                <button className="absolute w-7 h-7 top-3.5 right-3.5 flex items-center justify-center" aria-label="Fermer" onClick={() => { setShowForm(false); close(false); }}>
                    <img src={iconClose} alt="Croix" className="dark:filter-invert" />
                </button>
                <div className="grid max-h-screen gap-8 p-10 overflow-y-auto overscroll-contain xl:gap-0 xl:grid-cols-2">
                    <div className="flex-col pr-0 xl:pr-12 md:self-center">
                        <h2 className="mb-4 text-2xl font-bold">Brisons la glace !</h2>
                        <div className="text-gray-700 dark:text-gray-200 font-theme">
                            <p className="mb-2">Vous êtes plutôt réseaux sociaux ou formulaire ? C'est comme vous préférez.</p>
                        </div>
                        <ul className="flex gap-4 mt-4">
                            {socials.filter(link => link.title === 'Twitter' || link.title === 'Linkedin').map((link, key) => (
                                <li key={key}>
                                    <a
                                        title={link.title}
                                        href={`${link.dm ? link.dm : link.url}`}
                                        target='blank'
                                        className="flex items-center h-10 px-4 py-2 font-medium text-white uppercase bg-gray-900 rounded-md cursor-pointer dark:text-gray-900 dark:bg-white group focus:outline-none focus:ring-4 focus:ring-pink-500 focus:border-pink-500"
                                    >
                                        <img src={link.icon} alt={link.title} className="inline-block w-4 h-4 filter-invert dark:filter-none" />
                                    </a>
                                </li>
                            ))}
                            <li className="md:hidden">
                                <a
                                    onClick={() => setShowForm(true)}
                                    title="Formulaire"
                                    href="#"
                                    className="flex items-center h-10 px-4 py-2 font-medium text-white uppercase bg-gray-900 border border-gray-200 rounded-md cursor-pointer dark:text-gray-900 dark:bg-white group focus:outline-none focus:ring-4 focus:ring-pink-500 focus:border-pink-500"
                                >
                                    <img src={iconForm} alt="Formulaire" className="inline-block w-4 h-4 mr-2 filter-invert dark:filter-none" />
                                    <span>Formulaire</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form name="contact" action="/#success" method="POST" data-netlify="true" className={(showForm ? "grid " : "hidden md:grid ") + "grid grid-cols-1 gap-4 pb-4 pt-6 pl-0 border-gray-200 dark:border-gray-700 sm:pb-0 xl:pl-12 border-t xl:border-l xl:border-t-0"}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-2 sm:mb-0">
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Prénom</label>
                                <input required type="text" name="firstname" id="firstname" className="block w-full px-3 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom</label>
                                <input required type="text" name="lastname" id="lastname" className="block w-full px-3 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                            <input required type="email" name="email" id="email" className="block w-full px-3 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                            <textarea required name="message" id="message" className="block w-full px-3 border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:text-sm h-30"></textarea>
                        </div>
                        <div>
                            <button className="block h-12 px-6 font-medium text-white uppercase bg-gray-900 rounded-md cursor-pointer dark:text-gray-900 dark:bg-white group focus:outline-none focus:ring-4 focus:ring-pink-500 focus:border-pink-500">
                                Envoyer
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
