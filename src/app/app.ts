import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="site-shell">
      <header class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">Portfólio • Desenvolvedor </p>
          <h1>{{ title() }}</h1>
          <p class="lead">
            Desenvolvedor em formação, comprometido com aprendizado contínuo, boas práticas e desenvolvimento de software.
          </p>
          <div class="actions">
            <a class="btn btn-primary" href="mailto:pedro@pedro.dev">Entrar em contato</a>
            <a class="btn btn-secondary" href="#projetos">Ver projetos</a>
          </div>
        </div>

      </header>

      <section id="sobre" class="content-section">
        <div class="section-heading">
          <p class="section-label">Sobre</p>
          <h2>Sobre minha atuação</h2>
        </div>
        <div class="about-structure">
          <div class="about-main">
            <p>
              Eu sou um desenvolvedor em formação, com interesse crescente em construir soluções web completas, organizadas e com boa experiência, transformando curiosidade em código e conhecimento em projetos reais.
            </p>
            
          </div>
        </div>
      </section>

      <section id="contato" class="content-section">
        <div class="section-heading">
          <p class="section-label">Contato</p>
          <h2>Fale comigo</h2>
        </div>
        <div class="contact-intro">
          <p>Eu estou aberto a oportunidades, colaborações e novos projetos. Para propostas ou conversas profissionais, você pode me encontrar pelos canais abaixo.</p>
        </div>
        <div class="contact-list">
          @for (contact of contacts; track contact.label) {
            <a class="contact-link" [href]="contact.href" [attr.aria-label]="contact.label">
              <div class="contact-meta">
                <strong>{{ contact.label }}</strong>
                <span>{{ contact.value }}</span>
              </div>
              <span class="contact-badge">Contato</span>
            </a>
          }
        </div>
      </section>

      <footer class="footer">
        <p>Eu sigo em constante evolução, sempre em busca de novos desafios e oportunidades de desenvolvimento.</p>
      </footer>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pedro Igor');
  protected readonly contacts = [
    { label: 'E-mail', value: 'pedro@pedro.dev', href: 'mailto:pedro@pedro.dev' },
    { label: 'GitHub', value: 'github.com', href: 'https://github.com' },
    { label: 'LinkedIn', value: 'linkedin.com', href: 'https://www.linkedin.com' }
  ];
}
