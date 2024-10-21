import { useState } from "react";
import styles from "./InputRow.module.css"
import { MdOutlineAddTask } from "react-icons/md";


function InputRow({addfun}){

let [namestate,setNameState]  = useState("");
let [datestate,setDateState]  = useState("");


let onNameChange = (event)=>{
  setNameState(event.target.value);
}

let onDateChange = (event)=>{
  setDateState(event.target.value);
}


let clikedAdd=()=>{
  addfun(namestate,datestate);
  setDateState("");
  setNameState("");
}

  return <div className="container">
      <div className="row my-row">
        <div className="col-4"><input className={styles["input"]} type="text"  placeholder="Enter Todo Here" onChange={onNameChange} value={namestate}/></div>
        <div className="col-4"><input className={styles["input"]} type="date" onChange={onDateChange}  value={datestate}/></div>
        <div className="col-2"><button type="button" className="btn btn-success my-btn" onClick={clikedAdd}><MdOutlineAddTask /></button></div>
      </div>
  </div>
}

export default InputRow;