import Title from "./components/Title";
import InputRow from "./components/InputRow";
import ItemsContainer from "./components/ItemsConatiner";
import WelcomeNote from "./components/WelcomeNote";
import { useState } from "react";

import "./App.css";

// let tasksList = [];

// let StasksList = [
//   {
//     task: "Take Bath",
//     date: "10/9/2024",
//   },
//   {
//     task: "Complete this video",
//     date: "10/9/2024",
//   },
//   {
//     task: "BSNL Sim port",
//     date: "10/9/2024",
//   },
//   {
//     task: "Go to Lunch",
//     date: "10/9/2024",
//   },
// ];

// creating state for maintaining the list of items;

function App() {
  
  let [tasksList,setTasksList] = useState([]);
  
  let handleAdd = (name,date)=>{
    let list = [...tasksList,{task : name , date : date},];
    setTasksList(list);
  }
  let handleDel = (name)=>{
    let list = tasksList.filter(item=>item.task!==name);
    setTasksList(list);
  }
  return (
    <center>
      <Title></Title>
      <div className="input-row"><InputRow addfun = {handleAdd}></InputRow></div>
      {tasksList.length==0 && <WelcomeNote> </WelcomeNote>}
      <ItemsContainer list = {tasksList} delfun = {handleDel}></ItemsContainer>
    </center>
  );
}

export default App;
