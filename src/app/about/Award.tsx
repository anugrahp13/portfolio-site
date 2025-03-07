import Link from "next/link";
import { FaArrowRight, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { AwardProps } from "./types/Award.type";
import Image from "next/image";

interface AwardsProps {
  awards: AwardProps[];
}
export const Award: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <>
      {awards.map((award) => (
        <div className="lg:flex gap-3" key={award.id}>
          <div className="flex relative lg:relative">
            {award.image && (
              <Image
                src={award.image}
                className="w-10 h-10"
                alt={award.course}
                width={50}
                height={50}
              />
            )}
            <Link
              href={award.courseLink}
              target="_blank"
              className="bg-primary text-white font-bold p-1 rounded-full absolute top-2 right-0 lg:hidden"
            >
              <FaArrowRight className="w-4 h-4 -rotate-45 hover:rotate-0 transition duration-300 ease-in-out" />
            </Link>
          </div>
          <div className="mt-1 lg:mt-0 flex-grow">
            <div className="font-bold text-base line-clamp-3 mb-1 flex items-center justify-between lg:justify-start gap-2">
              {award.name}
              <Link
                href={award.courseLink}
                target="_blank"
                className="bg-primary text-white font-bold p-1 rounded-full hidden lg:flex"
              >
                <FaArrowRight className="w-4 h-4 -rotate-45 hover:rotate-0 transition duration-300 ease-in-out" />
              </Link>
            </div>
            <div className="flex justify-start items-center font-semibold gap-2">
              <FaBuilding className="w-4 h-4 text-primary" />
              <p className="text-xs line-clamp-2 text-slate-800 dark:text-slate-300 mr-2">
                {award.course}
              </p>
              <FaCalendarAlt className="w-4 h-4 text-primary" />
              <p className="text-xs line-clamp-2 text-slate-800 dark:text-slate-300">
                {award.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
