import * as React from 'react';

export const GalleryImage = ({ counter, project }) => {
    const extension = '.png';
    const source = `/images/projects/${project.slug}/${project.slug}-${counter}`;
    const [load, setLoad] = React.useState(false);

    const imageLoader = new Image();
    imageLoader.src = source + extension;

    imageLoader.onload = () => {
        setLoad(true);
    };
    return (
        <>
            <div
                className={(load ? "" : "filter-blur-20") + " transition-all flex-shrink-0 w-full h-full bg-no-repeat bg-contain lg:rounded-r-xl"}
                aria-label={`Projet ${project.name} (${counter})`}
                style={{
                    backgroundImage: 'url(' + (load ? `${source}${extension}` : `${require(`../../../static/images/projects/${project.slug}/${project.slug}-${counter}` + `.thumb${extension}`)}`) + ')'
                }} />
        </>
    );
};;;
