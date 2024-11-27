import { IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar fixed z-10 w-full transition-all py-4 md:bg-[#F1F6F9] bg-white">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo dan Input */}
          <div className="flex items-center space-x-4">
            <img src="logo.png" className="w-10 h-10" alt="Logo" />
            <div className=" lg:flex items-center p-4 rounded-lg">
              <div className="relative flex items-center">
                {/* Icon Search */}
                <IoSearchOutline
                  size={25}
                  className={`absolute left-4 transition-colors ${
                    isFocused ? "text-[#14274E]" : "text-[#c0c0c0]"
                  }`}
                />
                {/* Input */}
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={
                    isFocused ? "Input text" : "Mau belajar apa hari ini?"
                  }
                  className="h-[44px] pl-12 pr-10 w-[270px] flex-1 p-2 bg-white rounded-lg border border-gray-300 text-[#262627] focus:outline-none"
                />
                {/* Icon Close */}
                {inputValue && (
                  <IoClose
                    size={20}
                    className="absolute right-4 text-[#c0c0c0] cursor-pointer hover:text-[#14274E]"
                    onClick={handleClearInput}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          {!menuOpen&& <button
            className="lg:hidden text-[#14274E]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu size={25} />
          </button>}

          {menuOpen&& <button className="lg:hidden text-[#14274E]"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <IoClose size={25}/>
          </button>}

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:gap-12 absolute lg:static top-[84px] left-0 right-0 md:bg-[#F1F6F9] bg-white p-4`}
          >
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-12">
              <li>
                <a href="#" className="font-medium text-[#14274E]">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-[#14274E]">
                  Corporate
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-[#14274E]">
                  Tentang
                </a>
              </li>
            </ul>

            <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 lg:ml-auto">
              <button className="md:w-[102px] w-full h-[48px] py-[12px] px-[18px] border rounded bg-[#14274E] text-white hover:bg-[#213662] mb-2 lg:mb-0 lg:mr-4">
                Masuk
              </button>
              <button className="md:w-[102px] w-full h-[48px] py-[12px] px-[18px] border rounded border-[#14274E]">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
