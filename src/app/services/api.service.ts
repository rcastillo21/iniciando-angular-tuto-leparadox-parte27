import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }
  
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  searchUsers(name): Observable<any> {
    return this._http.get(this.apiUrl)
  }

  getUsers(id: string): Observable<any> {
    /* SIRVE PARA VER ERRORES POR CONSOLA
    agregando catchError en -> user.resolver.ts
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(timeout(3)) */
    return this._http.get(this.apiUrl+`/${id}`)
  }
}
