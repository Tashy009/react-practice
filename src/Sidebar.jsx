import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { social, links } from "./sidebarData";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();
  console.log(isSidebarOpen);

  return (
    <>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>

      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button className="close-btn side" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links side">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons side">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
