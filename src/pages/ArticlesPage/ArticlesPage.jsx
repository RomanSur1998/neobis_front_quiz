import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ArticlesPreviewCard from "../../components/ArticlesPreviewCard/ArticlesPreviewCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./ArticlesPage.module.css";
import MyPagination from "../../components/Pagination/MyPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/actions/ArticlesAction";
import { LinearProgress } from "@mui/material";

const ArticlesPage = () => {
  const { articles, isLoadind, page } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ page: page, elemenNumber: 2 }));
  }, [page]);

  return (
    <MainLayout>
      <section>
        <SearchBar navigateLink={"/"} isShowSearch={true} />
        {isLoadind ? (
          <LinearProgress />
        ) : (
          <div className={styles.containerWrap}>
            {articles?.map((item, index) => {
              return <ArticlesPreviewCard item={item} key={index} />;
            })}
          </div>
        )}

        <MyPagination lengthPagination={articles[0]?.size} />
      </section>
    </MainLayout>
  );
};

export default ArticlesPage;
