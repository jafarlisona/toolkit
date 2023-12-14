import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, divide, multiply, substract } from "../redux/calculatorSlice";

function Calculator() {
  const calculator = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  return (
    <>
      <div>
        <input type="text" value={inp1} onChange={(e)=>setInp1(e.target.value)}/>
        <input type="text" value={inp2} onChange={(e)=>setInp2(e.target.value)}/>
      </div>
      <div>
        <button onClick={dispatch(adding({num1:+inp1,num2:+inp2}))}>+</button>
        <button onClick={dispatch(substract({num1:+inp1,num2:+inp2}))}>-</button>
        <button onClick={dispatch(multiply({num1:+inp1,num2:+inp2}))}>*</button>
        <button onClick={dispatch(divide({num1:+inp1,num2:+inp2}))}>/</button>
        <h3>{calculator}</h3>
      </div>
    </>
  );
}

export default Calculator;
