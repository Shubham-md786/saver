import Link from "next/link";
import React from "react";
import { Add, FilterAlt, Search, SwapHoriz } from "@mui/icons-material";

function index() {
  const showPassword = "";
  return (
    <>
      <section>
        <div>
          <div className="text-sm breadcrumbs ml-2">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/websites">Websites</Link>
              </li>
            </ul>
          </div>
          <h1 className="my-8 text-2xl font-semibold text-primary drop-shadow-md leading-none text-center md:text-3xl">
            Websites
          </h1>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
            <div className="lg:col-span-3 bg-black"></div>
            <div className="lg:col-span-9">
              <div className="flex flex-col space-y-4  w-full text-white md:flex-row md:space-x-4 md:space-y-0 md:items-center">
                <form className="flex space-x-3 justify-center items-center grow">
                  <div className="relative grow">
                    <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full py-3 pl-12 pr-4 text-primary border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-active"
                    />
                  </div>
                  <button className="btn rounded-btn btn-primary">
                    <Search />
                  </button>
                </form>
                <div className="flex space-x-4 justify-center items-center">
                  <button className="btn rounded-btn btn-primary">
                    <SwapHoriz />
                  </button>
                  <button className="btn rounded-btn btn-primary">
                    <Add />
                  </button>
                  <button className="btn rounded-btn btn-primary">
                    <FilterAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
