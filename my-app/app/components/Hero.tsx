import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] min-h-screen w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0 bg-[url('../public/lib.avif')] bg-no-repeat bg-cover ">
      {/* <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "> */}
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-gray-800 text-white " >
        Welcome to Our Library
      </h1>
      <div className="max-w-sm md:max-w-7xl mx-auto flex items-center justify-center">
        <p className="mt-4 font-normal text-xl md:text-lg text-white mix-blend-color-dodge break-keep">
          Explore a world of knowledge and imagination. Our library offers a
          diverse collection of books, resources, and a welcoming atmosphere for
          readers of all ages. Whether you&apos;re here to discover new stories,
          deepen your knowledge, or simply unwind, we&apos;re here to enrich
          your reading journey.
        </p>
      </div>

      <div className="mt-4">
        <Link href={"/bookstore"}>
          <Button className="bg-blend-darken bg-white dark:bg-black hover:text-white text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-2xl shadow-white">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
