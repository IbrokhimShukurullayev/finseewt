import React from 'react'
import "./about.scss"
import Image from 'next/image'
import hand from "../../assets/hand.png"
import Images from "../../assets/Image.png"

const About = () => {
  return (
    <>
      <div id='about'>
        <div className="container about">
          <div className="about__left">
            <h3>Our mision</h3>
            <h2>Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className="about__right">
            <h3>Our mision</h3>
            <h2>Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
        </div>
      </div>
      <div id="team">
        <div className="container team">
          <div className="team__left">
            <h3>Our team of creatives</h3>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
          <div className="team__right">
            <Image src={hand}/>
          </div>
        </div>
      </div>
      <div id="teams">
        <div className="container teams">
          <div className="team__right">
            <Image src={Images}/>
          </div>
          <div className="team__left">
            <h3>Our team of creatives</h3>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About