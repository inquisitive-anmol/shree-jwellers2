import { motion } from "motion/react";

// Shutter Animation Overlay
export default function Shutter({ onFinish }: { onFinish: () => void }) {
    return (
      <motion.div
        className="fixed inset-0 bg-black z-40"
        initial={{ y: 0 }}          // covers full screen
        animate={{ y: "-100%" }}    // slides up like shutter
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
      />
    );
  }