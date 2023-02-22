import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  return (
    <Link href={props.link}>
      <span className={styles.btn}>{props.children}</span>
    </Link>
  );
}

export default Button;
