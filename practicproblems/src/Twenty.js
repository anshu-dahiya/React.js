//Add,Remove,Clear,Update a data from list by useState
import React, { useState } from 'react'
import data from './NineteenData.json'

export default function Twenty() {

const [nData, setnData] = useState(data);

const handleClear = () => {
    setnData([])
}

const handleRemove = (itemRemoved) => {
    setnData(nData.filter(item => 
        item !== itemRemoved))
        //The arrow function checks each item
        //And keeps items where the item is NOT equal to itemRemoved
}

const handleUpdate = (itemUpdated) => {
    setnData(nData.map(item => {
        if(item === itemUpdated){
            const update = <input type='text' placeholder='Enter your new update'/>
            return {title:update}       
        }
        else{
            return item;
        }
    }
    ))
}

  return (
    <div>
        <ol>
            {nData.map(items => 
            <h2>
                <li>
                    {items.title}
                    <br/>
                    <button onClick={() => handleUpdate(items)}>Update</button>
                    <button onClick={() => handleRemove(items)}>Remove</button>
                </li>
            </h2>
            )} 
        </ol>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}
