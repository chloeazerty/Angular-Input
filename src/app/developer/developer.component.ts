import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

developer: Developer = new Developer(
  'John',
  'Doe',
  25,
  'M',
  "I love tomatoes",
  [
    new Skill('Angular', 'assets/images/angular.png', 'https://angular.io/'),
    new Skill('TypeScript', 'assets/images/typescript.png', 'https://www.typescriptlang.org/'),
    new Skill('JavaScript', 'assets/images/javascript.png', 'https://www.javascript.com/'),
  ]
);

  constructor() { }

  ngOnInit(): void {
  }

}
