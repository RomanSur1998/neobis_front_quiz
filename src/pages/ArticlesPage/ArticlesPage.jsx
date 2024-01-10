import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ArticlesPreviewCard from "../../components/ArticlesPreviewCard/ArticlesPreviewCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./ArticlesPage.module.css";
import MyPagination from "../../components/Pagination/MyPagination";

const ArticlesPage = () => {
  return (
    <MainLayout>
      <section>
        <SearchBar navigateLink={"/"} isShowSearch={true} />
        <div className={styles.containerWrap}>
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
          <ArticlesPreviewCard />
        </div>
        <MyPagination />
      </section>
    </MainLayout>
  );
};

export default ArticlesPage;
