import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.sendFormulary()
  }

  sendFormulary() {

    let dummyPost = new Post();
    dummyPost.title = "New Post Title"
    dummyPost.content = "New Post Content"
    this.postService.create(dummyPost).then(response => {
      console.log("New Post:");
      console.log(response);
    })
  }

}
