import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {


  constructor(){

  }
  ngOnInit(): void {

  }
}
