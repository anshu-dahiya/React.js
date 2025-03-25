import React, { useState } from 'react'
import data from './NineteenData.json'

export default function Twenty() {

const [nData, setnData] = useState(data);

const handleClear = () => {
    setnData([])
}

  return (
    <div>
        <ol>
            {nData.map(items => 
            <h2>
                <li>
                    {items.title}
                </li>
            </h2>
            )} 
        </ol>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}
