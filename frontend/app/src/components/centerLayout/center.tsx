import React from "react";
import styles from "./center.module.css";
import { ChildrenProps } from "../../types/@types.app";

/**
 * Centers children
 */
const Center = ({ children }: ChildrenProps): React.ReactElement => {
    return <div className={styles.center}>{children}</div>;
};

export { Center };
