import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../data/db';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }

  getBook(bookId: number): Promise<any> {
    const id = Number(bookId);
    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new HttpException('Book not found.', 404);
      }

      resolve(book);
    });
  }

  addBook(book: any): Promise<any> {
    return new Promise((resolve) => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  deleteBook(bookId: number): Promise<any> {
    bookId = Number(bookId);
    return new Promise((resolve) => {
      const index = this.books.findIndex((book) => book.id === bookId);
      if (index === -1) {
        throw new HttpException('Book not found.', 404);
      }
      this.books.splice(index, 1);
      resolve(this.books);
    });
  }
}
