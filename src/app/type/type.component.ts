import { Component, OnInit } from '@angular/core';
import { CnxService } from '../services/cnx.service';
import { Router } from '@angular/router';
import { TypeService } from '../services/type.service';
import { Type } from '../model/typestage.model';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  tabT : Type[];

  constructor(private stageService: TypeService,public cnxServ : CnxService, private router: Router) {
    this.tabT = stageService.listeT()}

    suppType(t: Type){
      let conf = confirm("Etes-vous sûr de vouloir supprimer ce type de stage ?");
      if (conf) {
      this.stageService.supprimerType(t);
      console.log("Suppression avec succes :"+t.nomT);
      }
      }

  ngOnInit(): void {
  }

}
