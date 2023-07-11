import styles from "./TreatmentPage.module.css";
import Layout from "../components/layout/Layout";

export default function TreatmentPage(props) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <text className={styles.title}>Lordosis</text>
        </div>
        <div className={styles.content}>content</div>
      </main>
    </Layout>
  );
}
