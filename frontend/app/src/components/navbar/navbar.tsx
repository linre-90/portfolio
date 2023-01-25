import React from "react";
import { NavbarButton } from "./navbarButton/navbarButton";
import { End } from "../endLayout/endLayout";
import styles from "./navbar.module.css";
import { NavbarProps } from "../../types/@types.app";
import { ThemeSelector } from "./themeSelector/themeSelector";

/**
 * Navigation bar.
 */
const NavBar = ({ activeLink }: NavbarProps): React.ReactElement => {
    return (
        <div className={styles.navbar}>
            <End>
                <ThemeSelector />
                <div>
                    <NavbarButton text="Home" url="#" active={activeLink[0]} />
                    <NavbarButton text="About" url="#" active={activeLink[1]} />
                    <NavbarButton text="Portfolio" url="#" active={activeLink[2]} />
                    <NavbarButton text="Contact" url="#" active={activeLink[3]} />
                </div>
            </End>
        </div>
    );
};

export { NavBar };
