import { ReactElement } from "react";
import { ChildrenProps } from "../../types/@types.app";
import styles from "./videoFrame.module.css";

/**
 * Provides responsive container for iframes.
 */
const VideoFrame = ({ children }: ChildrenProps): ReactElement => <div className={styles.videoFrame}>{children}</div>;

export { VideoFrame };
