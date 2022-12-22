import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  tabS : Stage[];

  constructor(private stageService: StageService) { 
    this.tabS = stageService.listeS();
  }

  suppStage(s: Stage) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce stage ?");
    if (conf) {
    this.stageService.supprimerStage(s);
    console.log("Suppression avec succes :"+s.sujetS);
    }
   }

  ngOnInit(): void {
  }

}
