import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  arrPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList()
  }

  getPostList() {
    this.postService.getAllPosts().then(response => {
      this.arrPosts = response
      console.log("Posts list: " + JSON.stringify(this.arrPosts));
    })
  }

}
