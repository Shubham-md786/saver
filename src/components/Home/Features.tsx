import React from "react";

import {
  CloudArrowUpIcon,
  IdentificationIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ArrowForward } from "@mui/icons-material";

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

function Features() {
  return (
    <section className="bg-white my-24">
      {/* <div
        className="absolute inset-0 max-w-xs mx-auto h-auto blur-[118px] "
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold leading-7 text-active-dark tracking-wide">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary">
            Everything you need to Store
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative shadow-lg border rounded-lg p-7 hover:shadow-blue-100"
              >
                <dt className="text-base leading-7">
                  <div className=" flex h-10 w-10 items-center justify-center rounded-lg bg-button-primary-dark">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="my-4 text-primary font-semibold">
                    {feature.name}
                  </p>
                </dt>
                <dd className="my-2 text-sm leading-7 text-primary-light">
                  {feature.description}
                </dd>
                <a
                  href={feature.href}
                  className="text-sm text-active duration-150 hover:text-active-dark font-medium inline-flex items-center gap-x-1"
                >
                  Learn more
                  <ArrowForward fontSize="inherit" />
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Features;
