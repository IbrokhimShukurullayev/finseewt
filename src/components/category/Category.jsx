import React from 'react'
import "./category.scss"
import icon from "../../assets/icon.png"
import Image from 'next/image'

const Category = () => {
  return (
    <div id='category'>
        <div className="container">
            <h3>Choose A Catagory</h3>
            <div className="category">
                <div className="category__card">
                    <Image src={icon}/>
                    <h2>Business</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="category__card">
                    <Image src={icon}/>
                    <h2>Startup</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="category__card">
                    <Image src={icon}/>
                    <h2>Economy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div className="category__card">
                    <Image src={icon}/>
                    <h2>Technology</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category