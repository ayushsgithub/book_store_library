import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  {const {userId} = auth();

  if (!userId) {
    return redirect("/login");
  }}

  return (
    // <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
    <main className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 antialiased bg-grid-white[0.02]">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
