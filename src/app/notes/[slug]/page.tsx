"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import { Clipboard } from "@/components/elements/Clipboard";
import "prismjs/themes/prism-okaidia.css"; // Impor tema Prism.js
import "prismjs/components/prism-csharp";
import { useParams } from "next/navigation";
import dataNote from "@/data/dataNotes";
import { createSlug } from "@/components/utils";

interface DetailNotesProps {
  // Detail data structure for note
  name: string;
  description: string;
  codeSnippets: string[] | string;
  codeNotices: string[] | string;
}

const DetailNotes: React.FC = () => {
  const { slug } = useParams(); // Mendapatkan slug dari URL

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined" && Prism) {
      Prism.highlightAll(); // Highligh kode dengan Prism.js
    }

    // Update metadata dinamis berdasarkan slug
    if (typeof slug === "string") {
      const note = dataNote.find((p) => createSlug(p.name) === slug);
      if (note) {
        document.title = `${note.name} | Portfolio Anugrah Prastyo`;

        // Update meta description
        let metaDescription = document.querySelector(
          "meta[name='description']"
        );
        if (!metaDescription) {
          metaDescription = document.createElement("meta");
          metaDescription.setAttribute("name", "description");
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute("content", note.description);

        // Update Open Graph meta tags
        let ogTitle = document.querySelector("meta[property='og:title']");
        if (!ogTitle) {
          ogTitle = document.createElement("meta");
          ogTitle.setAttribute("property", "og:title");
          document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute("content", note.name);

        let ogDescription = document.querySelector(
          "meta[property='og:description']"
        );
        if (!ogDescription) {
          ogDescription = document.createElement("meta");
          ogDescription.setAttribute("property", "og:description");
          document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute("content", note.description);
      }
    }
  }, [slug]);

  if (typeof slug !== "string") {
    return <h1>Invalid Project Identifier</h1>;
  }

  const note = dataNote.find((p: DetailNotesProps) => createSlug(p.name) === slug);

  if (!note) {
    return <h1>Project Not Found</h1>;
  }

  const codeSnippets = Array.isArray(note.codeSnippets)
    ? note.codeSnippets
    : [note.codeSnippets];
  const codeNotices = Array.isArray(note.codeNotices)
    ? note.codeNotices
    : [note.codeNotices];

  return (
    <>
      <section className="lg:my-52 my-28 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="max-w-3xl grid gap-5">
            <div className="text-center text-sm text-primary dark:text-primary">
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                {note.name}
              </span>
            </div>
            <div className="font-semibold text-slate-800 text-base text-center dark:text-slate-200">
              {note.description}
            </div>

            {codeNotices.length > 0 && (
              <div className="font-medium text-slate-800 text-base dark:text-slate-200">
                {codeNotices.map((notice, index) => (
                  <span key={index}>{notice}</span>
                ))}
              </div>
            )}
            {codeSnippets.map((snippet, index) => (
              <div
                className="bg-gray-900 shadow-md rounded-lg text-white overflow-y-auto"
                key={index}
              >
                <div className="flex justify-end items-center bg-gray-800 py-2 px-4">
                  <Clipboard textToCopy={snippet} />
                </div>
                <pre className="!m-0 pb-4 !bg-code overflow-hidden whitespace-pre-wrap break-words custom-scrollbar !rounded-none">
                  <code className="language-csharp">{snippet}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailNotes;
