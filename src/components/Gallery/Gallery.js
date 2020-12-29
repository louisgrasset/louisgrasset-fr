import * as React from 'react';
import GalleryButton from '../GalleryButton/GalleryButton';

const Gallery = ({ project }) => {
    const [image, setImage] = React.useState(1);

    React.useEffect(() => {
        setImage(1);
    }, [project]);

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

    let gallery = [];
    for (let key = 1; key <= project.images; key++) {
        gallery.push(<div key={key} className="flex-shrink-0 w-full h-full bg-no-repeat bg-contain rounded-r-xl" aria-label={`Projet ${project.name} (${key})`} style={{ backgroundImage: 'url(' + require(`../../images/projects/${project.slug}/${project.slug}-${key}.png`) + ')' }} />);
    };

    return (
        <div className="relative h-full overflow-hidden">

            <div className={"flex flex-nowrap h-full  transition-transform translate-x-0"} style={{ transform: `translateX(-${(image - 1) * 100}%)` }}>
                {gallery}
            </div>
            <GalleryButton hidden={image === 1} onClick={previousImage} reverse={true} />
            <GalleryButton hidden={image === project.images} onClick={nextImage} />
        </div>
    );
};

export default Gallery;