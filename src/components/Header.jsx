import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-[#2E7D32] text-white p-4 flex items-center justify-between shadow-md">
      {/* Brand */}
      <h1 className="text-2xl font-bold">Brand</h1>

      {/* Navigasi & Profil Pengguna */}
      <div className="flex items-center space-x-6">
        <a href="#" className="flex items-center space-x-1 hover:text-gray-200">
          <span>Informasi</span>
          <IoIosArrowDown />
        </a>
        <div className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm">
          <span>Username</span> |{" "}
          <span className="text-gray-600">user@email.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
