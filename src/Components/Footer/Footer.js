import React from "react";
import NavList from "./NavList";
import ButtonCTA from "../ButtonCTA";

import styles from "./Footer.module.css";
import FooterImg from "../../Assets/Footer_img.jpg";
import Social from "./Social";

import FacebookIcon from "../../Assets/Facebook.svg";
import InstaIcon from "../../Assets/Instagram.svg";
import TwitterIcon from "../../Assets/Twitter.svg";
import LinkedinIcon from "../../Assets/Linkedin.svg";

function Footer() {
    return (
        <footer className={styles.Footer__container}>
            <section className={styles.Footer__boxes}>
                <div className={styles.Footer__logo_container}>
                    <span className={styles.Footer__logo}>antic</span>
                </div>
                <div className={styles.Footer__Nav_container}>
                    <NavList
                        title='Products'
                        list={[
                            "furniture",
                            "decoration",
                            "storage",
                            "baby and child",
                            "connected home",
                        ]}
                    />
                    <NavList
                        title='rooms'
                        list={[
                            "living room",
                            "dining room",
                            "cooked",
                            "bedroom",
                            "bathroom",
                            "office",
                            "laundry",
                            "garage",
                        ]}
                    />
                    <NavList
                        title='services'
                        list={[
                            "click and collect",
                            "conception",
                            "installation",
                            "advices",
                            "gift card",
                        ]}
                    />
                    <NavList
                        title='about'
                        list={["our story", "our stores", "our partners"]}
                    />
                </div>
                <div className={styles.Footer__figure_container}>
                    <span className={styles.Footer__Nav_title}>
                        we respect our planet
                    </span>
                    <figure className={styles.Footer__figure}>
                        <img
                            className={styles.Footer__img}
                            src={FooterImg}
                            alt='Random'
                        />
                        <figcaption className={styles.Footer__figcaption}>
                            We’re taking positive steps to reduce our impact on
                            the planet. For us, that means retailing
                            responsibly.
                        </figcaption>
                        <ButtonCTA action={"learn more"} />
                    </figure>
                </div>
            </section>
            <section className={styles.Footer__Social_container}>
                <div className={styles.Footer__Social}>
                    <Social
                        image={[
                            FacebookIcon,
                            InstaIcon,
                            TwitterIcon,
                            LinkedinIcon,
                        ]}
                    />
                </div>
                <div className={styles.Footer__bottom_container}>
                    <small className={styles.Footer__small}>
                        © 2021 Agence Dnd
                    </small>
                    <span className={styles.Footer__bottom}>
                        <small className={styles.Footer__small}>
                            Privacy policy
                        </small>
                        <small className={styles.Footer__small}>
                            Term of service
                        </small>
                        <small className={styles.Footer__small}>Language</small>
                    </span>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
