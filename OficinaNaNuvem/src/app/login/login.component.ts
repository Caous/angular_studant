import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from '../repository/dto/UserLoginDto';
import { UserService } from '../repository/service/user.service';

@Component({
  selector: 'ofcn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export default class LoginComponent implements OnInit {

  userLogin: UserLoginDto

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }


  loginUser(val: any) {

    this.userLogin = new UserLoginDto()

    this.userLogin.email = val["email"]

    this.userLogin.userName = "userAngular"

    this.userLogin.password = val["password"]
    this.userLogin.confirmedPassword = val["password"]

    this.userLogin.token = ""

    this._userService.loginUser(this.userLogin).subscribe(
      data => {
        if (data === "User Logged") {
          this._router.navigate(['/usuarios'])
        }
      })


  }
}
