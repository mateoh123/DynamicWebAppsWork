import React from "react";
import cx from "classnames";
import { NavLink, Link } from "react-router-dom";

import Panel from "./Panel";

const Navbar = () => {
  // const activeClass = 'text-blue-500 font-bold decoration-solid'
  // const pendingClass = 'text-red-500'

  return (
    <Panel className="sticky top-0 flex flex-row items-start w-full justify-between bg-stone-950! font-source_san_3 font-bold border-none rounded-none">
      <Link to="/" className="bg-stone-950!">
        {" "}
        Mateo Hernandez
      </Link>
      <div className="flex flex-row gap-5">
        <Link to="/button" className="bg-stone-950!">
          Work
        </Link>
        <Link to="/dropdown" className="bg-stone-950!">
          Contact
        </Link>
      </div>
      {/* Add link to your component page for HW */}
    </Panel>

    // BONUS HW: Figure out Navlink and Active class EXTRA CREDIT
    // <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
    //   <NavLink
    //     to="/"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Buttons
    //   </NavLink>
    //   <NavLink
    //     to="/accordion"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Accordion
    //   </NavLink>
    //   <NavLink
    //     to="/dropdown"
    //     className={cx(
    //       ({isActive, isPending}) =>
    //         isPending ? pendingClass : isActive ? activeClass : '',
    //       'text-blue-500'
    //     )}
    //   >
    //     Dropdown
    //   </NavLink>
    //   {/* Add link here to the component page you made for HW */}
    // </Panel>
  );
};

export default Navbar;
