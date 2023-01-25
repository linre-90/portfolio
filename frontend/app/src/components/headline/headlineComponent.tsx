import React from "react";
import styles from "./headlineComponent.module.css";
import { HeadlineComponentProps } from "../../types/@types.app";

const HeadlineComponent = ({ text, size }: HeadlineComponentProps): React.ReactElement => {
    const Tag = `${size}` as keyof JSX.IntrinsicElements;
    return <Tag className={styles.headlinecomponent}>{text}</Tag>;
};

export { HeadlineComponent };
