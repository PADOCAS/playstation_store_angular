import { Component, Input } from '@angular/core';
import { MenuLeftName } from 'src/models/menuLeftName';

@Component({
  selector: 'app-menu-bar-principal-left',
  templateUrl: './menu-bar-principal-left.component.html',
  styleUrls: ['./menu-bar-principal-left.component.css']
})
export class MenuBarPrincipalLeftComponent {
  @Input() menuLeftNames?: MenuLeftName[];
}
