import React from 'react'
import "./footer.scss"
import Image from 'next/image'
import social from "../../assets/Social.png"

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container footer">
        <div className="footer__right">
          <h2>Finstreet 118 2561 Fintown</h2>
          <h2>Hello@finsweet.com  020 7993 2905</h2>
        </div>
        <div className="footer__left">
          <Image src={social}/>
        </div>
      </div>
    </div>
  )
}

export default Footer