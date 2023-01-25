import React, { ReactElement } from "react";
import styles from "./text.module.css";
import { TextProps } from "../../types/@types.app";

/**
 * Text displaying component
 */
const Text = ({ text, bold, cursive }: TextProps): ReactElement => {
    let combinedStyles = "";

    if (bold) {
        combinedStyles = combinedStyles.concat(` ${styles.textbold}`);
    }

    if (cursive) {
        combinedStyles = combinedStyles.concat(` ${styles.textcursive}`);
    }

    return <p className={styles.text + combinedStyles}>{text}</p>;
};

export { Text };
