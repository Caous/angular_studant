import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../repository/model/UserModel';

@Component({
  selector: 'ofcn-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
