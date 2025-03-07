"use client";
import { Cart } from "./Cart";
import dataNotes from "../../data/dataNotes";
import { useEffect } from "react";

const transformedDataNotes = dataNotes.map((note) => ({
  ...note,
  codeSnippets: Array.isArray(note.codeSnippets)
    ? note.codeSnippets
    : [note.codeSnippets],
}));
export default function Notes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="lg:my-52 my-28 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase">
                Notes
              </span>
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                My Notes
              </span>
            </div>
            <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Cart notes={transformedDataNotes} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
