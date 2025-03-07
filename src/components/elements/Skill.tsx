// src/components/Skill.tsx
import Image from "next/image";
import { SkillsProps } from "../elements/types/Skill.type";

export const Skill = ({ skills }: { skills: SkillsProps[] }) => {
  const filteredSkills = skills.filter(
    (skill) => skill.id >= 1 && skill.id <= 12
  );

  return (
    <>
      {filteredSkills.map((skill) => (
        <div
          className="inline-flex gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
          key={skill.id}
        >
          <div>
            {skill.image && skill.name && (
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
    </>
  );
};
