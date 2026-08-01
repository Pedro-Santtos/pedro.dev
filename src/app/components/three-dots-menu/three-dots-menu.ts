import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-three-dots-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './three-dots-menu.html',
  styleUrl: './three-dots-menu.css'
})
export class ThreeDotsMenuComponent {
  @ViewChild('menuButton') private menuButtonRef?: ElementRef<HTMLButtonElement>;
  @ViewChild('drawerPanel') private drawerPanelRef?: ElementRef<HTMLElement>;

  private readonly themeService = inject(ThemeService);

  protected readonly isOpen = signal(false);
  protected readonly menuId = 'three-dots-menu-panel';
  protected readonly themeMode = this.themeService.themeMode;
  protected readonly isMainGroupOpen = signal(true);

  protected readonly options = [
    { label: 'Início', route: '/', icon: '⌂' },
    { label: 'Sobre', route: '/sobre', icon: '◉' },
    { label: 'Projetos', route: '/projetos', icon: '▣' },
    { label: 'Blog', route: '/blog', icon: '✎' },
    { label: 'Contato', route: '/contato', icon: '✉' }
  ];

  private lastFocusedElement: HTMLElement | null = null;

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  toggleMenu(): void {
    if (this.isOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenuFromTrigger(event?: MouseEvent): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.toggleMenu();
  }

  openMenu(): void {
    if (this.isOpen()) {
      return;
    }

    this.lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      this.focusFirstElement();
    });
  }

  closeMenu(): void {
    if (!this.isOpen()) {
      return;
    }

    this.isOpen.set(false);
    document.body.style.overflow = '';
    this.lastFocusedElement?.focus();
  }

  toggleGroup(group: 'main'): void {
    if (group === 'main') {
      this.isMainGroupOpen.update((value) => !value);
    }
  }

  isGroupExpanded(group: 'main'): boolean {
    return group === 'main' ? this.isMainGroupOpen() : false;
  }

  isActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/';
    }

    return this.router.url === route || this.router.url.startsWith(`${route}/`);
  }

  onItemSelect(route: string): void {
    this.closeMenu();
    if (this.router.url !== route) {
      void this.router.navigateByUrl(route);
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  protected getThemeLabel(): string {
    return this.themeMode() === 'light' ? 'Tema claro' : 'Tema escuro';
  }

  protected getThemeIcon(): string {
    return this.themeMode() === 'light' ? '☀️' : '🌙';
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null): void {
    if (!this.isOpen()) {
      return;
    }

    const clickedNode = target as Node;
    const clickedInsideButton = this.menuButtonRef?.nativeElement.contains(clickedNode);
    const clickedInsidePanel = this.drawerPanelRef?.nativeElement.contains(clickedNode);

    if (!clickedInsideButton && !clickedInsidePanel) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }

    if (event.key === 'Tab') {
      this.handleTabKeydown(event);
    }
  }

  private focusFirstElement(): void {
    const focusableElements = this.getFocusableElements();
    const firstElement = focusableElements[0];
    firstElement?.focus();
  }

  private handleTabKeydown(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const panel = this.drawerPanelRef?.nativeElement;
    if (!panel) {
      return [];
    }

    return Array.from(
      panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((element) => !element.hasAttribute('disabled'));
  }
}
