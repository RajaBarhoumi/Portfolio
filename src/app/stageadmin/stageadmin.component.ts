import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';
import { CnxService } from '../services/cnx.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stageadmin',
  templateUrl: './stageadmin.component.html',
  styleUrls: ['./stageadmin.component.css']
})
export class StageadminComponent implements OnInit {
  tabS : Stage[];

  constructor(private stageService: StageService,public cnxServ : CnxService, private router: Router) {
    this.tabS = stageService.listeS();
   }

   suppStage(s: Stage){
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce stage ?");
    if (conf) {
    this.stageService.supprimerStage(s);
    console.log("Suppression avec succes :"+s.typs.nomT);
    }
    }

  ngOnInit(): void {
  }

}
