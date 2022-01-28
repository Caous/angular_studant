import { Component, OnInit } from '@angular/core';
import { UserModel } from '../repository/model/UserModel';
import { UserService } from '../repository/service/user.service';

@Component({
  selector: 'ofcn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private _userService: UserService) {


  }

  ngOnInit(): void {
    this._userService.getAllUser().subscribe(us => this.users = us)
  }

  exclused(id: number) {
    this._userService.deleteUser(id.toString()).subscribe(
      us => {
        if (us == "User deleted") {
          this.ngOnInit()
        }
      }
    )
  }

}
