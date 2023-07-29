import { ReactNode } from "react";

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
import BlueButton from "./Buttons/BlueButton";
import Logo from "./Logo";

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
        className={`text-sm drop-shadow-sm ${
          isActive
            ? "text-active font-bold border-b-2 border-blue-500"
            : "text-primary font-semibold"
        } hover:text-active hover:font-bold ${className}`}
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
        className={`p-4 text-sm font-semibold flex gap-3 items-center rounded drop-shadow-sm ${
          isActive ? "bg-blue-50 text-active scale-105" : "text-primary-light"
        } hover:bg-blue-50 hover:text-active hover:scale-105 ${className}`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

function Navbar() {
  return (
    <header>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav className="navbar relative p-4 mb-5 flex justify-between bg-white lg:mb-8">
            <a className="text-3xl font-bold leading-none" href="#">
              <Logo />
            </a>
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-ghost text-primary p-1"
              >
                <MenuIcon fontSize="large" />
              </label>
            </div>
            <ul className="hidden absolute gap-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
              {navigation.map((ele, index) => (
                <NavLink href={ele.href} key={index} isActive={ele.isActive}>
                  {ele.name}
                </NavLink>
              ))}
            </ul>
            <div className="hidden lg:inline-block">
              <a className="btn btn-sm btn-primary mx-3 ml-auto" href="#">
                Sign up
              </a>
              <a
                className="btn btn-sm ml-auto border-0 bg-gray-50 text-sm text-primary drop-shadow-sm hover:bg-gray-100 relative group"
                href="#"
              >
                Sign In
                <ArrowForwardIcon
                  fontSize="small"
                  className="ml-1 transition-transform duration-300 transform-gpu group-hover:translate-x-2"
                />
              </a>
            </div>
          </nav>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Logo />
              </a>
              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-ghost flex items-center text-primary p-1 hover:animate-wiggle"
              >
                <CloseIcon />
              </label>
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
                  className="block px-4 py-3 mb-3 text-sm text-center font-semibold leading-loose bg-gray-50 drop-shadow-sm hover:bg-gray-100 rounded-md relative group"
                  href="#"
                >
                  Sign in
                  <ArrowForwardIcon
                    fontSize="small"
                    className="ml-1 transition-transform duration-300 transform-gpu group-hover:translate-x-3"
                  />
                </a>
                <BlueButton className="block py-3 mb-2 text-center" href="#">
                  Sign Up
                </BlueButton>
              </div>
              <p className="my-4 text-xs text-center text-primary-light">
                <span>© 2023 CypherVault, Inc. All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
