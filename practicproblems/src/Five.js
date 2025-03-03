//Basic Toggle Switch Component
import React, { useState } from 'react';

export default function Five(){

    const [isToggled, setIsToggle] = useState(false)

    const handleToggle = () => {
        setIsToggle(!isToggled)
    }

    return(
        <div>
            <label>
                <input type='checkbox' onChange={handleToggle}/>
            </label>
            <p>{isToggled ?"on" : "off"}</p>
        </div>
    )
}