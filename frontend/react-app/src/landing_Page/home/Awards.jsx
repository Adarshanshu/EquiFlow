import React from 'react'

const Awards = () => {
  return (
    <div className="container" style={{ marginBottom: "6rem" }}>
      <div className="row">
        <div className="col-6 p-5"> 
          <img src='media/images/largestBroker.svg'/>
        </div>
        <div className="col-6 p-5 mt-6">
          <h1>Largest stock broker in India</h1>
          <p classname='mb-5'>2+ million EquiFlow clients contribute to over 15% of all Volumes in India daily by trading and investing in:</p>

          <div className="row">
            <div className="col-6">
               <ul>
            <li>
              <p>Future and Options</p>
            </li>
             <li>
              <p>Commodity derivatives</p>
            </li>
             <li>
              <p>currency derivatives</p>
            </li>
          </ul>
            </div>
            <div className="col-6">
               <ul>
            <li>
              <p>Stocks & IPOs</p>
            </li>
             <li>
              <p>Direct mutual funds</p>
            </li>
             <li>
              <p>Bonds and Govt. Securities</p>
            </li>
          </ul>
            </div>
          </div>
          <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards
