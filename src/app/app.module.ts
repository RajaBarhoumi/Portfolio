import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfosComponent } from './infos/infos.component';
import { CompetenceComponent } from './competence/competence.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { StageComponent } from './stage/stage.component';
import { NavconnectComponent } from './navconnect/navconnect.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StageadminComponent } from './stageadmin/stageadmin.component';
import { ModifstageComponent } from './modifstage/modifstage.component';
import { AjoutstageComponent } from './ajoutstage/ajoutstage.component';
import { ModiftypestageComponent } from './modiftypestage/modiftypestage.component';
import { AjoutypestageComponent } from './ajoutypestage/ajoutypestage.component';
import { TypeComponent } from './type/type.component';
import { HttpClientModule } from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfosComponent,
    CompetenceComponent,
    DiplomeComponent,
    StageComponent,
    NavconnectComponent,
    ConnexionComponent,
    StageadminComponent,
    ModifstageComponent,
    AjoutstageComponent,
    ModiftypestageComponent,
    AjoutypestageComponent,
    TypeComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
