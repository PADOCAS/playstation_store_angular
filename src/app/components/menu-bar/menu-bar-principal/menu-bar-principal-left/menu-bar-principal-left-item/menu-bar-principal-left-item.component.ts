import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-principal-left-item',
  templateUrl: './menu-bar-principal-left-item.component.html',
  styleUrls: ['./menu-bar-principal-left-item.component.css', './menu-bar-principal-left-item.responsive.component.css'],
})
export class MenuBarPrincipalLeftItemComponent {
  @Input() menuLeftName: string = '';
}
