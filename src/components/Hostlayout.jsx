import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Outlet } from 'react-router-dom'

const Hostlayout = () => {
  return (
    <>
      <div className="flex gap-14 px-6 pb-10">
        <NavLink end className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}   to="/host">Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="/host/income">Income</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="/host/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="/host/reviews">Reviews</NavLink>
        
      </div>
      <Outlet />
    </>
  );
};

export default Hostlayout;
