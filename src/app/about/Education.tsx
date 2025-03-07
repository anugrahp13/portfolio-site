import Image from "next/image";
import { EducationProps } from "./types/Education.type";

interface EducationsProps {
  educations: EducationProps[];
}
export const Education: React.FC<EducationsProps> = ({ educations }) => {
  return (
    <>
      {educations.map((education) => (
        <div className="lg:flex gap-3" key={education.id}>
          <div>
            {education.image && (
              <Image
                src={education.image}
                className="w-10 h-10"
                alt={education.name}
                width={50}
                height={50}
              />
            )}
          </div>
          <div className="mt-1 lg:mt-0">
            <h3 className="font-bold text-base line-clamp-1 mb-1">
              {education.department}{" "}
              <span className="text-primary font-bold">{education.name}</span>
            </h3>
            <p className="font-semibold text-xs line-clamp-2 gap-2 text-slate-800 dark:text-slate-300">
              <span className="font-bold rounded-md px-3 text-teal-800 bg-teal-200">
                {education.degree}
              </span>{" "}
              | {education.year} - {education.address}
            </p>
            <p className="text-base font-bold text-slate-900 dark:text-slate-300 mt-1">
              IPK {education.ipk}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
