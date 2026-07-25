import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Tecnologias</div>
      <h1>Tecnologias</h1>
      <div class="grid">
        @for (group of groups; track group.title) {
          <article class="card">
            <h3>{{ group.title }}</h3>
            <div class="list">
              @for (item of group.items; track item.name) {
                <div class="item">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.level }}</span>
                  <small>{{ item.experience }}</small>
                </div>
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
      .grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      .card h3 { margin-top:0; color:#f8fafc; }
      .list { display:grid; gap:.7rem; }
      .item { padding:.7rem; border-radius:16px; background:rgba(255,255,255,.03); }
      .item strong { display:block; color:#f8fafc; }
      .item span, .item small { color:#a1a1aa; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class TechnologiesPageComponent {
  protected readonly groups = [
    { title: 'Frontend', items: [{ name: 'React', level: 'Avançado', experience: '3 anos' }, { name: 'Next.js', level: 'Intermediário', experience: '2 anos' }] },
    { title: 'Backend', items: [{ name: 'Node.js', level: 'Avançado', experience: '3 anos' }, { name: 'NestJS', level: 'Intermediário', experience: '2 anos' }] },
    { title: 'Banco de Dados', items: [{ name: 'PostgreSQL', level: 'Avançado', experience: '2 anos' }, { name: 'MongoDB', level: 'Intermediário', experience: '1 ano' }] },
    { title: 'DevOps', items: [{ name: 'Docker', level: 'Intermediário', experience: '2 anos' }, { name: 'AWS', level: 'Intermediário', experience: '1 ano' }] }
  ];
}
