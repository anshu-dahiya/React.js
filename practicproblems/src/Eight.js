//Component that changes its background color when clicked
import React, { useState } from "react";

export default function Eight(){

    const[background, setBackground] = useState('Green');

    const handleClick = () => {
        const newColor = background === 'Green' ? 'Blue' : 'Green';
        setBackground(newColor);
    }

    return(
        <div onClick={handleClick} style={{
            background,
            width: '200px',
            height: '100px',
            cursor: 'pointer',
        }}>
            Click me to change color
        </div>
    )
}