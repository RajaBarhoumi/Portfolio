import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Diplome, Formation } from '../model/formation.model';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.css']
})
export class DiplomeComponent implements OnInit {
  tabF : Formation[];
  tabD : Diplome[];

  constructor(private formationService: FormationService ) {
    this.tabF = formationService.listeFormation();
    this.tabD = formationService.listeDiplome();
   }

  ngOnInit(): void {
  }

}
