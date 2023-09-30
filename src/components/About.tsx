// import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative h-screen flex md:flex-row flex-col text-center md:text-left items-center justify-evenly px-6 xl:px-52 mx-auto bg-white w-full">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="absolute top-24  -mt-4 md:mt-0 uppercase font-extralight tracking-[20px]  text-xl md:text-2xl text-primary "
      >
        Di
      </motion.h3>
      <motion.img
        className="retro-img  ml-0 md:ml-5 -mb-16 mt-10 md:mt-10 md:mb-0 flex-shrink-0 w-44 h-44 object-cover   md:h-64 md:w-64 xl:w-[300px] xl:h-[300px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://1.bp.blogspot.com/-dtvFFZQ2OTE/YPLdL3iKodI/AAAAAAAAkC8/HuAsGot_sI0QAzp9kqZmxHu6yZwjssOHQCLcBGAsYHQ/s16000/Alone%2BBoy%2BText%2BDP.jpg"
        alt="Landscape picture"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="space-y-10 mx-8 md:mx-12 px-0 md:px-10"
      >
        <h4 className=" flex flex-col text-2xl -mb-6 md:mb-0  max-w-md font-semibold md:text-4xl md:font-semibold">
          Perito Industriale
          <span className="underline decoration-secondary">Luca Cazzaniga</span>
        </h4>
        <h3 className="text-base -mb-6 md:text-xl text-start tracking-wider font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          veritatis? Rerum excepturi nihil eius aspernatur reprehenderit aut
          tempora, error adipisci hic suscipit voluptatum animi possimus, dolore
          blanditiis quisquam dolorum dolorem est voluptatem alias aliquid
          iusto! Blanditiis laboriosam earum neque ab? Et error odit facilis
          provident itaque, placeat voluptates vero animi!
        </h3>
      </motion.div>
    </div>
  );
};

export default About;
