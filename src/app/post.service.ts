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

  // GET http://localhost:3000/api/posts/1234
  getPostById(postId): Promise<Post> {
    return this.http.get<Post>(this.baseUrl + "/" + postId).toPromise();
  }

  // POST http://localhost:3000/api/posts/create
  createNewPost(values): Promise<Post> {
    return this.http.post<Post>(this.baseUrl + "/new", values).toPromise();
  }

  deletePost(post): Promise<Post> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        postId: post._id
      }
    }
    return this.http.delete<Post>(this.baseUrl + "/delete", httpOptions).toPromise();
  }

  updatePost(postId, values): Promise<Post> {
    values.postId = postId;
    return this.http.put<Post>(this.baseUrl + "/edit", values).toPromise();
  }
}
