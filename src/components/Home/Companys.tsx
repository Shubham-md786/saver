import React from "react";
import Section from "./Section";
import Image from "next/image";

const companys = [
  {
    img: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
    name: "Transistor",
  },
  {
    img: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    name: "Reform",
  },
  {
    img: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
    name: "Tuple",
  },
  {
    img: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
    name: "SavvyCal",
  },
  {
    img: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
    name: "Statamic",
  },
];

function Companys() {
  return (
    <Section
      tag="Companys"
      title="Trusted by the world&#39;s most innovative companys"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      venenatis sollicitudin quam ut tincidunt."
    >
      <div className="px-2 mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {companys.map((company) => (
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={company.img}
            width={158}
            height={48}
            key={company.name}
            alt={company.name}
          />
        ))}
      </div>
    </Section>
  );
}

export default Companys;
