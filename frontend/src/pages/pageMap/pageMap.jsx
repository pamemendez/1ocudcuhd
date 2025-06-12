import React from "react";
import Settings from "../../componets/settings/settings";
import MainHeader from "../../componets/mainHeader/mainHeader";

export default function PageMap() {
    return (
        <>
            <MainHeader />

            <div className="bg-white flex items-center justify-center px-4 pt-4 pb-2">
                <div className="w-full max-w-6xl h-[500px] shadow-md rounded overflow-hidden">
                    <iframe
                        title="Mapa SENAI Campinas"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.025805280417!2d-47.07052372574048!3d-23.02568194607838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf1b9262b14b%3A0xcf226d96c25df42d!2sSENAI%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1715793097297!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Settings />
        </>
    );
}
