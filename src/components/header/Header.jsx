import React from 'react'
import "./header.scss"
import Image from 'next/image'

import logo from "../../assets/Logo.png"

const Header = () => {
  return (
    <header id="header">
        <div className="container nav">
            <div className="nav__logo">
            <a href='#'>
              <Image src={logo} alt="" />
            </a>
          </div>
            <ul className="nav__list">
            <li className="nav__item"><a href='#' className="nav__link">HOME</a></li>
            <li className="nav__item"><a href='#' className="nav__link">BAGS</a></li>
            <li className="nav__item"><a href='#' className="nav__link">SNEAKERS</a></li>
            <li className="nav__item"><a href='#' className="nav__link">BELT </a></li>
            <li className="nav__item"><a href='#' className="nav__link">CONTACT </a></li>
            <li className="nav__item"><button className="nav__button">Login </button></li>
          </ul>
        </div>
    </header>
  )
}

export default Header