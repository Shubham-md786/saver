import React from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  YouTube,
} from "@mui/icons-material";

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
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
            <h1 className="text-xl font-bold">SAVER</h1>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              {socialLinks.map((ele, index) => (
                <a
                  href={ele.url}
                  className="hover:opacity-75"
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
                <p className="font-medium">{key}</p>
                <ul className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  {links[key as keyof typeof links].map((ele, index) => (
                    <li key={index} className="cursor-pointer">
                      <a href={ele.href}>{ele.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-700 font-bold">
          © 2020 SAVER, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
