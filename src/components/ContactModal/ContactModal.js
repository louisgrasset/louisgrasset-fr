import * as React from 'react';
import socials from '../../data/socials';
import iconClose from '../../images/icons/close.svg';

const ContactModal = (props) => {
    const closeModal = () => props.setContactModalActive(false);
    return (
        <div className={(props.show ? "flex" : "hidden") + " fixed top-0 left-0 items-center justify-center w-full h-screen backdrop-blur-5 z-20"}>
            <div onClick={() => closeModal()} role="button" aria-label="Fermer" tabIndex="0" className="absolute w-full h-full bg-gray-900 cursor-pointer opacity-20" style={{ zIndex: -1 }}></div>
            <div className="container relative grid max-w-xl max-h-screen gap-8 p-10 overflow-y-auto bg-white shadow-2xl overscroll-contain xl:gap-0 xl:max-w-3xl rounded-xl xl:grid-cols-2">
                <button className="absolute w-8 h-8 top-4 right-4" aria-label="Fermer" onClick={() => closeModal()}>
                    <img src={iconClose} alt="Croix" />
                </button>
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
                <form name="contact" action="/#success" method="POST" data-netlify="true" className="grid grid-cols-1 gap-4 pb-4 pl-0 border-gray-200 sm:pb-0 xl:pl-12 xl:border-l">
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
    );
};

export default ContactModal;