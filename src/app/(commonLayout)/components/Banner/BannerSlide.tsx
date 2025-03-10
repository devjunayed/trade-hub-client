/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Link from "next/link";

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
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-5 text-gray-200 text-xl md:text-2xl xl:text-3xl font-bold font-serif"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mb-5 text-gray-300 md:text-md font-serif"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Link href="/products"  className=" border-b py-2 text-white border-white">Shop Now</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BannerSlide;
