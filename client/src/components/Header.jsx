import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-yellow-600">Tirupati</span>
            <span className="text-amber-900">Real</span>
            <span className="text-amber-900">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          {/* Home tab */}
          <Link to="/">
            <li className="hidden sm:inline text-amber-900 hover:text-yellow-600">
              Home
            </li>
          </Link>
          {/* About tab */}
          <Link to="/about">
            <li className="hidden sm:inline text-amber-900 hover:text-yellow-600">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className="text-amber-900 hover:text-yellow-600">Sign In</li>
            )}
          </Link>

          {/* Sign In tab */}
          {/* <Link to="/sign-in">
          </Link> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
