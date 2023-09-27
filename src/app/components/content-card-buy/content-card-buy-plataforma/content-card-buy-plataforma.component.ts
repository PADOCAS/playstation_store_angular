import { Component, Input } from '@angular/core';
import { Plataforma } from 'src/models/plataforma';

@Component({
  selector: 'app-content-card-buy-plataforma',
  templateUrl: './content-card-buy-plataforma.component.html',
  styleUrls: ['./content-card-buy-plataforma.component.css'],
})
export class ContentCardBuyPlataformaComponent {
  @Input() name:string = "";
}
