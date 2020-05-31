import React from "react";
import Nav from "../components/Nav";
import "../styles/reset.scss";
import styles from "../styles/App.module.scss";

const Layout = ({ children, swapSex, showSex }) => {
  return (
    <>
      <Nav swapSex={swapSex} showSex={showSex} />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
