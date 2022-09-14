import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-3 py-4">
        <li className="hover:text-slate-300">
          <Link to={"/internal"}>Internal</Link>
        </li>

        <li className="hover:text-slate-300">
          <Link to={"/external"}>External</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to={"/modal"}>Modal</Link>
        </li>
      </ul>
    </nav>
  );
};
