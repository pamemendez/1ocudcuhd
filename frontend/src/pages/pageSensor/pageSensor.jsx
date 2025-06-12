import React from "react";
import { FaLightbulb, FaThermometerHalf, FaCalculator } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import Settings from "../../componets/settings/settings";
import MainHeader from "../../componets/mainHeader/mainHeader";

const sensors = [
    {
        id: 1,
        name: "Dandelion 1",
        icon: <FaLightbulb className="text-sky-400 text-4xl" />,
        updated: "4/14/2025",
    },
    {
        id: 2,
        name: "Dandelion 2",
        icon: (
            <div className="text-sky-400 text-4xl flex items-center gap-1">
                <WiHumidity />
                <FaCalculator />
            </div>
        ),
        updated: "4/14/2025",
    },
    {
        id: 3,
        name: "Dandelion 3",
        icon: (
            <div className="text-4xl flex items-center gap-1">
                <FaThermometerHalf className="text-red-400" />
                <FaThermometerHalf className="text-blue-400" />
            </div>
        ),
        updated: "4/14/2025",
    },
    {
        id: 4,
        name: "Dandelion 4",
        icon: <FaCalculator className="text-sky-400 text-4xl" />,
        updated: "4/14/2025",
    },
];

export default function PageSensor() {
    return (
        <>
            <MainHeader />

            <div className="flex flex-col min-h-[calc(100vh-64px)] bg-gray-900 text-white">
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {sensors.map((sensor) => (
                            <div key={sensor.id} className="flex flex-col items-center">
                                {sensor.icon}
                                <h3 className="mt-4 text-lg font-bold">{sensor.name}</h3>
                                <p className="text-sm text-gray-400">
                                    Last Updated: {sensor.updated}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Settings />
                </div>
            </div>
        </>
    );
}
