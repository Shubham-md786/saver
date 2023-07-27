import { ReactNode, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  Home as HomeIcon,
  Settings as ProjectIcon,
  Language as WebsiteIcon,
  Image as ImageIcon,
  Description as NoteIcon,
  YouTube as YouTubeIcon,
  Share as SocialMediaIcon,
} from "@mui/icons-material";

interface NavElement {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  isActive?: boolean;
}

const navigation: NavElement[] = [
  { name: "Home", href: "/", icon: HomeIcon, isActive: true },
  { name: "Projects", href: "/projects", icon: ProjectIcon },
  { name: "Websites", href: "/websites", icon: WebsiteIcon },
  { name: "Images", href: "/images", icon: ImageIcon },
  { name: "Notes", href: "/notes", icon: NoteIcon },
  { name: "YouTube", href: "/youtube", icon: YouTubeIcon },
  { name: "Social Media", href: "/social-media", icon: SocialMediaIcon },
];

function Logo() {
  return (
    <>
      <span className="sr-only">SAVER</span>
      <h1>SAVER</h1>
    </>
  );
}

interface NavLinkComponent {
  children: ReactNode;
  href: string;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkComponent> = ({
  href,
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
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

const MobileNavLink: React.FC<NavLinkComponent> = ({
  href,
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
        href={href}
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
            className="navbar-burger flex items-center text-blue-600 p-1"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <ul className="hidden absolute gap-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          {navigation.map((ele, index) => (
            <NavLink href={ele.href} key={index} isActive={ele.isActive}>
              {ele.name}
            </NavLink>
          ))}
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
      {open && (
        <div className="navbar-menu relative z-50">
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
                {navigation.map((ele, index) => (
                  <MobileNavLink
                    href={ele.href}
                    key={index}
                    isActive={ele.isActive}
                  >
                    <>
                      <ele.icon /> {ele.name}
                    </>
                  </MobileNavLink>
                ))}
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
                  className="block py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
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
      )}
    </>
  );
}

export default Navbar;
