import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false
  languages = [{name: "English", code: "en"},{name: "French", code: "fr"},{name: "German", code: "de"}]
  language = "fr"
  overlayContainerClasses
  darkModeOn = true;
  isSidebarOpen=false

  constructor(private authService:AuthService,
    private translate: TranslateService, 
    private ngxTranslateService:NgxTranslateService,
    private renderer: Renderer2
    ){
    ngxTranslateService.currentLang.subscribe(lang => {
        this.language = lang;
        translate.use(lang);
    })
    authService.activeUser.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }
  ngOnInit(): void {

  }
  
  onChangeLanguage(language: string){
    this.ngxTranslateService.changeLanguage(language)
  }
  
  logout(){
    this.authService.logout();
  }
  
  darkMode(){
    this.darkModeOn = true
    this.renderer.removeClass(document.body, 'my-light-theme');
    this.renderer.addClass(document.body, 'my-dark-theme');
  }
  lightMode(){
    this.darkModeOn = false
    this.renderer.removeClass(document.body, 'my-dark-theme');
    this.renderer.addClass(document.body, 'my-light-theme');
  }
}
