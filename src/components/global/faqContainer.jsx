import styles from "./faqContainer.module.css";

export default function FaqContainer(props) {
  return (
    <main className={styles.main}>
      <text className={styles.title}>{props.title}</text>
      <text className={styles.content}>{props.content}</text>
    </main>
  );
}
