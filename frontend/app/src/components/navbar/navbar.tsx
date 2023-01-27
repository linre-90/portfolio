import React, { useEffect, useRef } from "react";
import { NavbarButton } from "./navbarButton/navbarButton";
import { End } from "../endLayout/endLayout";
import styles from "./navbar.module.css";
import { NavbarProps } from "../../types/@types.app";
import { ThemeSelector } from "./themeSelector/themeSelector";
import { Icon, IconSelection } from "../icons/icons";
import { v4 as uuidGenerator } from "uuid";
import logo from "../../images/logo.webp";

/**
 * Navigation bar.
 */
const NavBar = ({ activeLink }: NavbarProps): React.ReactElement => {
    const navLinks: React.ReactElement[] = [
        <NavbarButton key={uuidGenerator()} text="Home" url="/" active={activeLink[0]} />,
        <NavbarButton key={uuidGenerator()} text="About" url="/about" active={activeLink[1]} />,
        <NavbarButton key={uuidGenerator()} text="Portfolio" url="/portfolio" active={activeLink[2]} />,
        <NavbarButton key={uuidGenerator()} text="Contact" url="/contact" active={activeLink[3]} />,
    ];

    const hideNavbar = (): void => {
        if (backdropRef.current !== null) {
            backdropRef.current.classList.add(styles.hidden);
        }
        if (mobileNavbarRef.current !== null) {
            mobileNavbarRef.current.classList.add(styles.hidden);
        }
    };

    const displayNavbar = (): void => {
        if (backdropRef.current !== null) {
            backdropRef.current.classList.remove(styles.hidden);
        }
        if (mobileNavbarRef.current !== null) {
            mobileNavbarRef.current.classList.remove(styles.hidden);
        }
    };

    const backdropRef = useRef<HTMLDivElement>(null);
    const mobileNavbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Bind backdrop to close nav menu
        if (backdropRef.current !== null) {
            backdropRef.current.addEventListener("click", () => hideNavbar());
        }
        hideNavbar();
    }, []);

    return (
        <div className={styles.navbar}>
            {/** Desktop navigation bar */}
            <div className={styles.navbarDesktop}>
                <img className={styles.navbarLogo} src={logo} alt="Logo" />
                <End>
                    <ThemeSelector />
                    <div className={styles.desktopLinkWrapper}>
                        {navLinks.map((navlink) => {
                            return navlink;
                        })}
                    </div>
                </End>
            </div>
            <div className={styles.mobileNavMaster}>
                <button className={styles.floatingActionButton} onClick={() => displayNavbar()}>
                    <Icon alignment="" icon={IconSelection.burger} size={30}></Icon>
                </button>
                <div ref={backdropRef} className={styles.backdrop}></div>
                <div ref={mobileNavbarRef} className={styles.navbarMobile}>
                    <img className={styles.navbarLogo} src={logo} alt="Logo" />
                    <div className={styles.spacer}></div>
                    {navLinks.map((navlink) => {
                        return navlink;
                    })}
                    <div className={styles.spacer}></div>
                    <ThemeSelector />
                </div>
            </div>
        </div>
    );
};

export { NavBar };
