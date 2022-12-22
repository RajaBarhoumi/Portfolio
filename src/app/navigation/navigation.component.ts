import { Component, OnInit } from '@angular/core';
import { CnxService } from '../services/cnx.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 

  constructor(public cnxServ : CnxService, private router: Router) { }

  ngOnInit(): void {
  }

}
