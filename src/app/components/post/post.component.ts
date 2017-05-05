// importando dependencias do angular core
import { Component, OnInit } from '@angular/core';
// importando dependencias de rota
import { Router, ActivatedRoute } from '@angular/router';
// importando o provider do blog
import { BlogService } from '../../providers/blog.service';

// decorando o componente para informar como o angular deve trabalhar
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
// exportando a classe deste componente para ser importável por outros arquivos (no caso, o app.module.ts)
export class PostComponent implements OnInit {
  // declarando uma váriavel objeto do tipo any que irá armazenar o post assim que for resolvido pelo provider
  post: any = {};

  constructor(
    // instanciando a rota ativa
    public activatedRoute: ActivatedRoute,
    // instanciando o roteador
    public router: Router,
    // instanciando nosso provider de blog
    public blog: BlogService) {
    // chama a rota ativa
    this.activatedRoute
      .params
      // se inscreve para quando for resolvida
      .subscribe(
      // recebe os parametros
      params => {
        // declaro uma variavel id baseado no parametro id da url
        let id = params['id'];
        // pego o post em questao
        this.blog.post(id)
          // quando resolvido
          .then((post: any) => {
            // liga os dados na view (template)
            this.post = post;
          })
          // tratamento de erro
          .catch((e) => {
            console.error(e);
            // força navegação pra página 404
            this.router.navigate(['/404']);
          })
      });

  }

  ngOnInit() { }
}
