"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Skill } from "../../components/elements/Skill";
import dataSkill from "../../data/dataSkill";
import { Certificate } from "./Certificate";
import dataCertificate from "../../data/dataCertificate";
import { Education } from "./Education";
import dataEducation from "../../data/dataEducation";
import { Work } from "./Work";
import dataWork from "../../data/dataWork";
import dataAward from "../../data/dataAward";
import { Award } from "./Award";
import { useEffect, useState } from "react";
import { Person } from "./Person";
import dataPerson from "../../data/dataPerson";
import Link from "next/link";
import { CertificateProps } from "./types/Certificate.type";

export default function About() {
  const [sortedCertificates, setSortedCertificates] = useState<
    CertificateProps[]
  >([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const sorted = [...dataCertificate].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
    setSortedCertificates(sorted);
  }, []);
  return (
    <>
      <section className="lg:my-52 my-28 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase text-base">
                About
              </span>
              <span className="font-bold text-dark mb-10 text-4xl lg:text-5xl dark:text-white">
                More About Me
              </span>
            </div>
            <div className="grid gap-12 mt-8">
              <Person persons={dataPerson} />
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">📞 Connect with Me</div>
                <div className="text-left grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                  <Link
                    href="mailto:anugrahprastyo13@gmail.com"
                    className="gap-3 p-4 border-2 border-dark dark:border-white border-dashed bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <IoMail className="w-[1.10rem] h-[1.10rem]" />
                      <h3 className="text-xl font-bold">Email</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      anugrahprastyo13@gmail.com
                    </p>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/anugrah-prastyo/"
                    className="gap-3 p-4 border-2 border-dark dark:border-white border-dashed bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <FaLinkedin className="w-5 h-5" />
                      <h3 className="text-xl font-bold">Linkedin</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      Anugrah Prastyo
                    </p>
                  </Link>
                  <Link
                    href="https://github.com/anugrahp13"
                    className="gap-3 p-4 border-2 border-dark dark:border-white border-dashed bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <FaGithub className="w-5 h-5" />
                      <h3 className="text-xl font-bold">GitHub</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      @anugrahp13
                    </p>
                  </Link>
                </div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">⚡ Tech Stack</div>
                <div className="text-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  <Skill skills={dataSkill} />
                </div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">💼 Work Experiences</div>
                <div className="text-left grid grid-cols-1 gap-5">
                  <Work works={dataWork} />
                </div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">🎓 Educations</div>
                <div className="text-left grid grid-cols-1 gap-5">
                  <Education educations={dataEducation} />
                </div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">🏆 Award</div>
                <div className="text-left grid grid-cols-1 gap-5">
                  <Award awards={dataAward} />
                </div>
              </div>
              <div className="text-left grid gap-4">
                <div className="text-2xl font-bold">
                  📜 Certifications, Courses or Bootcamp
                </div>
                <div className="text-left grid grid-cols-1 gap-5">
                  <Certificate certificates={sortedCertificates} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
