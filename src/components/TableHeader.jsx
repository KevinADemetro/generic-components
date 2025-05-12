import styles from "./TableHeader.module.css";
function TableHeader({ children }) {
  return <thead className={styles.tableHeader}>{children}</thead>;
}

export default TableHeader;
