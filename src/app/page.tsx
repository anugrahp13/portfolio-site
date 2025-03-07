"use client";

import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import dataProjects from "../data/dataProjects";
import { Projects } from "./home/Projects";
import { ProjectssProps } from "./home/types/Projects.type";
import { Button } from "../components/elements/Button";
import { Sosmed } from "../components/elements/Sosmed";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skills } from "./home/Skills";
import dataSkill from "../data/dataSkill";

const Home = () => {
  const [sortedProjects, setSortedProjects] = useState<ProjectssProps[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    // ID project yang ingin ditampilkan
    const selectedProjectIds = [3, 4, 5, 6];

    // Filter project berdasarkan ID
    const filteredProjects = dataProjects.filter((project) =>
      selectedProjectIds.includes(project.id)
    );

    // Sortir berdasarkan tanggal terbaru
    const sorted = [...filteredProjects].sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedProjects(sorted);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="mt-56 dark:bg-dark">
        <div className="container flex items-center justify-center">
          <div className="w-full text-center relative grid gap-4">
            <h1 className="text-sm font-semibold text-slate-400 dark:text-slate-200">
              Hi 👋, My name is{" "}
              <span className="block font-bold text-dark mt-2 text-4xl lg:text-5xl dark:text-white">
                Anugrah Prastyo
              </span>
            </h1>
            <h2 className="font-semibold text-primary text-base lg:text-lg dark:text-teal-300">
              Freelance Front-End Web Developer with 1+ years experience
            </h2>
            <div className="flex justify-center items-center text-sm gap-4">
              <Button
                href="/projects"
                variant="primary"
                text="My Project"
                icon={FaArrowRight}
                iconClassName="w-4 h-4 -rotate-45"
              />
              <Button
                href="/contact"
                variant="secondary"
                text="Contact me"
                icon={IoMail}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
            </div>
            <div className="flex justify-center items-center gap-4 text-sm">
              <Sosmed
                href="https://github.com/anugrahp13"
                icon={FaGithub}
                iconClassName="w-6 h-6"
              />
              <Sosmed
                href="https://www.linkedin.com/in/anugrah-prastyo/"
                icon={FaLinkedin}
                iconClassName="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-24 lg:max-w-7xl text-center md:text-left">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 text-center md:text-left">
              <div className="text-sm text-primary dark:text-primary grid gap-3">
                <span className="font-bold tracking-[.30em] uppercase">
                  About
                </span>
                <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                  Get to Know <br />
                  About Me
                </span>
              </div>
              <div className="font-medium text-slate-800 text-sm my-2 lg:text-base dark:text-slate-200">
                Don&apos;t know, then dislike.
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="font-bold text-dark text-3xl mb-5 mb-w-md dark:text-white mt-5 md:mt-0">
                Hi 👋, Welcome to my {""}
                <span className="text-primary">Portfolio Website</span>
              </h2>
              <p className="font-medium text-base text-slate-800 dark:text-white max-w-xl lg:text-base">
                My name is Anugrah Prastyo, a Front-end Web Developer who has
                been working as a freelancer for one year. As a Front-end Web
                Developer, I have a strong desire to create beautiful, simple,
                and user-friendly websites.
              </p>
              <br />
              <p className="font-medium text-base text-slate-800 dark:text-white max-w-xl lg:text-base">
                If you are looking for someone who has a strong work ethic and a
                passion for creating beautiful websites, or if you want to
                entrust website creation to me, please feel free to contact me.
              </p>
              <div className="flex justify-center items-center md:justify-start md:items-start text-left mt-9">
                <div className="pr-6">
                  <h2 className="font-semibold text-slate-800 dark:text-white text-4xl text-center md:text-left">
                    01
                    <span className="text-primary font-semibold text-3xl">
                      +
                    </span>
                  </h2>
                  <p className="font-medium text-sm text-slate-800 dark:text-white">
                    Years Experience
                  </p>
                </div>
                <div className="pl-6">
                  <h2 className="font-semibold text-slate-800 dark:text-white text-4xl text-center md:text-left">
                    5
                    <span className="text-primary font-semibold text-3xl">
                      +
                    </span>
                  </h2>
                  <p className="font-medium text-sm text-slate-800 dark:text-white">
                    Projects Completed
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center md:justify-start md:items-start text-sm mt-4 gap-4">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full lg:w-fit"
                  text="Contact me"
                  icon={IoMail}
                  iconClassName="w-[1.10rem] h-[1.10rem]"
                />
                <Button
                  href="/about"
                  variant="primary"
                  className="w-full lg:w-fit"
                  text="About me"
                  icon={FaArrowRight}
                  iconClassName="w-4 h-4 -rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <Projects projects={sortedProjects} />

      {/* Skill Section */}
      <Skills skills={dataSkill} />
      {/* Contact Section */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-24 lg:max-w-7xl flex items-center justify-center">
          <div className="w-full text-center">
            <div className="grid gap-3 mb-8">
              <div className="text-sm text-primary dark:text-primary grid gap-3">
                <span className="font-bold tracking-[.30em] uppercase">
                  Contact
                </span>
                <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                  Contact Me
                </span>
                <span className="font-semibold text-slate-800 text-sm lg:text-base dark:text-slate-200 my-2">
                  Want to collaborate or working with me? Get in touch by
                  clicking button below
                </span>
                <div className="flex justify-center items-center text-sm">
                  <Link
                    href="mailto:anugrahprastyo13@gmail.com"
                    className="font-semibold rounded-lg flex justify-center items-center px-6 py-2 border bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80  gap-2"
                  >
                    Contact via Email
                    <IoMail className="w-[1.10rem] h-[1.10rem]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
