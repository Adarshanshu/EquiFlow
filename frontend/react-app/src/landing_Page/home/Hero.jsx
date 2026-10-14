import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5" style={{ marginBottom: "8rem" }}>
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt='Hero Image' calssName="mb-5"/>
        <h1 className="mt-5">Invest in everything</h1>
        <p> Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more. </p>
        <button className="p-2 btn-solid theme-primary fs-5 mb-12" style={{width:"15%",margin:"0 auto"}}>Signup Now </button>
      </div>
        
    </div>
  )
}

export default Hero
