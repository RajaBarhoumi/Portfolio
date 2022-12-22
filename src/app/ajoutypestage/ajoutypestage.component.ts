import { Component, OnInit } from '@angular/core';
import { Type } from '../model/typestage.model';
import { TypeService } from '../services/type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutypestage',
  templateUrl: './ajoutypestage.component.html',
  styleUrls: ['./ajoutypestage.component.css']
})
export class AjoutypestageComponent implements OnInit {
  tabT! : Type[];
  newType = new Type();
  constructor(public typSer: TypeService,private router :Router) { }

  addType(){
    //this.newT = this.typSer.consulterType(this.newCodeT);
    //this.tabT = this.newT;
    this.typSer.ajouterType(this.newType);
    this.router.navigate(['type']);
    }

  ngOnInit(): void {
  }

}
