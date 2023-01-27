import React, { useContext } from "react";
import { ThemeContext } from "../../../context/appContext";
import { Icon, IconSelection } from "../../icons/icons";
import styles from "./themeSelector.module.css";

/**
 * Creates application light dark theme controls.
 */
const ThemeSelector = (): React.ReactElement => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className={styles.themeSelector}>
            <button
                className={themeContext.theme === "light" ? `${styles.themeSelectorButton} ${styles.active}` : `${styles.themeSelectorButton}`}
                onClick={() => {
                    themeContext.setTheme("dark");
                }}
            >
                <Icon alignment="baseline" size={16} icon={IconSelection.dark} />
            </button>
            <button
                className={themeContext.theme === "dark" ? `${styles.themeSelectorButton} ${styles.active}` : `${styles.themeSelectorButton}`}
                onClick={() => {
                    themeContext.setTheme("light");
                }}
            >
                <Icon alignment="baseline" size={16} icon={IconSelection.light} />
            </button>
        </div>
    );
};

export { ThemeSelector };
