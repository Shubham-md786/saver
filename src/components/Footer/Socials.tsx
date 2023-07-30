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

function Socials() {
  return (
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
  );
}

export default Socials;
