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
}
