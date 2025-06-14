import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Sosmed } from "./elements/Sosmed";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-6 dark:bg-slate-800">
        <div className="container">
          <div className="w-full pt-4">
            <div className="flex items-center justify-center gap-4 mb-5">
              <Sosmed
                to="https://www.linkedin.com/in/anugrah-prastyo/"
                icon={FaLinkedin}
                iconClassName="w-5 h-5"
              />
              <Sosmed
                to="https://www.instagram.com/agrptio/"
                icon={FaInstagram}
                iconClassName="w-5 h-5"
              />
              <Sosmed
                to="https://www.tiktok.com/@agrptio"
                icon={FaTiktok}
                iconClassName="w-5 h-5"
              />
              <Sosmed
                to="https://www.youtube.com/@agrptio"
                icon={FaYoutube}
                iconClassName="w-5 h-5"
              />
              <Sosmed
                to="https://github.com/anugrahp13"
                icon={FaGithub}
                iconClassName="w-5 h-5"
              />
            </div>
            <p className="font-medium text-sm text-slate-300 text-center">
              © 2025 - Developed by
              <span className="font-bold text-primary"> Anugrah Prastyo</span>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
