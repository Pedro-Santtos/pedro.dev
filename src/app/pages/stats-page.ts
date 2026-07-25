import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Estatísticas</div>
      <h1>Estatísticas</h1>
      <div class="grid">
        @for (stat of stats; track stat.label) {
          <article class="card">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding:2rem; border-radius:32px; background:linear-gradient(135deg, #141414, #1c1c1c); border:1px solid rgba(255,255,255,.08); }
      .breadcrumbs { color:#06b6d4; font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 1rem; color:#f8fafc; font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:1rem; }
      .card { padding:1.2rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); display:grid; gap:.3rem; }
      .card strong { color:#f8fafc; font-size:1.8rem; }
      .card span { color:#a1a1aa; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class StatsPageComponent {
  protected readonly stats = [
    { value: '+100', label: 'Projetos' },
    { value: '+5 anos', label: 'Experiência' },
    { value: '+30', label: 'Tecnologias' },
    { value: '99%', label: 'Satisfação' },
    { value: '100%', label: 'Responsivo' },
    { value: '24/7', label: 'Disponibilidade' }
  ];
}
