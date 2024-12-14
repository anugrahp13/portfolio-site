import Image from "next/image";
import { WorkProps } from "./types/Work.type";

interface WorksProps {
  works: WorkProps[];
}
export const Work: React.FC<WorksProps> = ({ works }) => {
  return (
    <>
      {works.map((work) => (
        <div className="lg:flex gap-3" key={work.id}>
          <div>
            {work.image && (
              <Image
                src={work.image}
                className="w-10 h-10 object-contain"
                alt={work.office}
                width={50}
                height={50}
              />
            )}
          </div>
          <div className="mt-1 lg:mt-0">
            <h3 className="font-bold text-base line-clamp-1 mb-1">
              {work.position}{" "}
              <span className="text-primary font-bold">{work.office}</span>
            </h3>
            <p className="font-semibold text-xs line-clamp-2 gap-2 text-slate-800 dark:text-slate-300">
              <span className="font-bold rounded-md px-3 text-teal-800 bg-teal-200">
                {work.to}
              </span>{" "}
              | {work.from} - {work.address}
            </p>
            <ul className="font-medium text-sm text-slate-800 dark:text-white list-disc mt-4 ml-5">
              {work.jobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
