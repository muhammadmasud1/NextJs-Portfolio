"use client";

import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";


const projects = [
  {
    img: "https://i.ibb.co/Ld6w3LQ/icons8-e-commerce-96.png",
    title: "E-Commerce Functionality Website",
    subtitle: ["Product design, Feature of functionality"],
    icon: <BsChevronRight />,
    href: "/rectangle",
  },
  {
    img: "https://i.ibb.co/2dgSsg7/icons8-budget-96.png",
    title: "Web Marketing Agency",
    subtitle: ["Run Time Communication, ChatBox"],
    href: "/morvalabs",
  },
  {
    img: "https://i.ibb.co/hVK9hHq/icons8-paid-96.png",
    title: "Landing Business Website",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/simply",
  },
];

const email = "mdmasudrana0783@gmail.com";
const handleCopyEmail = async () => {
  if ("clipboard" in navigator) {
    try {
      await navigator.clipboard.writeText(email)
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy, please try again!");
    }
  } else {
    // Clipboard API not available
    alert("Clipboard not available, please manually copy the email: " + email);
  }
};

function page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-5 ">
        <div className="flex mt-4 items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-lg font-InterMe">
            About
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            It's Me Muhammad Masud
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            Hello! I'm an experienced front-end developer with a solid
            foundation in HTML/CSS and 1 year of professional experience. I
            specialize in Flexbox, Grid, SCSS, CSS animations, and follow the
            BEM methodology for scalable and maintainable code. I am proficient
            in modern JavaScript and have spent the past year developing
            commercial projects using React, Redux, Jest, TypeScript, and
            Next.js. Known as a diligent junior developer and effective problem
            solver, I am eager to tackle complex challenges and contribute to
            innovative web solutions.
          </motion.p>
        </div>

        <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="aspect-square object-cover rounded-lg"
            src="https://i.ibb.co/sR7yQ4m/IMG-1713618962287.jpg"
            alt=""
          />
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            More About Me
          </motion.h1>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I am a proud graduate of Thakurgaon Polytechnic Institute, where I
            earned my degree in Computer Science and Technology. I am passionate
            about front-end development and have successfully launched several
            projects that are still live and operational today. These projects
            showcase my skill in creating dynamic and responsive websites,
            highlighting my proficiency in modern web technologies and my
            dedication to practical, user-centered design. I am continuously
            seeking opportunities to grow my skills and contribute to exciting
            new projects.
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            When he's not immersed in design work, he finds solace in playing
            the guitar and exploring new coffee shops in his local area. Brian
            firmly believes in maintaining a healthy work-life balance, making
            sure to take breaks and reenergize his creativity. In his spare
            time, he also volunteers at a local animal shelter on weekends.
          </motion.p>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            My Side Projects
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I did passion side projects in the weekend, please take a look you
            will love it (i hope).
          </motion.p>
        </div>

        <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-4  mt-6 rounded-md">
          <div className="">
            <Link href={"/"}>
              {projects.map((link) => (
                <div
                  key={link.subtitle}
                  className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
                >
                  <div className="flex  items-center gap-x-4">
                    <div className="drop-shadow-md ">
                      <img
                        className="w-10 h-10 object-cover rounded-full "
                        src={link.img}
                        alt=""
                      />
                    </div>

                    <div>
                      <h1 className="text-xl font-InterMe">{link.title}</h1>
                    </div>
                  </div>

                  <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
                    <p className="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
                      {link.subtitle}
                    </p>
                    <div className="">
                      <CiLocationArrow1 className="dark:text-neutral-400" />
                    </div>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>

        <div className="mt-24 lg:p-2 ">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </div>
                <div className="border-neutral-300 dark:border-neutral-700 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700  dark:text-white font-semibold">
                    <button onClick={handleCopyEmail}>Copy Email </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Follow Me
                </h1>
              </div>

              <div className="flex gap-x-2">
                <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiTwitter className="text-neutral-500 dark:text-white" />
                </div>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiInstagram className="text-neutral-500 dark:text-white" />
                </div>{" "}
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
                  <AiOutlineDribbble className="text-neutral-500 dark:text-white" />
                </div>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                  <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
                © 2024 Muhammad Masud || All Rights Reserved.
              </span>
              <p className="text-neutral-500">
                By{" "}
                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                  MasudCodeCreations
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
