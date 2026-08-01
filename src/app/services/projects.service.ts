import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  problem: string;
  architecture: string;
  results: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      name: '5º Pombal MotoFest',
      category: 'Evento',
      year: '2026',
      description: 'Edição especial do MotoFest com experiência completa para público, marcas e parceiros.',
      tags: ['Evento', 'Branding', 'Experiência'],
      image: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)',
      slug: '5o-pombal-motofest',
      problem: 'Centralizar a identidade do evento e criar uma experiência coesa para público, patrocinadores e comunicação.',
      architecture: 'Estrutura simples e escalável com foco em conteúdo, identidade visual e narrativa da marca do evento.',
      results: 'Fortalecimento da presença do evento, maior percepção de marca e uma experiência mais fluida para todos os públicos envolvidos.'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }
}
