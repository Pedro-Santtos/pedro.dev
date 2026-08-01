import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Contato</div>
      <h1>Contato</h1>
      <div class="grid">
        <form class="card form-card">
          <label>Nome<input type="text" placeholder="Seu nome" /></label>
          <label>Email<input type="email" placeholder="seu@email.com" /></label>
          <label>Assunto<input type="text" placeholder="Sobre o projeto" /></label>
          <label>Mensagem<textarea rows="5" placeholder="Conte-me mais sobre a sua ideia."></textarea></label>
          <button type="submit">Enviar mensagem</button>
        </form>
        <div class="card info-card">
          <h3>Outros canais</h3>
          <a href="mailto:pedro@pedro.dev">pedro@pedro.dev</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding:2rem; border-radius:32px; background:linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%); border:1px solid var(--border-color); box-shadow: 0 24px 80px var(--shadow-color); }
      .breadcrumbs { color:var(--accent); font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 1rem; color:var(--text-primary); font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .grid { display:grid; grid-template-columns:1.1fr .9fr; gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:var(--surface-elevated); border:1px solid var(--border-color); }
      label { display:grid; gap:.4rem; color:var(--text-primary); margin-bottom:.7rem; }
      input, textarea { border:1px solid var(--border-color); border-radius:14px; padding:.8rem .9rem; background:var(--input-bg); color:var(--input-text); }
      button { border:none; border-radius:999px; padding:.9rem 1rem; background:linear-gradient(135deg, var(--accent-strong), var(--accent)); color:var(--button-text); font-weight:700; cursor:pointer; }
      .info-card h3 { margin-top:0; color:var(--text-primary); }
      .info-card a { display:block; color:var(--text-secondary); text-decoration:none; margin-bottom:.55rem; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ContactPageComponent {}
