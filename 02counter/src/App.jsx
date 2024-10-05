import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20 ){
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("Add Clicked", counter);
  }

  const removeValue = () => {
    if (counter > 0){
      counter = counter - 1;
      setCounter(counter)
    }
    console.log("Remove Clicked", counter);
  }

  return (
    <>
      <h1>Chai or react</h1>    
      <h2>Counster value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
