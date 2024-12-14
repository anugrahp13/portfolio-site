"use client";
import dataProjects from "../../data/dataProjects";
import { useEffect, useState } from "react";
import { ProjectssProps } from "../home/types/Projects.type";
import { Cart } from "./Cart";

export default function Projects() {
  const [sortedProjects, setSortedProjects] = useState<ProjectssProps[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const sorted = [...dataProjects].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
    setSortedProjects(sorted);
  }, []);
  return (
    <>
      <section className="lg:my-52 my-28 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase">
                Project
              </span>
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                My Projects
              </span>
            </div>
            <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Cart projects={sortedProjects} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
