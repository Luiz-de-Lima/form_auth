import React from "react";
import styles from "./title.module.css"; // CSS Module para o título

const Title = ({ text }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.titleLine}></div> 
    </div>
  );
};

export default Title;
