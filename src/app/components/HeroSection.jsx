"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-[#eb94cf] dark:text-cyan-400 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="block text-white dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-primary-200 dark:to-secondary-200">
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Maritha Ebolosue",
                4000,
                "a Web Developer",
                4000,
                "a Full-Stack Pro",
                4000,
                "a Tech ",
                4000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              className="inline-block"
            />
          </h1>
          <p className="text-white dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            ...I&apos;m a Node.js Developer passionate about building and handling
            robust backend databases, dynamic websites, and scalable
            applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Hire Me Button */}
            <Link
              href="/#contact"
              className="relative z-10 px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-widest text-[#eb94cf] dark:text-cyan-400 text-sm sm:text-lg font-medium overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]"
            >
              Hire Me
              <span className="absolute z-0 top-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,transparent,#eb94cf)] dark:bg-[linear-gradient(90deg,transparent,#03e9f4)] animate-[border-run-top_1s_linear_infinite]" />
              <span className="absolute z-0 top-0 right-0 w-0.5 h-full bg-[linear-gradient(180deg,transparent,#eb94cf)] dark:bg-[linear-gradient(180deg,transparent,#03e9f4)] animate-[border-run-right_1s_linear_infinite] animation-delay-[0.25s]" />
              <span className="absolute z-0 bottom-0 right-0 w-full h-0.5 bg-[linear-gradient(270deg,transparent,#eb94cf)] dark:bg-[linear-gradient(270deg,transparent,#03e9f4)] animate-[border-run-bottom_1s_linear_infinite] animation-delay-[0.5s]" />
              <span className="absolute z-0 bottom-0 left-0 w-0.5 h-full bg-[linear-gradient(0deg,transparent,#eb94cf)] dark:bg-[linear-gradient(0deg,transparent,#03e9f4)] animate-[border-run-left_1s_linear_infinite] animation-delay-[0.75s]" />
            </Link>

            {/* Download CV Button */}
            <Link
              href="/Maritha Miracle Ebolosue Resume.pdf"
              className="relative z-10 px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-widest text-[#eb94cf] dark:text-cyan-400 text-sm sm:text-lg font-medium overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]"
            >
              DOWNLOAD CV
              <span className="absolute z-0 top-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,transparent,#eb94cf)] dark:bg-[linear-gradient(90deg,transparent,#03e9f4)] animate-[border-run-top_1s_linear_infinite]" />
              <span className="absolute z-0 top-0 right-0 w-0.5 h-full bg-[linear-gradient(180deg,transparent,#eb94cf)] dark:bg-[linear-gradient(180deg,transparent,#03e9f4)] animate-[border-run-right_1s_linear_infinite] animation-delay-[0.25s]" />
              <span className="absolute z-0 bottom-0 right-0 w-full h-0.5 bg-[linear-gradient(270deg,transparent,#eb94cf)] dark:bg-[linear-gradient(270deg,transparent,#03e9f4)] animate-[border-run-bottom_1s_linear_infinite] animation-delay-[0.5s]" />
              <span className="absolute z-0 bottom-0 left-0 w-0.5 h-full bg-[linear-gradient(0deg,transparent,#eb94cf)] dark:bg-[linear-gradient(0deg,transparent,#03e9f4)] animate-[border-run-left_1s_linear_infinite] animation-delay-[0.75s]" />
            </Link>
          </div>
        </motion.div>

        <motion.div className="hidden sm:block sm:col-span-4 place-self-center mt-4 lg:mt-0">
          {/* Uncomment and update this block to show an image if desired */}
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
