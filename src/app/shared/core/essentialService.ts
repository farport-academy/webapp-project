import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { API_URL } from "../../config/tokens";
import { Observable, catchError } from "rxjs";
import { ApiCallParams } from "../models/api";


@Injectable()
export class EssentialService {
    // dependencies
    private http = inject(HttpClient)
    protected apiBase = inject(API_URL)

    // variabili configurabili
    protected apiPath = ''
    get apiUrl():string{
        return `${this.apiBase}/${this.apiPath}`
    }

    // metodo che permette di chiamare gli endpoint api
    protected apiCall<T>(req: ApiCallParams):Observable<T>{
        return this.http.request<T>(
            req.type,
            req.url, 
            req.options
        ).pipe(
            catchError(err => {
                alert(err.message)
                throw new Error(err)
            })
        )
    }

}