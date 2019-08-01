import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  postId: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPostById()
  }

  getPostById() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
      this.postService.getPostById(this.postId).then(response => {
        this.post = response
        console.log("Post by id: " + JSON.stringify(this.post));
      })
    })
  }

  deletePost(post) {
    this.postService.deletePost(post).then(response => {
      console.log(response)
      this.router.navigate(['/'])
    })
  }
}
