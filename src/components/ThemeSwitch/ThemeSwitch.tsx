import iconLightOff from "../../images/icons/light-on.svg";
import iconLightOn from "../../images/icons/light-off.svg";
import React, { useMemo } from "react";
import { Translation } from "../../data/translations";

interface ThemeSwitchProps {
    lang: Translation;
    light: boolean;
    setLight: (light: boolean) => void;
}

/**
 * A component that handle theme switching
 */
export const ThemeSwitch = ({ lang, light, setLight }: ThemeSwitchProps) => {
    const title = useMemo(() => {
        return light
            ? lang["theme_text_light"] + " 🙉"
            : lang["theme_text_dark"] + " 🙈";
    }, [light, lang["theme_text"]]);

    return (
        <>
            <button
                onClick={() => {
                    setLight(!light);
                }}
                title={title}
                style={{ appearance: "none" }}
                className="absolute z-50 flex items-center justify-center text-black transition-colors bg-transparent rounded-full opacity-50 cursor-pointer dark:opacity-60 left-4 top-4 w-9 h-9 dark:text-white group hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                <img src={light ? iconLightOn : iconLightOff} alt={title} />
            </button>
        </>
    );
};
