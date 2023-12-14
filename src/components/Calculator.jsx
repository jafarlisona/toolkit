import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, divide, multiply, subtract } from "../redux/calculatorSlice";

function Calculator() {
  const calculator = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="inputs">
        <input type="text" value={inp1} onChange={(e)=>setInp1(e.target.value)}/>
        <input type="text" value={inp2} onChange={(e)=>setInp2(e.target.value)}/>
      </div>
      <h3>{calculator}</h3>
      <div className="operators">
        <button onClick={()=>dispatch(adding({num1:+inp1,num2:+inp2}))}>+</button>
        <button onClick={()=>dispatch(subtract({num1:+inp1,num2:+inp2}))}>-</button>
        <button onClick={()=>dispatch(multiply({num1:+inp1,num2:+inp2}))}>*</button>
        <button onClick={()=>dispatch(divide({num1:+inp1,num2:+inp2}))}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
