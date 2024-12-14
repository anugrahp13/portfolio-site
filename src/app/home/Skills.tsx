import Image from "next/image";
import { SkillsProps } from "./types/Skills.type";

interface SkillProps {
  skills: SkillsProps[];
}
export const Skills: React.FC<SkillProps> = ({ skills }) => {
  const filteredSkills = skills.filter(
    (skill) => skill.id >= 1 && skill.id <= 12
  );
  return (
    <>
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-24 lg:max-w-7xl text-center md:text-left">
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/4 text-center md:text-left">
              <div className="text-sm text-primary dark:text-primary grid gap-3">
                <span className="font-bold tracking-[.30em] uppercase">
                  Tech
                </span>
                <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                  Tech Stack
                </span>
              </div>
              <div className="font-medium text-slate-800 text-sm my-2 lg:text-base dark:text-slate-200">
                Here are some of the technology stacks and abilities I employ
                for project development.
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 lg:w-3/4 text-left grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  className="inline-flex gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  key={skill.id}
                >
                  <div>
                    {skill.image && (
                      <Image
                        src={skill.image}
                        className="w-10 h-10"
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm line-clamp-1 mb-1">
                      {skill.name}
                    </h3>
                    <p className="font-medium text-xs line-clamp-2 text-slate-800 dark:text-slate-300">
                      {skill.knowledge}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
