import styles from "./SizeSelector.module.scss";

export const SizeSelector = () => {
  return (
    <>
      <label className={styles.label} htmlFor="size">
        Rows per page:
      </label>

      <select name="size">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </>
  );
};
