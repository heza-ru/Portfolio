import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 5000);
  }, [setIsLoading]);

  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 })

  return controls.stop
}, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Loader</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
              {/* <img src="../../public/handy-machine-learning.gif" /> */}
              {/* <Image src="/../../public/handy-machine-learning.gif" alt="Picture of the author" width="22" height="22"/> */}
                {/* <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                >
                  
                </motion.path> */}
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                L 11, 27
                L 11, 72
                L 50, 95
                L 89, 73
                L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
      <motion.h1 className="number" style={{ display: rounded.get() >= 100 ? "none" : 1 }}>{rounded}</motion.h1>
    </AnimatePresence>
  );
}

export default Loader;
