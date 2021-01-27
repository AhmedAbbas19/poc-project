import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


interface User{
  id: string,
  fname: string,
  lname: string,
  email: string,
  token: string
}

const users:User[] = [
  /** token payload: {role: "admin"} */
  {id: "123", fname: "Ahmed", lname: "Abbas", email: "ahmed@gmail.com", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.EWjFXTbqUjkOYfffRyAWmUHYBecrI0f_PlY62uRqnGw"},
  /** token payload: {role: "manager"} */
  {id: "247", fname: "Elon", lname: "musk", email: "elon@gmail.com", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NyIsInJvbGUiOiJtYW5hZ2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.MMrvlVPLX1EEnOnxCP1Eim5nb-tGdNWKPiNstxRy2_w"},
  /** token payload: {role: "employee"} */
  {id: "357", fname: "Anne", lname: "Cherly", email: "anne@gmail.com", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NyIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTUxNjIzOTAyMn0.fVpaoMqBeg0_nqLfsqFtWSgo1ClJpzy3FIs1E6pVoJI"},
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser = new BehaviorSubject<User>(null);
  constructor(private router: Router){
  }

  login({email, password}){
    const user:User = users.find(u => u.email === email);
    if(!user){
      return throwError({message: "Email is not exists!" });
    }
    localStorage.setItem("token", user.token);
    this.activeUser.next(user);
    return of(user)
  }

  getRole(){
    const token = localStorage.getItem("token");
    if(!token) return null
    var decoded = jwt_decode(token);
    return decoded['role']
  }


  autoLogin(){
    const token = localStorage.getItem("token");
    if(!token) return null
    var decoded = jwt_decode(token);
    const user = users.find(u => u.id === decoded['id']);
    if(!user) return null
    this.activeUser.next(user);
  }

  logout(){
    localStorage.removeItem("token")
    this.activeUser.next(null);
    this.router.navigate(["/auth"])
  }

}
