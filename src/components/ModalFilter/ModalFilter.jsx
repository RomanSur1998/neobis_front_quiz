import React, { useEffect, useState } from "react";
import { checkboxName } from "../../helpers/checkboxName";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setShowFilter } from "../../redux/slices/ArticlesSlice";
import * as yup from "yup";
import styles from "./ModalFilter.module.css";

const ModalFilter = () => {
  const { filter, isShowsFilter } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      input: null,
    },
    onSubmit: (values) => {
      console.log(values.input, "values");
      dispatch(setFilter(values.input));
      dispatch(setShowFilter(!isShowsFilter));
    },
    validationSchema: yup.object({
      input: yup.string().required(),
    }),
  });

  console.log(filter, "filter");

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Фильтр</span>
        <span className={styles.headerCancel} onClick={formik.handleReset}>
          Cбросить все
        </span>
      </div>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        {checkboxName.map((elem) => (
          <label className={styles.label} key={elem.id}>
            <input
              type="radio"
              className={styles.input}
              name="input"
              onChange={formik.handleChange}
              checked={formik.values.input === elem.title}
              value={elem.title}
            />
            <span>{elem.title}</span>
          </label>
        ))}

        <button
          className={formik.dirty ? styles.formButtonBlack : styles.formButton}
          type="submit"
        >
          Применить
        </button>
      </form>
    </div>
  );
};

export default ModalFilter;
