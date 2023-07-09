import React from 'react';

export default function HeaderComponent() {
  return (
    <header id="header">
      <div className="container">
        <div className="gap">
          {/* navbar-left */}
          <div className="navbar-left">
            <ul className="navbar-left__list">
              <li className="navbar-left__item"><a href="#section2" className="navbar-left__link" title="THE COUPLE">THE COUPLE</a></li>
              <li className="navbar-left__item"><a href="#section4" className="navbar-left__link" title="EVENT & PARTIES">EVENT & PARTIES</a></li>
              <li className="navbar-left__item"><a href="#section5" className="navbar-left__link" title="GALLERY">GALLERY</a></li>
            </ul>
          </div>
          {/* navbar-center */}
          <div className="navbar-center">
            <a href="#wrap" className="navbar-center__link blind">Home</a>
          </div>
          {/* navbar-right */}
          <div className="navbar-right">
            <ul className="navbar-right__list">
              <li className="navbar-right__item"><a href="#section6" className="navbar-right__link" title='ATTENDING'>ATTENDING</a></li>
              <li className="navbar-right__item"><a href="#section9" className="navbar-right__link" title='OUR BLOG'>OUR BLOG</a></li>
              <li className="navbar-right__item"><a href="#section10" className="navbar-right__link" title='LOCATION'>LOCATION</a></li>
            </ul>
          </div>
          {/* navbar-mobile / responsive 반응형 */}
          <div className="navbar-mobile">
            <a href="!#" className="navbar-mobile__btn">
                <i className="line"></i>
                <i className="line"></i>
                <i className="line"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
