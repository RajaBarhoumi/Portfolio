import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Compte } from '../model/compte.model';
/*
const httpOptions = {
  headers: new HttpHeaders(
    //permettent au client et au serveur de partager des informations supplémentaires sur la requête ou la réponse HTTP
    {'Content-Type': 'application/json',}
    //Indique que le format du corps de la requête est JSON.
  )
 }
 */
@Injectable({
  providedIn: 'root'
})
export class CnxService {
  user!: Compte;
  isConnected: boolean = false;


 //private usersUrl: string = 'http://localhost:3000/user';
 constructor(private http: HttpClient,private router: Router) { 
  this.http.get<any>('assets/data/db.json').subscribe((data) => {this.user=data.user[0]});
  //*subscribe* 
  //définit comment obtenir ou générer des valeurs ou des messages à publier

 }
 
 
 connect(email: string, password: string): boolean {
  if (this.user.email == email && this.user.password == password) {
 
    this.isConnected = true;
    this.router.navigate(['/diplome']);
   }
   return this.isConnected;
  }

disconnect() {
  //console.log("test");
  //console.log(this.user.password);
  this.isConnected = false;
  this.router.navigate(['/connexion']); 
}  
}
