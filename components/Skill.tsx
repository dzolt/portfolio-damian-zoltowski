import React from "react";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean };

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex coursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter grayscale-[60%] 
          hover:filter-none transition duration-300 ease-in-out"
        src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
        alt=""
      />
    </div>
  );
}

export default Skill;
