import React from 'react'
import Hero from './Hero'
import Team from './Team'
import Navbar from "../Navbar"
import Footer from "../Footer"
import "./about.css"

const AboutPage = () => {
  return (
    <div className="about-page">
    <Navbar/>
     <Hero/>
     <Team/>
     <Footer/>
    </div>
  )
}

export default AboutPage
