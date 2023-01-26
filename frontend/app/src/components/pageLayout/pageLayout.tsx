import React from "react";
import { NavBar } from "../navbar/navbar";
import { FooterComponent } from "../footer/footer";
import styles from "./pageLayout.module.css";
import { PageLayoutProps } from "../../types/@types.app";

/**
 * Base Layout component. Renders basic page structure.
 */
const PageLayout = ({ activeLink, children }: PageLayoutProps): React.ReactElement => {
    return (
        <section className={styles.pagelayout}>
            <section>
                <NavBar activeLink={activeLink} />
                <div className={styles.pagelayoutcontent}>{children}</div>
            </section>
            <section>
                <FooterComponent />
            </section>
        </section>
    );
};

export { PageLayout };
