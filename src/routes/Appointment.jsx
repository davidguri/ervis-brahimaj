import styles from "./Appointment.module.css";
import Layout from "../components/layout/Layout";
import { useState } from "react";

import { Fade } from "react-reveal";
import { IoCaretDown } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Appointment(props) {
  const [activeMonth, setActiveMonth] = useState(false);
  const [activeTime, setActiveTime] = useState(false);
  const [activeDay, setActiveDay] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(false);

  const toggleTreatment = () => {
    setActiveTreatment(!activeTreatment);
  };

  const toggleMonth = () => {
    setActiveMonth(!activeMonth);
  };

  const toggleDay = () => {
    setActiveDay(!activeDay);
  };

  const toggleTime = () => {
    setActiveTime(!activeTime);
  };

  let availableTreatmentNames = [
    "lorem",
    "ipsum",
    "dolor",
    "viridis",
    "sit",
    "amet",
  ];

  return (
    <Layout>
      <main className={styles.main}>
        <Fade delay={500} duration={1250}>
          <section className={styles.titleContainer}>
            <text className={styles.title}>Appointments</text>
          </section>
        </Fade>
        <section className={styles.content}>
          <div className={styles.form}>
            <div className={styles.formContainer}>
              <div className={styles.formLeftContainer}>
                <text className={styles.formTitle}>Treatment</text>
              </div>
              <div
                className={styles.formRightContainer}
                onClick={toggleTreatment}
              >
                <IconContext.Provider
                  value={{
                    size: 30,
                    color: "rgb(154, 193, 196)",
                  }}
                >
                  <IoCaretDown />
                </IconContext.Provider>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(154, 193, 196)",
                display: `${activeTreatment}`,
                borderRadius: 25,
                width: "75%",
                marginTop: 10,
              }}
            >
              <div className={styles.itemContainer}>
                {activeTreatment &&
                  availableTreatmentNames.map((item, i) => {
                    return (
                      <div key={i}>
                        <text className={styles.item}>{item}</text>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formLeftContainer}>
                <text className={styles.formTitle}>Month</text>
              </div>
              <div className={styles.formRightContainer} onClick={toggleMonth}>
                <IconContext.Provider
                  value={{
                    size: 30,
                    color: "rgb(154, 193, 196)",
                  }}
                >
                  <IoCaretDown />
                </IconContext.Provider>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(154, 193, 196)",
                display: `${activeMonth}`,
                borderRadius: 25,
                width: "75%",
                marginTop: 10,
              }}
            >
              <div className={styles.itemContainer}>
                {activeMonth &&
                  availableTreatmentNames.map((item, i) => {
                    // ne vend te availableTreatmentNames duhen vendosur te dhenat perkatese.
                    return (
                      <div key={i}>
                        <text className={styles.item}>{item}</text>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formLeftContainer}>
                <text className={styles.formTitle}>Day</text>
              </div>
              <div className={styles.formRightContainer} onClick={toggleDay}>
                <IconContext.Provider
                  value={{
                    size: 30,
                    color: "rgb(154, 193, 196)",
                  }}
                >
                  <IoCaretDown />
                </IconContext.Provider>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(154, 193, 196)",
                display: `${activeDay}`,
                borderRadius: 25,
                width: "75%",
                marginTop: 10,
              }}
            >
              <div className={styles.itemContainer}>
                {activeDay &&
                  availableTreatmentNames.map((item, i) => {
                    // ne vend te availableTreatmentNames duhen vendosur te dhenat perkatese.
                    return (
                      <div key={i}>
                        <text className={styles.item}>{item}</text>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formLeftContainer}>
                <text className={styles.formTitle}>Time</text>
              </div>
              <div className={styles.formRightContainer} onClick={toggleTime}>
                <IconContext.Provider
                  value={{
                    size: 30,
                    color: "rgb(154, 193, 196)",
                  }}
                >
                  <IoCaretDown />
                </IconContext.Provider>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(154, 193, 196)",
                display: `${activeTime}`,
                borderRadius: 25,
                padding: `0`,
                width: "75%",
                marginTop: 10,
              }}
            >
              <div className={styles.itemContainer}>
                {activeTime &&
                  availableTreatmentNames.map((item, i) => {
                    // ne vend te availableTreatmentNames duhen vendosur te dhenat perkatese.
                    return (
                      <div key={i}>
                        <text className={styles.item}>{item}</text>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              width="100%"
              height="600px"
              frameborder="0"
              title="map"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
