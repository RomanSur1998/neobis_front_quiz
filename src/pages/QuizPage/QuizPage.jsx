import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import QuizCard from "../../components/QuizCard/QuizCard";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./QuizPage.module.css";
import QuizPreview from "../../components/QuizPreview/QuizPreview";

const QuizPage = () => {
  const slides = [
    { key: 4, content: <QuizPreview /> },
    { key: 3, content: <QuizPreview /> },
    {
      key: 2,
      content: <QuizPreview />,
    },
    {
      key: 1,
      content: <QuizPreview />,
    },
  ];
  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [goToSlide, setGoToSlide] = useState();
  const [cards] = useState(table);

  return (
    <MainLayout>
      {/* <section> */}
      <SearchBar navigateLink={"/"} isShowSearch={false} />
      <div style={{ width: 900, height: "80vh", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
      {/* </section> */}
    </MainLayout>
  );
};

export default QuizPage;
