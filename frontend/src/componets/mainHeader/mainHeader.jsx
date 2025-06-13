import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSensor from "../../assets/logoSensor.png";
import { FaPlus } from "react-icons/fa";

export default function MainHeader() {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setActive(page);
    switch (page) {
      case "home":
        navigate("/home");
        break;
      case "manage":
        navigate("/sensortable");
        break;
      case "dash":
        navigate("/dash");
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-white flex justify-between items-center px-8 py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src={logoSensor} alt="Logo SensorConnect" className="h-10 w-auto" />
      </div>
      <nav className="flex gap-6 items-center">
        <button
          onClick={() => handleNavigation("home")}
          className={`font-medium text-lg transition ${active === "home" ? "text-blue-600" : "text-gray-600"
            }`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("manage")}
          className={`font-medium text-lg transition ${active === "manage" ? "text-blue-600" : "text-gray-600"
            }`}
        >
          Manage Sensor
        </button>
        <button
          onClick={() => handleNavigation("dash")}
          className={`font-medium text-lg transition ${active === "dash" ? "text-blue-600" : "text-gray-600"
            }`}
        >
          Dashboard
        </button>
      </nav>

      <button
        className="flex items-center overflow-hidden rounded-full h-12 bg-[#3F9CFA]"
        onClick={() => navigate('/login')}
      >
        <span className="text-white font-medium text-lg px-4">Login</span>
      </button>
    </header>
  );
}
