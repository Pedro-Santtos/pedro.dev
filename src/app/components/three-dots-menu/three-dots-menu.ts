import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-three-dots-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './three-dots-menu.html',
  styleUrl: './three-dots-menu.css'
})
export class ThreeDotsMenuComponent {
  @ViewChild('menuButton') private menuButtonRef?: ElementRef<HTMLButtonElement>;

  protected isOpen = false;
  protected readonly menuId = 'three-dots-menu-panel';

  protected readonly options = [
    { label: 'Início', action: '/', route: '/' },
    { label: 'Sobre', action: 'sobre', route: '/sobre' },
    { label: 'Projetos', action: 'projetos', route: '/projetos' },
    { label: 'Blog', action: 'blog', route: '/blog' },
    { label: 'Contato', action: 'contato', route: '/contato' }
  ];

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  openMenu(): void {
    this.isOpen = true;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  onItemSelect(action: string): void {
    this.closeMenu();
    console.log(`Ação selecionada: ${action}`);
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null): void {
    const clickedInside = this.menuButtonRef?.nativeElement.contains(target as Node);
    if (!clickedInside) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }
}
