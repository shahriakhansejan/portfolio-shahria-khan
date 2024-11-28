import { NavLink } from "react-router-dom";
import bgImg from "../../../assets/Image/bg.png";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleMenuItemClick = () => {
    setIsOpen(false);
  }

  const navMenu = (
    <>
      <li onClick={handleMenuItemClick}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li onClick={handleMenuItemClick}>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li onClick={handleMenuItemClick}>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <nav
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        className="bg-orange-100/50"
      >
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm md:hidden"
                onClick={toggleDropdown}
              >
                <RiMenu2Fill className="text-xl" />
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="activeNav dropdown-content space-y-1 dark1 text-sm bg-white rounded z-[1] mt-3 w-32 font-bold px-5 py-4 shadow"
                >
                  {navMenu}
                </ul>
              )}
            </div>
            <div>
              <h1 className="text-xl md:text-3xl dark1 font-bold">
                Shahri<span className="text-orange-600">a K</span>han
              </h1>
            </div>
          </div>
          <div className="navbar-end">
            <ul className="activeNav hidden md:flex gap-6 px-6 font-semibold dark1">
              {navMenu}
            </ul>
            <NavLink to="/contact">
              <button className="btn text-white hover:bg-orange-600 bg-orange-500">
                Contact
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
