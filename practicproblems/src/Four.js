//Component to diplay list of items
import React from "react";

export default function Four(){
    
    const items = ['item1','item2','item3','item4']

    return(
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}