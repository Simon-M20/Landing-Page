import React from "react";
import styles from "./Footer.module.css";

function NavList({ title, list }) {
    return (
        <nav className={styles.Footer__Nav}>
            <span className={styles.Footer__Nav_title}>{title}</span>
            <ul>
                {list?.map((value) => {
                    return (
                        <li key={value} className={styles.Footer__Nav_list}>
                            {value}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavList;
