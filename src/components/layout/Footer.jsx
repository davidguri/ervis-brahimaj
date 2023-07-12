import styles from "./Footer.module.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Ervis Brahimaj Logo Dark.png";

import { Fade } from "react-reveal";

export default function Footer(props) {
  const onEnterLink = ({ currentTarget }) => {
    gsap.to(currentTarget, { textDecoration: "underline" });
  };

  const onLeaveLink = ({ currentTarget }) => {
    gsap.to(currentTarget, { textDecoration: "none" });
  };

  return (
    <Fade bottom>
      <main className={styles.footer}>
        <div className={styles.horizontalStuff}>
          <div className={styles.leftContainer}>
            <div className={styles.logoContainer}>
              <Link to="/">
                <img src={Logo} alt={"logo"} className={styles.footerLogo} />
              </Link>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.linkContainer}>
              <div className={styles.linkColumn}>
                <text className={styles.columnTitle}>Explore</text>
                {/* Point to id's within the same page */}
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Home
                </Link>
                <Link
                  to="/treatments"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Treatmets
                </Link>
                <Link
                  to="/faq"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Faq
                </Link>
              </div>
              <div className={styles.linkColumn}>
                <text className={styles.columnTitle}>Treatments</text>
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Lorem Ipsum
                </Link>
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Ipsum Dolor
                </Link>
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Dolor Sit
                </Link>
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Sit Amet
                </Link>
                <Link
                  to="/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Amet Lorem
                </Link>
              </div>
              <div className={styles.linkColumn}>
                <text className={styles.columnTitle}>Contact</text>
                <a
                  href="tel:355695271172" // change this phone number
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Phone
                </a>
                <a
                  href="https://www.facebook.com/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className={styles.columnLink}
                  onMouseEnter={onEnterLink}
                  onMouseLeave={onLeaveLink}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fade>
  );
}
