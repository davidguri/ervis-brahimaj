import styles from "./Faq.module.css";
import Layout from "../components/layout/Layout";

import FaqContainer from "../components/global/faqContainer";

export default function Faq() {
  const faqs = [
    // Dummy Data
    {
      title: "What is chiropractic care?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Do adjustments hurt?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Are adjustments safe?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Can I see a chiropractor if I'm pregnant?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Can I learn to adjust myself?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      title: "Will I be required to remove my clothing at my appointment?",
      content:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  ];

  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.titleContainer}>
          <text className={styles.title}>FAQ</text>
        </section>
        <section className={styles.content}>
          <div className={styles.itemContainer}>
            {faqs.map((faqs, i) => {
              return (
                <div key={i}>
                  <FaqContainer title={faqs.title} content={faqs.content} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
