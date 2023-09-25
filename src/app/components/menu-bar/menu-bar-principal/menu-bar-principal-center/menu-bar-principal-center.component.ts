import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar-principal-center',
  templateUrl: './menu-bar-principal-center.component.html',
  styleUrls: ['./menu-bar-principal-center.component.css']
})
export class MenuBarPrincipalCenterComponent {
  clickButton() {
    alert('Iniciar sessão...');
  }
}
