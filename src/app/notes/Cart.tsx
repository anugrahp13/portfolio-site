import { HiDocument } from "react-icons/hi2";
import Link from "next/link";
import { NotesProps } from "./types/notes.type";
import { createSlug } from "@/components/utils";

interface NotessProps {
  notes: NotesProps[];
}
export const Cart: React.FC<NotessProps> = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <Link href={`/notes/${createSlug(note.name)}`} key={note.id}>
          <div className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-3">
            <HiDocument className="w-6 h-6" />
            <h3 className="text-xl font-bold tracking-tight line-clamp-2">
              <span>{note.name}</span>
            </h3>
          </div>
        </Link>
      ))}
    </>
  );
};
