import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-photo',
  templateUrl: './content-card-photo.component.html',
  styleUrls: ['./content-card-photo.component.css'],
})
export class ContentCardPhotoComponent {
  @Input() photo: string = '';
  @Input() name: string = '';
}
