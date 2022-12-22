import { Component, OnInit } from '@angular/core';
import { CnxService } from '../services/cnx.service';
@Component({
  selector: 'app-navconnect',
  templateUrl: './navconnect.component.html',
  styleUrls: ['./navconnect.component.css']
})
export class NavconnectComponent implements OnInit {

  constructor(public cnxServ : CnxService) { }

  ngOnInit(): void {
  }

}
