import { ReactNode, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import HomeIcon from "@mui/icons-material/Home";
import ProjectsIcon from "@mui/icons-material/Settings";
import WebsiteIcon from "@mui/icons-material/Language";
import ImageIcon from "@mui/icons-material/Image";
import NoteIcon from "@mui/icons-material/Description";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMediaIcon from "@mui/icons-material/Share";

function Logo() {
  return <h1>SAVER</h1>;
}

interface NavLinkComponent {
  children: ReactNode;
  url: string;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkComponent> = ({
  url,
  isActive,
  className,
  children,
}) => {
  return (
    <li>
      <a
        className={`text-sm ${
          isActive ? "text-blue-600 font-bold" : "text-gray-400"
        } hover:text-blue-600 hover:font-bold ${className}`}
        href={url}
      >
        {children}
      </a>
    </li>
  );
};

const MobileNavLink: React.FC<NavLinkComponent> = ({
  url,
  isActive,
  className,
  children,
}) => {
  return (
    <li className="mb-1">
      <a
        className={`p-4 text-sm font-semibold flex gap-3 items-center ${
          isActive ? "bg-blue-50 text-blue-600" : "text-gray-400"
        } hover:bg-blue-50 hover:text-blue-600 rounded ${className}`}
        href={url}
      >
        {children}
      </a>
    </li>
  );
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <Logo />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </button>
        </div>
        <ul className="hidden absolute gap-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <NavLink url="#" isActive={true}>
            Home
          </NavLink>
          <NavLink url="#">Projects</NavLink>
          <NavLink url="#">Websites</NavLink>
          <NavLink url="#">Images</NavLink>
          <NavLink url="#">Notes</NavLink>
          <NavLink url="#">YouTube</NavLink>
          <NavLink url="#">Social Media</NavLink>
        </ul>
        <div className="hidden lg:inline-block">
          <a
            className="lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 text-sm text-white font-bold hover:bg-blue-700 rounded-xl"
            href="#"
          >
            Sign up
          </a>
          <a
            className=" lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 text-sm text-gray-900 font-bold rounded-xl hover:bg-gray-100 relative group"
            href="#"
          >
            Sign In
            <ArrowForwardIcon
              fontSize="medium"
              className="ml-1 transition-transform duration-300 transform-gpu group-hover:translate-x-2"
            />
          </a>
        </div>
      </nav>
      <div className={`navbar-menu relative z-50 ${open ? "" : "hidden"} `}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Logo />
            </a>
            <button
              className="navbar-close hover:animate-wiggle"
              onClick={() => setOpen(!open)}
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <ul>
              <MobileNavLink url="#" isActive={true}>
                <HomeIcon /> Home
              </MobileNavLink>
              <MobileNavLink url="#">
                <ProjectsIcon />
                Projects
              </MobileNavLink>
              <MobileNavLink url="#">
                <WebsiteIcon />
                Websites
              </MobileNavLink>
              <MobileNavLink url="#">
                <ImageIcon /> Images
              </MobileNavLink>
              <MobileNavLink url="#">
                <NoteIcon />
                Notes
              </MobileNavLink>
              <MobileNavLink url="#">
                <YouTubeIcon />
                YouTube
              </MobileNavLink>
              <MobileNavLink url="#">
                <SocialMediaIcon />
                Social Media
              </MobileNavLink>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-loose bg-gray-50 hover:bg-gray-100 rounded-xl relative group"
                href="#"
              >
                Sign in
                <ArrowForwardIcon
                  fontSize="small"
                  className="ml-1 transition-transform duration-300 transform-gpu group-hover:translate-x-3"
                />
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
