import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState("");
  const handleMenuClick = (selectedMenu) => {
    setMenu(selectedMenu);
    setOpen(true); // Ensure Farm buzz is visible
  };
  return (
    <>
      <div className="flex justify-around items-center p-4">
        <div
          className="text-[#8ba17f] text-[2.5rem] font-bold cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        >
          <Trail open={open}>
            <span>Farm buzz</span>
          </Trail>
        </div>
        <div className="navbar-menu flex gap-10 items-center text-white font-medium list-none">
          <li
            className={`menu-item ${
              menu === "home" ? "active" : ""
            } cursor-pointer`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </li>
          <li
            className={`menu-item ${
              menu === "contact" ? "active" : ""
            } cursor-pointer`}
            onClick={() => setMenu("contact")}
          >
            Contact Us
          </li>
          <li
            className={`menu-item ${
              menu === "about" ? "active" : ""
            } cursor-pointer`}
            onClick={() => setMenu("about")}
          >
            About
          </li>
          <li
            className={`menu-item ${
              menu === "test" ? "active" : ""
            } cursor-pointer`}
            onClick={() => setMenu("test")}
          >
            Test
          </li>
        </div>
        <div className="flex gap-4 justify-evenly items-center">
          <div>
            <img
              src="./chat.svg"
              alt=""
              className="h-[4vh] w-[4vw] cursor-pointer hover:scale-110 hover:translate-y-2 transition-all"
            />
          </div>
          <div>
            <img
              src="./ai.svg"
              alt=""
              className="h-[4vh] w-[4vw] cursor-pointer hover:scale-110 hover:translate-y-2 transition-all"
            />
          </div>
          <div>
            <button className="text-[#8ba17f] border-2 border-[#56644f] px-2 py-1 rounded-2xl hover:text-white hover:border-[#8ba17f] text-[1rem]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
