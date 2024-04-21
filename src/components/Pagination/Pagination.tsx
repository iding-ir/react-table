import styles from "./Pagination.module.scss";
import Prev from "./prev.svg?react";
import Next from "./next.svg?react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCanPaginateNext,
  selectCanPaginatePrev,
  selectPage,
  setPage,
} from "../../redux/features/table/tableSlice";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const canPaginatePrev = useAppSelector(selectCanPaginatePrev);
  const canPaginateNext = useAppSelector(selectCanPaginateNext);

  const handlePrev = () => {
    if (!canPaginatePrev) {
      return;
    }

    dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    if (!canPaginateNext) {
      return;
    }

    dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.container}>
      <span className={styles.page}>1-10 of 30</span>

      <button
        className={styles.button}
        disabled={!canPaginatePrev}
        onClick={handlePrev}
      >
        <Prev />
      </button>

      <button
        className={styles.button}
        disabled={!canPaginateNext}
        onClick={handleNext}
      >
        <Next />
      </button>
    </div>
  );
};
