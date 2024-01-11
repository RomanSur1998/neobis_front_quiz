import React, { useState } from "react";
import arrow from "../../assets/icons/arrow_left.svg";
import filter from "../../assets/icons/filter_button.svg";
import search from "../../assets/icons/search_icon.svg";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router";
import ModalFilter from "../ModalFilter/ModalFilter";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../redux/slices/ArticlesSlice";
import { useFormik } from "formik";

const SearchBar = ({ navigateLink, isShowSearch, isShowTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowsFilter } = useSelector((state) => state.articles);

  // const formik = useFormik();

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

          {!isShowTitle ? <span>Все статьи</span> : null}
        </div>
        {isShowSearch ? (
          <div className={styles.containerSection}>
            <form className={styles.containerForm}>
              <label htmlFor="search">
                <img src={search} alt="" />
              </label>
              <input
                type="text"
                name="search"
                placeholder="Поиск статей"
                id="search"
                className={styles.formInput}
              />
            </form>
            <button className={styles.filteButton}>
              <img
                src={filter}
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
