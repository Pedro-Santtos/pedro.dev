import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-section">
      <div class="breadcrumbs">Home / Projetos</div>
      <h1>Projetos</h1>
      <div class="filters">
      </div>
      <div class="grid">
        @for (project of projects; track project.name) {
          <article class="card card-clickable" [routerLink]="['/projetos', project.slug]" tabindex="0" role="button" [attr.aria-label]="'Abrir projeto ' + project.name">
            <div class="thumb" [style.background-image]="project.image" [style.background-size]="'cover'" [style.background-position]="'center'" [style.background-repeat]="'no-repeat'"></div>
            <div class="content">
              <div class="top">
                <span>{{ project.category }}</span>
                <span>{{ project.year }}</span>
              </div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
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
      .card-clickable { cursor:pointer; transition:transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
      .card-clickable:hover, .card-clickable:focus-visible { transform:translateY(-2px); border-color:rgba(255,255,255,.18); box-shadow:0 16px 40px rgba(0,0,0,.22); outline:none; }
      .thumb { height:170px; }
      .content { padding:1rem; }
      .top { display:flex; justify-content:space-between; color:#06b6d4; font-size:.8rem; text-transform:uppercase; letter-spacing:.16em; margin-bottom:.5rem; }
      .content h3 { margin:0 0 .5rem; color:#f8fafc; }
      .content p { color:#a1a1aa; line-height:1.7; }
      @media (max-width: 900px) { .grid { grid-template-columns:1fr 1fr; } }
      @media (max-width: 560px) { .grid { grid-template-columns:1fr; } .page-section { padding:1rem; } }
    `
  ]
})
export class ProjectsPageComponent {
  private readonly projectsService = inject(ProjectsService);
  protected readonly projects = this.projectsService.getProjects();
}
