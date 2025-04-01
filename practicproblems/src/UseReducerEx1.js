//UseReducer on increment and decrement buttons
import React, { useReducer } from 'react'

const reducer = (state,action) => {
    console.log(state,action)
    if(action.type === 'incr'){
        return {count : state.count+1}
    }
    else if(action.type === "decr"){
        return {count : state.count-1}
    }
    else{
        throw new Error("Unsported action type");
    };
};

export default function UseReducerEx1() {

    const [state,dispatch] = useReducer(reducer, { count : 0});

    const handleClickIncr = () => {
        dispatch({type:"incr"})
    };
    const handleClickDecr = () => {
        dispatch({type:"decr"})
    };

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleClickIncr}>+</button>
            <button onClick={handleClickDecr}>-</button>
        </div>
  )
}
