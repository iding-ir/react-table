import {
  selectSections,
  setFilter,
} from "../../redux/features/table/tableSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Filter.module.scss";
import Icon from "./filter.svg?react";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const sections = useAppSelector(selectSections);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />

      <select name="filter" onChange={onChange}>
        <option value="" disabled selected>
          Filter by section
        </option>

        <option value="">All</option>

        {sections.map((section) => (
          <option key={section} value={section}>
            {section}
          </option>
        ))}
      </select>
    </div>
  );
};
