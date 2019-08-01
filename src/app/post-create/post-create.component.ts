import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  formulary: FormGroup
  errors: any[]

  constructor(private postService: PostService, private router: Router) {

    this.formulary = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
  }

  ngOnInit() {
  }

  async sendFormNewPost() {
    console.log(this.formulary.value);

    try {
      await this.postService.createNewPost(this.formulary.value);
      this.router.navigate(['/'])
    } catch (err) {
      console.log(err.error);
      this.errors = err.error;
    }
  }
}
