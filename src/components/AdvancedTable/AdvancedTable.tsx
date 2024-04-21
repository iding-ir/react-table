import { Items } from "../../types/items";
import { Filter } from "../Filter";
import { Pagination } from "../Pagination";
import { SizeSelector } from "../SizeSelector";
import { Table } from "../Table";
import { Title } from "../Title";
import styles from "./AdvancedTable.module.scss";

export const AdvancedTable = ({ items }: { items: Items[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Title title="Today's groceries" />
        </div>

        <div className={styles.filter}>
          <Filter />
        </div>
      </div>

      <div className={styles.table}>
        <Table items={items} />
      </div>

      <div className={styles.footer}>
        <div className={styles.size}>
          <SizeSelector />
        </div>

        <div className={styles.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};
