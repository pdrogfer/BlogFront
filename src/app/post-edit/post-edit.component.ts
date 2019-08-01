import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: any
  postId: string
  formulary: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.getPostById()
  }

  getPostById() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
      this.postService.getPostById(this.postId).then(response => {
        console.log(response);
        this.post = response;

        this.formulary = new FormGroup({
          title: new FormControl(this.post.title),
          content: new FormControl(this.post.content)
        })
      })
    })
  }

  sendFormEditPost() {
    this.postService.updatePost(this.postId, this.formulary.value).then(response => {
      console.log(response);
      this.router.navigate(['/'])
    })
  }

}
