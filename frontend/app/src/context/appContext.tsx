import { createContext } from "react";

import { ApiContextType, ThemeContextType, UserContextType } from "../types/@types.app";

export const Apicontext = createContext<ApiContextType>("/contact/api/v1");

export const UserContext = createContext<UserContextType | null>(null);

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => {},
});
