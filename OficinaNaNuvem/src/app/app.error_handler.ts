import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs"

export class ErrorHandler {


    static handlerError(error: HttpErrorResponse | any) {
        let errorMenssage: string = '';

        if( error instanceof Response){

            errorMenssage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}` 
        }
        else{
            errorMenssage = `Error Code: ${error.status}\nMessage: ${error.error}`;
            
        }
        console.log(errorMenssage)
        return throwError(()=> new Error(errorMenssage));

    }
}