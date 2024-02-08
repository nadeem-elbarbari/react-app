import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className=' details py-5 '>
        <div className='container text-white'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='location d-flex flex-column text-center'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='social d-flex flex-column text-center'>
                <h3>AROUND THE WEB</h3>
                <div className='icons'>
                  <i className='bx bxl-facebook-circle'></i>
                  <i className='bx bxl-twitter'></i>
                  <i className='bx bxl-linkedin'></i>
                  <i className='bx bxl-internet-explorer'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4 d-flex flex-column text-center'>
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className='text-center text-white py-4'>
        <span>Copyright © Your Website 2021</span>
      </footer>
    </>
  );
}

export default Footer;
