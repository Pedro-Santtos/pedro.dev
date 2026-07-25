import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-shell',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="shell">
      <nav class="topbar">
        <a class="brand" routerLink="/">Pedro Igor</a>
        <div class="nav-links">
          <a routerLink="/sobre">Sobre</a>
          <a routerLink="/experiencia">Experiência</a>
          <a routerLink="/projetos">Projetos</a>
          <a routerLink="/tecnologias">Tecnologias</a>
          <a routerLink="/certificados">Certificados</a>
          <a routerLink="/blog">Blog</a>
          <a routerLink="/servicos">Serviços</a>
          <a routerLink="/estatisticas">Estatísticas</a>
          <a routerLink="/contato" class="contact-pill">Contato</a>
        </div>
      </nav>
      <main class="page-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .shell { min-height: 100vh; background: #0a0a0a; color: #f8fafc; }
      .topbar {
        position: sticky; top: 0; z-index: 20;
        display: flex; justify-content: space-between; align-items: center;
        padding: 1rem 1.4rem; backdrop-filter: blur(14px);
        background: rgba(10, 10, 10, 0.75); border-bottom: 1px solid rgba(255,255,255,.08);
      }
      .brand { color: #f8fafc; text-decoration: none; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; font-size: 0.9rem; }
      .nav-links { display: flex; gap: 0.9rem; flex-wrap: wrap; }
      .nav-links a { color: #a1a1aa; text-decoration: none; font-size: 0.95rem; }
      .contact-pill { padding: 0.5rem 0.85rem; border-radius: 999px; background: linear-gradient(135deg, #8b5cf6, #06b6d4); color: #fff !important; }
      .page-content { max-width: 1200px; margin: 0 auto; padding: 1.4rem 1rem 3rem; }
      @media (max-width: 760px) { .topbar { flex-direction: column; align-items: flex-start; gap: 0.7rem; } .nav-links { gap: 0.6rem; } }
    `
  ]
})
export class PortfolioShellComponent {}
