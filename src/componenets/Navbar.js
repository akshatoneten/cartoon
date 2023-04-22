import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#00BCD4]  p-8">
        <NavLink to="/tomjerry" className="w-[100px] tomjerry h-[100px] hover:scale-110 border-2 cursor-pointer rounded-full"></NavLink>
        <NavLink to="/doremon" className="w-[100px] doremon h-[100px] hover:scale-110  border-2 cursor-pointer rounded-full"></NavLink>
        <NavLink to="/chottabheem" className="w-[100px] chottabheem h-[100px] hover:scale-110 border-2  cursor-pointer rounded-full"></NavLink>
        <NavLink to="/ninjahatori" className="w-[100px] ninjahatori  h-[100px] hover:scale-110 border-2  cursor-pointer rounded-full"></NavLink>
        <NavLink to="/shinchan" className="w-[100px] shinchan h-[100px] hover:scale-110 border-2 cursor-pointer rounded-full"></NavLink>
        <NavLink to="/pikachu" className="w-[100px] pikachu h-[100px] hover:scale-110 border-2 cursor-pointer rounded-full"></NavLink>
        <NavLink to="/oggycock" className="w-[100px] oggycock h-[100px] hover:scale-110 border-2 cursor-pointer rounded-full"></NavLink>
    </div>
  );
};

export default Navbar;