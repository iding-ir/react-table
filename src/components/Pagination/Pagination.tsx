import styles from "./Pagination.module.scss";
import Prev from "./prev.svg?react";
import Next from "./next.svg?react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectFilteredItems,
  selectCanPaginateNext,
  selectCanPaginatePrev,
  selectPage,
  selectSize,
  setPage,
} from "../../redux/features/table/tableSlice";
import { getFirstItemIndex, getlastItemIndex } from "../../methods";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const availableItems = useAppSelector(selectFilteredItems);
  const size = useAppSelector(selectSize);

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
      <span className={styles.page}>
        {`${getFirstItemIndex(page, size)}-${getlastItemIndex(
          page,
          size,
          availableItems
        )} of ${availableItems.length}`}
      </span>

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
