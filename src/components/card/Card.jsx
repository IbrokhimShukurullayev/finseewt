import React from 'react'
import "./card.scss"
import Image from 'next/image'
import Products from '../product/Products'

async function getData() {
const res = await fetch('https://dummyjson.com/products')

if (!res.ok) {
throw new Error('Failed to fetch data')
}

return res.json()
}

const Card = async() => {
    let data = await getData()
    
  return (
    <div id='card'>
        <Products data={data}/>
    </div>
  )
}

export default Card