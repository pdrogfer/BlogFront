import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'detail/:postId', component: PostDetailComponent },
  { path: 'edit/:postId', component: PostEditComponent },
  { path: 'new', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
