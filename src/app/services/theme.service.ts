import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly themeMode = signal<ThemeMode>('light');

  private readonly storageKey = 'portfolio-theme';
  private readonly mediaQuery = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  constructor() {
    this.initializeTheme();

    this.mediaQuery?.addEventListener?.('change', () => {
      const currentMode = this.themeMode();
      if (currentMode === 'light' || currentMode === 'dark') {
        this.applyTheme(currentMode);
      }
    });
  }

  setTheme(mode: ThemeMode): void {
    this.themeMode.set(mode);
    this.applyTheme(mode);
  }

  toggleTheme(): void {
    const nextMode = this.themeMode() === 'light' ? 'dark' : 'light';
    this.setTheme(nextMode);
  }

  private initializeTheme(): void {
    const storedTheme = this.getStoredTheme();
    const initialMode = storedTheme ?? this.getSystemTheme();
    this.themeMode.set(initialMode);
    this.applyTheme(initialMode);
  }

  private applyTheme(mode: ThemeMode): void {
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-theme-mode', mode);
    document.documentElement.style.colorScheme = mode;

    localStorage.setItem(this.storageKey, mode);
  }

  private getSystemTheme(): ThemeMode {
    return this.mediaQuery?.matches ? 'dark' : 'light';
  }

  private getStoredTheme(): ThemeMode | null {
    const stored = localStorage.getItem(this.storageKey);
    return stored === 'light' || stored === 'dark' ? (stored as ThemeMode) : null;
  }
}
