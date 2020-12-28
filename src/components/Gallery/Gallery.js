import * as React from 'react';
import projects from '../../data/projects';
import GalleryButton from '../GalleryButton/GalleryButton';

const Gallery = ({ project }) => {
    const [image, setImage] = React.useState(1);

    React.useEffect(() => {
        console.log(image);
    });

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
        gallery.push(<img key={key} className="w-full rounded-r-xl" alt={`Projet ${project.name} (${key})`} src={`/static/projects/manitowoc/manitowoc-${key}.png`} />);
    }

    return (
        <div className="relative overflow-hidden">

            <div className={"flex flex-nowrap transition-transform translate-x-0"} style={{ transform: `translateX(-${(image - 1) * 100}%)` }}>
                {gallery}
            </div>
            <GalleryButton hidden={image === 1} onClick={previousImage} reverse={true} />
            <GalleryButton hidden={image === project.images} onClick={nextImage} />
        </div>
    );
};

export default Gallery;