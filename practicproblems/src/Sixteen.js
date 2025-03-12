//Color Picker that allows users to select a color
import React, { useState } from 'react'

export default function Sixteen() {

    const [selectedColor, setSelectedColor] = useState('#000000')

    const handleChange = (e) => {
        setSelectedColor(e.target.value);
    }

  return (
    <div>
        <input type='color' onChange={handleChange}/>
        <div style={{width:'100px', height:'100px', backgroundColor:selectedColor, color:'white'}}>
            Pick your color
        </div>
    </div>  
  )
}
