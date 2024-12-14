"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/elements/Button";
import dataProject from "@/data/dataProjects";
import { createSlug } from "@/components/utils";
import Image from "next/image";

interface DetailProjectProps {
  id: number;
  name: string;
  subName?: string;
  status?: string;
  description?: string;
  category?: string;
  image?: string;
  repoLink?: string;
  demoLink?: string;
  date: string;
  role?: string;
  projectType?: string;
  goals: string[];
  nameSkill: string[];
  imageSkill: string[];
  namePreview: string[];
  imagePreview: string[];
}
const DetailProject: React.FC = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<DetailProjectProps | null>(null);

  // if (typeof slug !== "string") {
  //   return <h1>Invalid Project Identifier</h1>;
  // }

  useEffect(() => {
    if (typeof slug !== "string") {
      setProject(null);
    }

    const foundProject = dataProject.find(
      (p: DetailProjectProps) => createSlug(p.name) === slug
    );
    setProject(foundProject || null);
  }, [slug]);

  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
      // Update document title and meta tags
      document.title = `${project.name} - ${project.subName} | Portfolio Anugrah Prastyo`;

      const descriptionMeta = document.querySelector(
        "meta[name='description']"
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", project.description || "");
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = project.description || "";
        document.head.appendChild(meta);
      }

      const ogTitleMeta = document.querySelector("meta[property='og:title']");
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          `${project.name} - ${project.subName}`
        );
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        meta.content = `${project.name} - ${project.subName}`;
        document.head.appendChild(meta);
      }

      const ogImageMeta = document.querySelector("meta[property='og:image']");
      if (ogImageMeta) {
        ogImageMeta.setAttribute("content", project.image || "");
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        meta.content = project.image || "";
        document.head.appendChild(meta);
      }
    }
  }, [project]);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <section className="lg:my-52 my-28 dark:bg-dark">
      <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
        <div className="max-w-4xl text-center grid gap-10">
          <div className="text-sm text-primary dark:text-primary grid gap-3">
            <span className="font-bold tracking-[.30em] uppercase text-base">
              Case Study
            </span>
            <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
              {project.name} - {project.subName}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <div className="text-slate-800 dark:text-white text-lg font-bold">
                Date Created
              </div>
              <div className="text-slate-800 dark:text-white text-sm font-semibold">
                {project.date}
              </div>
            </div>
            <div>
              <div className="text-slate-800 dark:text-white text-lg font-bold">
                My Role
              </div>
              <div className="text-slate-800 dark:text-white text-sm font-semibold">
                {project.role}
              </div>
            </div>
            <div>
              <div className="text-slate-800 dark:text-white text-lg font-bold">
                Project Type
              </div>
              <div className="text-slate-800 dark:text-white text-sm font-semibold">
                {project.projectType}
              </div>
            </div>
            <div>
              <div className="text-slate-800 dark:text-white text-lg font-bold">
                Status
              </div>
              <div className="text-slate-800 dark:text-white text-sm font-semibold">
                {project.status}
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-md overflow-hidden">
            {project.image && (
              <Image
                src={project.image}
                alt={`Thumbnail - ${project.name}`}
                width={1000}
                height={500}
              />
            )}
          </div>
          <div className="text-left grid gap-4">
            <div className="text-2xl font-bold">About {project.name}</div>
            <p className="text-sm font-medium text-slate-800 dark:text-white">
              <span className="font-bold text-base text-dark dark:text-primary">
                {project.name}
              </span>
              {project.description}
            </p>
          </div>
          <div className="text-left grid gap-4 ">
            <div className="text-2xl font-bold">Goals</div>
            <ul className="text-sm font-medium text-slate-800 dark:text-white list-outside list-disc ml-5">
              {project.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="text-left grid gap-4">
            <h3 className="text-2xl font-bold">Tech Stack</h3>
            <div className="text-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {project.nameSkill.map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex gap-2 p-2 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                >
                  <Image
                    src={project.imageSkill[idx]}
                    alt={skill}
                    className="w-10 h-10"
                    width={50}
                    height={50}
                  />
                  <h3 className="font-bold text-sm items-center justify-center flex line-clamp-2">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="text-left grid gap-4">
            <div className="text-2xl font-bold">External Link</div>
            <div className="flex justify-center items-center md:justify-start md:items-start text-sm gap-4">
              <Button
                href={project.repoLink || ""}
                variant="primary"
                text="Visit Repo"
                className="w-full lg:w-fit px-6 py-2"
                icon={FaGithub}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
              {project.demoLink && (
                <Button
                  href={project.demoLink}
                  variant="secondary"
                  text="Visit Website"
                  className="w-full lg:w-fit px-6 py-2"
                  icon={FaArrowRight}
                  iconClassName="w-4 h-4 -rotate-45"
                />
              )}
            </div>
          </div>
          <div className="text-left grid gap-4">
            <div className="text-2xl font-bold">{project.name} Preview</div>
            <Swiper
              modules={[Pagination, Navigation]} // Tambahkan modul pagination dan navigasi
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="swiper-container preview flex justify-center items-center rounded-3xl w-full object-fit-cover"
            >
              {project.imagePreview.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={image}
                    alt={`Preview ${idx + 1}`}
                    width={1000}
                    height={500}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProject;
