import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { DarkModeToggle } from "./elements/DarkModeToggle";
import { Sosmed } from "./elements/Sosmed";
import { IoIosArrowUp } from "react-icons/io";
import { TimeDisplay } from "./elements/TimeDisplay";
import { FaWhatsapp } from "react-icons/fa6";

export const Header = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsScrolled(currentScrollY > 0);

      // Show/hide scroll button based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowScrollButton(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        if (currentScrollY <= 0) {
          setShowScrollButton(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarMenuOpen(false);
      }
    };

    if (isSidebarMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarMenuOpen]);

  const handleMenuClick = () => {
    setIsSidebarMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-lg dark:bg-gray-900 dark:bg-opacity-50"
            : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between mx-auto px-4 lg:max-w-7xl">
          <div className="flex items-center order-2 md:order-1">
            <Link
              to="/"
              className="p-1 font-bold text-lg text-slate-900 py-3 dark:text-white"
            >
              AP<span className="-ml-0 text-primary dark:text-teal-200">.</span>
            </Link>
          </div>
          <nav className="flex flex-row gap-4 items-center order-1">
            <HiOutlineMenuAlt2
              onClick={() => setIsSidebarMenuOpen(true)}
              className="order2 text-slate-800 dark:text-white text-lg block items-center md:hidden h-8 w-8 lg:w-6 scale-90 cursor-pointer"
            />
            <div className="hidden md:inline-flex gap-4">
              <Link
                to="/"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300 underline-animation ${
                  isActiveLink("/") ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300 underline-animation ${
                  isActiveLink("/projects") ? "active" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                to="/notes"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300 underline-animation ${
                  isActiveLink("/notes") ? "active" : ""
                }`}
              >
                Notes
              </Link>
              <Link
                to="/about"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300 underline-animation ${
                  isActiveLink("/about") ? "active" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-teal-300 underline-animation ${
                  isActiveLink("/contact") ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex gap-2 items-center order-2">
            <TimeDisplay />
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <div
        className={`fixed left-0 top-0 bg-black bg-opacity-50 w-screen justify-center items-center lg:hidden z-50 transition-transform duration-300 ${
          isSidebarMenuOpen ? "sidebar sidebar-open" : "sidebar"
        }`}
      >
        <div
          ref={sidebarRef}
          className="p-4 bg-white text-gray-100 text-xl text-center w-96 h-screen overflow-y-auto font-semibold rounded-tr-xl rounded-br-lg top-0 bottom-0 lg:left-0 dark:bg-dark"
        >
          <div className="px-5 mt-1 flex items-center justify-between">
            <Link
              to="/"
              onClick={handleMenuClick}
              className="font-bold text-lg text-primary py-3 dark:text-white"
            >
              Anugrah Prastyo
              <span className="-ml-0 text-slate-800 dark:text-teal-200">.</span>
            </Link>
            <button>
              <IoClose
                onClick={() => setIsSidebarMenuOpen(false)}
                className="h-8 w-8 scale-75 text-slate-800 dark:text-white"
              />
            </button>
          </div>
          <hr className="my-2 text-gray-600" />
          <nav className="my-4">
            <Link
              to="/"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Projects
            </Link>
            <Link
              to="/notes"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Notes
            </Link>
            <Link
              to="/about"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <hr className="my-2 text-gray-600" />
          <div className="p-2.5 px-4 mt-auto">
            <div className="flex flex-wrap items-center gap-4 py-3">
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
            <p className="text-left font-semibold text-sm text-slate-800 dark:text-white">
              © 2024 - Developed by {""}
              <span className="hover:text-primary font-bold">
                Anugrah Prastyo
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        {" "}
        <div className="relative flex">
          {/* WhatsApp Button */}
          <Link
            to="http://wa.me/6281298572424"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-green-500 rounded-full p-3 flex items-center justify-center mr-1
                  hover:bg-green-500 transition-all duration-300 shadow-lg hover:opacity-80 ease-in-out
                  ${
                    showScrollButton ? "translate-x-[-50px]" : "translate-x-0"
                  }`}
          >
            <FaWhatsapp className="w-6 h-6 text-white" />
          </Link>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`absolute right-0 bg-blue-500 rounded-full p-3 flex items-center justify-center
                  hover:bg-blue-600 transition-all duration-500 ease-in-out shadow-lg
                  ${
                    showScrollButton
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
          >
            <IoIosArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};
