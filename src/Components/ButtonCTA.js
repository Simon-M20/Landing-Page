import React from "react";
import styles from "./ButtonCTA.module.css";

function ButtonCTA({ action }) {
    return (
        <button className={styles.Button__cta}>
            <span>{action}</span>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289C6.90237 5.68342 6.90237 6.31658 7.29289 6.70711L10.5858 10L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L12.7071 10.7071C13.0976 10.3166 13.0976 9.68342 12.7071 9.29289L8.70711 5.29289Z'
                    fill='#A06056'
                />
            </svg>
        </button>
    );
}

export default ButtonCTA;
