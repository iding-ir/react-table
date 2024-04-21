import { setPage, setSize } from "../../redux/features/table/tableSlice";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./SizeSelector.module.scss";

export const SizeSelector = () => {
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPage(1));
    dispatch(setSize(Number(event.target.value)));
  };

  return (
    <>
      <label className={styles.label} htmlFor="size">
        Rows per page:
      </label>

      <select name="size" onChange={onChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </>
  );
};
