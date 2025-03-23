//Card component 
import React from 'react'
import NineteenList from './NineteenList'

export default function Nineteen() {

  const mobile1 = { 
    image : 'https://m.media-amazon.com/images/I/51izGKpbXOL._SY679_.jpg',
    title : 'Nothing Phone 3A',
    price : '1,200'
  }
  const mobile2 = { 
    image : 'https://m.media-amazon.com/images/I/61EscGf8mYL._SX679_.jpg',
    title : 'IPhone 16 Plus',
    price : '10,000'
  }
  const mobile3 = { 
    image : 'https://m.media-amazon.com/images/I/41P2s-83N8L._SX300_SY300_QL70_FMwebp_.jpg',
    title : 'Redmi Note 14',
    price : '700'
  }
  const mobile4 = { 
    image : 'https://m.media-amazon.com/images/I/4140OGrNrgL._SX300_SY300_QL70_FMwebp_.jpg',
    title : 'Samsung Galaxy A56',
    price : '8,500'
  }

  return (
    <div>
      <NineteenList 
      image={mobile1.image} 
      title={mobile1.title}
      price={mobile1.price}
      />
      
      <NineteenList 
      image={mobile2.image} 
      title={mobile2.title}
      price={mobile2.price}
      />
      
      <NineteenList 
      image={mobile3.image} 
      title={mobile3.title}
      price={mobile3.price}
      />
      
      <NineteenList 
      image={mobile4.image} 
      title={mobile4.title}
      price={mobile4.price}
      />
    </div>
  )
}
