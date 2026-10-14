import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import Navbar from '../Navbar'
import Footer from '../Footer'

const SupportPage = () => {
  return (
    <div className="support-page">
        <Navbar/>
      <Hero/>
      <CreateTicket/>
      <Footer/>
    </div>
  )
}

export default SupportPage
