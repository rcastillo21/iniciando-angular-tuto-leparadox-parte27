import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UsersResolver implements Resolve<Observable<any>> {

    constructor(
        private _api: ApiService
    ) {}
    resolve(route: ActivatedRouteSnapshot){
        return this._api.getUsers(route.paramMap.get('id')
        )/* 
        El catchError Emite error con ruta de api.service
        .pipe(
            //delay(2000)
            catchError(error => {
                alert('Algo ha Fallado');
                return of();
            })
        ) */
    }
}