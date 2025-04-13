import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  decrementByAmount } from "./counterSlice";

export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
          <div>
            <span style={{ paddingLeft:'70px'}}>
              {count}
            </span>
            <br/>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <br/>

            <button
              aria-label="Increment value by 3"
              onClick={() => dispatch(incrementByAmount(3))}
            >
              Increment value by 3
            </button>

            <br/>

            <button
              aria-label="Increment value by 3"
              onClick={() => dispatch(decrementByAmount(3))}
            >
              Decrement value by 3
            </button>

          </div>
        </div>
      )
    
}