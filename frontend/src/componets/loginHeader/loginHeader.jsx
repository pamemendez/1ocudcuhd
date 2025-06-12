import React from "react";
import logoSensor from "../../assets/logoSensor.png";
import { FaPlus } from "react-icons/fa"; 

export default function LoginHeader() {
  return (
    <header className="bg-white flex justify-between items-center px-8 py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src={logoSensor} alt="Logo SensorConnect" className="h-10 w-auto" />
      </div>
      <button className="flex items-center overflow-hidden rounded-full h-12 bg-[#3F9CFA]">
        <div className="bg-[#0C6CD3] h-full px-3 flex items-center justify-center">
          <FaPlus className="text-white text-lg" /> 
        </div>
        <span className="text-white font-medium text-lg px-4">AddUser</span> 
      </button>
    </header>
  );
}
