import { NavLink } from "react-router";
const activeClass = "bg-teal-400 rounded-lg p-2";
const inactiveClass = "text-gray-700 hover:bg-teal-100 rounded-lg p-2";

const NavBar = () => {
  return (
    <nav className="bg-gray-200 border-b border-gray-300 p-4 shadow-lg h-28 flex items-center justify-center">
      <ul className="flex gap-8 list-none m-0 p-0 justify-center text-4xl ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Add Box
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
