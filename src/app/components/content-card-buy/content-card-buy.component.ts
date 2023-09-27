import { Component, Input } from '@angular/core';
import { Plataforma } from 'src/models/plataforma';

@Component({
  selector: 'app-content-card-buy',
  templateUrl: './content-card-buy.component.html',
  styleUrls: ['./content-card-buy.component.css', './content-card-buy.responsive.component.css']
})
export class ContentCardBuyComponent {
  @Input() name: string = '';
  @Input() valor: string = '';
  @Input() plataformas?: Plataforma[];

  onClickBuy() {
    alert("Adicionar ao Carrinho...");
  }
}
