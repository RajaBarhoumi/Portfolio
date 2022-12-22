import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';
import { Type } from '../model/typestage.model';

@Component({
  selector: 'app-modifstage',
  templateUrl: './modifstage.component.html',
  styleUrls: ['./modifstage.component.css']
})
export class ModifstageComponent implements OnInit {
  stageCourant = new Stage();
  typ! : Type[];
  codecModifie! : any;

  constructor(private activatedRoute: ActivatedRoute, private staService: StageService, private router :Router) { }

  modifStage(){ 
    this.stageCourant.typs = this.staService.consulterType(this.codecModifie);
    this.staService.modifierStage(this.stageCourant);
    console.log("Stage modifié avec succes : "+ this.stageCourant.codeS);
    this.router.navigate(['stageA']);  
  }

  ngOnInit(): void {
    this.typ = this.staService.listeType();
    this.stageCourant = this.staService.consulterStage(this.activatedRoute.snapshot.params['id']);
    console.log("Code stage à modifier "+this.stageCourant.codeS);
    this.codecModifie = this.stageCourant.typs.codeT;

  }

}
