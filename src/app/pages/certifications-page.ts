import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications-page',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Certificados</div>
      <h1>Certificados</h1>
      <div class="grid">
        @for (cert of certificates; track cert.name) {
          <article class="card">
            <p class="institution">{{ cert.institution }}</p>
            <h3>{{ cert.name }}</h3>
            <span>{{ cert.year }} • {{ cert.hours }}h</span>
            <a [href]="cert.link" target="_blank" rel="noreferrer">Visualizar</a>
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
      .grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:1rem; }
      .card { padding:1rem; border-radius:24px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
      .institution { color:#06b6d4; margin:0 0 .4rem; text-transform:uppercase; letter-spacing:.16em; font-size:.8rem; }
      .card h3 { margin:0 0 .4rem; color:#f8fafc; }
      .card span { color:#a1a1aa; display:block; margin-bottom:.7rem; }
      .card a { color:#06b6d4; text-decoration:none; font-weight:600; }
      @media (max-width: 760px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class CertificationsPageComponent {
  protected readonly certificates = [
    { institution: 'Microsoft', name: 'Azure Fundamentals', year: '2024', hours: '8', link: 'https://learn.microsoft.com' },
    { institution: 'Udemy', name: 'Advanced React & Next.js', year: '2024', hours: '20', link: 'https://www.udemy.com' },
    { institution: 'AWS', name: 'Cloud Practitioner', year: '2023', hours: '12', link: 'https://aws.amazon.com' }
  ];
}
