import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Sobre</div>
      <h1>Sobre mim</h1>
      <p class="lead">Desenvolvedor Full Stack com foco em engenharia de software, performance e experiência de usuário.</p>
      <div class="grid">
        <article class="card">
          <h3>Minha trajetória</h3>
          <p>Construo soluções digitais desde a concepção até a execução, combinando estratégia, desenvolvimento e arquitetura para entregar produtos que realmente fazem diferença.</p>
        </article>
        <article class="card">
          <h3>Especialidades</h3>
          <ul>
            <li>Arquitetura de software</li>
            <li>Desenvolvimento web escalável</li>
            <li>APIs e integrações</li>
            <li>UX e performance</li>
          </ul>
        </article>
      </div>
      <div class="grid two">
        <article class="card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Comunicação clara</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Aprendizado contínuo</li>
          </ul>
        </article>
        <article class="card">
          <h3>Metodologias</h3>
          <ul>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>CI/CD</li>
            <li>Clean Code</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding: 2rem; border-radius: 32px; background: linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%); border:1px solid var(--border-color); box-shadow: 0 24px 80px var(--shadow-color); }
      .breadcrumbs { color:var(--accent); font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 .7rem; color:var(--text-primary); font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .lead { color:var(--text-secondary); line-height:1.8; margin-bottom:1rem; }
      .grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:1rem; margin-top:1rem; }
      .grid.two { grid-template-columns:repeat(2, minmax(0,1fr)); }
      .card { padding:1rem; border-radius:24px; background:var(--surface-elevated); border:1px solid var(--border-color); }
      .card h3 { margin-top:0; color:var(--text-primary); }
      .card p, .card li { color:var(--text-secondary); line-height:1.8; }
      @media (max-width: 760px) { .grid, .grid.two { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class AboutPageComponent {}
