import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar-sony',
  templateUrl: './menu-bar-sony.component.html',
  styleUrls: ['./menu-bar-sony.component.css'],
})
export class MenuBarSonyComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Verifica a posição de rolagem e atualiza o estado do menu
    this.isScrolled = window.scrollY > 0;
  }
}
