import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + '/' + id);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post<any>(API_URL, book);
  }

  updateBook(id: number, book: Book): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + '/' + id);
  }
}
