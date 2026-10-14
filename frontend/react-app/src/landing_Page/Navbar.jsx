import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
      <nav class="navbar md:navbar-expand bg-1 bg-light border-bottom sticky-top">
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src='media/images/logo.svg' alt='logo' style={{width:'25%'}}/>
          </Link>
          <button
            class="btn-icon navbar-toggler"
            type="button"
            data-bs-toggle="drawer"
            data-bs-target="#navbarDrawer"
            aria-controls="navbarDrawer"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog
            class="drawer drawer-end"
            tabindex="-1"
            id="navbarDrawer"
            aria-labelledby="navbarDrawerLabel"
          >
            <div class="drawer-header">
              <h5 class="drawer-title" id="navbarDrawerLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="drawer"
                aria-label="Close"
              ></button>
            </div>
            <div class="drawer-body mb-2 md:mb-0">
              <ul class="nav navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                 <li class="nav-item">
                  <Link class="nav-link active" to="/product">
                    Product
                  </Link>
                </li>
                 <li class="nav-item">
                  <Link class="nav-link active" to="/pricing">
                    Pricing
                  </Link>
                </li>
                 <li class="nav-item">
                  <Link class="nav-link active" to="/suport">
                    Support
                  </Link>
                </li>
               
                
               
              </ul>
              {/* <form class="hstack gap-2" role="search">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn-solid btn-icon theme-secondary"
                  type="submit"
                >
                  <svg class="bi" width="16" height="16">
                    <use href="#search" />
                  </svg> */}
                {/* </button>
              </form> */}
            </div>
          </dialog>
        </div>
      </nav>
  );
};

export default Navbar;
