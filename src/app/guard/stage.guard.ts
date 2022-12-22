import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CnxService } from '../services/cnx.service';

@Injectable({
  providedIn: 'root'
})
export class StageGuard implements CanActivate {
  constructor (private cnxServ: CnxService, private router : Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (this.cnxServ.isConnected)
    return true;
    else 
    this.router.navigate(['forbidden']);
    return false;
    }
  
}
