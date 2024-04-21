import styles from "./Title.module.scss";

export const Title = ({ title }: { title: string }) => {
  return <div className={styles.container}>{title}</div>;
};
