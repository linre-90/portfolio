import { AttentionButtonProps } from "../../types/@types.app";
import styles from "./attentionButton.module.css";

const AttentionButton = ({ children, textSize }: AttentionButtonProps): React.ReactElement => {
    return (
        <button style={{ fontSize: `${textSize}rem` }} className={styles.attentionButton}>
            {children}
        </button>
    );
};

export { AttentionButton };
