import styles from "./Filter.module.scss";
import Icon from "./filter.svg?react";

export const Filter = () => {
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />

      <span className={styles.text}>Filter by section</span>
    </div>
  );
};
