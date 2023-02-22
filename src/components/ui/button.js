import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <span className={styles.btn}>{props.children}</span>
      </Link>
    );
  }

  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
