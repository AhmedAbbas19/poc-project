import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateService } from './../../common/services/ngx-translate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  loading = true;
  step = 0;
  constructor(private translate: TranslateService, private ngxTranslateService:NgxTranslateService) { 
    ngxTranslateService.currentLang.subscribe(lang => {
      translate.use(lang);
  })
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
