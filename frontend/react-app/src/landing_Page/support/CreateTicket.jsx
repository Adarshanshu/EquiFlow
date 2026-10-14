import React from 'react'

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row  p-5 mt-5">
        <h1 className="text-center fs-3">To create a ticket , slect a relevnt topic</h1>
        <div className="col-4 p-5 mt-5">
          <h4>Account Opening</h4>
          <ul>
            <li> <a href="" style={{ textDecoration: 'none' }}>Resident individual</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Minor</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Non Resident Indian (NRI)</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Company, Partnership, HUF and LLP</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Glossary</a></li>
          </ul>
        </div>
        <div className="col-4 p-5 mt-5">
          <h4>Your EquiFlow Account</h4>
          <ul>
            <li> <a href="" style={{ textDecoration: 'none' }}>Your Profile</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Account modification</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Nomination</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Transfer and conversion of securities</a></li>
          </ul>
        </div>
        <div className="col-4 p-5 mt-5">
          <h4>console</h4>
          <ul>
            <li> <a href="" style={{ textDecoration: 'none' }}>Portfolio</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Corporate actions</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Funds statement</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Reports</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Profile</a></li>
            <li> <a href="" style={{ textDecoration: 'none' }}>Segments</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default CreateTicket
