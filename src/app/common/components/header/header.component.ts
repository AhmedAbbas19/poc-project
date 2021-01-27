import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isAuthenticated = false
  languages = [{name: "English", code: "en"},{name: "French", code: "fr"},{name: "German", code: "de"}]
  language = "fr"

  constructor(private authService:AuthService,private translate: TranslateService, private ngxTranslateService:NgxTranslateService){
   
    ngxTranslateService.currentLang.subscribe(lang => {
        this.language = lang;
        translate.use(lang);
    })
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    authService.activeUser.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onChangeLanguage(language: string){
   this.ngxTranslateService.changeLanguage(language)
  }

  logout(){
    this.authService.logout();
  }
}
