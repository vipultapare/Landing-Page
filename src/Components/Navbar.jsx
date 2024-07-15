import logo from "../assets/expressbook.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import { useState } from "react";
import NavList from "./NavList";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row mx-10 p-4 justify-between  border-b-2  border-gray-200">
      <span>
        <img className=" max-h-50 max-w-40" src={logo} alt="" />
      </span>
      <div className="hidden md:flex flex-row">
        <NavList />
      </div>

      <span className="md:hidden">
        <img
          onClick={handleToggle}
          className="  mt-1 max-h-5 max-w-5"
          src={isOpen ? cross : menu}
          alt=""
        />
        {isOpen && (
          <div className="flex">
            <NavList />
          </div>
        )}
      </span>
    </div>
  );
};

export default Navbar;
