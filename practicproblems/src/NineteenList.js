import React from 'react'
import './styles/Nineteen.css'

export default function NineteenList(props) {

  const {image,title,price} = props;

  return (
    <div className='main'>
        {console.log(props)}
        <img className='image' src={image}/>
        <div>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <button>Add to cart</button>
        </div>
    </div>
  )
}
