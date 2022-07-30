import React, { useEffect, useState, useMemo } from "react";
import { Project, ProjectWithId } from "../../types";
import { GalleryButton } from "./GalleryButton";
import { GalleryImage } from "./GalleryImage";
import { useCallback } from "react";

interface GalleryProps {
    /** The Project to handle. */
    project: Project;
    /** The current Project. */
    projectSelected: ProjectWithId;
}

/**
 * A component that render the gallery of a project.
 */
export const Gallery = ({ project, projectSelected }: GalleryProps) => {
    const [image, setImage] = useState({ counter: 1, max: 1 });

    // Reset gallery counter each time the Gallery is shown
    useEffect(() => {
        setImage({ counter: 1, max: 1 });
    }, [projectSelected]);

    const nextImage = useCallback(() => {
        image.counter + 1 <= project.images
            ? setImage({
                  ...image,
                  counter: image.counter + 1,
                  max: image.counter + 1,
              })
            : setImage({ ...image, counter: 1 });
    }, [image, project.images, setImage]);

    const previousImage = useCallback(() => {
        image.counter - 1 > 0
            ? setImage({ ...image, counter: image.counter - 1 })
            : setImage({ ...image, counter: project.images });
    }, [image, project.images, setImage]);

    const images = useMemo(() => {
        const i = [];
        for (let key = 1; key <= image.max; key++) {
            i.push(<GalleryImage key={key} counter={key} project={project} />);
        }
        return i;
    }, [image, project]);

    return (
        <div className="relative h-full overflow-hidden lg:rounded-r-xl">
            <div
                className={
                    "gallery-item flex flex-nowrap h-full  transition-transform translate-x-0"
                }
                style={{
                    width: 100 * image.counter + "%",
                    transform: `translateX(-${(image.counter - 1) * 100}%)`,
                }}
            >
                {images}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 dark:from-gray-900 lg:rounded-br-xl" />

            <GalleryButton
                hidden={image.counter === 1}
                onClick={previousImage}
                reverse={true}
            />
            <GalleryButton
                hidden={image.counter === project.images}
                onClick={nextImage}
            />
        </div>
    );
};
