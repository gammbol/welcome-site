import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import projectPic from "../images/92e9218d5bd3a5f3333d2dc3bf8ac03c.jpg";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image alt="Project" src={projectPic} />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Stidy {i + 1} of 5:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                React (also known as React.js or ReactJS) is a free and
                open-source front-end JavaScript library for building user
                interfaces based on UI components. It is maintained by Meta
                (formerly Facebook) and a community of individual developers and
                companies.
              </p>
            </div>
          </div>
        ))}
        {/* Project */}
        {/* Project */}
        {/* Project */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
