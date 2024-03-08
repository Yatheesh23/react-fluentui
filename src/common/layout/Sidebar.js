import React, { useState, useEffect } from "react";
import ideaForge from "../../assets/ideaforge.png";
import { Image } from "@fluentui/react-components";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navItems, setNavItems] = useState([
    { id: 1, name: "Dashboard", isActive: false, path: "/dashboard" },
    { id: 2, name: "Monitoring", isActive: false, path: "/monitoring" },
    { id: 3, name: "Services", isActive: false, path: "/service" },
    { id: 4, name: "About Us", isActive: false, path: "/about-us" },
  ]);
  useEffect(() => {
    const updateRoutes = navItems.map((ele) => ({
      ...ele,
      isActive: location.pathname === ele.path,
    }));
    setNavItems(updateRoutes);
  }, [location.pathname]);
  const handleRouter = (nav) => {
    navigate(nav.path);
  };

  return (
    <div>
      <div className="logoContainer">
        <Image
          alt="logo"
          shape="rounded"
          src={ideaForge}
          height={150}
          width={150}
        />
      </div>
      <div>
        <nav className="navContainer">
          <ul>
            {navItems.map((nav, index) => (
              <li
                key={index}
                onClick={() => {
                  handleRouter(nav);
                }}
                className={nav.isActive ? "active" : ""}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
