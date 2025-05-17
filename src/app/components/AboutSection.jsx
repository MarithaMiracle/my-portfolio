"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Mongo DB</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
        <li>Full-Stack Academy of Code</li>
        <li>Delta State University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 xl:px-16 xl:gap-16">
        {/* Text content */}
        <div className="text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eb94cf] dark:text-[#03e9f4] mb-4">
            /about_me
          </h2>
          <p className="text-sm sm:text-base text-white dark:text-[#ADB7BE] leading-relaxed">
            <TypeAnimation
              sequence={[
                `I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.`,
              ]}
              wrapper="span"
              speed={60}
              className="inline-block"
            />
          </p>

          <div className="flex flex-row flex-wrap justify-start gap-4 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              SKILLS
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              EDUCATION
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              CERTIFICATIONS
            </TabButton>
          </div>
          <div className="mt-8 text-sm sm:text-base">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* Image container */}
        <div className="flex justify-center items-center w-full">
          <div
            className="rotate-3 border-4 border-slate-700 rounded-lg p-2 inline-block transition-transform duration-300 cursor-pointer hover:rotate-0 hover:scale-105 max-w-[320px] sm:max-w-[400px] md:max-w-[500px] w-full"
            style={{ display: "inline-block" }}
          >
            {/* Light theme image */}
            <Image
              src="/images/Vd8vkc@$d.png"
              alt="Light Theme Image"
              width={500}
              height={500}
              priority
              className="block dark:hidden object-cover rounded-md w-full h-auto"
            />
            {/* Dark theme image */}
            <Image
              src="/images/aRJnoeMPL.png"
              alt="Dark Theme Image"
              width={500}
              height={500}
              priority
              className="hidden dark:block object-cover rounded-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
