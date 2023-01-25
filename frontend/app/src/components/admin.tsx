import React, { useContext } from "react";
import { UserContext } from "../context/appContext";

const Admin = (): React.ReactElement => {
    const context = useContext(UserContext);
    return (
        <div>
            <h1>{context ? "logged in" : "not logged in"}</h1>
            <h2>New ADmin page</h2>
        </div>
    );
};

export { Admin };
