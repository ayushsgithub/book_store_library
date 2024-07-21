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
import AlertDialogUpdate from "../components/AlertDialogUpdate"
import { AlertDialogDelete } from "../components/AlertDialogDelete";
type Book = {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
};
async function getData() {
  const res = await fetch("http://localhost:3000/books", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log(res);
  return res.json();
}

export default async function page() {
  const data = await getData();
  // console.log(data);

  return (
    <main className="min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:pb-12">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase mt-6">
            TABLE DATA
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div>
          <Table>
            <TableCaption>A table of your recent data.</TableCaption>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[300px]">ID</TableHead> */}
                <TableHead className="w-[600px]">Book</TableHead>
                <TableHead className="w-[700px]">Author</TableHead>
                <TableHead className="w-60">Published On</TableHead>
                <TableHead>Update</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((book: Book) => (
                <TableRow className="text-white" key={book._id}>
                  {/* <TableCell>{book._id}</TableCell> */}
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.publishYear}</TableCell>
                  <TableCell>
                    <AlertDialogUpdate
                      toUpdate={book._id}
                      bookTitle={book.title}
                      bookAuthor={book.author}
                      bookPublishYear={book.publishYear}
                    />
                  </TableCell>
                  <TableCell>
                    <AlertDialogDelete toDelete={book._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
