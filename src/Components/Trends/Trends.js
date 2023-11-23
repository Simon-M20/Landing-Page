import React from "react";
import ButtonCTA from "../ButtonCTA";
import styles from "./Trends.module.css";
import Carousel from "./Carousel";
import ArrowLeft from "../../Assets/Arrow__left.svg";
import ArrowRight from "../../Assets/Arrow__right.svg";

function Trends() {
    return (
        <>
            <section className={styles.Trends__container}>
                <div className={styles.Trends__cta}>
                    <div>
                        <h3 className={styles.Trends__title}>
                            Be aware of the latest trends
                        </h3>
                        <p className={styles.Trends__text}>
                            Stay informed of new trends, but also of our various
                            offers.
                        </p>
                        <ButtonCTA action='Learn more' />
                    </div>
                    <div>
                        <form action='' className={styles.Trends__form}>
                            <input
                                required
                                pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
                                autocomplete='off'
                                className={styles.Trends__input}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='email@address.com'
                            />
                            <label className={styles.Trends__label} for='email'>
                                subscribe
                            </label>
                        </form>
                    </div>
                </div>
            </section>
            <section className={styles.Trends__bottom_container}>
                <Carousel />
                <section className={styles.Trends__bottom}>
                    <div className={styles.Trends__inspiration}>
                        <h4 className={styles.Trends__inspiration_title}>
                            Inspirations
                        </h4>
                        <p className={styles.Trends__inspiration_text}>
                            Our experts are keen to stay on top of trends in
                            order to offer you new inspirations for your
                            interior and exterior every day. Remember that to
                            inspire you we have to inspire ourselves and we want
                            to share that with you.
                        </p>
                    </div>
                    <div className={styles.Trends__pagination}>
                        <div className={styles.Trends__pagination_div}>
                            <figure className={styles.Trends__pagination_icons}>
                                <img src={ArrowLeft} alt='Arrow left icon' />
                            </figure>
                            <figure className={styles.Trends__pagination_icons}>
                                <img src={ArrowRight} alt='Arrow right icon' />
                            </figure>
                        </div>
                        <div>
                            <span className={styles.Trends__pagination_number}>
                                1 / 5
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Trends;
