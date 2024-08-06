import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Outlet } from 'react-router-dom'

const Hostlayout = () => {
  return (
    <>
      <div className="flex gap-14 px-6 pb-10">
        <NavLink end className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}   to=".">Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="income">Income</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive? `font-bold underline text-[#161616]`: null}  to="reviews">Reviews</NavLink>
        
      </div>
      <Outlet />
    </>
  );
};

export default Hostlayout;
