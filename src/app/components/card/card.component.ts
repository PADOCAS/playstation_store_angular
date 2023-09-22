import { Component, Input } from '@angular/core';
import { GameConsoleSpan } from 'src/models/gameConsoleSpan';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() gameCover:string = "";
  // Propriedade dos filhos para ter possibilidade de passar isso já na construção do card (repassando para os filhos)
  // Para isso o nome das variáveis devem ser iguais a dos filhos!!! (APENAS ISSO BASTA PARA SER PASSADO DE PAI PARA FILHO)
  @Input() gameLabel:string = "";
  @Input() gameType:string = "";
  @Input() gamePrice:string = "";
  @Input() gameSpans?: GameConsoleSpan[];
}
