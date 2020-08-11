import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookId')
  async getBook(@Param('bookId') bookId: number) {
    const book = await this.booksService.getBook(bookId);
    return book;
  }
}
