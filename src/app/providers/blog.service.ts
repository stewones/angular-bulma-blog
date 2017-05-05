// importa _ como dependencia
import * as _ from 'lodash';
// usado para decorar serviços angular
import { Injectable } from '@angular/core';
// usado para navegarmos entre rotas
import { Router } from '@angular/router';
// usado para requisições GET, POST, etc
import { Http } from '@angular/http';

// declara uma constante base url
const BASEURL = window.location.href;


@Injectable() // decora a classe para ser "injetável" dentro do angular
// exporta nossa classe para ser "importável" rs, por outros arquivos
export class BlogService {

  // declara uma variável de escopo global na classe com a url do serviço externo que iremos consumir. experimente copiar e colar esta url no seu navegador. 
  getUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    public http: Http, // injetando serviço Http do angular
    public router: Router // injetando serviço router do angular
  ) { }


  // pegar a lista de posts
  posts() {
    return new Promise((resolve, reject) => { // retorna uma promessa que quando resolvida irá conter a lista de posts

      this.http.get(this.getUrl).subscribe((data: any) => {
        let posts = JSON.parse(data._body);
        posts.map((post, i) => {
          posts[i].titleSlug = _.kebabCase(post.title);
          posts[i].router = '/' + posts[i].titleSlug + '/' + posts[i].id;
          posts[i].url = BASEURL + posts[i].router;
        });
        resolve(posts);
      }, (err) => {
        reject(err);
      });

    })
  }

  // pegar um post especifico, passando como parametro o id do post
  post(id: any) {
    return new Promise((resolve, reject) => {
      this.posts().then((posts: any[]) => {
        let post = _.find(posts, (p) => {
          return p.id == id;
        });
        return post ? resolve(post) : reject('post not found');
      });
    })
  }

}