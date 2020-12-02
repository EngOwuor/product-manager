
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {  from, Observable, throwError } from 'rxjs';
import{tap,catchError} from 'rxjs/operators'
import{IProduct} from './product'

@Injectable({
    providedIn:'root'
})

export class ProductService{
    private productUrl = 'api/products/products.json';

    constructor(private http:HttpClient){}
    getProducts():Observable<IProduct>{
        return this.http.get<IProduct>(this.productUrl).pipe(tap(data=>console.log('All'+JSON.stringify(data),catchError(this.handleError))))
    }
    handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            // client-side or network error occurred
            errorMessage=`an error occurred, ${err.error.message}`
        }else{
            // the backend returned an unsuccessful response code
            // the response body may contain clues as to what went wrong
            errorMessage=`server returned code: ${err.status}, error message is ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}