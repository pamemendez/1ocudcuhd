import React from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../componets/mainHeader/mainHeader";
import HomeFooter from "../../componets/homeFooter/homeFooter";

import {
  FaLightbulb,
  FaThermometerHalf,
  FaCalculator,
  FaBook,
  FaUtensils,
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import {
  MdClass,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdMeetingRoom,
} from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import banner from "../../assets/banner.png";
import imageBanner1 from "../../assets/imageBanner1.png";
import imageBanner2 from "../../assets/imageBanner2.png";
import imageBanner3 from "../../assets/imageBanner3.png";
import LoginHeader from "../../componets/loginHeader/loginHeader";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    switch (page) {
      case "Login":
        navigate("/login");
        break;
      case "Home":
        navigate("/home");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full font-sans">
      <MainHeader />

      {/* Banner com texto e imagens */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Smart solutions
            <br />
            for real-time sensing
          </h1>
          <p className="text-gray-600">
            Sensor data is widely available, but often altered to suit different
            environments or needs.
          </p>
        </div>

        <div className="flex justify-center items-center mt-8 md:mt-0 md:w-1/2 relative">
          <img
            src={imageBanner3}
            alt="Sensor setup"
            className="rounded-xl w-56 h-40 object-cover shadow-lg z-10"
            style={{ marginRight: "-40px" }}
          />
          <img
            src={imageBanner2}
            alt="Sensor field"
            className="rounded-xl w-56 h-40 object-cover shadow-lg z-20"
          />
          <img
            src={imageBanner1}
            alt="Sensor device"
            className="rounded-xl w-56 h-40 object-cover shadow-lg z-30"
            style={{ marginLeft: "-40px" }}
          />
        </div>
      </section>

      {/* Imagem principal */}
      <div className="w-full">
        <img src={banner} alt="City view" className="w-full object-cover" />
      </div>

      {/* Used Sensors */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-10">Used sensors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Luminosity",
              icon: <FaLightbulb className="text-yellow-500 text-5xl" />,
            },
            {
              name: "Humidity",
              icon: <WiHumidity className="text-blue-500 text-6xl" />,
            },
            {
              name: "Temperature",
              icon: (
                <div className="flex justify-center gap-2">
                  <FaThermometerHalf className="text-red-500 text-5xl" />
                  <FaThermometerHalf className="text-blue-500 text-5xl" />
                </div>
              ),
            },
            {
              name: "Counter",
              icon: <FaCalculator className="text-green-500 text-5xl" />,
            },
          ].map((sensor) => (
            <div
              key={sensor.name}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="mb-4 flex justify-center">{sensor.icon}</div>
              <h3 className="font-bold text-lg mb-2">{sensor.name}</h3>
              <button
                onClick={() => handleNavigate("Login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Find a sensor
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Where to apply */}
      <section className="px-8 pb-12">
        <h2 className="text-3xl font-semibold mb-10">Where to apply?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              label: "Classes",
              icon: <MdClass className="text-blue-500 text-2xl" />,
            },
            {
              label: "Library",
              icon: <FaBook className="text-blue-500 text-2xl" />,
            },
            {
              label: "Secretary",
              icon: (
                <HiOutlineOfficeBuilding className="text-blue-500 text-2xl" />
              ),
            },
            {
              label: "Canteen",
              icon: <FaUtensils className="text-blue-500 text-2xl" />,
            },
            {
              label: "Workshop",
              icon: <MdMeetingRoom className="text-blue-500 text-2xl" />,
            },
            {
              label: "More",
              icon: <MdOutlineMoreHoriz className="text-blue-500 text-2xl" />,
            },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => handleNavigate("Login")}
              className="bg-white p-4 w-32 h-32 flex flex-col items-center justify-center rounded-xl shadow hover:bg-gray-100 cursor-pointer"
            >
              <div className="mb-2">{item.icon}</div>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Info Boxes */}
      <section className="px-8 pb-16 grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-800">
            Check the status of your sensor
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            We can determine your sensor’s needs.
          </p>
          <button
            onClick={() => handleNavigate("Login")}
            className="text-orange-600 text-sm font-medium mt-2"
          >
            To check
          </button>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-800">
            Manage Sensor Settings
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Here you can find the latest updates.
          </p>
          <button
            onClick={() => handleNavigate("Home")}
            className="text-blue-600 text-sm font-medium mt-2"
          >
            Go to Upgrades
          </button>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-800">
            Optimize Your Sensor Performance
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Follow this guide to set up your sensor.
          </p>
          <button
            onClick={() => handleNavigate("Login")}
            className="text-green-600 text-sm font-medium mt-2"
          >
            Start your sensor setup
          </button>
        </div>
      </section>

      <HomeFooter />

    </div>
  );
}
