import { Component, Input } from '@angular/core';
import { CardDestaqueSecundario } from 'src/models/cardDestaqueSecundario';

@Component({
  selector: 'app-card-destaque-secundarios-content',
  templateUrl: './card-destaque-secundarios-content.component.html',
  styleUrls: [
    './card-destaque-secundarios-content.component.css',
    './card-destaque-secundarios-content.responsive.component.css',
  ],
})
export class CardDestaqueSecundariosContentComponent {
  @Input() name: string = '';
  @Input() photo: string = '';
}
