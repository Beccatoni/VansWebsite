import React from "react";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
const navigate = useNavigate()

  function fakeLogOut(){
    localStorage.removeItem("loggedin")
   navigate("/login", {replace:true})
  }


  return (
    <div>
      <header className="flex justify-between items-center px-10 py-8 bg-[#FFF7ED]">
        <Link to="/" className="font-extrabold text-5xl">
          #Vanlife
        </Link>
        <nav className="flex gap-11 text-xl font-medium text-slate-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-bold underline text-[#161616]` : null
            }
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-bold underline text-[#161616]` : null
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-bold underline text-[#161616]` : null
            }
            to="/vans"
          >
            Vans
          </NavLink>
          <NavLink to="/login"><FontAwesomeIcon icon={faUser}/></NavLink>

          <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
