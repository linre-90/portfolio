import React from "react";
import styles from "./endLayout.module.css";
import { ChildrenProps } from "../../types/@types.app";

/**
 * Right align component.
 */
const End = ({ children }: ChildrenProps): React.ReactElement => {
    return <div className={styles.end}>{children}</div>;
};

export { End };
