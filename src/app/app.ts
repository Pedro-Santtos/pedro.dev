import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="portfolio-shell">
      <section class="hero-section">
        <nav class="top-nav">
          <a class="brand" href="#top">Pedro Igor</a>
          <div class="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#stack">Stack</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Desenvolvedor Full Stack</p>
            <h1>Eu construo produtos digitais premium, rápidos e escaláveis.</h1>
            <p class="hero-description">
              Sou {{ title() }}, desenvolvedor com foco em criar experiências digitais sofisticadas,
              com arquitetura sólida, performance e uma visão clara de negócio.
            </p>

            <div class="hero-actions">
              <a class="btn btn-primary" href="#projetos">Ver Projetos</a>
              <a class="btn btn-secondary" href="mailto:pedro@pedro.dev">Download CV</a>
              <a class="btn btn-ghost" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a class="btn btn-ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div class="hero-badges">
              <span>UX refinado</span>
              <span>Arquitetura limpa</span>
              <span>Entrega de alto impacto</span>
            </div>
          </div>

          <aside class="hero-card">
            <p class="hero-card-label">Disponível para</p>
            <h3>Projetos sob medida</h3>
            <p>Desenvolvimento web completo, APIs robustas, dashboards e soluções escaláveis.</p>
            <ul>
              <li>Interfaces modernas</li>
              <li>Aplicações performáticas</li>
              <li>Integrações e automações</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="sobre" class="section">
        <div class="section-heading">
          <p class="section-label">Sobre mim</p>
          <h2>Profissionalismo, estratégia e tecnologia em cada detalhe.</h2>
        </div>
        <div class="about-grid">
          <article class="glass-card">
            <p>
              Sou um desenvolvedor Full Stack com interesse crescente em construir produtos digitais de alto padrão,
              combinando experiência de usuário, performance e arquitetura sólida. Meu trabalho é guiado por clareza,
              organização e foco em resultados reais para negócios e pessoas.
            </p>
            <p>
              Tenho formação contínua em desenvolvimento web moderno, com especial atenção à criação de interfaces elegantes,
              APIs confiáveis, integração de dados e boas práticas de manutenção e escalabilidade.
            </p>
          </article>
          <article class="glass-card">
            <h3>Metodologias e abordagem</h3>
            <ul class="check-list">
              <li>Desenvolvimento orientado a valor e experiência do usuário</li>
              <li>Arquitetura modular e escalável</li>
              <li>Entrega com foco em qualidade, performance e manutenção</li>
              <li>Colaboração com visão estratégica e execução precisa</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="stack" class="section">
        <div class="section-heading">
          <p class="section-label">Stack tecnológica</p>
          <h2>Ferramentas e tecnologias que utilizo para entregar excelência.</h2>
        </div>
        <div class="stack-grid">
          @for (group of techGroups; track group.title) {
            <article class="stack-card">
              <h3>{{ group.title }}</h3>
              <div class="tag-list">
                @for (item of group.items; track item) {
                  <span>{{ item }}</span>
                }
              </div>
            </article>
          }
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="section-label">Experiência</p>
          <h2>Uma trajetória construída com foco em crescimento e impacto.</h2>
        </div>
        <div class="timeline">
          @for (experience of experiences; track experience.company) {
            <article class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-card">
                <div class="timeline-head">
                  <div>
                    <h3>{{ experience.company }}</h3>
                    <p>{{ experience.role }}</p>
                  </div>
                  <span>{{ experience.period }}</span>
                </div>
                <p>{{ experience.description }}</p>
                <div class="timeline-tags">
                  @for (tech of experience.tech; track tech) {
                    <span>{{ tech }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </section>

      <section id="projetos" class="section">
        <div class="section-heading">
          <p class="section-label">Projetos</p>
          <h2>Soluções modernas, pensadas para performance e escala.</h2>
        </div>
        <div class="projects-grid">
          @for (project of projects; track project.name) {
            <article class="project-card">
              <div class="project-media" [style.background]="project.image"></div>
              <div class="project-body">
                <div class="project-top">
                  <span class="project-category">{{ project.category }}</span>
                  <span class="project-year">{{ project.year }}</span>
                </div>
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-tags">
                  @for (tag of project.tags; track tag) {
                    <span>{{ tag }}</span>
                  }
                </div>
                <div class="project-links">
                  <a [href]="project.demo" target="_blank" rel="noreferrer">Demonstração</a>
                  <a [href]="project.github" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          }
        </div>
      </section>

      <section class="section">
        <div class="stats-grid">
          @for (stat of stats; track stat.label) {
            <article class="stat-card">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          }
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="section-label">Certificados</p>
          <h2>Formação contínua e constante evolução.</h2>
        </div>
        <div class="cert-grid">
          @for (cert of certifications; track cert.name) {
            <article class="cert-card">
              <p class="cert-institution">{{ cert.institution }}</p>
              <h3>{{ cert.name }}</h3>
              <span>{{ cert.date }}</span>
              <a [href]="cert.link" target="_blank" rel="noreferrer">Visualizar</a>
            </article>
          }
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="section-label">Depoimentos</p>
          <h2>O que colegas e clientes dizem sobre meu trabalho.</h2>
        </div>
        <div class="testimonial-grid">
          @for (testimonial of testimonials; track testimonial.name) {
            <article class="testimonial-card">
              <p>“{{ testimonial.quote }}”</p>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </article>
          }
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <p class="section-label">FAQ</p>
          <h2>Perguntas frequentes sobre meu processo e serviços.</h2>
        </div>
        <div class="faq-list">
          @for (item of faqItems; track item.question) {
            <details class="faq-item">
              <summary>{{ item.question }}</summary>
              <p>{{ item.answer }}</p>
            </details>
          }
        </div>
      </section>

      <section id="contato" class="section">
        <div class="contact-grid">
          <div class="contact-copy">
            <p class="section-label">Contato</p>
            <h2>Pronto para transformar sua ideia em uma experiência digital excepcional?</h2>
            <p>Estou disponível para projetos, colaborações e oportunidades de longo prazo.</p>
            <div class="contact-links">
              @for (contact of contacts; track contact.label) {
                <a [href]="contact.href" target="_blank" rel="noreferrer">
                  <strong>{{ contact.label }}</strong>
                  <span>{{ contact.value }}</span>
                </a>
              }
            </div>
          </div>

          <form class="contact-form">
            <div class="field-row">
              <label>
                Nome
                <input type="text" placeholder="Seu nome" />
              </label>
              <label>
                E-mail
                <input type="email" placeholder="seu@email.com" />
              </label>
            </div>
            <label>
              Assunto
              <input type="text" placeholder="Quero conversar sobre..." />
            </label>
            <label>
              Mensagem
              <textarea rows="5" placeholder="Conte-me um pouco sobre o seu projeto."></textarea>
            </label>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pedro Igor');

  protected readonly techGroups = [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel'] },
    { title: 'Banco de Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { title: 'DevOps', items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'AWS'] }
  ];

  protected readonly experiences = [
    {
      company: 'NovaLabs',
      role: 'Desenvolvedor Full Stack',
      period: '2023 • 2025',
      description: 'Atuei no desenvolvimento de produtos digitais, integrações e soluções escaláveis com foco em experiência e performance.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      company: 'Studio North',
      role: 'Desenvolvedor Frontend',
      period: '2021 • 2023',
      description: 'Criei interfaces modernas e sistemas internos com foco em usabilidade, design e entrega eficiente.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
    }
  ];

  protected readonly projects = [
    {
      name: 'Fluxo Admin',
      category: 'SaaS',
      year: '2025',
      description: 'Painel administrativo com dashboard premium, automações e gestão de clientes.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #0f172a 100%)',
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      name: 'North Commerce',
      category: 'E-commerce',
      year: '2024',
      description: 'Loja digital com checkout otimizado, catálogo modular e integração com pagamentos.',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      image: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 55%, #111827 100%)',
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      name: 'Atlas Studio',
      category: 'Produto',
      year: '2023',
      description: 'Plataforma interna para gestão de projetos com fluxo visual, métricas e colaboração.',
      tags: ['NestJS', 'React', 'Redis'],
      image: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 45%, #172554 100%)',
      demo: 'https://example.com',
      github: 'https://github.com'
    }
  ];

  protected readonly stats = [
    { value: '+50', label: 'Projetos entregues' },
    { value: '+3 anos', label: 'de experiência' },
    { value: '+20', label: 'Tecnologias' },
    { value: '100%', label: 'Responsivo' }
  ];

  protected readonly certifications = [
    { institution: 'Microsoft', name: 'Azure Fundamentals', date: '2024', link: 'https://learn.microsoft.com' },
    { institution: 'Udemy', name: 'Advanced React & Next.js', date: '2024', link: 'https://www.udemy.com' },
    { institution: 'AWS', name: 'Cloud Practitioner', date: '2023', link: 'https://aws.amazon.com' }
  ];

  protected readonly testimonials = [
    { quote: 'Entrega impecável, comunicação clara e uma visão muito forte de produto.', name: 'Ana Costa', role: 'Founder, NovaLabs' },
    { quote: 'Transformou uma ideia simples em uma experiência muito sofisticada e profissional.', name: 'Bruno Mendes', role: 'Product Lead' }
  ];

  protected readonly faqItems = [
    { question: 'Você trabalha com projetos desde o início?', answer: 'Sim. Posso atuar desde a definição da proposta, estrutura, desenvolvimento e entrega.' },
    { question: 'Você faz manutenção e evolução?', answer: 'Sim. Também realizo melhorias contínuas, ajustes e expansão de produtos existentes.' },
    { question: 'Atende clientes nacionais e internacionais?', answer: 'Sim, trabalho com comunicação remota de forma eficiente e profissional.' }
  ];

  protected readonly contacts = [
    { label: 'E-mail', value: 'pedro@pedro.dev', href: 'mailto:pedro@pedro.dev' },
    { label: 'GitHub', value: 'github.com', href: 'https://github.com' },
    { label: 'LinkedIn', value: 'linkedin.com', href: 'https://www.linkedin.com' },
    { label: 'WhatsApp', value: '+55 11 99999-9999', href: 'https://wa.me/5511999999999' }
  ];
}
