import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "10px 0";
    } else {
      document.getElementById("navbar").style.padding = "25px 0";
    }
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top'>
        <div className='container'  id="navbar">
          <Link className='navbar-brand' to='/' id="logo">
            START FRAMEWORK
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav list-unstyled ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
