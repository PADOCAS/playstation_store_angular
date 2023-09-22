import { Component, Input } from '@angular/core';
import { GameConsoleSpan } from 'src/models/gameConsoleSpan';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent {
  @Input() gameType: string = '';
  @Input() gamePrice: string = '';
  @Input() gameSpans?: GameConsoleSpan[];
}
