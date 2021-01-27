import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxTranslateService {

    currentLang = new BehaviorSubject<string>('en')
    constructor() { }

    changeLanguage(language){
        this.currentLang.next(language)
    }

}