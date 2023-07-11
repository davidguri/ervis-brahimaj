import styles from "./AboutSection.module.css";
import AboutCard from "./global/AboutCard";

export default function AboutSection() {
  const treatments = [
    // Dummy Data
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.treatmentsSection}>
        <div className={styles.titleContainer}>
          <text className={styles.title}>What we treat</text>
          <text className={styles.paragraph}>
            From lorem to ipsum, Dr. Ervis Brahimaj can help you with countless
            different issues, helping you live a healthier and happier
            lifestyle! If you can't find what you're looking for here, you can
            contact the doctor personaly by{" "}
            <span className={styles.socials}>Phone Number</span> or{" "}
            <span className={styles.socials}>Email</span>. We sincerely hope we
            could assist you!
          </text>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.itemContainer}>
            {treatments.map((treatments, i) => {
              return (
                <div key={i}>
                  <AboutCard
                    icon={treatments.icon}
                    title={treatments.title}
                    content={treatments.content}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
