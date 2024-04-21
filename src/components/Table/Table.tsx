import { Item } from "../../types/items";
import styles from "./Table.module.scss";

export const Table = ({ items }: { items: Item[] }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Price</th>
            <th>Weight</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.section}</td>
              <td>{item.price.toFixed(2)} €</td>
              <td>{item.weight * 1000}g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
