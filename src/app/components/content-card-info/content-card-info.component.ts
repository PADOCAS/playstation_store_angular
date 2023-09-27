import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-info',
  templateUrl: './content-card-info.component.html',
  styleUrls: ['./content-card-info.component.css', './content-card-info.responsive.component.css'],
})
export class ContentCardInfoComponent {
  @Input() description: string = '';
}
