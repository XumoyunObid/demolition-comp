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
    enableBodyScroll(); // Enable scrolling when the bar is closed
  }, [location]);

  const handleShow = () => {
    setShow(!show);
    if (!show) {
      disableBodyScroll(); // Disable scrolling when the bar is open
    } else {
      enableBodyScroll(); // Enable scrolling when the bar is closed
    }
  };

  const handleToHome = () => {
    navigate("/");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const handleToProducts = () => {
    navigate("/all-products");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const handleToContact = () => {
    navigate("/contacts");
    setShow(false); // Close the bar after navigation
    enableBodyScroll(); // Enable scrolling when the bar is closed
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
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
            <button onClick={handleToProducts} className="text-lg">List of services</button>
          </li>
          <li className="hover:underline">
            <button onClick={handleToContact} className="text-lg">For businesses, click here</button>
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
