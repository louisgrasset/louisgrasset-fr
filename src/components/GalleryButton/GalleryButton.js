import * as React from 'react';
import iconArrowRight from '../../images/icons/arrow-right.svg';
import iconArrowLeft from '../../images/icons/arrow-left.svg';

const GalleryButton = ({ onClick, reverse, hidden }) => {
    return (
        <div onClick={onClick} className={(reverse ? "left-2" : "right-2 lg:w-auto lg:px-3") + (hidden ? " hidden" : "") + " absolute flex items-center w-6 h-6  justify-center lg:space-x-1 text-xs text-center text-black uppercase bg-white rounded-full shadow-md cursor-pointer select-none lg:py-1 lg:rounded-xl top-1/2 transition-transform transform  hover:scale-105"}>
            {reverse ? <img className="inline w-2" src={iconArrowLeft} alt="Précédent" /> : null}
            <span className={(!reverse ? "lg:inline" : "") + " hidden"}>
                Voir plus
            </span>
            {!reverse ? (<img className="inline w-2" src={iconArrowRight} alt="Suivant" />) : null}
        </div>
    );
};

export default GalleryButton;