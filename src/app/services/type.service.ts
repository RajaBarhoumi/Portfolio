import { Injectable } from '@angular/core';
import { Type } from '../model/typestage.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  typ : Type[];

  constructor() { 
    this.typ=[{codeT : 1, nomT: "Stage d'initiation",description:"Observation et integration dans le monde professionnel"},
    {codeT : 2, nomT: "Stage de perfectionnement",description:"Développement d'une application/site dynamique "},
    {codeT : 3, nomT: "Stage de fin d'étude",description:"  Etude de l'existant et donc une application qui tourne"}
  ]
  }

  consulterType(id:number): Type{ 
    return this.typ.find(ty => ty.codeT == id)!;
   }
   listeT():Type[] {
    return this.typ;
    }

   supprimerType(t: Type){
    const i = this.typ.indexOf(t, 0);
    if (i > -1) {
    this.typ.splice(i, 1);
    }
   }
   ajouterType(t: Type){
    this.typ.push(t);
    console.log("Ajout avec succes : "+t.nomT);
    }
   modifierType(s: Type) { 
    this.supprimerType(s);
    this.ajouterType(s);
    }

}
