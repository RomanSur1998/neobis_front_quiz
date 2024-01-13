import React, { useState } from "react";
import arrow from "../../assets/icons/arrow_left.svg";
import filterIcon from "../../assets/icons/filter_button.svg";
import search from "../../assets/icons/search_icon.svg";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router";
import ModalFilter from "../ModalFilter/ModalFilter";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setShowFilter } from "../../redux/slices/ArticlesSlice";
import { useFormik } from "formik";
import { fetchFilterArticles } from "../../redux/actions/ArticlesAction";

const SearchBar = ({ navigateLink, isShowSearch, isShowTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowsFilter, query, filter } = useSelector(
    (state) => state.articles
  );

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      dispatch(setQuery(values.search));
      dispatch(
        fetchFilterArticles({ searchParam: values.search, filterParam: filter })
      );
    },
  });

  console.log(query, "query");
  function hadleIsShowModalFilter() {
    dispatch(setShowFilter(!isShowsFilter));
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerSection}>
          <button className={styles.navigateArrow}>
            <img
              src={arrow}
              alt="arrow navigate"
              onClick={() => {
                navigate(navigateLink);
              }}
              className={styles.arrowICon}
            />
          </button>

          {!isShowTitle ? <span className={styles.nav}>Все статьи</span> : null}
        </div>
        {isShowSearch ? (
          <div className={styles.containerSection}>
            <form
              className={styles.containerForm}
              onSubmit={formik.handleSubmit}
            >
              <button className={styles.searchButton} type="submit">
                <img src={search} alt="search icon " />
              </button>
              <input
                type="text"
                name="search"
                placeholder="Поиск статей"
                id="search"
                className={styles.formInput}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </form>
            <button className={styles.filteButton}>
              <img
                src={filterIcon}
                alt="filter modal"
                onClick={hadleIsShowModalFilter}
              />
            </button>
          </div>
        ) : (
          <div> </div>
        )}
        {isShowsFilter ? <ModalFilter /> : null}
      </div>
    </>
  );
};

export default SearchBar;
