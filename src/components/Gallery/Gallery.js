import * as React from 'react';
import { GalleryButton } from './';

export const Gallery = ({ project, projectSelected }) => {
    const [image, setImage] = React.useState({ counter: 1, max: 1 });

    // Reset gallery counter each time the Gallery is shown
    React.useEffect(() => {
        setImage({ counter: 1, max: 1 });
    }, [projectSelected]);

    const nextImage = () => {
        (image.counter + 1 <= project.images)
            ? setImage({ ...image, counter: image.counter + 1, max: image.counter + 1 })
            : setImage({ ...image, counter: 1 });
    };

    const previousImage = () => {
        (image.counter - 1 > 0)
            ? setImage({ ...image, counter: image.counter - 1 })
            : setImage({ ...image, counter: project.images });
    };

    let images = [];
    for (let key = 1; key <= image.max; key++) {
        images.push(<div key={key} className="flex-shrink-0 w-full h-full bg-no-repeat bg-contain lg:rounded-r-xl" aria-label={`Projet ${project.name} (${key})`} style={{ backgroundImage: 'url(' + require(`../../images/projects/${project.slug}/${project.slug}-${key}.png`) + ')' }} />);
    };

    return (
        <div className="relative h-full overflow-hidden">
            <div className={"flex flex-nowrap h-full  transition-transform translate-x-0"} style={{ width: 100 * image.counter + '%', transform: `translateX(-${(image.counter - 1) * 100}%)` }}>
                {images}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 dark:from-gray-900 lg:rounded-br-xl"></div>

            <GalleryButton hidden={image.counter === 1} onClick={previousImage} reverse={true} />
            <GalleryButton hidden={image.counter === project.images} onClick={nextImage} />
        </div>
    );
};
