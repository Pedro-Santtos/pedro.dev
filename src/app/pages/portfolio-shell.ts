import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeDotsMenuComponent } from '../components/three-dots-menu/three-dots-menu';

@Component({
  selector: 'app-portfolio-shell',
  standalone: true,
  imports: [RouterOutlet, ThreeDotsMenuComponent],
  templateUrl: './portfolio-shell.html',
  styleUrl: './portfolio-shell.css'
})
export class PortfolioShellComponent {}
