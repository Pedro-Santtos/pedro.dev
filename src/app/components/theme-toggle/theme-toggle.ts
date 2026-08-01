import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, type ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css'
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);
  protected readonly themeMode = this.themeService.themeMode;
  protected readonly currentThemeLabel = computed(() => {
    return this.themeMode() === 'light' ? 'Claro' : this.themeMode() === 'dark' ? 'Escuro' : 'Automático';
  });

  protected readonly currentThemeIcon = computed(() => {
    return this.themeMode() === 'light' ? '☀️' : this.themeMode() === 'dark' ? '🌙' : '💡';
  });

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }
}
