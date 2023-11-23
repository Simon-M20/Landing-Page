import React from "react";

import styles from "./Hero.module.css";
import HeroPic from "../../Assets/Hero_pic.jpg";
import ArrowDownIcon from "../../Assets/Arrow__down.svg";
import ArrowDownWhiteIcon from "../../Assets/Arrow__down-white.svg";
import Header from "../Header/Header";

function Hero() {
    return (
        <section className={styles.hero__section}>
            <section className={styles.hero__container}>
                <Header />
                <div className={styles.hero__div}>
                    <span className={styles.hero__span}>Home Design</span>
                    <h1 className={styles.hero__title}>
                        Elegance for Interiors & Exteriors
                    </h1>
                    <p className={styles.hero__text}>
                        We provide everyone with modern, trendy, quality
                        furniture
                    </p>
                    <picture className={styles.hero__figure_icon}>
                        <source
                            media='(max-width: 600px)'
                            srcset={ArrowDownWhiteIcon}
                        />
                        <img src={ArrowDownIcon} alt='Arrow Down Icon' />
                    </picture>
                </div>
            </section>
            <figure className={styles.hero__figure}>
                <img className={styles.hero__image} src={HeroPic} alt='Lamps' />
            </figure>
        </section>
    );
}

export default Hero;
