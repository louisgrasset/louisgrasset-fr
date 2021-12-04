import ReactTooltip from 'react-tooltip';
import iconLightOff from "../../images/icons/light-on.svg";
import iconLightOn from "../../images/icons/light-off.svg";
import React, { useCallback, useMemo } from 'react';

interface ThemeSwitchProps {
    lang: string,
    light: boolean,
    setLight: (light: boolean)=> void
}

/**
 * A component that handle theme switching
 */
export const ThemeSwitch = ({ lang, light, setLight }: ThemeSwitchProps) => {
    let alt = useCallback(() => {
        return light ? (lang.theme.text['light'] + ' 🙉') : (lang.theme.text['dark'] + ' 🙈');
    }, [light, lang.theme.text]);

    let theme = useMemo(() => {
        let style =
            `@media screen and (pointer: coarse) {
                .tooltip-theme {
                    display:none !important;
                }
            }
            .tooltip-theme {
                background-color: ${light ? '#111927' : '#e5e7eb'} !important;
                color: ${light ? '#e5e7eb' : '#111927'} !important;
            }
            .tooltip-theme::before { border-right: 8px solid ${light ? '#111927' : '#e5e7eb'} !important; }
            .tooltip-theme::after { display:none !important; }
            .tooltip-theme.show { margin-left: 10px; opacity: 1 }`;
        return (style.replace(/(\r\n|\n|\r)/gm, '')).replace(/\s+/g, ' ');
    }, [light]);

    return (
        <>
            <ReactTooltip className="hidden tooltip-theme md:block" getContent={alt} id='switch' place="right" effect="float" />
            <button onClick={() => { setLight(!light); }} data-for='switch' data-tip='' style={{ appearance: 'none' }} className="absolute z-50 flex items-center justify-center text-black transition-colors bg-transparent rounded-full opacity-50 cursor-pointer dark:opacity-60 left-4 top-4 w-9 h-9 dark:text-white group hover:bg-gray-200 dark:hover:bg-gray-700">
                <img src={light ? iconLightOn : iconLightOff} alt={alt()} />
            </button>
            <style>
                {theme}
            </style>
        </>
    );
};
