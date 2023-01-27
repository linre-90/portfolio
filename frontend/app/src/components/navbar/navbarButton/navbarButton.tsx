import React from "react";
import styles from "./navbarButton.module.css";
import { NavbarButtonProps } from "../../../types/@types.app";
import { Link } from "react-router-dom";

/**
 * Navigation bar link.
 */
const NavbarButton = ({ text, url, active }: NavbarButtonProps): React.ReactElement => {
    let classes = styles.navbarbutton;

    if (active) {
        classes += " active";
    }

    return (
        <Link className={classes} to={url}>
            {text}
        </Link>
    );
};

export { NavbarButton };
