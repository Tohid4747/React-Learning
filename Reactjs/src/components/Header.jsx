import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-5 bg-emerald-600 text-white text-center text-3xl font-bold tracking-wider 
     flex items-center justify-center gap-2">
    <h2 >Sheryians</h2>
    <div className="flex gap-10">
      <Link className="text-xl underline " to="/">Home</Link>
      <Link className="text-xl underline " to="/about">About</Link>
      <Link className="text-xl underline " to="/product">Product</Link>
      <Link className="text-xl underline " to="/contact">Contact</Link>
    </div>
     </div>
  );
};

export default Header;
