import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/posts"
  }

  // GET http://localhost:3000/api/posts
  getAllPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + "/").toPromise();
  }

  // POST http://localhost:3000/api/posts/create
  create(values): Promise<Post> {
    return this.http.post<Post>(this.baseUrl + "/new", values).toPromise();
  }
}
