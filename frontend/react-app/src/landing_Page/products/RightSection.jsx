import React from 'react'

const RightSection = ({imageURL,productName,productDescription,tryDemo}) => {
  return (
    <div className="container" style={{marginTop:"8rem"}}>
      <div className="row p-5">

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
         <div className="div mb-6 mt-6">
           <a href={tryDemo} style={{textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
        </div>

        <div className="col-6 p-3">
           <img src={imageURL}/>
        </div>
      </div>
    </div>
  )
}

export default RightSection
