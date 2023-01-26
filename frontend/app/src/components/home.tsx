import React, { useCallback } from "react";
import { PageLayout } from "./pageLayout/pageLayout";
import { End } from "./endLayout/endLayout";
import styles from "./home.module.css";
import { AttentionButton } from "./attentionButton/attentionButton";
import { Icon, IconSelection } from "./icons/icons";
import Particles from "react-particles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { getParticleSetup } from "../particleSetup";

const Home = (): React.ReactElement => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

    return (
        <PageLayout activeLink={[true, false, false, false]}>
            <div className={styles.particleWrapper}>
                <Particles id="tsparticles" options={getParticleSetup()} init={particlesInit} loaded={particlesLoaded} />
            </div>
            <div>
                <h1 className={styles.customHeadline1}>
                    <span>Looking for</span> <u>your next</u> <span>software developer?</span>
                </h1>
                <End>
                    <h3 className={styles.customHeadline2}>
                        <u>Look no more!</u>
                    </h3>
                </End>
                <AttentionButton textSize={2}>
                    <span>
                        Checkout! <Icon icon={IconSelection.arrowright} size={30} alignment="top" />
                    </span>
                </AttentionButton>
            </div>
        </PageLayout>
    );
};

export { Home };
