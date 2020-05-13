import React from "react";
import Nav from "../components/Nav";
import "../styles/reset.scss";
import styles from "../styles/App.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
