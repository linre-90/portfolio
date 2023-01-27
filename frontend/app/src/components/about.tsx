import React from "react";
import { HeadlineComponent } from "./headline/headlineComponent";
import { PageLayout } from "./pageLayout/pageLayout";
import { Text } from "./text/text";
import { ColumnLayout } from "./columnLayout/columnLayout";
import { Image, ImageHidden, ImageStyles } from "./imageComponent/image";
import questionMark from "../images/questionMark2K.webp";
import excMark from "../images/exmark.webp";
import { VideoFrame } from "./videoFrame/videoFrame";

/**
 * Creates a about page.
 * @returns
 */
const About = (): React.ReactElement => {
    return (
        <PageLayout activeLink={[false, true, false, false]}>
            <HeadlineComponent size="h1" text="Tired of reading? Here is the cv video!" />
            <Text bold={false} cursive={true}>
                <u>
                    <small>Warning! Contains flashing lights!</small>
                </u>
            </Text>
            <VideoFrame>
                <iframe
                    src="https://www.youtube.com/embed/1d8ALlXSVBY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </VideoFrame>
            <HeadlineComponent size="h1" text="About me" />
            <ColumnLayout columnCount={2}>
                <Image source={questionMark} altText="Question mark" style={ImageStyles.maxSizeResponsive} hiddenOn={ImageHidden.none} />
                <Text bold={false} cursive={false}>
                    <p>
                        I am Juho Fullstack and a game developer from Finland. I have taken an interest in programming for quite a while now. Computers have
                        always been my passion. It started as a child by modding games or just goofing around with the attitude 'hey what this does?'...
                    </p>
                    <p>
                        I found my true calling in computer science while I was studying CNC machining. We practiced writing instructions on those machines and
                        I discovered it was awesome. Not the machining part, but the programming part. One thing led to another, and suddenly I was on a
                        beginner's Java course at University of Helsinki. After that, I started doing courses at Udemy on web development, React and Android
                        applications.
                    </p>
                </Text>
                <Text bold={false} cursive={false}>
                    <p>
                        Later, I discovered a program called Amkoodari in XAMK, which is a University of applied science located in southeast Finland. I
                        completed about 60 credits there. Studies focused mainly on the web, AI and databases. We also completed some graphical design courses
                        and a "lean-thinking" course.
                    </p>
                    <p>
                        After an unfortunate series of events, I decided to take a break from work and study game development full time. So, I will graduate
                        from Vuoksi 2023, a vocational school in western Finland, and be a real software developer. I have also continued to find and complete
                        higher education courses about software development and I have completed a course called Full stack Open. It was created by the
                        University of Helsinki and focuses on fullstack products.We used MERN stack. The course also had sections for GraphQl, Typescript,
                        Containers and React native.
                    </p>
                </Text>
                <Image source={excMark} altText="Question mark" style={ImageStyles.maxSizeResponsive} hiddenOn={ImageHidden.sm} />
            </ColumnLayout>
        </PageLayout>
    );
};

export { About };
