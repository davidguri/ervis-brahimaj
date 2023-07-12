import styles from "./Treatments.module.css";
import Layout from "../components/layout/Layout";

import AboutCard from "../components/global/AboutCard";

import { Fade } from "react-reveal";

export default function Treatments() {
  const treatments = [
    // Dummy Data
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
    {
      title: "Lorem Ipsum",
      icon: "https://uploads-ssl.webflow.com/6101605c4473e8c4d0aad570/619135e78abd61ff77e8f8a0_Icon_MississaugaFootClinic_Assessment.svg",
      content: "lorem ipsum dolor sit amet",
      link: "/lorem-ipsum",
    },
  ];

  return (
    <Layout>
      <main className={styles.main} id="main">
        <Fade delay={500} duration={1250}>
          <section className={styles.titleContainer}>
            <text className={styles.title}>Treatments</text>
          </section>
        </Fade>
        <section className={styles.content}>
          <div className={styles.itemContainer}>
            {treatments.map((treatments, i) => {
              return (
                <div key={i}>
                  <AboutCard
                    link={treatments.link}
                    icon={treatments.icon}
                    title={treatments.title}
                    content={treatments.content}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
