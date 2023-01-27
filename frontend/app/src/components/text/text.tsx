import React, { ReactElement } from "react";
import styles from "./text.module.css";
import { TextProps } from "../../types/@types.app";

/**
 * Text displaying component
 */
const Text = ({ bold, cursive, children }: TextProps): ReactElement => {
    let combinedStyles = "";

    if (bold) {
        combinedStyles = combinedStyles.concat(` ${styles.textbold}`);
    }

    if (cursive) {
        combinedStyles = combinedStyles.concat(` ${styles.textcursive}`);
    }

    return <div className={styles.text + combinedStyles}>{children}</div>;
};

export { Text };
