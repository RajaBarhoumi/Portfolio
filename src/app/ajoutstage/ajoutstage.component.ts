import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stage.model';
import { StageService } from '../services/stage.service';
import { Type } from '../model/typestage.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutstage',
  templateUrl: './ajoutstage.component.html',
  styleUrls: ['./ajoutstage.component.css']
})
export class AjoutstageComponent implements OnInit {
  newStage = new Stage();
  newCodeT! : number;
  tabT! : Type[];
  newT! : Type;

  constructor( public staSer: StageService,private router :Router) { }
  addStage(){
    this.newT = this.staSer.consulterType(this.newCodeT);
    this.newStage.typs = this.newT;
    this.staSer.ajouterStage(this.newStage);
    this.router.navigate(['stageA']);
    }

  ngOnInit(): void {
    this.tabT = this.staSer.listeType();
  }

}
