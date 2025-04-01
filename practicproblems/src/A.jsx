//Context API (learn createContext, Context.Provider, useContex)
import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext();

export default function A() {

    const greet = "Hello";
    const greet2 = "Hy";
    const greet3 = "Hey";
    const wish = "Ram Ram";
    
    return (
        <div>
            <GreetContext.Provider value={{greet,greet2,greet3,wish}}>
            <B/>       
            </GreetContext.Provider>
        </div>
  )
}

export {GreetContext};