import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  c = {
    h : 'HTML5',
    cs : "CSS3",
    js : 'Javascript',
    aj : 'AngularJS',
    p : 'PHP',
    b : 'Bootstrap',
    d : 'Django',
    c : 'C',
    j : 'Java',
    m : 'MySQL',
    la : 'Arabe',
    lf : 'Français',
    lan : 'Anglais',
    lal : 'Allemand',
  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
