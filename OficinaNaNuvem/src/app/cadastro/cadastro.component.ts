import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../repository/model/UserModel';
import { UserService } from '../repository/service/user.service';

@Component({
  selector: 'ofcn-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: UserModel
  userAux: UserModel

  constructor(private _userService: UserService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new UserModel()
    const intid = this.activatedRoute.snapshot.params['id'];

    if (intid != null && intid != undefined) {
      this._userService.getDescriptionUser(intid).subscribe(response => {
        this.user = response
        this.user.edit = true;
        this.userAux = response
      }

      )
    }
    else {

      this.user.edit = false;
    }

  }

  saveUser(val: any) {

    this.user.email = val["email"]

    this.user.userName = val["userName"]

    this.user.password = val["password"]

    this.user.confirmedPassword = val["passwordConfirmed"]

    this.user.departamentId = val["departament"]

    this.user.firstName = val["firstName"]

    this.user.lastName = val["lastName"]

    this._userService.createUser(this.user).subscribe(
      data => {
        this._router.navigate(['/usuarios'])
      })


  }

  updateUser(val: any) {

    this.user = new UserModel()

    this.user.id = this.userAux.id

    if (val["email"] != this.userAux.email && val["email"] != null && val["email"] != undefined && val["email"] != "")
      this.user.email = val["email"]
    else
      this.user.email = this.userAux.email

    if (val["userName"] != this.userAux.userName && val["userName"] != null && val["userName"] != undefined && val["userName"] != "") 
      this.user.userName = val["userName"]
    else
      this.user.userName = this.userAux.userName


    if (val["departament"] != this.userAux.departamentId && val["departament"] != null && val["departament"] != undefined && val["departament"] != "")
      this.user.departamentId = val["departament"]
    else
      this.user.departamentId = this.userAux.departamentId

    if (val["firstName"] != this.userAux.firstName && val["firstName"] != null && val["firstName"] != undefined && val["firstName"] != "")
      this.user.firstName = val["firstName"]
    else
      this.user.firstName = this.userAux.firstName

    if (val["lastName"] != this.userAux.lastName && val["lastName"] != null && val["lastName"] != undefined && val["lastName"] != "")
      this.user.lastName = val["lastName"]
    else
      this.user.lastName = this.userAux.lastName

    this.user.password = val["password"]

    this.user.confirmedPassword = val["passwordConfirmed"]

    this._userService.updateUser(this.user).subscribe(
      data => {
        this._router.navigate(['/usuarios'])
      })


  }

}
