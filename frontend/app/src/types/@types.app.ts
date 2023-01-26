export type ApiContextType = string;

export type UserContextType = string | null;

export type ThemeType = "dark" | "light";
export type ThemeContextType = { theme: ThemeType; setTheme: (arg1: ThemeType) => void };

export interface ChildrenProps {
    children: React.ReactNode;
}

export interface HeadlineComponentProps {
    text: string;
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface NavbarProps {
    activeLink: boolean[];
}

export interface PageLayoutProps extends NavbarProps, ChildrenProps {}

export interface TextProps {
    text: string;
    bold: boolean;
    cursive: boolean;
}

export interface IconProps {
    size: number;
    icon: string;
    alignment: "baseline" | "top" | "middle" | "bottom" | "sub" | "text-top" | "";
}

export interface NavbarButtonProps {
    text: string;
    url: string;
    active: boolean;
}

export interface AttentionButtonProps extends ChildrenProps {
    textSize: number;
}
