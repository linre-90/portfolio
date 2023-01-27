import React from "react";
import { ColumnLayoutProps } from "../../types/@types.app";
import styles from "./columnLayout.module.css";
import { v4 as uuid4 } from "uuid";

/**
 * Arranges children to be shown in column like layout.
 */
const ColumnLayout = ({ columnCount, children }: ColumnLayoutProps): React.ReactElement => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className={styles.columnlayout}>
            {childrenArray.map((e) => {
                return (
                    <div key={uuid4()} style={{ width: `${100 / columnCount}%` }}>
                        {e}
                    </div>
                );
            })}
        </div>
    );
};

export { ColumnLayout };
