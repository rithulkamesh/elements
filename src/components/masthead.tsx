import { motion } from "framer-motion";

const Masthead = () => {
  // Animate the masthead
  const mastheadVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="mast">
      {/* Display a banner about 1/3 of the page */}
      <motion.div className="h-[80vh] text-white masthead-bg">
        <VideoPlayer />
        <div className="layer">
          <div className="mast-text">
            <motion.h1
              className="font-bold"
              variants={mastheadVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              Music Fest '23
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const VideoPlayer = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="masthead-video absolute w-full h-full object-cover"
    >
      <source src="/loop.mov" type="video/mp4" />
    </video>
  );
};
export default Masthead;
