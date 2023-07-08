import styles from "./AboutSection.module.css";
import Card from "./global/Card";

export default function AboutSection() {
  return (
    <main className={styles.main}>
      <section className={styles.treatmentsSection}>
        <div className={styles.titleContainer}>
          <text className={styles.title}>What we treat</text>
          <text className={styles.paragraph}>From lorem to ipsum, Dr. Ervis Brahimaj can help you with countless different issues, helping you live a healthier and happier lifestyle! If you can't find what you're looking for here, you can contact the doctor personaly by <span className={styles.socials}>Phone Number</span> or <span className={styles.socials}>Email</span>. We sincerely hope we could assist you!</text>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
            <div className={styles.column}>
              <Card>
                Bonjour
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}