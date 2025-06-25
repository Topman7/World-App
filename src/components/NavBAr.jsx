import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const NavBAr = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const moon = darkMode ? <IoMoon /> : <IoMoonOutline />;

  return (
    <div className=" flex justify-between items-center sm:p-8 sm:px-20 px-4 py-6 shadom-md bg-elements custom-text-color ">
      <Link
        to="/"
        className="decoration-none font-semibold sm:text-[22px] text-[14px] "
      >
        Where in the World?
      </Link>

      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);

          if (document.body.classList.contains("light-.mode")) {
            localStorage.setItem("darkMode", JSON.stringifly(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        className="flex items-center gap-2"
      >
        {moon}
        <p className="sm:text-[16px] text-[12px] font-semibold cursor-pointer">
          {" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
};

export default NavBAr;
