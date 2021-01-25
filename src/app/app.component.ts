import { Component } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated = false
  idleState = '';
  isIdle = false;
  lastPing?: Date = null;

  constructor(private authService:AuthService, private idle: Idle, private keepalive: Keepalive){
    authService.activeUser.subscribe(user => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated){
        this.autoLogout()
      }
    })
    authService.autoLogin()
  }

  autoLogout(){
    this.idle.setIdle(6000000);
     this.idle.setTimeout(30);
     this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
     this.idle.onIdleEnd.subscribe(() => this.isIdle = false);
     this.idle.onTimeout.subscribe(() => {
       this.logout();
       this.isIdle = false
     });
     this.idle.onTimeoutWarning.subscribe((countdown) => {
       this.isIdle = true
       this.idleState = 'You will be logged out in ' + countdown + ' seconds!'
      });
     this.keepalive.interval(15);
     this.keepalive.onPing.subscribe(() => this.lastPing = new Date());
     this.reset();
  }

  reset() {
    this.idle.watch();
    this.isIdle = false;
  }

  logout(){
    this.authService.logout();
  }
}
