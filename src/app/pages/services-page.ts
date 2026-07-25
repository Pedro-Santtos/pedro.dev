import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Serviços</div>
      <h1>Serviços</h1>
      <div class="grid">
        @for (service of services; track service.name) {
          <article class="card">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
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
      .card p { color:#a1a1aa; line-height:1.8; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ServicesPageComponent {
  protected readonly services = [
    { name: 'Desenvolvimento Web', description: 'Aplicações modernas com UX premium e arquitetura escalável.' },
    { name: 'APIs', description: 'Serviços backend confiáveis, rápidos e integrados.' },
    { name: 'Sistemas Empresariais', description: 'Soluções completas para operações e gestão.' },
    { name: 'Consultoria', description: 'Estratégia, decisões técnicas e evolução de produtos.' }
  ];
}
