import React from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  YouTube,
} from "@mui/icons-material";
import Logo from "./Logo";

const socialLinks = [
  { name: "Facebook", url: "", icon: <Facebook /> },
  { name: "Instagram", url: "", icon: <Instagram /> },
  { name: "Twitter", url: "", icon: <Twitter /> },
  { name: "GitHub", url: "", icon: <GitHub /> },
  { name: "YouTube", url: "", icon: <YouTube /> },
];

const links = {
  Support: [
    { text: "Pricing", href: "/pricing" },
    { text: "Documentation", href: "/documentation" },
    { text: "Guides", href: "/guides" },
    { text: "API Status", href: "/api" },
  ],
  Company: [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "History", href: "/history" },
  ],
  Legal: [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms & Conditions", href: "/terms-and-conditions" },
    { text: "Accessibility", href: "/accessibility" },
  ],
  Services: [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Websites", href: "/websites" },
    { text: "Images", href: "/images" },
    { text: "Notes", href: "/notes" },
    { text: "YouTube", href: "/youtube" },
    { text: "Social Media", href: "/social-media" },
  ],
};

function Footer() {
  return (
    <footer className="mt-4">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
            <Logo className="text-2xl font-bold" />
            <p className="max-w-xs mt-4 text-sm text-primary">
              CypherVault provides a premium design and features to help you
              securely store and access all your digital assets in one place
            </p>
            <div className="flex mt-8 space-x-6 text-primary">
              {socialLinks.map((ele, index) => (
                <a
                  href={ele.url}
                  className="hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <span className="sr-only">{ele.name}</span>
                  {ele.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
            {Object.keys(links).map((key, index) => (
              <div key={key}>
                <p className="font-semibold">{key}</p>
                <ul className="flex flex-col mt-4 space-y-2 text-sm text-primary-light">
                  {links[key as keyof typeof links].map((ele, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-primary hover:font-medium"
                    >
                      <a href={ele.href}>{ele.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-primary font-bold">
          © 2023 CypherVault, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
