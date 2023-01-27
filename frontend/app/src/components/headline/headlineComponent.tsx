import React from "react";
import styles from "./headlineComponent.module.css";
import { HeadlineComponentProps } from "../../types/@types.app";

/**
 * Creates styled headers.
 */
const HeadlineComponent = ({ text, size }: HeadlineComponentProps): React.ReactElement => {
    const Tag = `${size}` as keyof JSX.IntrinsicElements;
    return (
        <span className={styles.headlinecomponent}>
            <Tag>{text}</Tag>
        </span>
    );
};

export { HeadlineComponent };
