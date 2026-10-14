import React from "react";

const Footer = () => {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container border-top p-10">
      <div className="row" style={{ marginBottom: "4rem" }}>
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "50%" }} />
          <p>© 2010 - 2026, Zerodha Broking Ltd.

All rights reserved.</p>
        </div>
        <div className="col">
          <p>company</p>
          <a href="" style={{textDecoration:'none' , color:'black'}}>About</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Philosophy</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Press & media</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Careers</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Zerodha Cares (CSR)</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Zerodha.tech</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Open source</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Referral program</a><br></br>
        </div>
        <div className="col">
          <p>support</p>
          <a href="" style={{textDecoration:'none' , color:'black'}}>
          Contact us</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Support portal</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> How to file a complaint?</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Status of your complaints</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Bulletin</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Circular</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Z-Connect blog</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Downloads</a><br></br>
        </div>
        <div className="col">
          <p>account</p>
           <a href="" style={{textDecoration:'none' , color:'black'}}>Open demat account</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> Minor demat account</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>NRI demat accounts</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}> HUF demat account</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Commodity</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Dematerialisation</a><br></br>
          <a href="" style={{textDecoration:'none' , color:'black'}}>Fund transfer</a><br></br>
        </div>
      </div>
      <div className="mt-5 text-sm text-muted">
      <p>Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p>Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances</p>
      <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
