import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// route module
import { RoutingModule } from './app.router';

// services
import { BlogService } from './providers/blog.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    HomePageComponent,
    Error404PageComponent,
    PostPageComponent,
    FooterComponent,
    PostComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
