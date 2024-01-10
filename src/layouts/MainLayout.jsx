import React from "react";
import mainLogo from "../assets/icons/main_logo.svg";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.logoBlock}>
        <img src={mainLogo} alt="" />
      </header>
      <section className={styles.contentBlock}>{children}</section>
    </div>
  );
};

export default MainLayout;
