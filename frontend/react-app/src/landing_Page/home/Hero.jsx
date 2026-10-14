import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5" style={{ marginBottom: "8rem" }}>
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Explore investing with EquiFlow" className="mb-5"/>
        <h1 className="mt-5">Invest in everything</h1>
        <p> Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more. </p>
        <button className="p-2 btn-solid theme-primary fs-5 mb-12 home-signup-button">Signup Now</button>
      </div>
        
    </div>
  )
}

export default Hero
