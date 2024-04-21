import { AdvancedTable } from "../AdvancedTable";
import styles from "./App.module.scss";
import { groceryItems } from "../../data/items";

export const App = () => {
  return (
    <div className={styles.container}>
      <AdvancedTable items={groceryItems} />
    </div>
  );
};
