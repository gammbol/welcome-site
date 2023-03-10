import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import htmlPic from "../images/html.png";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image className="rounded-full" alt="Skill Image" src={htmlPic}></Image>

        <div className="absolute top-0 opacity-0 group-hover:opacity-80 transiton duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100%">80%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
