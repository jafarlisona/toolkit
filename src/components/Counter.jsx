import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by Amount
        </button>
        <h4>{count}</h4>
        <button
          aria-label="Decrement value"
          onClick={()=>dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={()=>dispatch(decrementByAmount(5))}
        >
          Decrement by Amount
        </button>
      </div>
    </div>
  );
}
