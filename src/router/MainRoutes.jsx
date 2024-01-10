import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import ArticlesPage from "../pages/ArticlesPage/ArticlesPage";
import QuizPage from "../pages/QuizPage/QuizPage";
import ReadingPage from "../pages/ReadingPage/ReadingPage";
import QuizPreviewPage from "../pages/QuizPreviewPage/QuizPreviewPage";
import AnswersPage from "../pages/AnswersPage/AnswersPage";
import FinishQuizPage from "../pages/FinishQuizPage/FinishQuizPage";
// import QuizSliderPage from "../pages/QuizSliderPage/QuizSliderPage";

const MainRoutes = () => {
  const BASE_ROTES_COLLECTION = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/articles",
      element: <ArticlesPage />,
      id: 2,
    },
    {
      link: "/quiz",
      element: <QuizPage />,
      id: 3,
    },
    {
      link: "/reading/:id",
      element: <ReadingPage />,
      id: 4,
    },
    {
      link: "/quizsPreview",
      element: <QuizPreviewPage />,
      id: 5,
    },
    {
      link: "/answers",
      element: <AnswersPage />,
      id: 6,
    },
    {
      link: "/finish",
      element: <FinishQuizPage />,
      id: 7,
    },
  ];

  return (
    <Routes>
      {BASE_ROTES_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem} />;
      })}
    </Routes>
  );
};

export default MainRoutes;
