import { motion } from "framer-motion";
import Button from "../components/Button";

export const mastheadVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Masthead = () => {
  return (
    <div className="mast">
      <motion.div className="h-[80vh] text-white masthead-bg">
        <VideoPlayer />
        <div className="layer flex flex-col">
          <div className="flex flex-col">
            <div className="mast-text">
              <motion.h1
                className="font-bold"
                variants={mastheadVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                Music Fest &apos;23
              </motion.h1>
            </div>
            <div className="mast-sub">
              <motion.h2
                className="font-bold"
                variants={mastheadVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                The Perfect start to 2023
              </motion.h2>
            </div>
          </div>
          <Button href="#tickets">Get your tickets</Button>
        </div>
      </motion.div>
    </div>
  );
};

export const VideoPlayer = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="masthead-video absolute w-full h-full object-cover"
    >
      <source
        src="https://media.githubusercontent.com/media/rithulkamesh/elements/master/public/loop.mov"
        type="video/mp4"
      />
    </video>
  );
};
export default Masthead;
