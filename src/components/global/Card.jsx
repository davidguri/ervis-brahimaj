import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <main className={[styles.main]}>{props.children}</main>
  );
}