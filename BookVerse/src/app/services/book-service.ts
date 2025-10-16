import { Injectable } from '@angular/core';
import { Book } from '../models/books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly api_url = "http://localhost:3000/books"

  books : Book[]

  constructor(private http: HttpClient){
    this.books = []
  }

  getBooks(){
    return this.http.get<Book[]>(this.api_url)
  }
  
  getBook(id: string){
    return this.http.get<Book>(this.api_url+"/"+id)
  }

  postBook(book: Book){
    return this.http.post<Book>(this.api_url,book)
  }

  putBook(book: Book){
    return this.http.put<Book>(this.api_url+"/"+book.id,book)
  }

  deleteBook(id: string){
    return this.http.delete<Book>(this.api_url+"/"+id)
  }
}
