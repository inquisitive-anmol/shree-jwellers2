// components/MapEmbed.tsx
import React from "react";

const MapEmbed: React.FC = () => {
    return (
        <div className="w-full h-[400px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.565988411326!2d74.46962599999999!3d27.699806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b33ce8b0dbdf9%3A0x18dc3859f3fcd70!2sPriyansh%20jewellers!5e0!3m2!1sen!2sin!4v1757401869539!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
