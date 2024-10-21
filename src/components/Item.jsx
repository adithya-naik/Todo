import { RiDeleteBinFill } from "react-icons/ri";
function Item({todoName , dueDate,f}){

  return <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2"><button type="button" className="btn btn-danger my-btn" onClick={()=>f(todoName)}><RiDeleteBinFill /></button></div>
      </div>
  </div>
}

export default Item;