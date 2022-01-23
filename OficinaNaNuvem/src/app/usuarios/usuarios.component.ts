import { Component, OnInit } from '@angular/core';
import { UserModel } from '../repository/model/UserModel';

@Component({
  selector: 'ofcn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UserModel [] = [
    {
      id: 1,
      email: 'teste@teste.com',
      firstName: 'Gustavo',
      lastName: 'Nascimento',
      token: 'fadsjafsjn',
      password: 'P@ssw0rd',
      username: 'Gusta',
      dtInclused: '9999-12-30'
    },
    {
      id: 2,
      email: 'teste@teste.com',
      firstName: 'Felipe',
      lastName: 'Santana',
      token: 'fadsjafsjn',
      password: 'P@ssw0rd',
      username: 'Felippe',
      dtInclused: '9999-12-30'
    },
    {
      id: 3,
      email: 'teste@teste.com',
      firstName: 'Lucas',
      lastName: 'Nicodemo',
      token: 'fadsjafsjn',
      password: 'P@ssw0rd',
      username: 'Luca',
      dtInclused: '9999-12-30'
    },
    {
      id: 4,
      email: 'teste@teste.com',
      firstName: 'Marisa',
      lastName: 'Rozario',
      token: 'fadsjafsjn',
      password: 'P@ssw0rd',
      username: 'Mari',
      dtInclused: '9999-12-30'
    },
    {
      id: 5,
      email: 'teste@teste.com',
      firstName: 'Fred',
      lastName: 'Rozario',
      token: 'fadsjafsjn',
      password: 'P@ssw0rd',
      username: 'Fred',
      dtInclused: '9999-12-30'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
