import { Injectable } from '@angular/core';
import { Diplome, Formation } from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  tabF : Formation[];
  tabD : Diplome[];



  constructor() {
    this.tabD=[
      { nomD : "Licence en technologies de l'informatique", lieuD : "Institut supérieur des etudes technologiques de Nabeul", anD : "2021 - 2024"},
      { nomD : "Bac en sciences techniques", lieuD : "Lycée Houcine Bouzaiene Gafsa", anD : "2020 - 2021"}
    ]

    this.tabF=[
      {nomF : "Intelligence artificielle", lieuF : "Orange Digital Center", anF : "Janvier 2022"},
      { nomF : "Full Stack JS", lieuF : "Orange Digital Center", anF : "Séptembre 2022"}
    ]

   }

   listeFormation():Formation[] {
    return this.tabF;
    }

    listeDiplome():Diplome[] {
      return this.tabD;
      }
}
