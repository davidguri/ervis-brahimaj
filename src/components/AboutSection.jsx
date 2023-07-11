import styles from "./AboutSection.module.css";
import AboutCard from "./global/AboutCard";

import AboutImage from "../assets/images/aboutImage.jpg";
import DoctorImage from "../assets/images/doctorImage.jpg";

import { Link } from "react-router-dom";

import { IoArrowForward } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function AboutSection() {
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
  ];

  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        <div className={styles.leftContainer}>
          <img src={AboutImage} alt={"about"} className={styles.image} />
        </div>
        <div className={styles.rightContainer}>
          <text className={styles.title}>About Our Practice</text>
          <text className={styles.paragraph}>
            At our clinic, you get the finest treatment for your back, because
            you deserve it! Our passion is bringing joy to our patients, one
            problem at a time. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. Lorem ipsum dolor lorem ipsume
            dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Lorem
            ipsum dolor.
          </text>
        </div>
      </section>
      <section className={styles.doctorSection}>
        <div className={styles.leftDoctorContainer}>
          <text className={styles.title}>Our Doctor</text>
          <text className={styles.paragraph}>
            At our clinic, you get the finest treatment for your back, because
            you deserve it! Our passion is bringing joy to our patients, one
            problem at a time. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. Lorem ipsum dolor lorem ipsume
            dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Lorem
            ipsum dolor.
          </text>
        </div>
        <div className={styles.rightDoctorContainer}>
          <img src={DoctorImage} alt={"doctor"} className={styles.image} />
        </div>
      </section>
      <section className={styles.treatmentsSection}>
        <div className={styles.cardContainer}>
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
            <Link to={"/treatments/"}>
              <div className={styles.cardContent}>
                <text className={styles.cardTitle}>
                  And More!
                  <IconContext.Provider
                    value={{
                      sizes: 50,
                      color: "#000000",
                      style: {
                        padding: 0,
                        margin: 0,
                        paddingLeft: "15px",
                      },
                    }}
                  >
                    <IoArrowForward />
                  </IconContext.Provider>
                </text>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <text className={styles.title}>What we treat</text>
          <text className={styles.paragraph}>
            From lorem to ipsum, Dr. Ervis Brahimaj can help you with countless
            different issues, helping you live a healthier and happier
            lifestyle! If you can't find what you're looking for here, you can
            contact the doctor personaly by
            <span className={styles.socials}> Phone Number</span> or
            <span className={styles.socials}> Email</span>. We sincerely hope we
            could assist you!
          </text>
        </div>
      </section>
    </main>
  );
}
