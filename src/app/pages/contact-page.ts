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
      .page-section { padding:2rem; border-radius:32px; background:linear-gradient(135deg, #141414, #1c1c1c); border:1px solid rgba(255,255,255,.08); }
      .breadcrumbs { color:#06b6d4; font-size:.9rem; margin-bottom:1rem; }
      h1 { margin:0 0 1rem; color:#f8fafc; font-size:clamp(1.8rem, 3vw, 2.4rem); }
      .grid { display:grid; grid-template-columns:1.1fr .9fr; gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      label { display:grid; gap:.4rem; color:#f8fafc; margin-bottom:.7rem; }
      input, textarea { border:1px solid rgba(255,255,255,.08); border-radius:14px; padding:.8rem .9rem; background:#0a0a0a; color:#f8fafc; }
      button { border:none; border-radius:999px; padding:.9rem 1rem; background:linear-gradient(135deg, #8b5cf6, #06b6d4); color:#fff; font-weight:700; cursor:pointer; }
      .info-card h3 { margin-top:0; color:#f8fafc; }
      .info-card a { display:block; color:#a1a1aa; text-decoration:none; margin-bottom:.55rem; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ContactPageComponent {}
