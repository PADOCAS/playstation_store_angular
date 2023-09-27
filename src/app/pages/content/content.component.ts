import { Component, OnInit } from '@angular/core';
import { dados } from '../../data/dados';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  photo: string = '';
  name: string = '';
  valor: string = '';
  plataformas?: [{}] | any;
  description: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    //Verificar o ID que está recebendo na route content como parametro:
    // Ao iniciar o component já vai alimentar o id do this.contentDescription.component:
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Sempre abre no topo da página (caso não passar isso ele se perde um pouco com o scroll da página anterior)
      }
    });
  }

  setValuesToComponent(id: string | null) {
    // Vamos procurar no nosso dataFake o ID que está vindo
    const result = dados.filter((item) => item.id == id)[0];

    // Alimenta os atributos:
    this.photo = result.photo;
    this.name = result.name;
    this.valor = result.valor;
    this.plataformas = result.plataformas;
    this.description = result.description;
  }
}
