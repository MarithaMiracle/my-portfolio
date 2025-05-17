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
      <ul className="list-disc pl-3 space-y-0.5" style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}>
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
      <ul className="list-disc pl-3 space-y-0.5" style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}>
        <li>Full-Stack Academy of Code</li>
        <li>Delta State University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-3 space-y-0.5" style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}>
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
    <section
      className="text-white"
      id="about"
      style={{ padding: "clamp(12px, 3vw, 48px)" }}
    >
      <div
        className="flex flex-col md:flex-row gap-4"
        style={{
          fontSize: "clamp(12px, 1.5vw, 18px)",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "clamp(8px, 3vw, 48px)",
          paddingRight: "clamp(8px, 3vw, 48px)",
        }}
      >
        {/* Left: Text content */}
        <div
          className="flex-1 flex flex-col text-left"
          style={{ minWidth: "200px", maxWidth: "600px" }}
        >
          <h2
            className="font-bold mb-2 text-[#eb94cf] dark:text-[#03e9f4]"
            style={{
             // replace with your pink hex or Tailwind color if needed
              fontSize: "clamp(14px, 3vw, 24px)",
            }}
          >
            /about_me
          </h2>
          <p
            className="text-white dark:text-[#ADB7BE] leading-tight"
            style={{ fontSize: "clamp(12px, 1.4vw, 16px)", maxWidth: "100%" }}
          >
            <TypeAnimation
              sequence={[
                `I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.`,
              ]}
              wrapper="span"
              speed={60}
              className="inline-block"
            />
          </p>

          {/* Tab Buttons */}
          <div className="grid grid-cols-3 gap-1 w-full mt-2">
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

          <div
            className="mt-2"
            style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* Right: Image container centered both vertically and horizontally */}
        <div
          className="md:w-1/2 flex justify-center items-center w-full"
          style={{ minHeight: "380px" }} // increased from 320px to match bigger image
        >
          <div
            className="rotate-3 border border-slate-700 rounded p-2 inline-block transition-transform duration-300 cursor-pointer hover:rotate-0 hover:scale-105"
            style={{ maxWidth: "380px", width: "100%" }} // increased maxWidth to 380px
          >
            {/* Light theme image */}
            <Image
              src="/images/Vd8vkc@$d.png"
              alt="Light Theme Image"
              width={380}
              height={380}
              priority
              className="block dark:hidden object-cover rounded w-full h-auto"
            />
            {/* Dark theme image */}
            <Image
              src="/images/aRJnoeMPL.png"
              alt="Dark Theme Image"
              width={380}
              height={380}
              priority
              className="hidden dark:block object-cover rounded w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
