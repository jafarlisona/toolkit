import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  return (
    <div className="todo">
      <h2>Todo</h2>
      <div className="input-todo">
        <input
          type="text"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addItem({ value: inpVal, id: uuidv4() }));
            setInpVal("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((x) => (
          <li key={x.id} onClick={() => dispatch(removeItem(x.id))}>
            {x.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
