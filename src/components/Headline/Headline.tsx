import React from "react";

interface HeadlineProps {
    /** The title */
    title: string;
    /** The subtitle */
    subtitle: string;
}

/**
 * A component that render title and a subtitle.
 */
export const Headline = ({ title, subtitle }: HeadlineProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
                {title}
            </h2>
            <p className="text-gray-500 text-md md:text-lg">{subtitle}</p>
        </>
    );
};
