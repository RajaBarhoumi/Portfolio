import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { InfosComponent } from './infos/infos.component';
import { CompetenceComponent } from './competence/competence.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { StageComponent } from './stage/stage.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavconnectComponent } from './navconnect/navconnect.component';
import { StageadminComponent } from './stageadmin/stageadmin.component';
import { ModifstageComponent } from './modifstage/modifstage.component';
import { ModiftypestageComponent } from './modiftypestage/modiftypestage.component';
import { AjoutstageComponent } from './ajoutstage/ajoutstage.component';
import { AjoutypestageComponent } from './ajoutypestage/ajoutypestage.component';
import { TypeComponent } from './type/type.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { StageGuard } from './guard/stage.guard';

const routes: Routes = [
  {path: 'navigation' , component: NavigationComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'type' , component: TypeComponent},
  {path: 'ajoutStage' , component: AjoutstageComponent,canActivate:[StageGuard]},
  {path: 'ajoutType' , component: AjoutypestageComponent,canActivate:[StageGuard]},
  {path: "updateStage/:id", component: ModifstageComponent,canActivate:[StageGuard]},
  {path: "updateType/:id", component: ModiftypestageComponent,canActivate:[StageGuard]},
  {path: 'infos' , component: InfosComponent},
  {path: 'competence' , component: CompetenceComponent},
  {path: 'diplome' , component: DiplomeComponent},
  {path: 'stage' , component: StageComponent},
  {path: 'connexion' , component: ConnexionComponent},
  {path: 'navconnect' , component: NavconnectComponent},
  {path: 'stageA' , component: StageadminComponent},
  {path: "", redirectTo: "infos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
