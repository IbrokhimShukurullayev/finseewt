import React from 'react'
import "./header.scss"
import Image from 'next/image'
import Link from 'next/link'

import logo from "../../assets/Logo.png"

const Header = () => {
  return (
    <header id="header">
        <div className="container nav">
            <div className="nav__logo">
            <Link href={"/"}>
              <Image src={logo} alt="" />
            </Link>
          </div>
            <ul className="nav__list">
            <li className="nav__item"><Link href={"/"} className="nav__link">Home</Link></li>
            <li className="nav__item"><Link href={"/blog"} className="nav__link">Blog</Link></li>
            <li className="nav__item"><Link href={"/about"} className="nav__link">About Us</Link></li>
            <li className="nav__item"><a href='#' className="nav__link">Register </a></li>
          </ul>
        </div>
    </header>
  )
}

export default Header