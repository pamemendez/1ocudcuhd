import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi"; // Ícone verde para MAP
import { AiOutlineWarning } from "react-icons/ai"; // Ícone amarelo para Status
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("SENSORS");
  const [menuOpen, setMenuOpen] = useState(true);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (!menuOpen) setMenuOpen(true);

    switch (tab) {
      case "SENSORS":
        navigate("/pageSensor");
        break;
      case "MAP":
        navigate("/pageMap");
        break;
      case "STATUS":
        navigate("/sensorTable");
        break;
      default:
        break;
    }
  };

  const tabContent = {
    SENSORS: (
      <>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "#4681C4" }}
        >
          <FaLightbulb className="text-white text-3xl" />
        </div>
        <h2 className="text-xl font-bold">Luminosity</h2>
        <p className="text-base text-gray-300">Last Updated 4/14/2025</p>
      </>
    ),
    MAP: (
      <>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "#22C55E" }} // verde
        >
          <GiPlantSeed className="text-white text-3xl" />
        </div>
        <h2 className="text-xl font-bold">MAP Sensor</h2>
        <p className="text-base text-gray-300">Updated 4/14/2025</p>
      </>
    ),
    STATUS: (
      <>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "#FACC15" }} // amarelo
        >
          <AiOutlineWarning className="text-white text-3xl" />
        </div>
        <h2 className="text-xl font-bold">System Status</h2>
        <p className="text-base text-gray-300">Last Check 4/14/2025</p>
      </>
    ),
  };

  return (
    <div className="font-sans text-white text-base">
      {/* Top Menu */}
      <div className="flex justify-between items-center bg-transparent">
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`px-5 py-4 font-semibold transition text-lg`}
            style={{
              backgroundColor: menuOpen ? "#3A6BA4" : "transparent",
              color: menuOpen ? "white" : "#3A6BA4",
            }}
          >
            ☰
          </button>
          <div className="rounded-b-md overflow-hidden" style={{ backgroundColor: "#4681C4" }}>
            {["SENSORS", "MAP", "STATUS"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className="relative px-8 py-4 text-lg font-semibold transition"
                style={{
                  backgroundColor: activeTab === tab ? "#3A6BA4" : "transparent",
                  color: "white",
                }}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-white p-6" style={{ backgroundColor: "#363636" }}>
        <div className={`flex ${menuOpen ? "justify-between" : "justify-center"} items-start`}>
          {/* Sidebar Sensor Info */}
          {menuOpen && (
            <div
              className="p-8 w-72 flex flex-col items-center"
              style={{ backgroundColor: "#2F2F2F", minHeight: "280px" }} // ajusta altura mínima para ficar mais quadrado
            >
              {tabContent[activeTab]}
            </div>
          )}

          {/* Atmospheric Sensorsic + Soil Info */}
          <div className="flex-1 p-8 grid grid-cols-2 gap-6">
            {/* Atmospheric Sensorsic */}
            <div>
              <h4 className="text-base tracking-widest text-gray-400 border-b border-gray-600 pb-2 mb-6">
                ATMOSPHERIC SENSORS
              </h4>
              <div className="flex justify-between text-center">
                <div>
                  <p className="text-gray-400 text-base">Humidity</p>
                  <p className="text-blue-400 text-2xl font-bold">
                    90<span className="text-lg">%</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-base">Temperature</p>
                  <p className="text-blue-400 text-2xl font-bold">
                    17<span className="text-lg">°C</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-base">Altitude</p>
                  <p className="text-blue-400 text-2xl font-bold">
                    2<span className="text-lg">M</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Soil */}
            <div>
              <h4 className="text-base tracking-widest text-gray-400 border-b border-gray-600 pb-2 mb-6">
                SOIL SENSORS
              </h4>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-base text-gray-300 mb-2">Moisture Level</p>
                  {[90, 28, 63].map((val, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <span className="text-blue-400 w-10 inline-block text-lg">{val}</span>
                      <div className="bg-gray-400 h-3 rounded w-full max-w-[180px] ml-3">
                        <div className="bg-blue-400 h-3 rounded" style={{ width: `${val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-base text-gray-300 mb-2">Moisture Level</p>
                  {[12, 13, 10].map((val, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <span className="text-blue-400 w-10 inline-block text-lg">{val}</span>
                      <div className="bg-gray-400 h-3 rounded w-full max-w-[180px] ml-3">
                        <div
                          className="bg-blue-400 h-3 rounded"
                          style={{ width: `${val * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
