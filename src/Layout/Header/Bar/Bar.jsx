import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
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
      <Button type="default" onClick={showDrawer} className='ml-[220px]'>
      <i className="fa-solid fa-bars text-2xl"></i>
      </Button>
      <Drawer onClose={onClose} open={open}>
      <div className="flex flex-col items-start justify-between gap-[200px]">
            <ul className=" flex flex-col">
              <li className="py-3 focus:bg-gray-100">
                <NavLink to="/" className="flex items-center gap-3 text-lg"><i className="fa-solid fa-home text-lg"></i> ホーム</NavLink>
              </li>
              <li className="py-3 focus:bg-gray-100">
                <NavLink to="/service-list" className="flex items-center gap-3 text-lg"><i className="fa-solid fa-bars text-lg"></i> サービス一覧</NavLink>
              </li>
              <li className="py-3 focus:bg-gray-100">
                <NavLink to="/for-business" className="flex items-center gap-3 text-lg"><i className="fa-solid fa-briefcase text-lg"></i> 事業者はこちら</NavLink>
              </li>
            </ul>
          </div>
      </Drawer>
    </>
  );
};
export default App;