import React, { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50px from the top, change the background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={"header-full-wrp " + (isScrolled ? "scrolled" : "")}>
        <div className="main-nav-bx">
          <div className="container-1600-wrp">
            <div className="row">
              <div className="col-md-2 col-6">
                <a href="/" className="logo-wrp">
                  <img srcSet="assets/images/logo/bataBlack.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-10 col-6">
                <div className="nav-card">
                  <a href="#" className="close-mob-drop d-none">
                    <img srcSet="close.png" alt="" className="img-fluid" />
                  </a>
                  <ul className="level1">
                    <li className="no-arrw-mob">
                      <a href="/">Home</a>
                    </li>
                    <li className="level1">
                      <a href="#">
                        About Us
                        <b class="caret"></b>
                      </a>
                      <ul className="level2">
                        <li className="mob-back">
                          <img src="hmob-level2-arrw.png" alt="" />
                        </li>
                        <li>
                          <a href="#">Company’s Overview</a>
                        </li>
                        <li>
                          <a href="#">Mission Vision & Values</a>
                        </li>
                      </ul>
                    </li>
                    <li className="level1">
                      <a href="#">
                        Products
                        <b class="caret"></b>
                      </a>
                      <ul className="level2">
                        <li className="mob-back">
                          <img src="hmob-level2-arrw.png" alt="" />
                        </li>
                        <li>
                          <a href="#">Truck</a>
                        </li>
                        <li>
                          <a href="#">Tipper</a>
                        </li>
                        <li>
                          <a href="#">Route Permit Bus</a>
                        </li>
                        <li>
                          <a href="#">School Bus</a>
                        </li>
                        <li>
                          <a href="#">Generators</a>
                        </li>
                        <li>
                          <a href="#">Special Purpose vehicle</a>
                        </li>
                      </ul>
                    </li>
                    <li className="level1">
                      <a href="#">Customer Voice</a>
                    </li>
                    <li className="level1">
                      <a href="#">Media</a>
                    </li>
                    <li className="level1">
                      <a href="#">Branches</a>
                    </li>
                    <li className="level1">
                      <a href="#">
                        Careers
                        <b class="caret"></b>
                      </a>
                      <ul className="level2">
                        <li className="mob-back">
                          <img src="hmob-level2-arrw.png" alt="" />
                        </li>
                        <li>
                          <a href="#">Current Vacancy</a>
                        </li>
                        <li>
                          <a href="#">Send Us Your Resume</a>
                        </li>
                      </ul>
                    </li>
                    <li className="no-desk-links no-arrw-mob">
                      <a href="#">
                        Contact
                        <b class="caret"></b>
                      </a>
                      <ul className="level2">
                        <li className="mob-back">
                          <img src="hmob-level2-arrw.png" alt="" />
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Feedback</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a href="#" class="logo-wrp2" target="_blank">
                    <img src="assets/images/misc/eicher2.png" alt="Eicher" width={132} height={29} />
                            </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
