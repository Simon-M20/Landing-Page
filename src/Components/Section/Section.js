import React from "react";
import styles from "./Section.module.css";
import ButtonCTA from "../ButtonCTA";
import Boxes from "./Boxes";

function Section() {
    return (
        <section className={styles.Section__container}>
            <div className={styles.Section__cta}>
                <h2 className={styles.Section__subtitle}>
                    We stay by your side to design your projects
                </h2>
                <ButtonCTA action='Find out more' />
            </div>
            <div className={styles.Section__box}>
                <Boxes
                    title='Our Advices'
                    desc='What if you took advantage of this rather special period
                        to rethink your interior? You spend more time at home so
                        you might as well feel good there.'
                />
                <Boxes
                    title='Click and Collect'
                    desc='Adapted and contactless. Free from € 200 of purchases in
                        stores offering the service.'
                />
                <Boxes
                    title='Conception Service'
                    desc='Personalized service with an expert advisor for your
                        interior and exterior decoration or layout projects.'
                />
                <Boxes
                    title='Installation Service'
                    desc='Our furniture packaged in flat packs are designed for
                        easy assembly. But you can call on our partner.'
                />
            </div>
        </section>
    );
}

export default Section;
