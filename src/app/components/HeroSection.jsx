"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 md:py-12 md:px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="max-w-3xl w-full"
        >
          <h1 className="text-[#eb94cf] dark:text-cyan-400 mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
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
                "a Software Engineer",
                4000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              className="inline-block"
            />
          </h1>

          <p className="text-white dark:text-[#ADB7BE] text-sm md:text-base lg:text-lg mb-6">
            ...I&apos;m a Node.js Developer passionate about building and handling
            robust backend databases, dynamic websites, and scalable
            applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Hire Me Button */}
            <Link
              href="/#contact"
              className="relative z-10 px-5 py-3 text-[#eb94cf] dark:text-cyan-400 text-sm md:text-base font-medium uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] whitespace-nowrap min-w-0 flex-shrink"
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
              className="relative z-10 px-5 py-3 text-[#eb94cf] dark:text-cyan-400 text-sm md:text-base font-medium uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] whitespace-nowrap min-w-0 flex-shrink"
            >
              Download CV
              <span className="absolute z-0 top-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,transparent,#eb94cf)] dark:bg-[linear-gradient(90deg,transparent,#03e9f4)] animate-[border-run-top_1s_linear_infinite]" />
              <span className="absolute z-0 top-0 right-0 w-0.5 h-full bg-[linear-gradient(180deg,transparent,#eb94cf)] dark:bg-[linear-gradient(180deg,transparent,#03e9f4)] animate-[border-run-right_1s_linear_infinite] animation-delay-[0.25s]" />
              <span className="absolute z-0 bottom-0 right-0 w-full h-0.5 bg-[linear-gradient(270deg,transparent,#eb94cf)] dark:bg-[linear-gradient(270deg,transparent,#03e9f4)] animate-[border-run-bottom_1s_linear_infinite] animation-delay-[0.5s]" />
              <span className="absolute z-0 bottom-0 left-0 w-0.5 h-full bg-[linear-gradient(0deg,transparent,#eb94cf)] dark:bg-[linear-gradient(0deg,transparent,#03e9f4)] animate-[border-run-left_1s_linear_infinite] animation-delay-[0.75s]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
