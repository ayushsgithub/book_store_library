import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="bg-slate-900/90 dark:bg-gray-900  shadow-lg rounded-md ">
      <div className=" flex items-center justify-between mx-auto p-4 max-w-7xl">
        <Link href="/" className="flex items-center space-x-3 ">
          <span className="self-center text-2xl font-semibold text-white/50 hover:text-white/85">
            Library
          </span>
        </Link>

        <div className="flex items-center space-x-5">
          <Link
            href="/bookstore"
            className="text-white/50 hover:text-white/85 dark:text-gray-400"
          >
            Store
          </Link>
          <Link
            href="/contribute"
            className="text-white/50 hover:text-white/85 dark:text-gray-400"
          >
            Contribute
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-white/85 dark:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/"
            className=" text-white/50 hover:text-white/85 dark:text-gray-400"
          >
            Contact
          </Link>
        </div>

        <div className="text-white">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
