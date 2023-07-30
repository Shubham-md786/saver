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
import Logo from "../Logo";
import NavLink from "./NavLink";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, isActive: true },
  { name: "Projects", href: "/projects", icon: ProjectIcon },
  { name: "Websites", href: "/websites", icon: WebsiteIcon },
  { name: "Images", href: "/images", icon: ImageIcon },
  { name: "Notes", href: "/notes", icon: NoteIcon },
  { name: "YouTube", href: "/youtube", icon: YouTubeIcon },
  { name: "Social Media", href: "/social-media", icon: SocialMediaIcon },
];

function Navbar() {
  return (
    <header>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav className="navbar fixed py-2 px-5 shadow-sm flex justify-between bg-white lg:mb-8 z-10">
            <a href="#">
              <Logo />
            </a>
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-ghost text-primary"
              >
                <MenuIcon />
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
                className="btn btn-sm ml-auto border-0 bg-gray-100 text-primary drop-shadow-sm hover:bg-gray-200 relative group"
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
        <div className="drawer-side z-50 lg:hidden">
          <label htmlFor="my-drawer" className="drawer-overlay blur"></label>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-xs py-2 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <a href="#">
                <Logo />
              </a>
              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-ghost flex items-center text-primary hover:animate-wiggle"
              >
                <CloseIcon />
              </label>
            </div>
            <div>
              <ul>
                {navigation.map((ele, index) => (
                  <NavLink href={ele.href} key={index} isActive={ele.isActive}>
                    <>
                      <ele.icon /> {ele.name}
                    </>
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6 text-center">
                <a
                  className="btn btn-wide mb-3 border-0 bg-gray-100 text-primary hover:bg-gray-200 relative group"
                  href="#"
                >
                  Sign in
                  <ArrowForwardIcon
                    fontSize="small"
                    className="ml-1 transition-transform duration-300 transform-gpu group-hover:translate-x-3"
                  />
                </a>
                <a
                  className="btn btn-wide btn-primary py-3 mb-2 text-center"
                  href="#"
                >
                  Sign Up
                </a>
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
