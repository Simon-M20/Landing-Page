import React from "react";
import styles from "./Slides.module.css";

function Slides({ image }) {
    return (
        <figure className={styles.Slides__figure}>
            <img className={styles.Slides__image} src={image} alt='Random' />
        </figure>
    );
}

export default Slides;
