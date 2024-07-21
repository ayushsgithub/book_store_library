import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Footer from "../components/Footer"

export default function BookStoreLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-black/[0.96] antialiased bg-grid-white[0.02]">
        {/* Include shared UI here e.g. a header or sidebar */}
        
        <nav className="bg-slate-900/90 dark:bg-gray-900  shadow-lg rounded-md ">
      <div className=" flex items-center justify-between mx-auto p-4 max-w-7xl">
        <Link href="/" className="flex items-center space-x-3 ">
          <span className="self-center text-2xl font-semibold text-white/50 hover:text-white/85">
          Library
          </span>
        </Link>

        <div className="flex items-center space-x-5">
          <Link href="/" className="text-white/50 hover:text-white/85 dark:text-gray-400">Home</Link>
          <Link href="/contribute" className="text-white/50 hover:text-white/85 dark:text-gray-400">Contribute</Link>
          <Link href="#" className="hidden md:flex text-white/50 hover:text-white/85 dark:text-gray-400">About</Link>
          <Link href="#" className="hidden md:flex text-white/50 hover:text-white/85 dark:text-gray-400">Contact</Link>
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
        {children}
        <Footer />
      </section>
    )
  }