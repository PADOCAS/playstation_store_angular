import { Component, Input } from '@angular/core';
import { MenuLeftName } from 'src/models/menuLeftName';

@Component({
  selector: 'app-menu-bar-principal',
  templateUrl: './menu-bar-principal.component.html',
  styleUrls: ['./menu-bar-principal.component.css'],
})
export class MenuBarPrincipalComponent {
  @Input() menuLeftNames?: MenuLeftName[];
}
