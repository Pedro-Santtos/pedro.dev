import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Projetos / {{ project?.name }}</div>
      <h1>{{ project?.name }}</h1>
      <p class="lead">{{ project?.description }}</p>
      <div class="banner" [style.background]="project?.image"></div>
      <div class="grid">
        <article class="card">
          <h3>Problema resolvido</h3>
          <p>{{ project?.problem }}</p>
        </article>
        <article class="card">
          <h3>Arquitetura</h3>
          <p>{{ project?.architecture }}</p>
        </article>
      </div>
      <div class="card full">
        <h3>Resultados</h3>
        <p>{{ project?.results }}</p>
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding:2rem; border-radius:32px; background:linear-gradient(135deg, #141414, #1c1c1c); border:1px solid rgba(255,255,255,.08); }
      .breadcrumbs { color:#06b6d4; font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 .7rem; color:#f8fafc; font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .lead { color:#a1a1aa; line-height:1.8; margin-bottom:1rem; }
      .banner { height:220px; border-radius:24px; margin-bottom:1rem; }
      .grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:1rem; margin-bottom:1rem; }
      .card { padding:1rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      .card h3 { margin-top:0; color:#f8fafc; }
      .card p { color:#a1a1aa; line-height:1.8; }
      .full { margin-top:1rem; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ProjectDetailPageComponent {
  protected project: any;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    const projects = [
      { slug: 'sistema-financeiro', name: 'Fluxo Admin', description: 'Painel administrativo premium com automações e gestão financeira.', image: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', problem: 'Necessidade de centralizar dados financeiros e processos internos.', architecture: 'Arquitetura modular com frontend React e backend NestJS.', results: 'Redução de operação manual e maior clareza de gestão.' },
      { slug: 'ecommerce', name: 'North Commerce', description: 'Loja digital com checkout e catálogo de alto padrão.', image: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)', problem: 'Baixa conversão e experiência inconsistente.', architecture: 'Front-end Next.js com API escalável e pagamentos integrados.', results: 'Melhora significativa na experiência de compra e conversão.' },
      { slug: 'chatbot-ai', name: 'Atlas Studio', description: 'Plataforma interna com automações e fluxo visual.', image: 'linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)', problem: 'Processos repetitivos e baixa visibilidade operacional.', architecture: 'Arquitetura orientada a serviços com integrações e dashboard.', results: 'Automatização de diversos processos e maior produtividade.' }
    ];
    this.project = projects.find((item) => item.slug === slug);
  }
}
