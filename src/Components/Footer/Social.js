import React from "react";
import styles from "./Footer.module.css";

function Social({ image }) {
    return (
        <figure className={styles.Footer__Social_figure}>
            {image?.map((pic) => {
                return (
                    <img
                        key={new Date().getUTCMilliseconds()}
                        src={pic}
                        alt='Social Icon'
                    />
                );
            })}
        </figure>
    );
}

export default Social;
