import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary";

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-apps" className={navLinkClass} onClick={() => setMenuOpen(false)}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={navLinkClass} onClick={() => setMenuOpen(false)}>
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-5">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto w-full">
        <div className="lg:hidden flex items-center justify-between w-full">
          <span className="btn btn-ghost normal-case text-2xl font-bold text-green-600">
            <Logo />
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <span className="btn btn-ghost normal-case text-2xl font-bold text-green-600">
              <Logo />
            </span>
          </div>

          {/* Center: Links */}
          <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>

          {/* Right: Contribute Button */}
          <div>
            <a
              href="https://github.com/iamshakil01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              Contribute
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-red-100 border-t border-gray-200">
          <ul className="menu flex flex-col gap-2 p-4">{links}</ul>
          <div className="p-4">
            <a
              href="https://github.com/iamshakil01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              Contribute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
