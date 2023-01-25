import React, { useContext } from "react";
import { ThemeContext } from "../context/appContext";
import { PageLayout } from "./pageLayout/pageLayout";
import { HeadlineComponent } from "./headline/headlineComponent";
import { Text } from "./text/text";

const Home = (): React.ReactElement => {
    const themeContect = useContext(ThemeContext);
    return (
        <PageLayout activeLink={[true, false, false, false]}>
            <div>
                <HeadlineComponent size={"h1"} text="Headline component" />
                <HeadlineComponent size={"h6"} text="Other headline component!" />
                <Text bold={false} cursive={false} text={"This is text component"} />
                <Text bold={true} cursive={true} text={"This is styled text component"} />
                <Text bold={true} cursive={false} text={`This is the current theme: ${themeContect}`} />
            </div>
        </PageLayout>
    );
};

export { Home };
