import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg mb-2">
      {/* Left Logo */}
      <div className="flex justify-start items-center col-span-1">
        <GiHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer"
        />
        <div className="mx-3">
          <span>WATCHFLIX</span>
        </div>
      </div>
      {/* Middle Search */}
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full p-2">
          Search
        </button>
      </div>
      {/* Right Profile */}
      <div className="flex justify-start items-center col-span-1">
        <FaUser size="1.7em" />
      </div>
    </div>
  );
};

export default Header;
