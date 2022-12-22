import { Injectable } from '@angular/core';
import { Stage } from '../model/stage.model';
import { Type } from '../model/typestage.model';
@Injectable({
  providedIn: 'root'
})
export class StageService {
  tabS : Stage[];
  stage !: Stage;
  typ : Type[];

  constructor() { 
    this.typ=[{codeT : 1, nomT: "Stage d'initiation",description:"Observation et integration dans le monde professionnel"},
    {codeT : 2, nomT: "Stage de perfectionnement",description:"Développement d'un site/une application dynamique "},
    {codeT : 3, nomT: "Stage de fin d'étude",description:"  Etude de l'existant et proposition d'une (solution)application qui tourne"}
  ]
    this.tabS=[
      {codeS:1, lieuS : "Compagnie des phosphates de Gafsa", moisS : 1, sujetS : "Développement d'un site Web de gestion des employées", techS : "HTML5 ,CSS3 ,PHP ,MySql ,Bootstrap"
      ,typs:{codeT : 1, nomT: "Stage d'initiation",description:"Observation et integration dans le monda professionnel"}}
    ]
  }
  consulterStage(id:number): Stage{
    this.stage = this.tabS.find(s => s.codeS == id)!;
    return this.stage;
    }
    consulterType(id:number): Type{ 
      return this.typ.find(ty => ty.codeT == id)!;
     }
    modifierStage(s: Stage) { 
      this.supprimerStage(s);
      this.ajouterStage(s);
      }
      

   listeType():Type[] {
    return this.typ;
   }

    listeS():Stage[] {
      return this.tabS;
      }

      supprimerStage(s: Stage){
        const index = this.tabS.indexOf(s, 0);
        if (index > -1) {
        this.tabS.splice(index, 1);
        }
       }

       

       ajouterStage(s: Stage){
        this.tabS.push(s);
        console.log("Ajout avec succes : "+s.sujetS);
        }
        
}
