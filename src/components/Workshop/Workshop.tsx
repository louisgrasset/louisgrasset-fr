import React from 'react';

import workshop from '../../data/workshop';

export const Workshop = () => {
    return (
        <div className="grid gap-4 mt-10 md:gap-8 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {
                workshop.map((project, key) => (
                    <a key={key} className="" href={project.url} target="_blank" rel="noreferrer">
                        <article className="relative p-4 pb-2 bg-gray-100 rounded-md dark:bg-gray-800">
                        <picture>
                            <source className="object-fit aspect-video rounded-md h-full w-full" srcSet={`/images/workshop/${project.slug}/${project.slug}-1.thumb.webp`} media="(max-width: 420px)"/>
                            <source className="object-fit aspect-video rounded-md h-full w-full" srcSet={`/images/workshop/${project.slug}/${project.slug}-1.webp`} media="(max-width: 768px)"/>
                            <img className="object-fit aspect-video rounded-md h-full w-full" src={`/images/workshop/${project.slug}/${project.slug}-1.thumb.webp`} alt={project.name} />
                        </picture>
                            <h3 className="mt-2 text-lg font-bold dark:text-white">{project.name}</h3>
                            <span className="absolute text-gray-500 bottom-2 right-4">{project.year}</span>
                        </article>
                    </a>
                ))
            }
        </div>
    );
};
