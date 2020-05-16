import React from "react";
import Nav from "../components/Nav";
import "../styles/reset.scss";
import styles from "../styles/App.module.scss";

const Layout = ({ children, swapSex }) => {
  return (
    <div className={styles.container}>
      <Nav swapSex={swapSex} />
      {children}
    </div>
  );
};

export default Layout;
