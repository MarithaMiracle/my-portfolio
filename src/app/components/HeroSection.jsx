"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stack = ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "React", "Next.js"];

const HeroSection = () => {
  return (
    <section className="relative py-8 px-4 sm:px-6 md:py-12 md:px-8 lg:py-16 lg:px-12 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-[#ADB7BE] text-sm sm:text-base tracking-widest uppercase mb-3">
            Software Engineer
          </p>

          <h1 className="text-[#eb94cf] dark:text-cyan-400 mb-4 font-extrabold leading-tight">
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Maritha Ebolosue
            </span>
          </h1>

          <p className="text-[#eb94cf]/90 dark:text-cyan-300/90 text-sm sm:text-base md:text-lg mb-4 font-medium">
            {stack.join(" · ")}
          </p>

          <p className="text-white dark:text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Full-stack engineer with 4+ years building production web applications,
            APIs, and backend systems, from NestJS services and PostgreSQL data models
            to React/Next.js product interfaces.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
            <Link
              href="/#projects"
              className="relative rounded-full lg:rounded-none z-10 px-5 py-3 text-[#eb94cf] dark:text-cyan-400 text-xs sm:text-base font-medium uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] whitespace-nowrap"
            >
              View Projects
            </Link>

            <Link
              href="/MARITHA_MIRACLE_EBOLOSUE_CV_SOFTWARE_ENGINEERING_2026.pdf"
              className="relative rounded-full lg:rounded-none z-10 px-5 py-3 text-[#eb94cf] dark:text-cyan-400 text-xs sm:text-base font-medium uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900 hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4] whitespace-nowrap"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
