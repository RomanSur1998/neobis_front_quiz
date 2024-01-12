import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ArticlesPreviewCard from "../../components/ArticlesPreviewCard/ArticlesPreviewCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./ArticlesPage.module.css";
import MyPagination from "../../components/Pagination/MyPagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/actions/ArticlesAction";

const ArticlesPage = () => {
  const { articles, query, filter, page } = useSelector(
    (state) => state.articles
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ page: page, elemenNumber: 2 }));
  }, [page]);

  return (
    <MainLayout>
      <section>
        <SearchBar navigateLink={"/"} isShowSearch={true} />
        <div className={styles.containerWrap}>
          {articles.map((item) => {
            return <ArticlesPreviewCard item={item} />;
          })}
        </div>
        <MyPagination />
      </section>
    </MainLayout>
  );
};

export default ArticlesPage;
