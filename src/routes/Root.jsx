import styles from "./Root.module.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useState } from "react";

import Layout from "../components/layout/Layout";
import Hero from "../assets/images/heroImage.png";
import AboutSection from "../components/AboutSection";

export default function Root() { 

    // animation stuff
    const onEnterButton = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.05 });
    };
    
    const onLeaveButton = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };

    // treatment finder function
    const availableTreatmentNames = [
        "lorem",
        'ipsum',
        'dolor',
        'viridis',
        'sit',
        'amet'
    ];

    const [active, setActive] = useState(false);

    const [states] = useState({
        initialState: 0,
        finalState: 20,
    })

    const [padding, setPadding] = useState(states.initialState);

    const toggle = () => {
        setActive(!active)
        if (padding !== states.finalState) {
            setPadding(states.finalState)
        } else {
            setPadding(states.initialState)
        }
    };
    
    const [selected, setSelected] = useState("select issue...");

    const handleItemClick = (item) => {
        setSelected(item);
        toggle();
    };

    const linkTo = "/treatments/" + selected

    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.leftContainer}>
                    <div className={styles.titleContainer}>
                        <text className={styles.title}>DR<span className={styles.smallerText}>.</span> ERVIS<br />BRAHIMAJ</text><br />
                        <text className={styles.subtitle}>Helping patients with<br /><span className={styles.specialText} onClick={toggle}>{selected}</span></text>
                        <div style={{backgroundColor: "rgb(154, 193, 196)", display: `${active}`, borderRadius: 50, padding: `${padding}`, width: "35%"}}>
                            <div className={styles.itemContainer}>
                                {active && availableTreatmentNames.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => handleItemClick(item)}
                                        >
                                            <text className={styles.item}>{item}</text>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.ctaButton} onMouseEnter={onEnterButton} onMouseLeave={onLeaveButton}>
                        <Link to={linkTo} className={styles.ctaLink}>Find Treatment</Link>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <img src={Hero} alt="HeroImg" className={styles.image} />
                </div>
            </main>
            <AboutSection />
        </Layout>
    );
}