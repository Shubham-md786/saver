import React from "react";

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
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold leading-7 text-active-dark tracking-wide">
            Statistics
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary">
            Our customers are always happy
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-16">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center px-12 md:px-16">
                <h4 className="text-4xl text-active font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Stats;
