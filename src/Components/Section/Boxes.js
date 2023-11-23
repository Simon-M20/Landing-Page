import React from "react";
import styles from "./Boxes.module.css";

function Boxes({ title, desc }) {
    return (
        <div>
            <h3 className={styles.Boxes__subtitles}>{title}</h3>
            <p className={styles.Boxes__subtext}>{desc}</p>
        </div>
    );
}

export default Boxes;
