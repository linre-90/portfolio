import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Apicontext, UserContext, ThemeContext } from "./context/appContext";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Portfolio } from "./components/portfolio";
import { Admin } from "./components/admin";
import { useState, useEffect, useRef } from "react";
import { UserContextType, ThemeContextType, ThemeType } from "./types/@types.app";

import "./theme.css";

/**
 * App pages and routing.
 */
function App() {
    const setTheme = (newTheme: ThemeType): void => {
        setThemeState({ ...themeState, theme: newTheme });
    };

    const [user, setUser] = useState<UserContextType>(null);
    const [themeState, setThemeState] = useState<ThemeContextType>({ theme: "dark", setTheme: (newTheme) => setTheme(newTheme) });

    useEffect(() => {
        // Todo try load jsession id from storage
        setUser(null);
    }, []);

    // Reference themed div element
    const theme = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hack correct style for background from div element...
        if (theme.current !== null) {
            document.getElementsByTagName("body")[0].style.backgroundColor = getComputedStyle(theme.current).getPropertyValue("--main-bg-color");
        }
    }, [themeState.theme]);

    return (
        <ThemeContext.Provider value={themeState}>
            <div ref={theme} className={themeState.theme}>
                <Apicontext.Provider value={"/contact/api/v1"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/admin"
                            element={
                                <UserContext.Provider value={user}>
                                    <Admin />
                                </UserContext.Provider>
                            }
                        />
                    </Routes>
                </Apicontext.Provider>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
