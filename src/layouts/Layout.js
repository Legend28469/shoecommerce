import React from "react";
import Nav from "../components/Nav";
import "../styles/reset.scss";
import styles from "../styles/App.module.scss";
import Footer from "../components/Footer";

const Layout = ({ children, swapSex, showSex }) => {
  return (
    <>
      <Nav swapSex={swapSex} showSex={showSex} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
