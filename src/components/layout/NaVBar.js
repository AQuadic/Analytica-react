import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <div className="phone_nav ac_nav">
       
        <div className="dropdown" style={{position: "relative", display: "none",}}>
          <h4
            className="dropdown-toggle nav_btn btn_page2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, Donia
          </h4>

          <ul className="dropdown-menu myAcc">
            <li>
              <a className="dropdown-item" href="account.html">
                <img src="./images/account.webp" alt="account" />
                <p>Personal Information</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="password.html">
                <img src="./images/logoPass.webp" alt="logoPass" />
                <p>Password</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="activeSessions.html">
                <img src="./images/active.webp" alt="active" />
                <p>Active Sessions</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="signIn.html">
                <img src="./images/logOut.webp" alt="logOut" />
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
        <a href="signIn.html" className="btn_page2"> Login</a>
        <button className="search btnsearch">
          <img src="/images/search.svg" alt="search" />
        </button>
      </div>
      <a className="navbar-brand" href="index.html">
        <img src="/Logo.svg" alt="logo" />
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </button>

      <div className="right_nav ac_nav" id="">
        <form action="">
          <input type="text" className="search" />
        </form>

        <div className="col-dec">
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu row">
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Repairs</h5>
                  <div className="ul_all">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Action</a></li>

                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Action</a></li>

                      <li><a className="dropdown-item" href="#">Action</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Cleaning Services</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Salon</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Home Exterior</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Home Maintenance</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Fashion</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Construction Services</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Services</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Medicine</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Engineering</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Travel and Tourism</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-4 col-sm-6 col-12">
                  <h5>Fun</h5>
                  <div className="ul_all">
                    <ul>
                      <li><a className="dropdown-item" href="#">Gifts</a></li>
                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Mobile Accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#" >Kuroko’s Basketball</a>
                      </li>
                      <li><a className="dropdown-item" href="#">Socks</a></li>

                      <li><a className="dropdown-item" href="#">Socks</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a href="teach.html" className="nav-link">Teach On Analytica</a>
        <a href="myCourses.html" className="nav-link">My Courses</a>
        <a href="signIn.html" className="btn_page2">Log In</a>
        <a href="signUp.html" className="btn_page">Sign Up</a>
      
        <div className="dropdown" style={{position: "relative", display: "none",}}>
          <h4
            className="dropdown-toggle nav_btn btn_page2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi, Donia
          </h4>

          <ul className="dropdown-menu myAcc">
            <li>
              <a className="dropdown-item" href="account.html">
                <img src="./images/account.webp" alt="account" />
                <p>Personal Information</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="password.html">
                <img src="./images/logoPass.webp" alt="logoPass" />
                <p>Password</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="activeSessions.html">
                <img src="./images/active.webp" alt="active" />
                <p>Active Sessions</p>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="signIn.html">
                <img src="./images/logOut.webp" alt="logOut" />
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>

        <button className="lang">
          <img src="/images/lang.webp" className="lang" alt="lang" />
          <p>En</p>
        </button>
      </div>

      <div className="collapse col-phone" id="navbarSupportedContent">
        <div className="right_nav ac_nav" id="">
          <a href="teach.html" className="nav-link">Teach On Analytica</a>
          <a href="myCourses.html" className="nav-link">My Courses</a>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Repairs
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cleaning Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Salon
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home Exterior
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home Maintenance
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Fashion
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="ul_all">
                  <ul>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li><a className="dropdown-item" href="#">Jojo</a></li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"
                        >The seven deadly Sins</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#"
                        >Kuroko’s Basketball</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <form action="" id="form_nav" className="input_srearch">
      <input type="search" placeholder="Search For ......." />
    </form>
  </nav>
  )
}

export default NavBar