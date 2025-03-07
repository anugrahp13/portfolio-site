import Image from "next/image";
import { PersonProps } from "./types/Person.type";

interface PersonsProps {
  persons: PersonProps[];
}
export const Person: React.FC<PersonsProps> = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <div className="flex justify-center items-center">
            {person.image && (
              <Image
                src={person.image}
                className="border-2 border-dark dark:border-white border-dashed rounded-full"
                data-size="auto"
                alt={person.name}
                width={160}
                height={190}
              />
            )}
          </div>
          <div className="text-center mt-3 mb-8 grid gap-1">
            <div className="text-3xl font-bold">{person.name}</div>
            <p className="font-semibold text-base text-slate-800 dark:text-white">
              {person.position}
            </p>
          </div>
          <div className="text-left grid gap-4 mb-5">
            <div className="text-2xl font-bold">👨‍💻 My Profile</div>
            {person.descriptions.map((description, index) => (
              <p
                key={index}
                className="text-base font-medium text-slate-800 dark:text-white lg:text-base"
              >
                {description}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
