import styles from "./TreatmentPage.module.css";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

import Card from "../components/global/Card";

import descriptionImage from "../assets/images/spinal-deformity.jpg";

import { IoDocumentText, IoStopwatch, IoMedkit } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function TreatmentPage(props) {
  // from the db we need: image, title, description, treatment/adjustment description, what it treats, duration and 3 related issues/adjustments.

  return (
    <Layout>
      <main className={styles.main}>
        <Fade delay={500} duration={1250}>
          <div className={styles.titleContainer}>
            <text className={styles.title}>Spinal Issues</text>
          </div>
        </Fade>
        <section className={styles.content}>
          <section className={styles.descriptionContainer}>
            <Fade left delay={500} duration={1250}>
              <text className={styles.description}>
                [Description_of_Issue] lorem ipsum dolor sit amet lorem ipsum
                dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                amet lorem ipsum dolor sit amet.
              </text>
            </Fade>
            <Fade right delay={700} duration={1250}>
              <div className={styles.imageContainer}>
                <img
                  src={descriptionImage}
                  alt="descriptionImage"
                  className={styles.descriptionImage}
                />
              </div>
            </Fade>
          </section>
          <section className={styles.detailsContainer}>
            <Fade bottom delay={200} duration={1250}>
              <Card>
                <div className={styles.card}>
                  <div className={styles.verticalContainer}>
                    <text className={styles.cardTitle}>Title_of_Treatment</text>
                  </div>
                  <div className={styles.horizontalContainer}>
                    <div className={styles.leftContainer}>
                      <div className={styles.cardTitleContainer}>
                        <div className={styles.iconContainer}>
                          <IconContext.Provider
                            value={{
                              color: "rgb(154, 193, 196)",
                              size: 21,
                              style: { padding: 0 },
                            }}
                          >
                            <IoDocumentText />
                          </IconContext.Provider>
                        </div>
                        {/* These icons will be the same for all treatments */}
                        <text className={styles.cardSubtitle}>Description</text>
                      </div>
                      <text className={styles.cardDescription}>
                        [Description_of_Treatment] Lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                      </text>
                    </div>
                    <div className={styles.middleContainer}>
                      <div className={styles.cardTitleContainer}>
                        <div className={styles.iconContainer}>
                          <IconContext.Provider
                            value={{
                              color: "rgb(154, 193, 196)",
                              size: 21,
                              style: { padding: 0 },
                            }}
                          >
                            <IoMedkit />
                          </IconContext.Provider>
                        </div>
                        {/* These icons will be the same for all treatments */}
                        <text className={styles.cardSubtitle}>
                          What it Treats
                        </text>
                      </div>
                      <text className={styles.cardDescription}>
                        [What_it_Treats_Text] Lorem ipsum dolor sit amet lorem
                        ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                        ipsum dolor sit amet lorem ipsum dolor sit amet.
                      </text>
                    </div>
                    <div className={styles.rightContainer}>
                      <div className={styles.cardTitleContainer}>
                        <div className={styles.iconContainer}>
                          <IconContext.Provider
                            value={{
                              color: "rgb(154, 193, 196)",
                              size: 21,
                              style: { padding: 0 },
                            }}
                          >
                            <IoStopwatch />
                          </IconContext.Provider>
                        </div>
                        {/* These icons will be the same for all treatments */}
                        <text className={styles.cardSubtitle}>Duration</text>
                      </div>
                      <text className={styles.cardDescription}>30 minutes</text>
                    </div>
                  </div>
                </div>
              </Card>
            </Fade>
            <div className={styles.relatedLinks}>
              <Fade left delay={200}>
                <i className={styles.relatedText}>Related Treatments: </i>
              </Fade>
              <div className={styles.linkContainer}>
                <Fade delay={400}>
                  <Link className={styles.relatedLink}>
                    <text className={styles.linkText}>Related_Link_1/3</text>
                  </Link>
                </Fade>
              </div>
              <div className={styles.linkContainer}>
                <Fade delay={600}>
                  <Link className={styles.relatedLink}>
                    <text className={styles.linkText}>Related_Link_2/3</text>
                  </Link>
                </Fade>
              </div>
              <div className={styles.linkContainer}>
                <Fade delay={800}>
                  <Link className={styles.relatedLink}>
                    <text className={styles.linkText}>Related_Link_3/3</text>
                  </Link>
                </Fade>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
