//Context API
import React, { useContext } from 'react'
import { GreetContext } from './A'

export default function C(props) {

  const useCon = useContext(GreetContext);  
  console.log(useCon)

  return (
    
        <h1>Greet : {useCon.greet}, {useCon.greet2}, {useCon.greet3}, {useCon.wish}</h1>
    
  )
}
