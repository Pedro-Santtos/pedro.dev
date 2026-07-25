import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Projetos</div>
      <h1>Projetos</h1>
      <div class="filters">
        <a class="active" routerLink="/projetos">Todos</a>
        <a routerLink="/projetos">Frontend</a>
        <a routerLink="/projetos">Backend</a>
        <a routerLink="/projetos">Full Stack</a>
      </div>
      <div class="grid">
        @for (project of projects; track project.name) {
          <article class="card">
            <div class="thumb" [style.background]="project.image"></div>
            <div class="content">
              <div class="top">
                <span>{{ project.category }}</span>
                <span>{{ project.year }}</span>
              </div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span>{{ tag }}</span>
                }
              </div>
              <a class="details" [routerLink]="['/projetos', project.slug]">Detalhes</a>
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
      .filters { display:flex; gap:.6rem; flex-wrap:wrap; margin-bottom:1rem; }
      .filters a { color:#a1a1aa; text-decoration:none; padding:.5rem .8rem; border-radius:999px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.04); }
      .filters a.active { background:linear-gradient(135deg, #8b5cf6, #06b6d4); color:#fff; border:none; }
      .grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:1rem; }
      .card { overflow:hidden; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      .thumb { height:170px; }
      .content { padding:1rem; }
      .top { display:flex; justify-content:space-between; color:#06b6d4; font-size:.8rem; text-transform:uppercase; letter-spacing:.16em; margin-bottom:.5rem; }
      .content h3 { margin:0 0 .5rem; color:#f8fafc; }
      .content p { color:#a1a1aa; line-height:1.7; }
      .tags { display:flex; flex-wrap:wrap; gap:.45rem; margin:.75rem 0; }
      .tags span { padding:.4rem .6rem; border-radius:999px; background:rgba(255,255,255,.04); color:#d4d4d8; font-size:.8rem; }
      .details { color:#06b6d4; text-decoration:none; font-weight:600; }
      @media (max-width: 900px) { .grid { grid-template-columns:1fr 1fr; } }
      @media (max-width: 560px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ProjectsPageComponent {
  protected readonly projects = [
    { name: 'Fluxo Admin', category: 'Full Stack', year: '2025', description: 'Painel administrativo premium com automações e gestão.', tags: ['React', 'Node.js', 'PostgreSQL'], image: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', slug: 'sistema-financeiro' },
    { name: 'North Commerce', category: 'Frontend', year: '2024', description: 'Loja digital com experiência premium e checkout otimizado.', tags: ['Next.js', 'Stripe', 'MongoDB'], image: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)', slug: 'ecommerce' },
    { name: 'Atlas Studio', category: 'Backend', year: '2023', description: 'Plataforma interna para gestão e automações de fluxo.', tags: ['NestJS', 'React', 'Redis'], image: 'linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)', slug: 'chatbot-ai' }
  ];
}
