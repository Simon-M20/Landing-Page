import React from "react";
import styles from "./Header.module.css";

import MesaggeIcon from "../../Assets/Message__icon.svg";
import MenuIcon from "../../Assets/Menu__icon.svg";

function Header() {
    return (
        <header>
            <nav className={styles.header__nav}>
                <ul>
                    <li>antic</li>
                    <li>products</li>
                    <li>rooms</li>
                    <li>services</li>
                    <li>inspirations</li>
                </ul>
            </nav>
            <picture className={styles.header__figure}>
                <source srcset={MenuIcon} media='(max-width: 600px)' />
                <img
                    className={styles.header__image_icon}
                    src={MesaggeIcon}
                    alt='Mesagge Icon'
                />
            </picture>
        </header>
    );
}

export default Header;
