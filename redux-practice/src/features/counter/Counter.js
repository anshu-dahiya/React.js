import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  decrementByAmount,
  incrementAsync } from "./counterSlice";
import './Counter.css'

export function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [ incrementAmount, setIncrementAmount ] = useState('2')

    return (
        <div>
          <div className="raw">
            <button
              className="button"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            
            <span >
              {count}
            </span>

            <button
              className="button"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>

            <br/>

            <input
              value={incrementAmount}
              onChange={e => setIncrementAmount(e.target.value)}
            />

            <button
              className="button"
              aria-label="Increment value by Input"
              onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
            >
              Add Amount
            </button>

            <br/>

            <button
              className="button"
              aria-label="Decrement value by Input"
              onClick={() => dispatch(decrementByAmount(3))}
            >
              Deduct Amount
            </button>
            <br/>

            <button
              className="button"
              onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
            >
              Add Async
            </button>

          </div>
        </div>
      )
    
}