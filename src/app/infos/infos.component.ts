import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  coordonnees = {
    nom : 'RAJA BARHOUMI',
    info : "Je suis étudiante en technologies de l'informatique spécialité développement des systèmes d'information. J'ai entrepris de découvrir beaucoup de choses dans l'univers de la programmation et du développement avec beaucoup de travail et de motivation.Je suis passionnée et j'ai la capacité de travailler sous pression.",
    co : 'Orange Tech Club ISETN',
    po : 'Vice président',
    ce : 'IEEE Student Branch ISETN',
    pe : 'Membre',
    d : 'Développement',
    dp : 'Dessin en perspective',
    mail : 'rajabarhoumi355@gmail.com',
    linkedin : 'https://www.linkedin.com/in/raja-barhoumi/',
    github : 'https://github.com/RajaBarhoumi',
    address : 'Nabeul-Tunis',
  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
