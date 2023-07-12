import styles from "./AboutCard.module.css";
import Card from "./Card";

import { Link } from "react-router-dom";

export default function AboutCard(props) {
  return (
    <Link to={props.link} className={styles.wrapper}>
      <Card>
        <div className={styles.cardContent}>
          <img
            src={props.icon}
            alt="icon"
            style={{
              width: "12%",
              backgroundColor: "#fff",
              padding: 21,
              borderRadius: 20,
              borderWidth: 0.1,
              borderColor: "transparent",
              marginRight: 15,
            }}
          />
          <div className={styles.rightContainer}>
            <text className={styles.title}>{props.title}</text>
            <text className={styles.content}>{props.content}</text>
          </div>
        </div>
      </Card>
    </Link>
  );
}
