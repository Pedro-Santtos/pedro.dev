import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Blog</div>
      <h1>Blog técnico</h1>
      <div class="grid">
        @for (article of articles; track article.title) {
          <article class="card">
            <p class="tag">{{ article.category }}</p>
            <h3>{{ article.title }}</h3>
            <p>{{ article.excerpt }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding:2rem; border-radius:32px; background:linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%); border:1px solid var(--border-color); box-shadow: 0 24px 80px var(--shadow-color); }
      .breadcrumbs { color:var(--accent); font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 1rem; color:var(--text-primary); font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:var(--surface-elevated); border:1px solid var(--border-color); }
      .tag { color:var(--accent); text-transform:uppercase; letter-spacing:.16em; font-size:.78rem; margin:0 0 .4rem; }
      .card h3 { margin:0 0 .5rem; color:var(--text-primary); }
      .card p { color:var(--text-secondary); line-height:1.7; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class BlogPageComponent {
  protected readonly articles = [
    { title: 'Arquitetura de software para produtos digitais', category: 'Arquitetura', excerpt: 'Estratégias para criar soluções escaláveis e com boa evolução.' },
    { title: 'Performance em aplicações web modernas', category: 'Frontend', excerpt: 'Ferramentas e boas práticas para entregar experiências rápidas.' }
  ];
}
