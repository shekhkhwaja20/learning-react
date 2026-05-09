import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import r15 from "../../assets/r15.jpg"
import harley from "../../assets/harley.jpg"
import bullet from "../../assets/bullet.jpg"
function Hero() {
  return (
    <div className='hero'>
      <Card  name="R15" price="1000000.00" imageurl={r15}/>
      <Card  name="Harley Davidson" price="1000000.00" imageurl={harley}/>
      <Card  name="Bullet" price="1000000.00" imageurl={bullet}/>
    </div>
  )
}

export default Hero