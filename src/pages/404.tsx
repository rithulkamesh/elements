import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";
import { mastheadVariants, VideoPlayer } from "../sections/Masthead";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <VideoPlayer />
      <div className="layer flex flex-col text-white">
        <div className="font-bold text-5xl text-center pb-10">
          <motion.h1
            className="font-bold"
            variants={mastheadVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Whoa there Cowboy, This page does not exist
          </motion.h1>
        </div>
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
