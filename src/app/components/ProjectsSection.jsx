"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        My Portfolio
      </span>
    ),
    description: "A personal website built with React, Next.js, and Tailwind CSS designed to showcase my work, skills, and experience as a full-stack developer. This project reflects my focus on performance, clean UI/UX, and smooth animations. From dynamic project filtering to theme switching, a live clock, an engaging game, interactive transitions, and even an AI assistant, every detail was crafted to deliver a polished, fun, and professional experience.",
    image: "/project 1.png",
    tag: ["All", "Web"],
    gitUrl: "https://my-portfolio-maritha.vercel.app/",
    previewUrl: "https://my-portfolio-maritha.vercel.app/",
  },
  {
    id: 2,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        QUEST
      </span>
    ),
    description: "A modern feedback collection platform built using React, TypeScript, and various back-end frameworks designed to help teams gather insights effortlessly. With seamless integration into existing tools, Quest makes it easy to start collecting feedback right away. It's fully customizable to suit users' specific needs and brand with powerful analytics to empower them to make informed decisions. It is built for security and scalability, growing with businesses and keeping data protected.",
    image: "/project 2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MarithaMiracle/quest",
    previewUrl: "https://github.com/MarithaMiracle/quest",
  },
  {
    id: 3,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        ESTATIFY
      </span>
    ),
    description: "A modern feedback collection platform built using React, TypeScript, and various back-end frameworks designed to help teams gather insights effortlessly. With seamless integration into existing tools, Quest makes it easy to start collecting feedback right away. It's fully customizable to suit users' specific needs and brand with powerful analytics to empower them to make informed decisions. It is built for security and scalability, growing with businesses and keeping data protected.",
    image: "/estatify mockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MarithaMiracle/shore",
    previewUrl: "https://github.com/MarithaMiracle/shore",
  },
  {
    id: 4,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        MariPDF
      </span>
    ),
    description: "MariPDF, built using React frameworks, is a simple, efficient file conversion tool designed to seamlessly convert DOC/DOCX to PDF formats. With an intuitive drag-and-drop interface, real-time upload progress, and night/day toggling, MariPDF makes document conversion fast and user-friendly.",
    image: "/project 3.png",
    tag: ["All", "Web"],
    gitUrl: "https://word-pdf-converter-maritha.vercel.app",
    previewUrl: "https://word-pdf-converter-maritha.vercel.app",
  },
  {
    id: 5,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        The Alarm Pro
      </span>
    ),
    description: "The Alarm Pro is an all-in-one productivity tool that combines a sleek calendar with a dynamic alarm system to help users stay on schedule. Styled in calming shades of blue with a live clock, the app brings both functionality and personality to daily routine.",
    image: "/project 4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://alarm-clock-app-maritha.vercel.app",
    previewUrl: "https://alarm-clock-app-maritha.vercel.app",
  },
  {
    id: 6,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        Solana Blockchain Template
      </span>
    ),
    description: "Solana Blockchain Template is a lightweight developer template for interacting with the Solana blockchain using TypeScript and JavaScript. This project includes essential scripts for generating cryptographic keypairs, checking wallet balances, creating and sending transactions, and interacting with custom on-chain programs. It is ideal for developers exploring Solana's capabilities and provides a practical way to understand and build on the Solana network using clean, minimal code.",
    image: "/PProject 5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MarithaMiracle/Solana",
    previewUrl: "https://github.com/MarithaMiracle/Solana",
  },
  {
    id: 7,
    title: (
      <span className="text-[#eb94cf] dark:text-[#03e9f4]">
        Solana NFT Toolkit
      </span>
    ),
    description: "Solana NFT Toolkit is a developer utility that simplifies creating and managing NFTs on the Solana blockchain using Metaplex. It connects to Solana’s devnet, handles wallet keypairs, and provides structures for minting and updating NFTs with metadata such as name, symbol, description, seller fees, and image assets. This toolkit is ideal for developers building NFT projects who want an easy-to-use foundation for interacting with the blockchain and Metaplex protocols programmatically.",
    image: "/PProject 6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MarithaMiracle/solana-metaplex",
    previewUrl: "https://github.com/MarithaMiracle/solana-metaplex",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4 md:px-12 lg:px-20 py-10 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-[#eb94cf] dark:text-[#03e9f4] mt-20 mb-8 md:mb-12">
        /my_projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="space-y-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              imageLeft={index % 2 === 0} // even: left image, odd: right image
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
