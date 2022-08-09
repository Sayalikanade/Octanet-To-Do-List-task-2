import './App.css';
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

  const [inputlist, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add a items"
            value={inputlist}
            onChange={itemEvent} />

          <button onClick={listOfitems}> + </button>

          <ol>
            {/* <li> {inputlist} </li> */}

            {Items.map((itemval, index) => {
              return <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />;
            })}


          </ol>





        </div>
      </div>
    </>

  )






};







export default App;