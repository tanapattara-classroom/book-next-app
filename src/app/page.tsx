"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import type { BookResponse, Book } from "../types/book";
import Link from "next/link";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);

  const getData = async () => {
    // Fetch data from the API
    const response = await fetch("http://localhost:3000/api/books");
    if (response.ok) {
      const data = await response.json();
      const resData: BookResponse = data;
      const books = resData.books;
      setBooksData(books);
    }
  };

  //React hook to fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  const handleNewBook = async () => {
    // 1.add new book info from form
    //  {
    //           "title": "NextJS Book",
    //           "author": "Tanapattara",
    //           "description": "A NextJS handbook",
    //           "genre": "string",
    //           "year": 2024,
    //           "price": 0,
    //           "available": true
    //         }
    const newBook = {
      title: "New Book",
      author: "New Author",
      description: "A new book",
      genre: "Fiction",
      year: 2024,
      price: 100,
      available: true,
    };
    // get token from local storage
    const token = localStorage.getItem("token");
    // 2.sent new book to api
    fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        // 3.close dialog
        setIsNewDialogOpen(false);
      });
    // 4.refresh book list
  };

  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={1}>
        <Typography variant="h1">Books Application</Typography>
        <Button variant="contained" onClick={() => setIsNewDialogOpen(true)}>
          Add New Book
        </Button>
        {isLoading && <Typography>Loading...</Typography>}
        {booksData &&
          booksData.map((book) => {
            return (
              //localhost:3000/book/12345
              <Link href={`/book/${book._id}`} key={book._id}>
                <Typography key={book._id}>{book.title}</Typography>
              </Link>
            );
          })}
      </Stack>
      <Modal open={isNewDialogOpen} onClose={() => setIsNewDialogOpen(false)}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.paper",
          }}
        >
          <Stack>
            <Typography variant="h2">New Book</Typography>
            {/* Form to add new book */}
            {/* TODO
            {
              "title": "NextJS Book",
              "author": "Tanapattara",
              "description": "A NextJS handbook",
              "genre": "string",
              "year": 2024,
              "price": 0,
              "available": true
            }
          */}
            <Button onClick={() => setIsNewDialogOpen(false)}>Close</Button>
            <Button variant="contained" onClick={handleNewBook}>
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
}
