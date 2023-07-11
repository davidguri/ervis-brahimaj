import { gsap } from "gsap";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

import {
  IoLocationSharp,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoCall,
} from "react-icons/io5";
import { IconContext } from "react-icons";

import Logo from "../../assets/images/Ervis Brahimaj Logo Dark.png";

export default function Layout(props) {
  const onEnterButton = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeaveButton = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const onEnterLink = ({ currentTarget }) => {
    gsap.to(currentTarget, { textDecoration: "underline" });
  };

  const onLeaveLink = ({ currentTarget }) => {
    gsap.to(currentTarget, { textDecoration: "none" });
  };

  let location =
    "https://www.google.com/maps/place/Rruga+Astrit+Sulejman+Balluku+5-1,+Tirana,+Albania/@41.3227493,19.8081112,89m/data=!3m1!1e3!4m20!1m13!4m12!1m3!2m2!1d19.8078793!2d41.3227347!1m6!1m2!1s0x135031430f92f62f:0xb931c6429bd3161e!2sCSSP+-+Berlin+Center+for+Integrative+Mediation+-+Albania+branch,+8RF5%2B452,+Rruga+Astrit+Sulejman+Balluku,+Tirana,+Albania!2m2!1d19.8078891!2d41.3227627!3e2!3m5!1s0x135031008e99a637:0x6f3a29f91ebe4439!8m2!3d41.3226011!4d19.8078806!16s%2Fg%2F11g63vxyc5?entry=ttu";

  return (
    <main className={styles.main}>
      <section className={styles.nav}>
        <section className={styles.contactBar}>
          <div className={styles.leftContainer}>
            <a href={location} className={styles.leftContainer}>
              <IconContext.Provider value={{ size: 20, color: "#000000" }}>
                <IoLocationSharp />
              </IconContext.Provider>
              <p className={styles.contactText}>
                Rruga Lorem Ipsum, Tirana, Albania
              </p>
            </a>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.iconContainer}>
              <IconContext.Provider
                value={{
                  size: 20,
                  style: { paddingRight: 12 },
                  color: "#000000",
                }}
              >
                <a href="https://instagram.com/">
                  <IoLogoInstagram />
                </a>
                <a href="https://facebook.com/">
                  <IoLogoFacebook />
                </a>
                <a href="https://linkedin.com/">
                  <IoLogoLinkedin />
                </a>
              </IconContext.Provider>
            </div>
            <div className={styles.numberContainer}>
              <a href="tel:+355695271172" className={styles.numberContainer}>
                <IconContext.Provider value={{ size: 20, color: "#000000" }}>
                  <IoCall />
                </IconContext.Provider>
                <p className={styles.contactText}>+355 69 420 6969</p>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.navigationBar}>
          <div className={styles.leftContainer}>
            <Link to="/">
              <img src={Logo} alt={"logo"} className={styles.logo} />
            </Link>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.linkContainer}>
              <Link
                to="/treatments"
                className={styles.link}
                onMouseEnter={onEnterLink}
                onMouseLeave={onLeaveLink}
              >
                Treatments
              </Link>
              <Link
                to="/faq"
                className={styles.link}
                onMouseEnter={onEnterLink}
                onMouseLeave={onLeaveLink}
              >
                FAQ
              </Link>
            </div>
            <div
              className={styles.ctaButton}
              onMouseEnter={onEnterButton}
              onMouseLeave={onLeaveButton}
            >
              <Link to="/appointments" className={styles.ctaLink}>
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.children}>{props.children}</section>
      <section className={styles.footer}>
        <div className={styles.horizontalStuff}>
          <div className={styles.leftContainer}>
            <div className={styles.logoContainer}>
              <Link to="/">
                <img src={Logo} alt={"logo"} className={styles.logo} />
              </Link>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.linkContainer}>
              <div className={styles.linkColumn}>
                <p className={styles.columnTitle}>Title</p>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
              </div>
              <div className={styles.linkColumn}>
                <p className={styles.columnTitle}>Title</p>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
              </div>
              <div className={styles.linkColumn}>
                <p className={styles.columnTitle}>Title</p>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.legal}>
        <text className={styles.legalText}>Legal Copyright Stuff &#169;</text>
      </div>
      <style></style>
    </main>
  );
}
