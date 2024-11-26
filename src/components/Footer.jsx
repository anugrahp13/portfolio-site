import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-6 dark:bg-slate-800">
        <div className="container">
          <div className="w-full pt-4">
            <div className="flex items-center justify-center gap-4 mb-5">
              <Link
                to="https://github.com/anugrahp13"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/anugrah-prastyo/"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
            <p className="font-medium text-sm text-slate-300 text-center">
              © 2024 - Developed by
              <span className="font-bold text-primary"> Anugrah Prastyo</span>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
