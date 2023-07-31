import React, { ReactNode } from "react";

interface Section {
  children: ReactNode;
  tag: string;
  title: string;
  description: string;
}

const Section: React.FC<Section> = ({ children, tag, title, description }) => {
  return (
    <section className="my-20 py-4 mx-auto">
      <div>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className=" p-1 font-semibold leading-7 text-active-dark tracking-wide">
            {tag}
          </h2>
          <p className="mb-4 p-1 text-3xl font-bold tracking-tight text-primary">
            {title}
          </p>
          <p className="mb-12 p-1 leading-8 text-primary">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;

/* <div
        className="absolute inset-0 max-w-xs mx-auto h-auto blur-[118px] "
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div> */
