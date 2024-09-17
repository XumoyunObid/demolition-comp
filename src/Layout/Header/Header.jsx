import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Bar from "./Bar/Bar";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Close the bar when the location changes
    setShow(false);
  }, [location]);

  const handleToAbout = () => {
    navigate("/about");
    setShow(false); // Close the bar after navigation
  };

  const handleToContact = () => {
    navigate("/contacts");
    setShow(false);// Enable scrolling when the bar is closed
  };

  return (
    <div>
      <div className="container flex items-center justify-between py-5">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          {/* <img className="w-[120px]" src={logo} alt="" /> */}
          <p className="text-3xl">Logo</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="lg:flex items-center gap-6 hidden">
          <li className="hover:underline">
            <button onClick={handleToContact} className="text-lg">
              Contact us
            </button>
          </li>
          <li className="hover:underline">
            <button onClick={handleToAbout} className="text-lg">
              About Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu (Hamburger) */}
        <div className="lg:hidden">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Header;
