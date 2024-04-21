import styles from "./Pagination.module.scss";
import Prev from "./prev.svg?react";
import Next from "./next.svg?react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectPage,
  selectTotalPages,
  setPage,
} from "../../redux/features/table/tableSlice";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  const handlePrev = () => {
    const prevPage = page - 1;

    if (prevPage < 1) {
      return;
    }

    dispatch(setPage(prevPage));
  };

  const handleNext = () => {
    const nextPage = page + 1;

    if (nextPage > totalPages) {
      return;
    }

    dispatch(setPage(nextPage));
  };

  return (
    <div className={styles.container}>
      <span className={styles.page}>1-10 of 30</span>

      <i className={styles.button} onClick={handlePrev}>
        <Prev />
      </i>

      <i className={styles.button} onClick={handleNext}>
        <Next />
      </i>
    </div>
  );
};
