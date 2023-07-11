import styles from "./AboutCard.module.css";
import Card from "./Card";

export default function AboutCard(props) {
  return (
    <main className={styles.main}>
      <Card>
        <div className={styles.leftContainer}>
          <img
            src={props.icon}
            alt="f u mississauga foot clinic"
            style={{
              width: "15%",
              backgroundColor: "#fff",
              padding: 18,
              borderRadius: 25,
              borderWidth: 1,
            }}
          />
        </div>
        <div className={styles.rightContainer}>
          <text className={styles.cardTitle}>{props.title}</text>
          <text className={styles.cardContent}>{props.content}</text>
        </div>
      </Card>
    </main>
  );
}
