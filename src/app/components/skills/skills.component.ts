import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // skills = [
  //   { name: 'Angular', icon: 'fab fa-angular' },
  // { name: 'JavaScript', icon: 'fab fa-js-square' },
  // { name: 'Python', icon: 'fab fa-python' },
  // { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  // { name: 'Git', icon: 'fab fa-git-alt' },
  // { name: 'Firebase', icon: 'fas fa-fire' },
  // { name: 'HTML5', icon: 'fab fa-html5' },
  // { name: 'CSS3', icon: 'fab fa-css3-alt' },
  // { name: 'TypeScript', icon: 'fas fa-code' },
  // { name: 'Node.js', icon: 'fab fa-node' },
  // { name: 'MySQL', icon: 'fas fa-database' },
  // { name: 'GCP', icon: 'fab fa-google' },
  // { name: 'AWS', icon: 'fab fa-aws' }
  // ];
}
