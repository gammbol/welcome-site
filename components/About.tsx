/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import aboutPic from "../images/i.webp";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={aboutPic}
          alt="about"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          backround
        </h4>
        <p className="text-sm">
          Hi! I'm Gammbol! I'm a front end developer. Web programming is the
          most interesting thing I've ever done. I've been doing this for nearly
          a year, so I want to show you the things I've learnt!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
