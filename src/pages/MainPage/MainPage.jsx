import React from "react";
import MainLayout from "../../layouts/MainLayout";
import QuizCard from "../../components/QuizCard/QuizCard";
import NavigationPanel from "../../components/NavigationPanel/NavigationPanel";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <MainLayout>
      <div>
        <NavigationPanel
          navigateBlockName={"Статьи"}
          navigateLink={"/articles"}
        />
        <section>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={16}
            grabCursor={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ArticlesCard  />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesCard />
            </SwiperSlide>
          </Swiper>
        </section>
        <NavigationPanel navigateBlockName={"Квизы"} navigateLink={"/quiz"} />
        <section className={styles.quizContainer}>
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </section>
      </div>
      ;
    </MainLayout>
  );
};

export default MainPage;
