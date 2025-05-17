"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

export default function EmailSection() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f1c1ace",
        "template_qb0j8n9",
        form.current,
        "rt06lH39u3LP15J1x"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setConfettiActive(true);
          setSubmitted(true);

          setTimeout(() => {
            setConfettiActive(false);
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-8"
    >
      {/* Left Section: LET'S CONNECT, aligned far left */}
      <div className="flex flex-col items-start z-10">
        <h5 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-[#eb94cf] dark:text-[#03e9f4] mb-4">
          LET&apos;S CONNECT
        </h5>
        <p className="dark:text-[#ADB7BE] text-white mb-6 max-w-md text-[clamp(0.85rem,1.5vw,1.125rem)] leading-relaxed">
          <TypeAnimation
            sequence={[
              "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            ]}
            wrapper="span"
            speed={60}
            className="inline-block"
          />
        </p>

        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/MarithaMiracle/" target="_blank">
            <div
              className="p-2 rounded-full transition duration-300 group
              hover:bg-[#eb94cf] dark:hover:bg-cyan-400
              hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf]
              dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]"
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                className="w-6 h-6 transition duration-300 group-hover:invert group-hover:brightness-150"
              />
            </div>
          </Link>

          <Link
            href="https://linkedin.com/maritha-ebolosue-51771a2b1"
            target="_blank"
          >
            <div
              className="p-2 rounded-full transition duration-300 group
              hover:bg-[#eb94cf] dark:hover:bg-cyan-400
              hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf]
              dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]"
            >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                className="w-6 h-6 transition duration-300 group-hover:invert group-hover:brightness-150"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Section: Email form, aligned far right */}
      <div className="flex flex-col items-end">
        {submitted && (
          <p className="text-[#eb94cf] dark:text-[#03e9f4] text-center text-[clamp(1rem,2vw,1.5rem)] font-semibold mb-6 py-3 px-6 rounded-md border-t-2 border-[#eb94cf] dark:border-[#03e9f4] bg-opacity-80 shadow-lg max-w-max mx-auto animate-moveToTop">
            Email sent successfully!
          </p>
        )}

        <form className="flex flex-col w-full max-w-md" onSubmit={sendEmail} ref={form}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-[clamp(0.75rem,1vw,0.875rem)] font-medium"
            >
              Your email
            </label>
            <input
              name="reply-to"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-[clamp(0.75rem,1vw,0.875rem)] mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-[clamp(0.75rem,1vw,0.875rem)] mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="group relative text-center inline-block z-10 px-8 py-4 uppercase tracking-widest text-[#eb94cf] dark:text-cyan-400 text-[clamp(0.875rem,1vw,1.125rem)] font-medium overflow-hidden
            transition-all duration-500 
            hover:text-gray-900 hover:bg-[#eb94cf] dark:hover:bg-cyan-400 dark:hover:text-gray-900
            hover:shadow-[0_0_5px_#eb94cf,0_0_15px_#eb94cf,0_0_30px_#eb94cf] 
            dark:hover:shadow-[0_0_5px_#03e9f4,0_0_15px_#03e9f4,0_0_30px_#03e9f4]"
          >
            SEND MESSAGE

            <span className="absolute z-0 top-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,transparent,#eb94cf)] dark:bg-[linear-gradient(90deg,transparent,#03e9f4)] animate-[border-run-top_1s_linear_infinite]" />
            <span className="absolute z-0 top-0 right-0 w-0.5 h-full bg-[linear-gradient(180deg,transparent,#eb94cf)] dark:bg-[linear-gradient(180deg,transparent,#03e9f4)] animate-[border-run-right_1s_linear_infinite] animation-delay-[0.25s]" />
            <span className="absolute z-0 bottom-0 right-0 w-full h-0.5 bg-[linear-gradient(270deg,transparent,#eb94cf)] dark:bg-[linear-gradient(270deg,transparent,#03e9f4)] animate-[border-run-bottom_1s_linear_infinite] animation-delay-[0.5s]" />
            <span className="absolute z-0 bottom-0 left-0 w-0.5 h-full bg-[linear-gradient(0deg,transparent,#eb94cf)] dark:bg-[linear-gradient(0deg,transparent,#03e9f4)] animate-[border-run-left_1s_linear_infinite] animation-delay-[0.75s]" />
          </button>
        </form>
      </div>

      {confettiActive && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </section>
  );
}
