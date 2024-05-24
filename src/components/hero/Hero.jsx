import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import "./hero.scss"


const Hero = () => {
  return (
    <div id='hero'>
        <div className="container hero">
            <h3>Posted on startup</h3>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <h4>By <span>James West</span>  |  May 23, 2022 </h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button>Read Moren <FaAngleRight/></button>
        </div>
    </div>
  )
}

export default Hero