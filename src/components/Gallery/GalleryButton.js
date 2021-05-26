import * as React from 'react';
import iconArrowRight from '../../images/icons/arrow-right.svg';
import iconArrowLeft from '../../images/icons/arrow-left.svg';

export const GalleryButton = ({ onClick, reverse, hidden }) => {
    return (
        <button style={{ appearance: 'none' }} onClick={onClick} className={(reverse ? "left-2 " : "right-2  ") + (hidden ? "hidden " : "") + "flex items-center justify-center group absolute  h-10 top-1/2 cursor-pointer "}>
            <div className={"flex items-center w-6 h-6 justify-center lg:space-x-1 text-xs text-center lg:w-auto lg:px-3 text-black uppercase bg-white border border-gray-100 rounded-full shadow-md select-none lg:py-4 lg:rounded-xl transition-transform transform group-hover:scale-105"}>
                {reverse ? <img className="inline w-2" src={iconArrowLeft} alt="Précédent" /> : null}
                <span className={(!reverse ? "lg:inline" : "") + " hidden"}>
                    Voir plus
                 </span>
                {!reverse ? (<img className="inline w-2" src={iconArrowRight} alt="Suivant" />) : null}
            </div>
        </button>
    );
};
