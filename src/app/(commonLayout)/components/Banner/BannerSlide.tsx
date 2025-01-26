/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

const BannerSlide = ({ data, isActive }: { data: any; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isActive ? 50 : 0 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-5 text-5xl font-bold font-serif"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mb-5 font-serif"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button className="">Shop Now</Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerSlide;
