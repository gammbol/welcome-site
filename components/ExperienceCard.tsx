import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import cardPic from "../images/88fbe67e52a30de2dc47b8e1be06c097.jpg";
import reactPic from "../images/atom.png";
import cssPic from "../images/css.png";
import htmlPic from "../images/html.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          alt="Experience Card Profile pic"
          src={cardPic}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Freelance</p>
        <div className="flex space-x-2 my-2">
          <Image src={htmlPic} className="h-10 w-10 rounded-full" alt="HTML" />
          <Image src={cssPic} className="h-10 w-10 rounded-full" alt="HTML" />
          <Image src={reactPic} className="h-10 w-10 rounded-full" alt="HTML" />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Made 3 sites already</li>
          <li>Making dinamic sites using React</li>
          <li>Making SSR sites using NextJS</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
