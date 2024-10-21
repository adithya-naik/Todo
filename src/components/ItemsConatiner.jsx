 import Item from "./Item";
import styles from "./ItemsContainer.module.css"

function ItemsContainer({list,delfun}){
  return <div className={styles["items-row"]}>
    {list.map(item => (
      <Item key={item} f = {delfun} todoName={item.task} dueDate={item.date}></Item>
    ))}
</div>
}

export default ItemsContainer;