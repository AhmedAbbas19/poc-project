import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxTranslateService {

    currentLang = new BehaviorSubject<string>('en')
    constructor() { 
      const clientLang = localStorage.getItem('lang');
      if(clientLang){
        this.currentLang.next(clientLang)
      }
    }

    changeLanguage(language){
      localStorage.setItem('lang', language)
        this.currentLang.next(language)
    }

}