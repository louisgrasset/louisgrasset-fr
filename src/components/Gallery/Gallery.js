import * as React from 'react';
import GalleryButton from '../GalleryButton/GalleryButton';

const Gallery = ({ project, projectSelected }) => {
    const [image, setImage] = React.useState(1);

    // Reset gallery counter each time the Gallery is shown
    React.useEffect(() => {
        setImage(1);
    }, [projectSelected]);

    const nextImage = () => {
        (image + 1 <= project.images)
            ? setImage(image + 1)
            : setImage(1);
    };

    const previousImage = () => {
        (image - 1 > 0)
            ? setImage(image - 1)
            : setImage(project.images);
    };

    let images = [];
    for (let key = 1; key <= project.images; key++) {
        images.push(<div key={key} className="flex-shrink-0 w-full h-full bg-no-repeat bg-cover md:bg-contain lg:rounded-r-xl" aria-label={`Projet ${project.name} (${key})`} style={{ backgroundImage: 'url(' + require(`../../images/projects/${project.slug}/${project.slug}-${key}.png`) + ')' }} />);
    };

    return (
        <div className="relative h-full overflow-hidden">
            <div className={"flex flex-nowrap h-full  transition-transform translate-x-0"} style={{ transform: `translateX(-${(image - 1) * 100}%)` }}>
                {images}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 lg:rounded-br-xl"></div>

            <GalleryButton hidden={image === 1} onClick={previousImage} reverse={true} />
            <GalleryButton hidden={image === project.images} onClick={nextImage} />
        </div>
    );
};

export default Gallery;