import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateService } from 'src/app/common/services/ngx-translate.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errors = null
  loginForm: FormGroup
  constructor(private authService:AuthService, private router: Router, private translate: TranslateService, private ngxTranslateService:NgxTranslateService) { 
    ngxTranslateService.currentLang.subscribe(lang => {
      translate.use(lang);
  })
    
    this.loginForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(7)]),
    })

  }

  onSubmit(){
    if(this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.router.navigate(["/home"])
    },
    (error) => {
      this.errors = error
    })
  }


}
