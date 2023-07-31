import React from "react";

import {
  CloudArrowUpIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ArrowForward } from "@mui/icons-material";
import Section from "./Section";

const features = [
  {
    name: "Blazing Fast Speed",
    description:
      "Experience blazing fast cloud speeds for effortless file management, project handling, and seamless exploration of our platform's features. Enjoy unparalleled efficiency and reliability with us today!",
    icon: CloudArrowUpIcon,
    href: "",
  },
  {
    name: "Advanced security",
    description:
      "Your data's security is our top priority. Our website utilizes advanced encryption and industry-leading protocols to ensure comprehensive protection from unauthorized access.",
    icon: LockClosedIcon,
    href: "",
  },
  {
    name: "Easy Access",
    description:
      "Effortlessly access your data on our user-friendly website. With a simple interface, managing your information is a breeze. Enjoy the convenience of seamless data access and focus on what matters most.",
    icon: IdentificationIcon,
    href: "",
  },
  {
    name: "Personalization",
    description:
      "Store and manage your projects, website URLs, images, passwords, IDs, and social media posts securely in one personalized hub. Enjoy seamless organization tailored to your needs with advanced data encryption. Simplify your digital life with us!",
    icon: UserIcon,
    href: "",
  },
];

// const Feature = ({ name, icon, description, href }) => {
//   return (
//     <div
//       key={name}
//       className="shadow-lg border rounded-lg p-7 hover:shadow-blue-100"
//     >
//       <dt className="text-base leading-7">
//         <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-button-primary-dark">
//           <icon className="h-6 w-6 text-white" />
//         </div>
//         <p className="py-2 text-primary font-semibold">{name}</p>
//       </dt>
//       <dd className=" text-sm leading-7 text-primary-light">{description}</dd>
//       <a
//         href={href}
//         className="pt-2 pb-1 text-sm text-active duration-150 hover:text-active-dark font-medium inline-flex items-center gap-x-1"
//       >
//         Learn more
//         <ArrowForward fontSize="inherit" />
//       </a>
//     </div>
//   );
// };

function Features() {
  return (
    <Section
      tag="Features"
      title="Everything you need to Store"
      description=" Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
    Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
    In mi viverra elit nunc."
    >
      <div className="mx-auto flex items-center justify-center lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="shadow-lg border rounded-lg p-7 md:p-9 hover:shadow-blue-100"
            >
              <dt className="text-base leading-7">
                <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-button-primary-dark">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <p className="py-2 md:py-2.5 text-primary font-semibold">
                  {feature.name}
                </p>
              </dt>
              <dd className=" text-sm leading-7 text-primary-light">
                {feature.description}
              </dd>
              <a
                href={feature.href}
                className="pt-2 pb-1 text-sm text-active duration-150 hover:text-active-dark font-medium inline-flex items-center gap-x-1"
              >
                Learn more
                <ArrowForward fontSize="inherit" />
              </a>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export default Features;
