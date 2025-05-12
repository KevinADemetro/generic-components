import styles from "./TableBody.module.css";
function TableBody({ children }) {
  return <tbody className={styles.tableBody}>{children}</tbody>;
}

export default TableBody;
