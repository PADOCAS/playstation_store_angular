import { Component, Input } from '@angular/core';
import { CardDestaqueSecundario } from 'src/models/cardDestaqueSecundario';

@Component({
  selector: 'app-card-destaque-secundarios',
  templateUrl: './card-destaque-secundarios.component.html',
  styleUrls: [
    './card-destaque-secundarios.component.css',
    './card-destaque-secundarios.responsive.component.css',
  ],
})
export class CardDestaqueSecundariosComponent {
  @Input() cardsDestaquesSecundarios?: CardDestaqueSecundario[];
}
