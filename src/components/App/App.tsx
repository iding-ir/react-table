import { AdvancedTable } from "../AdvancedTable";
import styles from "./App.module.scss";
import { groceryItems } from "../../data/items";
import { useEffect } from "react";
import {
  selectCurrentItems,
  setItems,
} from "../../redux/features/table/tableSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const App = () => {
  const dispatch = useAppDispatch();
  const currentItems = useAppSelector(selectCurrentItems);

  // There are  many better ways to handle data fetching and set data in redux store
  // but for the sake of simplicity I am using useEffect to set data in store
  useEffect(() => {
    dispatch(setItems(groceryItems));
  }, []);

  return (
    <div className={styles.container}>
      <AdvancedTable items={currentItems} />
    </div>
  );
};
