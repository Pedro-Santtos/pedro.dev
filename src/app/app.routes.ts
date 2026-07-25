import { Routes } from '@angular/router';
import { PortfolioShellComponent } from './pages/portfolio-shell';
import { HomePageComponent } from './pages/home-page';
import { AboutPageComponent } from './pages/about-page';
import { ExperiencePageComponent } from './pages/experience-page';
import { ProjectsPageComponent } from './pages/projects-page';
import { ProjectDetailPageComponent } from './pages/project-detail-page';
import { TechnologiesPageComponent } from './pages/technologies-page';
import { CertificationsPageComponent } from './pages/certifications-page';
import { BlogPageComponent } from './pages/blog-page';
import { ServicesPageComponent } from './pages/services-page';
import { StatsPageComponent } from './pages/stats-page';
import { ContactPageComponent } from './pages/contact-page';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioShellComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'sobre', component: AboutPageComponent },
      { path: 'experiencia', component: ExperiencePageComponent },
      { path: 'projetos', component: ProjectsPageComponent },
      { path: 'projetos/:slug', component: ProjectDetailPageComponent },
      { path: 'tecnologias', component: TechnologiesPageComponent },
      { path: 'certificados', component: CertificationsPageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'servicos', component: ServicesPageComponent },
      { path: 'estatisticas', component: StatsPageComponent },
      { path: 'contato', component: ContactPageComponent }
    ]
  }
];
