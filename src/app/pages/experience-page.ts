import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Experiência</div>
      <h1>Experiência profissional</h1>
      <div class="timeline">
        @for (item of experiences; track item.company) {
          <article class="card">
            <div class="head">
              <div>
                <h3>{{ item.company }}</h3>
                <p>{{ item.role }}</p>
              </div>
              <span>{{ item.period }}</span>
            </div>
            <p>{{ item.description }}</p>
            <div class="tags">
              @for (tech of item.tech; track tech) {
                <span>{{ tech }}</span>
              }
            </div>
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
      .timeline { display:grid; gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      .head { display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:.6rem; }
      .head h3 { margin:0; color:#f8fafc; }
      .head p, .card p { margin:0; color:#a1a1aa; line-height:1.8; }
      .head span { color:#06b6d4; font-size:.9rem; }
      .tags { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.8rem; }
      .tags span { padding:.45rem .7rem; border-radius:999px; background:rgba(255,255,255,.04); color:#d4d4d8; border:1px solid rgba(255,255,255,.08); font-size:.84rem; }
      @media (max-width: 760px) { .page-section { padding:1rem; } .head { flex-direction:column; } }
    `
  ]
})
export class ExperiencePageComponent {
  protected readonly experiences = [
    { company: 'NovaLabs', role: 'Desenvolvedor Full Stack', period: '2023 • 2025', description: 'Liderança técnica em produtos digitais, APIs e integrações.', tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'] },
    { company: 'Studio North', role: 'Desenvolvedor Frontend', period: '2021 • 2023', description: 'Criação de interfaces modernas e sistemas internos com foco em usabilidade.', tech: ['Next.js', 'TypeScript', 'Tailwind CSS'] }
  ];
}
