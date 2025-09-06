'use client';

import { motion } from "framer-motion";
import { useEffect } from "react";
import CountUp from "../CountUp";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => finishLoading(), 2500);
        return () => clearTimeout(timer);
    }, [finishLoading]);

    return (
        <motion.div
            className="flex relative items-center justify-center h-screen w-full bg-black/90"
        >
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <img
                    src="/images/pjw.png"
                    alt="Animated"
                    className="w-full object-cover rounded-lg shadow-lg"
                />
            </motion.div>
            <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={0.2}
                className="text-4xl bg-cream-gradient font-bold absolute bottom-20 left-10 text-cream-gradient"
            />
        </motion.div>
    );
}
