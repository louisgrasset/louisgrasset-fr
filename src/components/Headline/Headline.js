import * as React from 'react';

export const Headline = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
            <p className="text-gray-500 text-md md:text-lg">{subtitle}</p>
        </>
    );
};
