import { gsap } from "gsap";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Ervis Brahimaj Logo Dark.png"

export default function Layout(props) {

    const onEnterButton = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.05 });
    };
    
    const onLeaveButton = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };

    const onEnterLink = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: "rgb(154, 193, 196)" });
    };

    const onLeaveLink = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: "black" });
    };

    return (
        <main className={styles.main}>
            <section className={styles.nav}>
                <section className={styles.contactBar}>
                    <div className={styles.leftContainer}>
                        <p className={styles.contactText} >Rruga Lorem Ipsum, Tirana, Albania</p>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.numberContainer}>
                            <p className={styles.contactText} >+355 69 420 6969</p>
                        </div>
                        <div className={styles.iconContainer}>
                            Some icons
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
                            <Link to="/about" className={styles.link} onMouseEnter={onEnterLink} onMouseLeave={onLeaveLink}>
                                About
                            </Link>
                            <Link to="/treatments" className={styles.link} onMouseEnter={onEnterLink} onMouseLeave={onLeaveLink}>
                                Treatments
                            </Link>
                            <Link to="/faq" className={styles.link} onMouseEnter={onEnterLink} onMouseLeave={onLeaveLink}>
                                FAQ
                            </Link>
                        </div>
                        <div className={styles.ctaButton} onMouseEnter={onEnterButton} onMouseLeave={onLeaveButton}>
                            <Link to="/appointments" className={styles.ctaLink}>Book an Appointment</Link>
                        </div>
                    </div>
                </section>
            </section>
            <section className={styles.children}>
                {props.children}
            </section>
            <section className={styles.footer}>
                <div className={styles.horizontalStuff}>
                    <div className={styles.leftContainer}>
                        <div className={styles.logoContainer}>
                            <Link to="/">
                                <img src={Logo} alt={"logo"} className={styles.logo} />
                            </Link>
                        </div>
                        <div className={styles.aboutContainer}>
                            About the practice etc...
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.linkContainer}>
                            <div className={styles.linkColumn}>
                                <p className={styles.columnTitle}>Title</p>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                            </div>
                            <div className={styles.linkColumn}>
                                <p className={styles.columnTitle}>Title</p>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                            </div>
                            <div className={styles.linkColumn}>
                                <p className={styles.columnTitle}>Title</p>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                                <Link to="/about" className={styles.columnLink}>About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.legal}>
                Legal Copyright Stuff (c)
            </div>
        </main>
    );
}