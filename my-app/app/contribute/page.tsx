"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);

    setLoading(true);

    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setMessage("Book created successfully");
      setTitle("");
      setAuthor("");
      setPublishYear("");
      router.push("/bookstore", { scroll: false });
      router.refresh();
    } else {
      setMessage("Error creating book");
    }
  }

  return (
    // <section className="bg-black/[0.96] antialiased bg-grid-white[0.02] min-h-screen flex items-center justify-center bg-gradient-to-l md:bg-gradient-to-r ">
     <section className=" antialiased  min-h-screen flex items-center justify-center bg-book_shelf bg-[url('../public/book_shelf.jpg')] bg-no-repeat bg-cover" > 
      <div>
        <Card className="w-[650px] h-[400px]">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Contribute a Book</CardTitle>
              <CardTitle
                className="text-red-700 cursor-pointer hover:text-red-500 transition-colors"
                onClick={() => {
                  router.push("/bookstore", { scroll: false });
                }}
              >
                Exit
              </CardTitle>
            </div>

            <CardDescription>
              Add a new book to the library collection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Name of the Book"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="Name of the Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="publishYear">Published Year</Label>
                  <Input
                    type="number"
                    id="publishYear"
                    placeholder="Year of Publication"
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <Button
                  type="reset"
                  variant="outline"
                  onClick={() => {
                    setTitle("");
                    setAuthor("");
                    setPublishYear("");
                  }}
                >
                  Clear
                </Button>
                <Button type="submit" variant="default" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
            {/* {message && <p className="mt-4 text-center">{message}</p>} */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
