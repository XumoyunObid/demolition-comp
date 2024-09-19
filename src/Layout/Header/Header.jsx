import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Bar from "./Bar/Bar";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const handleToContact = () => {
    navigate("/contacts");
    setShow(false);
  };

  return (
    <div>
      <div className="container flex items-center justify-between py-5">
        <RouterLink to="/" className="flex items-center">
          {/* <img className="w-[120px]" src={logo} alt="" /> */}
          <p className="text-3xl">Logo</p>
        </RouterLink>
        <ul className="lg:flex items-center gap-6 hidden">
          <li className="hover:underline">
            <button onClick={handleToContact} className="text-lg">
              Contact us
            </button>
          </li>
          <li className="hover:underline">
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="text-lg cursor-pointer"
            >
              About Us
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Header;
