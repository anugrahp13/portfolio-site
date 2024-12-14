import { FaArrowRight, FaBook, FaGithub } from "react-icons/fa";
import { Button } from "../../components/elements/Button";
import { ProjectssProps } from "./types/Projects.type";
import Link from "next/link";
import Image from "next/image";
import { createSlug } from "@/components/utils";

interface ProjectsProps {
  projects: ProjectssProps[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="dark:bg-dark">
      <div className="container mx-auto px-4 py-24 lg:max-w-7xl flex items-center justify-center">
        <div className="w-full text-center grid gap-5">
          <div className="text-sm text-primary dark:text-primary grid gap-3">
            <span className="font-bold tracking-[.30em] uppercase">
              Projects
            </span>
            <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
              My Projects
            </span>
            <span className="font-medium text-slate-800 text-sm lg:text-base dark:text-slate-200">
              These are some of the projects I&apos;ve worked on.
            </span>
          </div>
          <div className="grid gap-24 lg:gap-28">
            {projects.map((project) => (
              <div className="flex flex-wrap" key={project.id}>
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl shadow-md overflow-hidden">
                    <Link href={`/projects/${createSlug(project.name)}`}>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={`Thumbnails - ${project.subName}`}
                          className="transition-transform hover:scale-110 w-full"
                          width={500}
                          height={500}
                        />
                      )}
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 text-left">
                  <div className="ml-0 lg:ml-6 mt-6 lg:mt-0 grid gap-5">
                    <Link
                      href="/projects"
                      className="w-fit rounded-lg px-4 py-1 border-2 border-primary bg-primary"
                    >
                      <span className="font-semibold text-sm text-white">
                        {project.category}
                      </span>
                    </Link>
                    <h2 className="font-bold text-dark text-3xl mb-w-md dark:text-white md:mt-0">
                      {project.name} - {project.subName}
                    </h2>
                    <div className="rounded-lg p-5 bg-slate-200 dark:bg-slate-800">
                      <p className="text-slate-800 font-medium dark:text-white text-sm line-clamp-3 leading-relaxed">
                        <span className="font-bold text-base dark:text-primary">
                          {project.name}
                        </span>{" "}
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-center items-center md:justify-start md:items-start text-sm gap-4">
                      <Button
                        href={`/projects/${createSlug(project.name)}`}
                        variant="secondary"
                        text="Case Study"
                        className="w-full lg:w-fit px-6 py-2"
                        icon={FaBook}
                        iconClassName="w-3.5 h-3.5"
                      />
                      <Button
                        href={project.repoLink || "#"}
                        variant="primary"
                        text="Visit Repo"
                        className="w-full lg:w-fit px-6 py-2"
                        icon={FaGithub}
                        iconClassName="w-[1.10rem] h-[1.10rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center text-sm">
              <Button
                href="/projects"
                variant="secondary"
                text="View More Projects"
                className="px-6 py-2"
                icon={FaArrowRight}
                iconClassName="w-4 h-4 -rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
