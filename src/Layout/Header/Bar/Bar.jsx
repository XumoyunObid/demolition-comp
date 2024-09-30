import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-scroll";

const App = () => {
  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="default" onClick={showDrawer} className="ml-[220px]">
        <i className="fa-solid fa-bars text-2xl"></i>
      </Button>
      <Drawer onClose={onClose} open={open}>
        <div className="flex flex-col items-start justify-between gap-[200px]">
          <ul className="flex flex-col">
            <li className="py-3 focus:bg-gray-100">
              <Link
                to="/"
                className="flex items-center gap-3 text-lg font-bold"
                onClick={onClose}
              >
                ホーム
              </Link>
            </li>
            <li className="py-3 focus:bg-gray-100">
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer font-bold"
                onClick={onClose} 
              >
                我々について
              </Link>
            </li>
            <li className="py-3 focus:bg-gray-100">
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer font-bold"
                onClick={onClose}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default App;
