import * as React from "react";
import ReactTooltip from 'react-tooltip';
import iconLightOff from "../../images/icons/light-on.svg";
import iconLightOn from "../../images/icons/light-off.svg";

export const LightSwitch = ({ light, setLight }) => {
    let hidden = true;
    let alt = React.useCallback(() => {
        return `Activer le mode ${light ? 'sombre 🙉' : 'lumineux 🙈'}`;
    }, [light]);

    let theme = React.useMemo(() => {
        let style =
            `.tooltip-theme {
                background-color: ${light ? '#1f2937' : '#e5e7eb'} !important;
                color: ${light ? '#e5e7eb' : '#1f2937'} !important;
            }
            .tooltip-theme::before { border-right: 8px solid ${light ? '#1f2937' : '#e5e7eb'} !important; }
            .tooltip-theme::after { display:none !important; }
            .tooltip-theme.show { margin-left: 10px; opacity: 1 }`;
        return (style.replace(/(\r\n|\n|\r)/gm, '')).replace(/\s+/g, ' ');
    }, [light]);

    return (
        <>
            <ReactTooltip className="hidden tooltip-theme md:block" getContent={alt} id='switch' place="right" effect="float" />
            <div onClick={() => { setLight(!light); }} data-for='switch' data-tip='' className="absolute z-50 flex items-center justify-center text-black transition-colors bg-transparent rounded-full opacity-50 cursor-pointer dark:opacity-60 left-4 top-4 w-9 h-9 dark:text-white group hover:bg-gray-200 dark:hover:bg-gray-700">
                <img src={light ? iconLightOn : iconLightOff} alt={alt()} />
            </div>
            <style>
                {theme}
            </style>
        </>
    );
};
