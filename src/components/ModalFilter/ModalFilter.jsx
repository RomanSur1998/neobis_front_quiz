import React, { useEffect, useState } from "react";
import { checkboxName } from "../../helpers/checkboxName";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setShowFilter } from "../../redux/slices/ArticlesSlice";
import * as yup from "yup";
import styles from "./ModalFilter.module.css";
import { fetchFilterArticles } from "../../redux/actions/ArticlesAction";

const ModalFilter = () => {
  const { query } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      input: null,
    },
    onSubmit: (values) => {
      dispatch(
        fetchFilterArticles({ searchParam: query, filterParam: values.input })
      );
      dispatch(setFilter(values.input));
    },
    validationSchema: yup.object({
      input: yup.string().required(),
    }),
  });

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
              checked={formik.values.input === elem.value}
              value={elem.value}
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
