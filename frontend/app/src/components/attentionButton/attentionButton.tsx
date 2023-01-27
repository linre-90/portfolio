import { AttentionButtonProps } from "../../types/@types.app";
import styles from "./attentionButton.module.css";

/**
 * Call To Action button. Styled differently from others.
 */
const AttentionButton = ({ children, textSize, action }: AttentionButtonProps): React.ReactElement => {
    return (
        <button onClick={() => action()} style={{ fontSize: `${textSize}rem` }} className={styles.attentionButton}>
            {children}
        </button>
    );
};

export { AttentionButton };
