import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./ReadingPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchTextArticles } from "../../redux/actions/ArticlesAction";
import { LinearProgress } from "@mui/material";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { articlesText, isLoadind } = useSelector((state) => state.articles);

  console.log(articlesText, "articlesText");

  useEffect(() => {
    dispatch(fetchTextArticles(id));
  }, []);

  return (
    <MainLayout>
      <div>
        <SearchBar
          navigateLink={"/articles"}
          isShowSearch={false}
          isShowTitle={true}
        />
        {isLoadind ? (
          <LinearProgress />
        ) : (
          <div className={styles.readingContainer}>
            {" "}
            <h3>{articlesText?.name}</h3>
            <div>
              <span>#{articlesText?.genre}</span>: <span>10 min</span>
            </div>
            <p>{articlesText?.description}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ReadingPage;
