"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function AlertDialogUpdate({
    toUpdate,
    bookTitle,
    bookAuthor,
    bookPublishYear,
  }: {
    toUpdate: string;
    bookTitle: string;
    bookAuthor: string;
    bookPublishYear: number;
  }) {
    const router = useRouter();
    const [title, setTitle] = useState(bookTitle);
    const [author, setAuthor] = useState(bookAuthor);
    const [publishYear, setPublishYear] = useState(bookPublishYear.toString());
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
      // event.preventDefault();
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("publishYear", publishYear);
  
      setLoading(true);
  
      const data = {
        title,
        author,
        publishYear,
      };
  
      const res = await fetch(`http://localhost:3000/books/${toUpdate}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="font-semibold hover:bg-red-800">^</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update your details</AlertDialogTitle>
            <AlertDialogDescription>
              This action will update your details. Are you sure you want to do
              it?
            </AlertDialogDescription>
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
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }