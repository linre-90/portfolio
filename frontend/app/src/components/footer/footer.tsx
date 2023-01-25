import React from "react";
import styles from "./footer.module.css";
import { Icon, IconSelection } from "../icons/icons";

const FooterComponent = (): React.ReactElement => {
    return (
        <div className={styles.footer + " " + styles.footerposition}>
            <p>
                <Icon alignment="top" icon={IconSelection.copyright} size={13} /> Juho Lindemark 2023
            </p>
            <p>Created with</p>
            <ul className={styles.footerListStyle}>
                <li>
                    <a href="https://spring.io/">Spring Boot</a>
                </li>
                <li>
                    <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                    <a href="https://www.linode.com/">Linode</a>
                </li>
                <li>
                    <a href="https://fontawesome.com/">Fontawesome</a>
                </li>
            </ul>
        </div>
    );
};

export { FooterComponent };
