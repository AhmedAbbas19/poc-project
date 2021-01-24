import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(private authService:AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.activeUser.pipe(
      map(user => {
        return !!user;
      }),
      tap(isAuth => {
        if (!isAuth) {
          this.router.navigate(["/auth"]);
        }
      })
    );
  }
}