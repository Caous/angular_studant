import { Injectable } from "@angular/core";
import { UserModel } from "../model/UserModel";
import { HttpClient, HttpHeaders, HttpParamsOptions } from "@angular/common/http";

import { pathWebApi } from "../parameters/parameters";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs";
import { ErrorHandler } from "src/app/app.error_handler";
import { UserLoginDto } from "../dto/UserLoginDto";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private _http: HttpClient) { }


    getAllUser(): Observable<UserModel[]> {
        return this._http.get<UserModel[]>(`${pathWebApi}/User`).pipe(catchError(ErrorHandler.handlerError))
        
    }

    getDescriptionUser(id:number): Observable<UserModel> {
        return this._http.get<UserModel>(`${pathWebApi}/User/${id}`).pipe(catchError(ErrorHandler.handlerError))
    }

    loginUser(_userLogin: UserLoginDto): Observable<any>{

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          } 


        // let tokenUrl2 = this.apiUrl + 'users';
        // let getHeaders = new HttpHeaders({'Authorization':'Bearer '+token});
        // return this.httpClient.get(tokenUrl2, { observe: 'body', responseType: 'text', headers: getHeaders})

        return this._http.post(`${pathWebApi}/Login`, JSON.stringify(_userLogin),httpOptions).pipe(catchError(ErrorHandler.handlerError))
    }

    createUser(_userLogin: UserModel): Observable<any>{

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          } 


        // let tokenUrl2 = this.apiUrl + 'users';
        // let getHeaders = new HttpHeaders({'Authorization':'Bearer '+token});
        // return this.httpClient.get(tokenUrl2, { observe: 'body', responseType: 'text', headers: getHeaders})

        return this._http.post(`${pathWebApi}/User`, JSON.stringify(_userLogin),httpOptions).pipe(catchError(ErrorHandler.handlerError))
    }

    deleteUser(id: string): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          } 


        // let tokenUrl2 = this.apiUrl + 'users';
        // let getHeaders = new HttpHeaders({'Authorization':'Bearer '+token});
        // return this.httpClient.get(tokenUrl2, { observe: 'body', responseType: 'text', headers: getHeaders})

        return this._http.delete(`${pathWebApi}/User/${id}`, httpOptions).pipe(catchError(ErrorHandler.handlerError))
    }

    updateUser(_userLogin: UserModel): Observable<any>{
      console.log(_userLogin)
      const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        } 


      // let tokenUrl2 = this.apiUrl + 'users';
      // let getHeaders = new HttpHeaders({'Authorization':'Bearer '+token});
      // return this.httpClient.get(tokenUrl2, { observe: 'body', responseType: 'text', headers: getHeaders})

      return this._http.put(`${pathWebApi}/User/${_userLogin.id}`, JSON.stringify(_userLogin),httpOptions).pipe(catchError(ErrorHandler.handlerError))
  }

}