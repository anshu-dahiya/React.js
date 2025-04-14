import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  decrementByAmount,
  incrementAsync, 
  decrementAsync } from "./counterSlice";
import './Counter.css'

export function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [ incrementAmount, setIncrementAmount ] = useState('2')
    const [ decrementAmount, setDecrementAmount ] = useState('2')
    
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
            
            <span className="value">
              {count}
            </span>

            <button
              className="button"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>

          <div className="raw">
            <input
              className="textbox"
              value={incrementAmount}
              onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
              className="button"
              aria-label="Increment value by Input"
              onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
              Add Amount
            </button>
            <button
              className="button"
              onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
              Add Async
            </button>
          </div>

          <div className="raw">
            <input
              className="textbox"
              value={decrementAmount}
              onChange={e => setDecrementAmount(e.target.value)}
            />
            <button
              className="button"
              aria-label="Decrement value by Input"
              onClick={() => dispatch(decrementByAmount(Number(decrementAmount) || 0))}
            >
              Dec Amount
            </button>
            <button
              className="button"
              onClick={() => dispatch(decrementAsync(Number(decrementAmount) || 0))}
            >
              Dec Async
            </button>
          </div>
        </div>
      )
    
}