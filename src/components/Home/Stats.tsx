import React from "react";
import Section from "./Section";

const stats = [
  {
    data: "35K",
    title: "Customers",
  },
  {
    data: "10K+",
    title: "Downloads",
  },
  {
    data: "40+",
    title: "Countries",
  },
  {
    data: "30M+",
    title: "Total revenue",
  },
];

function Stats() {
  return (
    <Section
      tag="Statistics"
      title="Our customers are always happy"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    venenatis sollicitudin quam ut tincidunt."
    >
      <ul className="flex items-center justify-center gap-y-10 flex-row flex-wrap lg:divide-x">
        {stats.map((item, idx) => (
          <li key={idx} className="text-center px-9 md:px-16">
            <h4 className="text-4xl text-active font-semibold">{item.data}</h4>
            <p className="font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Stats;
