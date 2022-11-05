import { motion } from "framer-motion";
import React, { useState } from "react";

const bands = [
  {
    id: 0,
    name: "The Beatles",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cheatsheet.com%2Fwp-content%2Fuploads%2F2019%2F08%2Fthe-beatles-name.jpg&f=1&nofb=1&ipt=809c7ae3625bc32eb95a89ca8ba2d462f9b3c4ff2ed717ea29bb9d23f4dec69f&ipo=images",
    description:
      "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era.",
  },
  // imagine dragons
  {
    id: 1,
    name: "Imagine Dragons",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._3hrgt45Z2fgaDC-sDXW8gHaE5%26pid%3DApi&f=1&ipt=70f42b589636a410acc8853c9571801bc3bc2657ad79f961b60c9c2b1a59d872&ipo=images",
    description:
      "Imagine Dragons are an American pop rock band from Las Vegas, Nevada, consisting of lead vocalist Dan Reynolds, lead guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman. Formed in 2008, the band first gained exposure with the release of their debut studio album Night Visions (2012), which was supported by the singles 'It's Time' and 'Radioactive'.",
  },
  // Maroon5
  {
    id: 2,
    name: "Maroon 5",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CR-_3JCvpsoyAz2SRg01nAHaE5%26pid%3DApi&f=1&ipt=e06a02788db8305996e4421348a8820d43bff0705c0212f3f876e886e9b1a635&ipo=images",
    description:
      "Maroon 5 is an American pop rock band that originated in Los Angeles, California. The band, which self-released an album called We Like Digging?, then signed to Reprise Records and released the album The Fourth World in 1997. After the album garnered a tepid response, the band parted ways with the record label.",
  },
];
const Bands = () => {
  return (
    <div className="bands m-10 md:block flex items-center justify-center flex-col">
      <div className="heading flex">
        <h1 className="md:text-6xl text-4xl font-bold">Meet the</h1>
        <h1 className="md:text-6xl text-4xl font-bold ml-2 text-violet-600 underline">
          players
        </h1>
      </div>
      <div className="band-list flex flex-wrap justify-center items-center my-10">
        {bands.map((band) => (
          <Band
            key={band.id}
            name={band.name}
            image={band.image}
            description={band.description}
          />
        ))}
      </div>
    </div>
  );
};

interface BandProps {
  name: string;
  image: string;
  description: string;
}

const Band = ({ name, image, description }: BandProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="card">
      {/* Set Image as background, set minimum height and width to image's */}
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "20em",
          minWidth: "30em",
          backgroundSize: "cover",
          marginLeft: "1em",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* If Hovered show overlay */}
        {isHovered && (
          <motion.div
            className="overlay"
            style={{
              // set minimum height and width to image's
              maxHeight: "20em",
              minHeight: "20em",
              maxWidth: "30em",
              minWidth: "30em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}
          >
            <div className="title">{name}</div>
            <div className="text">{description}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Bands;
