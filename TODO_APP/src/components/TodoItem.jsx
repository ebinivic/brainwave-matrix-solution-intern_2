import styles from "./TodoItem.module.css";
export default function TodoItem({item}){
    return <div className={styles.Item}> 
        <div className={styles.ItemName}>{item}</div>
        <hr className={styles.line} />

    </div>
}