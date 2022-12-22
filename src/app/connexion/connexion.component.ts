import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import { CnxService } from '../services/cnx.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
 

  erreur: boolean = false;

  email!: string;
  password!: string;



  constructor(private cnxServ : CnxService, private router: Router) { }
  connected() {
    console.log(this.email);
    console.log(this.password);
    if (!this.cnxServ.connect(this.email, this.password)) {
      this.erreur = true;
    }
  }
  reset() {
    this.erreur=false;
    }


  ngOnInit(): void {
    this.erreur = false;
  }

}
