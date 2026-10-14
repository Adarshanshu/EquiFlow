import React from 'react'

const LeftSection = ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className="container" style={{marginTop:"8rem"}}>
      <div className="row p-5">
        <div className="col-6 p-3">
           <img src={imageURL}/>
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
         <div className="div mb-6">
           <a href={tryDemo} style={{textDecoration:"none"}}>try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
          <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
         <div className="div mt-8">
           <a href={googlePlay} style={{marginRight:"10px"}}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appStore}><img src="media/images/appstoreBadge.svg"/></a>
         </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
