import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slides.module.css";

import Photo1 from "../../Assets/Slide_1.jpg";
import Photo2 from "../../Assets/Slide_2.jpg";
import Photo3 from "../../Assets/Slide_3.jpg";
import Photo4 from "../../Assets/Slide_4.jpg";
import Photo5 from "../../Assets/Slide_5.jpg";
import Photo6 from "../../Assets/Slide_6.jpg";

// Import Swiper styles
import "swiper/css";
import Slides from "./Slides";

function Carousel() {
    return (
        <div className={styles.Slides__container}>
            <Swiper
                spaceBetween={20}
                slidesPerView={6}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
                    <Slides image={Photo1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo4} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo6} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo4} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slides image={Photo6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;
