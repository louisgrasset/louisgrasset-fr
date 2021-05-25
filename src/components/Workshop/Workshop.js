import * as React from 'react';
import workshop from '../../data/workshop';

export const Workshop = () => {
    return (
        <div className="grid gap-4 mt-10 md:gap-8 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {
                workshop.map((project, key) => (
                    <a className="" href={project.url} target="_blank" rel="noreferrer">
                        <article key={key} className="relative p-4 pb-2 bg-gray-100 rounded-md dark:bg-gray-800">
                            <div className="bg-cover rounded-md" style={{ paddingBottom: '56.25%', backgroundImage: `url(/images/workshop/${project.slug}.png)` }}></div>
                            <h3 className="mt-2 text-lg font-bold dark:text-white">{project.name}</h3>
                            <span className="absolute text-gray-500 bottom-2 right-4">{project.year}</span>
                        </article>
                    </a>
                ))
            }
        </div>
    );
};