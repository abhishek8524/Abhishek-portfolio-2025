import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from './modules/material-ui.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MaterialModule,NavbarComponent,HeroComponent,AboutComponent,ProjectsComponent, SkillsComponent,ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abhishek-portfolio-2025';
}
