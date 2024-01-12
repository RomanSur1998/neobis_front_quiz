import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import QuizCard from "../../components/QuizCard/QuizCard";
import NavigationPanel from "../../components/NavigationPanel/NavigationPanel";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/actions/ArticlesAction";
import { fethcQuizes } from "../../redux/actions/QuizAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  const { quizes } = useSelector((state) => state.quizes);
  console.log(quizes, "quizes");

  useEffect(() => {
    dispatch(fetchArticles({ page: 1, elemenNumber: 5 }));
    dispatch(fethcQuizes());
  }, []);
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
            {articles.map((item) => {
              return (
                <SwiperSlide>
                  <ArticlesCard item={item} key={item.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <NavigationPanel navigateBlockName={"Квизы"} navigateLink={"/quiz"} />
        <section className={styles.quizContainer}>
          {quizes.map((item) => {
            return <QuizCard item={item} key={item.name} />;
          })}
        </section>
      </div>
      ;
    </MainLayout>
  );
};

export default MainPage;
