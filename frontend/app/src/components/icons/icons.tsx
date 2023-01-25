import React from "react";
import { IconProps } from "../../types/@types.app";
import { allIcons } from "../../icons/icons";

// These values are mapped from ../../icons/icons.jsx.
// If icons.jsx contains svg tags entry with key copyright.
// Enum provides that with copyright = "copyright".
enum IconSelection {
    copyright = "copyright",
    dark = "dark",
    light = "light",
}

/**
 * Used to render various icons inside app.
 */
const Icon = ({ size, icon, alignment }: IconProps): React.ReactElement => {
    const styles = {
        width: size,
        height: size,
        verticalAlign: alignment,
        display: "inline-block",
    };

    return <span style={styles}>{allIcons[icon as keyof typeof allIcons]}</span>;
};
export { Icon, IconSelection };
