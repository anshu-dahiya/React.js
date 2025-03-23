//Creating Card Component to use it multiple time with the help of props
import React from 'react'
import NineteenList from './NineteenList'
import mobiles from './NineteenData.json'

export default function Nineteen() {

  return (
    <div>

      {mobiles.map((element) => {
        
        return <NineteenList 
        image={element.image} 
        title={element.title}
        price={element.price}
        />
      })}

    </div>
  )
}
