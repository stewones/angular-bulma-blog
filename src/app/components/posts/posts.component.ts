import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../providers/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  loading: boolean = true;
  posts: any[];
  constructor(public blog: BlogService) { }

  ngOnInit() {
    this.blog.posts().then((posts: any[]) => {
      setTimeout(() => {
        this.posts = posts;
        this.loading = false;
      }, 1 * 1000) // 1 second
    })
  }

}
