import React, { ReactElement } from "react";
import styles from "./image.module.css";
import { ImageProps } from "../../types/@types.app";

enum ImageStyles {
    maxSizeResponsive = 0,
}

/**
 * Options for image hiding. Image with parameter "md" is hidden in small and medium devices.
 */
enum ImageHidden {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    none = "none",
}

/**
 * Component displays responsive images. Component also has ability to hide images with pre determined checkpoints.
 */
const Image = ({ source, altText, style, hiddenOn }: ImageProps): ReactElement => {
    let classString = "";

    if (style === ImageStyles.maxSizeResponsive) {
        classString += styles.maxSizeResponsive;
    }

    switch (hiddenOn) {
        case ImageHidden.sm:
            classString += ` ${styles.hiddenSm}`;
            break;
        case ImageHidden.md:
            classString += ` ${styles.hiddenMd}`;
            break;
        case ImageHidden.lg:
            classString += ` ${styles.hiddenLg}`;
            break;
        case ImageHidden.xl:
            classString += ` ${styles.hiddenXl}`;
            break;
        default:
            break;
    }
    return <img src={source} alt={altText} className={classString} />;
};

export { Image, ImageStyles, ImageHidden };
