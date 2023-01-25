import React, { useContext } from "react";
import { Apicontext } from "../context/appContext";

const About = (): React.ReactElement => {
    const context = useContext(Apicontext);
    return (
        <div>
            <h1>{context}</h1>
            <h2>New about page</h2>
        </div>
    );
};

export { About };
