import styles from "./Card.module.css";
const Card = (props) => {
  return <div className={styles.main}>{props.children}</div>;
};

export default Card;
