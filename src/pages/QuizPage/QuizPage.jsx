import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import QuizPreview from "../../components/QuizPreview/QuizPreview";
import { useDispatch, useSelector } from "react-redux";
import { fethcQuizes } from "../../redux/actions/QuizAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./QuizPage.module.css";
import { LinearProgress } from "@mui/material";

const QuizPage = () => {
  const { quizes, isLoading } = useSelector((state) => state.quizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethcQuizes());
  }, []);

  return (
    <MainLayout>
      <SearchBar navigateLink={"/"} isShowSearch={false} />
      <div className={styles.cardContainer}>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#00",
          }}
        >
          {isLoading ? (
            <div>
              <LinearProgress />
            </div>
          ) : (
            <>
              {quizes.map((item) => {
                return (
                  <SwiperSlide>
                    <QuizPreview
                      key={item.imageUrl}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      item={item}
                      colorId={item.colorId}
                    />
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      </div>
    </MainLayout>
  );
};

export default QuizPage;
