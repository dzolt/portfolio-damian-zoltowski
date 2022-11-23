import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-between space-y-7 space-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://www.gstatic.com/devrel-devsite/prod/v68ffab397cab4b2929d42447c6687d169e807aa5b3dd2e0657c66c185de8e01d/cloud/images/social-icon-google-cloud-1200-630.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO Of Google Cloud</h4>
        <p className="font-bold text-2xl mt-1">Google</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work ... - Ended..
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
