"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GoWithMe Ride",
    description:
      "Production carpooling platform for Nigeria — live marketing site plus iOS/Android apps. Backend engineering for NestJS services supporting users, trips, payments, KYC, notifications, and admin workflows on a commercial team. Source remains company-owned.",
    image: "/gowithme.png",
    tag: ["All", "Backend", "Production"],
    badge: "Production · Web + Mobile",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Paystack", "MetaMap", "Firebase", "Render"],
    caseStudyHighlights: [
      "Public landing site at gowithmeride.com",
      "Mobile apps live on Google Play and the Apple App Store",
      "Payment flows with Paystack and KYC verification via MetaMap",
      "Notification services across Firebase, SMS, and email",
      "Backend source is private · proprietary",
    ],
    gitUrl: null,
    previewUrl: "https://www.gowithmeride.com/",
    previewLabel: "Website",
    imagePosition: "object-top",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.gowithme",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/gowithme-ride/id6758392290",
      },
    ],
  },
  {
    id: 2,
    title: "CleanScape",
    description:
      "Two-sided cleaning-services marketplace with role-based dashboards for customers, cleaners, and admins. Production-oriented Next.js app with auth, payments, messaging, monitoring, and scheduled jobs.",
    image: "/cleanscape.png",
    tag: ["All", "Full-Stack", "Web"],
    badge: "Public case study",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Sentry", "Twilio", "Zod"],
    caseStudyHighlights: [
      "Role-based routing from profiles (customer · cleaner · admin)",
      "Stripe Connect payments and operational notifications",
      "Supabase schema migrations, storage policies, and realtime",
      "Sentry instrumentation and external cron job orchestration",
    ],
    gitUrl: "https://github.com/MarithaMiracle/cleanscape",
    previewUrl: "https://cleanscape-two.vercel.app",
    imagePosition: "object-top",
  },
  {
    id: 3,
    title: "InsureTech API",
    description:
      "NestJS insurance backend for purchasing plans, activating policies, and managing wallet balances. Modular domain services with Sequelize models, Swagger docs, and Jest coverage.",
    image: "/insuretech.svg",
    tag: ["All", "Backend"],
    badge: "Backend API",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Sequelize", "Swagger", "Jest"],
    caseStudyHighlights: [
      "Plan purchase with wallet deduction and policy activation rules",
      "Module-bound controllers/services with unit and e2e tests",
      "OpenAPI documentation via Swagger UI",
    ],
    gitUrl: "https://github.com/MarithaMiracle/insuretech-api",
    previewUrl: null,
    imagePosition: "object-top",
  },
  {
    id: 4,
    title: "Quest",
    description:
      "Feedback · SaaS-style collection platform with authenticated workflows, Postgres data modeling via Drizzle, and Stripe billing endpoints for checkout, portal, and webhooks.",
    image: "/project 2.png",
    tag: ["All", "Full-Stack", "Web"],
    badge: "Full-stack",
    stack: ["Next.js", "TypeScript", "Clerk", "Drizzle", "PostgreSQL", "Stripe"],
    caseStudyHighlights: [
      "Server actions and middleware-protected routes",
      "Drizzle schema + migrations against Postgres",
      "Stripe checkout, customer portal, and webhook handling",
    ],
    gitUrl: "https://github.com/MarithaMiracle/quest",
    previewUrl: "https://github.com/MarithaMiracle/quest",
  },
  {
    id: 5,
    title: "Estatify",
    description:
      "Real estate listing and management platform with a React frontend and Express backend for property uploads, auth, and listing workflows — drawn from production full-stack work at Estatify Nigeria Limited.",
    image: "/e mockup 5.png",
    tag: ["All", "Full-Stack", "Web"],
    badge: "Full-stack",
    stack: ["React", "Node.js", "Express", "JavaScript", "Tailwind CSS"],
    caseStudyHighlights: [
      "Property upload and listing management flows",
      "Authenticated agent/client interactions",
      "Separate frontend + backend package structure",
    ],
    gitUrl: "https://github.com/MarithaMiracle/shore",
    previewUrl: "https://shore-smoky.vercel.app",
  },
  {
    id: 6,
    title: "VaultCraft",
    description:
      "Solana SPL token toolkit for minting tokens, checking balances, and connecting Phantom wallets — useful evidence of Web3/TypeScript exploration alongside conventional backend work.",
    image: "/VaultCraft.png",
    tag: ["All", "Web"],
    badge: "Web3",
    stack: ["JavaScript", "Next.js", "Solana", "Phantom"],
    caseStudyHighlights: [
      "Client-side keypair handling and wallet connection",
      "On-chain token minting and balance reads",
    ],
    gitUrl: "https://github.com/MarithaMiracle/vaultcraft",
    previewUrl: "https://solana-token-generator-phi.vercel.app",
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
      <h2 className="text-center text-4xl font-bold text-[#eb94cf] dark:text-[#03e9f4] mt-20 mb-4 md:mb-6 tracking-tight">
        /my_projects
      </h2>
      <p className="text-center text-[#ADB7BE] max-w-2xl mx-auto mb-8 text-sm sm:text-base">
        Selected engineering work — production systems first, then public case studies.
        Private commercial code is summarized without exposing proprietary source.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        {["All", "Production", "Backend", "Full-Stack", "Web"].map((name) => (
          <ProjectTag
            key={name}
            onClick={handleTagChange}
            name={name}
            isSelected={tag === name}
          />
        ))}
      </div>
      <ul ref={ref} className="space-y-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: Math.min(index * 0.15, 0.6) }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              previewLabel={project.previewLabel}
              links={project.links}
              stack={project.stack}
              badge={project.badge}
              caseStudyHighlights={project.caseStudyHighlights}
              imageLeft={index % 2 === 0}
              imagePosition={project.imagePosition}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
