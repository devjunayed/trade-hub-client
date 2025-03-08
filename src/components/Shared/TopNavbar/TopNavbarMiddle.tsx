"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const items = [
  {
    id: 1,
    content:
      "Get 15% OFF on your first order! Use code WELCOME15 at checkout. Hurry, offer expires soon!",
    href: "/products",
  },
  {
    id: 2,
    content:
      "Buy 2, Get 1 FREE on select products. Shop now before stocks run out!",
    href: "/products",
  },
  {
    id: 3,
    href: "/products",
    content:
      "Enjoy FREE Shipping on orders over $50. No code needed—just shop & save!",
  },
];

const TopNavbarMiddle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="-mt-5" style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, color: "white" }}
          className="text-white text-center w-full"
        >
          {items[index].content}{" "}
          {items[index].href && (
            <Link
              href={items[index].href}
              className="border-b-1 border-white cursor-pointer"
            >
              Shop Now
            </Link>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TopNavbarMiddle;
