import { Component, OnInit } from '@angular/core';
import { Type } from '../model/typestage.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TypeService } from '../services/type.service';
@Component({
  selector: 'app-modiftypestage',
  templateUrl: './modiftypestage.component.html',
  styleUrls: ['./modiftypestage.component.css']
})
export class ModiftypestageComponent implements OnInit {
  typeCourant = new Type();
  codecModifie! : any

  constructor(private activatedRoute: ActivatedRoute, private typeServ: TypeService, private router :Router) { }
  modifType(){ 
  this.typeServ.modifierType(this.typeCourant);
    console.log("Type modifié avec succes : "+ this.typeCourant.codeT);
    this.router.navigate(['type']);  
  }
  ngOnInit(): void {
    this.typeCourant = this.typeServ.consulterType(this.activatedRoute.snapshot.params['id']);
    console.log("Code de type de stage à modifier "+this.typeCourant.codeT);
    this.codecModifie = this.typeCourant.nomT;
  }

}
