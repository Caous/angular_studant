import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../repository/model/UserModel';
import { UserService } from '../repository/service/user.service';

@Component({
  selector: 'ofcn-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {

    const intid = this.activatedRoute.snapshot.params['id'];

    this._userService.getDescriptionUser(intid).subscribe(response => this.user = response)
    
  }

}
