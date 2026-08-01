import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Desenvolvedor</p>
        <h1>Construo produtos digitais premium, modernos e de alto impacto.</h1>
        <p>
          Sou Pedro Igor, desenvolvedor especializado em criar experiências digitais sofisticadas,
          com arquitetura sólida, performance e visão de produto.
        </p>
        <div class="actions">
          <a routerLink="/projetos" class="btn primary">Projetos</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" class="btn">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" class="btn">LinkedIn</a>
        </div>
      </div>
      <div class="hero-side">
        <div class="avatar">PI</div>
        <div class="info-card">
          <h3>Disponível para</h3>
          <ul>
            <li>Aplicações web sob medida</li>
            <li>Plataformas escaláveis</li>
            <li>Integrações e automações</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="stats-grid">
      @for (stat of stats; track stat.label) {
        <article class="stat-card">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      }
    </section>
  `,
  styles: [
    `
      .hero-card { display:grid; grid-template-columns:1.2fr .8fr; gap:1rem; padding:2rem; border-radius:32px; background:linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%); border:1px solid var(--border-color); box-shadow:0 24px 80px var(--shadow-color); }
      .eyebrow { color:var(--accent); text-transform:uppercase; letter-spacing:.24em; font-size:.75rem; font-weight:700; }
      h1 { font-size:clamp(2rem, 4vw, 3.2rem); color:var(--text-primary); line-height:1.05; margin:0.5rem 0 1rem; }
      .hero-copy p { color:var(--text-secondary); line-height:1.8; max-width:650px; }
      .actions { display:flex; flex-wrap:wrap; gap:.75rem; margin-top:1.2rem; }
      .btn { padding:.8rem 1rem; text-decoration:none; border-radius:999px; color:var(--text-primary); border:1px solid var(--border-color); background:var(--surface-elevated); }
      .btn.primary { background:linear-gradient(135deg, var(--accent-strong), var(--accent)); border:none; color:var(--button-text); }
      .hero-side { display:flex; flex-direction:column; gap:1rem; }
      .avatar { width:140px; height:140px; border-radius:50%; display:grid; place-items:center; font-size:2rem; font-weight:700; background:radial-gradient(circle at top left, var(--accent-strong), var(--accent) 50%, var(--background) 100%); color:#fff; }
      .info-card, .stat-card { padding:1rem; border-radius:24px; background:var(--surface-elevated); border:1px solid var(--border-color); }
      .info-card h3 { margin:0 0 .6rem; color:var(--text-primary); }
      .info-card ul { margin:0; padding-left:1rem; color:var(--text-secondary); line-height:1.8; }
      .stats-grid { display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); gap:1rem; margin-top:1rem; }
      .stat-card strong { display:block; font-size:1.4rem; color:var(--text-primary); }
      .stat-card span { color:var(--text-secondary); }
      @media (max-width: 900px) { .hero-card { grid-template-columns:1fr; } .stats-grid { grid-template-columns:1fr 1fr; } }
      @media (max-width: 560px) { .hero-card { padding:1rem; } .stats-grid { grid-template-columns:1fr; } }
    `
  ]
})
export class HomePageComponent {
  protected readonly stats = [
    { value: '+100', label: 'Projetos' },
    { value: '+5 anos', label: 'Experiência' },
    { value: '+30', label: 'Tecnologias' },
    { value: '100%', label: 'Responsivo' }
  ];
}
