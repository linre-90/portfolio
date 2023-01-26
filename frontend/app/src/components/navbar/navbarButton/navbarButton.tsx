import React from "react";
import styles from "./navbarButton.module.css";
import { NavbarButtonProps } from "../../../types/@types.app";

/**
 * Navigation bar link.
 */
const NavbarButton = ({ text, url, active }: NavbarButtonProps): React.ReactElement => {
    let classes = styles.navbarbutton;

    if (active) {
        classes += " active";
    }

    return (
        <a className={classes} href={url}>
            {text}
        </a>
    );
};

export { NavbarButton };
