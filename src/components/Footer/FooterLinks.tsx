import React from "react";

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

function Links() {
  return (
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
  );
}

export default Links;
