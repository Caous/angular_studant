import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { DadosComponent } from "./dados/dados.component";

import { HomeComponent } from "./home/home.component";
import LoginComponent from "./login/login.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'dados/:id', component: DadosComponent},
    {path: 'cadastrar', component: CadastroComponent},
    {path: 'atualizar/:id', component: CadastroComponent}
]