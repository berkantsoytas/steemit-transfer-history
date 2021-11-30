import History from "./History";
import styles from "./HistoryList.module.css";

const HistoryList = ({history}) => {
  console.log(history)
  return (
    <div className={styles.content}>
      <table>
        {
          history && history.map((value, index) => {
            return <History item={value[1].op} key={index} />
          })
        }
      </table>
    </div>
  );
};

export default HistoryList;
