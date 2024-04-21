import styles from "./Pagination.module.scss";
import Prev from "./prev.svg?react";
import Next from "./next.svg?react";

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <span className={styles.page}>1-10 of 30</span>

      <Prev />

      <Next />
    </div>
  );
};
