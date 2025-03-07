/* eslint-disable react/prop-types */
import { FaBook, FaGithub } from "react-icons/fa6";
import { Button } from "../../components/elements/Button";
import Link from "next/link";
import { ProjectssProps } from "../home/types/Projects.type";
import Image from "next/image";
import { createSlug } from "@/components/utils";

interface CartProps {
  projects: ProjectssProps[];
}

export const Cart: React.FC<CartProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
          key={project.id}
        >
          <Link
            href={`/projects/${createSlug(project.name)}`}
            className="mb-3 inline-block"
          >
            <picture>
              {project.image && (
                <Image
                  src={project.image}
                  data-size="auto"
                  alt={`Thumnails - ${project.subName}`}
                  className="lazyload rounded-xl object-cover max-w-full dark:brightness-75 lazyloaded transition-transform hover:scale-110"
                  width={500}
                  height={500}
                />
              )}
            </picture>
          </Link>
          <p className="text-sm font-semibold text-primary flex justify-between items-center">
            <span>{project.category}</span>
            <span className="dark:text-white">{project.status}</span>
          </p>
          <h3 className="text-xl font-bold tracking-tight line-clamp-2 mb-3">
            <span>{project.name}</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center text-sm gap-4">
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
      ))}
    </>
  );
};
