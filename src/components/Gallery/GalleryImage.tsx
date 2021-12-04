import React, { useState } from "react";
import { Project } from "../../types";

interface GalleryImageProps {
    /** The images counter. */
    counter: number,
    /** The current project. */
    project: Project
}

/**
 * A component that render an image for the Gallery.
 */
export const GalleryImage = ({ counter, project }: GalleryImageProps) => {
    const extension = '.png';
    const source = `/images/projects/${project.slug}/${project.slug}-${counter}`;
    const fallback = require(`../../../static/images/projects/${project.slug}/${project.slug}-${counter}.thumb${extension}`).default;

    const [load, setLoad] = useState(false);

    if (typeof window !== 'undefined') {
        const imageLoader = new Image();
        imageLoader.src = source + extension;
        imageLoader.onload = () => {
            setLoad(true);
        };
    }

    return (
        <>
            <div
                className={(load ? "" : "filter-blur-20") + " transition-all flex-shrink-0 w-full h-full bg-no-repeat bg-contain lg:rounded-r-xl"}
                aria-label={`Projet ${project.name} (${counter})`}
                style={{
                    backgroundImage: 'url(' + (load ? `${source}${extension}` : `${fallback}`) + ')'
                }} />
        </>
    );
};;;
